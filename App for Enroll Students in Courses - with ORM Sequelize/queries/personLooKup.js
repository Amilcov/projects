
const { Person, Course, Campus, Department } = require('../models');

async function lookupPersonAndCourses(id) {
    const student = await Person.findByPk(id, {
        include: {
            model: Course,
            include: [Campus, Department]
        }
    });

    console.log(`
                  STUDENT: ${student.firstName}  ${student.lastName}`);

    console.log(`Attends Courses: `); 
    for (let course of student.Courses) {
       console.log(`COURSE NAME: ${course.name}  CAMPUS: ${course.Campus.name}  DEPARTMENT: ${course.Department.name}   `);
    }
}

async function lookupPersonByLastName(lastNameSerached) {
    const students = await Person.findAll({
        where: {lastName: lastNameSerached}
    })

    console.log(`
                 FOUND Students with last name ${lastNameSerached}:`)
    for(let i = 0; i < students.length; i++) {
       console.log(`${students[i].firstName} ${students[i].lastName}`);
    }
}
async function lookupCoursesByPersonEmail(emailSearched) {
    const student = await Person.findOne({
        where: {email: emailSearched}
    })

    console.log(`
                 FOUND Student by Email ${emailSearched}:`)
  
    console.log(`${student.firstName} ${student.lastName}`);
}

console.log('______________________RESULTS________________________')
lookupPersonAndCourses(3);
lookupPersonByLastName('Hays');
lookupCoursesByPersonEmail('massa.Integer@lectus.ca');

 module.exports = {
  lookupPersonAndCourses,
  lookupPersonByLastName,
  lookupCoursesByPersonEmail,
};
