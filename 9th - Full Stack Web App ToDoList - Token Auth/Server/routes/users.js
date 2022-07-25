const express =  require('express');
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { asyncHandler, handlerValidationErrors } = require('./utils');
const { getUserToken, requireAuth } = require('../auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();


const userValidators = [
   check('username')
     .exists({checkFalsy: true})
     .withMessage('Please provide a value for username')
     .custom((value) => {
         return db.User.findOne({
            where: {username: value}
        })
        .then(user => {
             if (user) return Promise.reject('The provided username is already in use by other account');
        });
    }),
]

const emailAndPasswordValidators = [
    check('email')
      .exists({checkFalsy: true})
      .isEmail()
      .withMessage('Please provide a valid value for username')
      .custom((value) => {
        return db.User.findOne({
            where: { email: value}
        })
        .then(user => {
            if (user) return Promise.reject('The provided email is already in use by other account');
        })
      }),

   check('password')
     .exists({checkFalsy: true})   
     .withMessage('Please provide a value for password')
     
];

router.post( '/', userValidators, emailAndPasswordValidators, handlerValidationErrors, asyncHandler( async(req, res) => {
   const { username, email, password } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);

   const user = await db.User.create({
     username,
     email,
     hashedPassword
   });

   const token = getUserToken(user);
   res.status(201).json({
     user: {id: user.id}, 
     token
    });

}));


router.post('/token', emailAndPasswordValidators, asyncHandler(async (req, res, next) => {

   const { email, password } = req.body;
   const user = await db.User.findOne({
      where: { email: email}
    });


   if (!user || !user.validatePassword(password)) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid'];
      return next(err);
   } else {
      const token = getUserToken(user);
      res.json({user: {id: user.id}, token});
   };

}) );


router.get('/:id(\\d+)/tweets', requireAuth, asyncHandler( async (req, res) => {
   const userId = parseInt(req.params.id, 10);
   const userTweets = await db.Tweet.findAll({
      where: {userId: userId},
      attributes: ["message", "id"],
      order: [["createdAt", "DESC"]]
   });

   res.json(userTweets);


}));

module.exports = router;