window.onload = () => {
    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'name');
    const name = document.createTextNode('Adriana Claudia Milcov');
    h1.appendChild(name);
    document.body.appendChild(h1);

    const picture = document.createElement('div');
    picture.setAttribute("class", "picture");
    picture.setAttribute("id", "pictureId");
    document.body.appendChild(picture);


    function daysUntilMyBDay() {
        const today = new Date();
        let myNextBDay = new Date(today.getFullYear(), 09, 02);
        let daysBetween = '';
      

        if (today.getMonth() === 9 && today.getDate === 2) {
            daysBetween =  'Happy Birth Day!!'
        } else {
                if (today.getMonth() >= 10 || (today.getMonth() === 9 &&  today.getDay() === 1) ){
                  let myNextBDay = new Date(today.getFullYear + 1, 09, 02);
                }
           daysBetween = parseInt((myNextBDay.getTime()-today.getTime())/ (24* 3600 * 1000));
        }     


        return daysBetween;
    }

    const countDown = document.createElement('div');
    countDown.setAttribute("id", "birthDays");
    countDown.innerHTML = '<p> &#127881 &#127873 &#129346 &#127874 : '+ daysUntilMyBDay().toString() + ' days </p>'
    document.body.appendChild(countDown);


    const pProjects = document.createElement('p');
    pProjects.innerText = "My Projects";
    pProjects.setAttribute("class", "category");
    pProjects.classList.add("projects");
    document.body.appendChild(pProjects);

    const myProjectList = document.createElement('ul');
    myProjectList.classList.add("projects");
    document.body.appendChild(myProjectList);

    const projects = `
            
                     <table>
                     
                         <tr>
                           <th> PROJECT </th>
                           <th> STACK </th>
                           <th> PREVIEW </th>
                         </tr>  
                     
                       <tr>
                         <td> <a href= 'https://adriana-play-matching-game.netlify.app/'> Matching Game </a> </td>
                         <td> JS HTML CSS </td>
                         <td>  
                           <img src="./img/1.1_matching_game_start.png" alt="matching game preview picture" width="150" height="150"> 
                           <img src="./img/1.2_matching_game_play.png" alt="matching game preview picture" width="150" height="150"> 
                         </td>
                       </tr>

                        <tr>
                         <td> <a href='https://am2-mini-twitter-client.herokuapp.com/'> Mini Twitter </a> </td>
                         <td> JS HTML Node Express PUG Sequelize</td>
                         <td> 
                           <img src="./img/2.1_Twiter_SignUpUser.png" alt="matching game preview picture" width="150" height="150"> 
                           <img src="./img/2.2_Twiter_LoginUser.png" alt="matching game preview picture" width="150" height="150"> 
                           <img src="./img/2.3_Twiter_ListsAllTweets.png" alt="matching game preview picture" width="150" height="150"> 
                           <img src="./img/2.4_Twiter_createMessage.png" alt="matching game preview picture" width="150" height="150"> 
                           <img src="./img/2.5_Twiter_DeleteMessage.png" alt="matching game preview picture" width="150" height="150"> 
                        </td>
                       </tr>
                       <tr> 
                         <td>
                           Tic Tac Toe Game:
                           <ul class="noBorder">
                             <li> <a href='https://adriana-play-tic-tac-toe.netlify.app'> 2 Playes </li>
                             <li> <a href='https://adriana-play-tic-tac-toe-with-computer.netlify.app'> Play with Computer </li>
                           </ul>

                         </td>
                         <td> JS HTML CSS </td>
                         <td>  
                            <img src="./img/3._TicTacToe.png" alt="matching game preview picture" width="150" height="150"> 
                        </td>
                       </tr>
                       <tr> 

                         <td>
                           BattleShip Game:
                           <ul class="noBorder">
                             <li> <a href='https://adriana-play-battleship.netlify.app'> 1 Player </li>
                             <li> <a href='https://adriana-play-battleship-with-computer.netlify.app'> Play with Computer </li>
                             <li> <a href='https://adriana-play-battleship-against-computer.netlify.app'> Play against Computer </li>
                           </ul>
                         </td>

                         <td> JS HTML CSS </td>
                         <td>  
                             <ul class="noBorder">
                               <li> <img src="./img/4.1_.BattleShip_1Player.png" alt="matching game preview picture" width="150" height="150"> </li>
                               <li> <img src="./img/4.2_.BattleShip_2Players.png" alt="matching game preview picture" width="150" height="150"> </li>
                               <li> <img src="./img/4.3_.BattleShip_Against_Computer.png" alt="matching game preview picture" width="150" height="150"> </li>
                             </ul> 
                        </td>
                       </tr>



                     </table>
                
                     `;

    myProjectList.innerHTML = projects;                  

    const projects2 = `
                <li> <a href= 'https://adriana-play-matching-game.netlify.app/'> Matching Game </a> 
                    <img src="profilePic.png">
                </li>
                <li> <a href='https://am2-mini-twitter-client.herokuapp.com/'> Mini Twitter </a> </li>
                <li> Tic Tac Toe 
                    <p> 
                       <ul class="noBorder">
                          <li> <a href='https://adriana-play-tic-tac-toe.netlify.app'> 2 Playes </li>
                          <li> <a href='https://adriana-play-tic-tac-toe-with-computer.netlify.app'> Play with Computer </li>
                       </ul> 
                    </p>
                </li>       
                <li> BattleShip Game</li>
                `;
    //myProjectList.innerHTML = projects2; 


    const pHobbies = document.createElement('p');
    pHobbies.setAttribute("class", "category");
    pHobbies.innerText = 'My Hobbies';
    document.body.appendChild(pHobbies);

    const hobbies = document.createElement('ul');
    hobbies.setAttribute('class', 'hobbies');
    document.body.appendChild(hobbies);

    let hobbiesArray = ['I like hiking', 'I love nature', 'I like tasty healty food', 'I like to relax doing nothing'];
    hobbiesArray =  hobbiesArray.map(e => '<li>' + e + '</li>');
    hobbies.innerHTML = hobbiesArray.join(" ");
     
    let liList = document.querySelectorAll('li');
    liList.forEach(e => e.className = "hobby");
   
  
    const time = document.createElement('li');
    time.setAttribute("id", "time");
    time.innerText = 'Currently I live in Bucharest and the current time is: ';
    hobbies.appendChild(time);

    function getTime() {
        const date = new Date;
        const currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); 
        let liTtime = document.getElementById("time");
        liTtime.innerText = 'Currently I live in Bucharest and the current time is: ' + currentTime;
      
    }

    setInterval(getTime, 100);





   
const pActivities = document.createElement('p');
pActivities.setAttribute("class", "category");
pActivities.innerText = 'My Activities';

document.body.appendChild(pActivities);

const myActivitiesList = document.createElement('ul');
document.body.appendChild(myActivitiesList);

const activities = `<li>skiing</li>
                        <li>walking in park</li>
                        <li>scooter rides</li>
                        <li>jogging</li>
                        <li>standup shows</li>
                        <li>travel</li>
                    `
myActivitiesList.innerHTML = activities;

const pRestaurants = document.createElement('p');
pRestaurants.innerText = "My Favourite Restaurants";
pRestaurants.setAttribute("class", "category");
pRestaurants.classList.add("food");
document.body.appendChild(pRestaurants);

const myRestaurantsList = document.createElement('ul');
myRestaurantsList.classList.add("restaurants");
document.body.appendChild(myRestaurantsList);
const restaurants = `<li>Rawdia</li>
                     <li>Cafe Paris</li>
                     <li>Grace</li>
                     `

myRestaurantsList.innerHTML = restaurants; 


const divOther = document.createElement('div');
divOther.setAttribute("id", "idOther");
document.body.appendChild(divOther);
const h3Other = document.createElement('h3');
h3Other.innerText = 'And Many More..';
divOther.appendChild(h3Other);

const btn  = document.createElement('button');
btn.innerText = 'More';
btn.addEventListener("click", more);

function more() {
    let elem = document.getElementById("idOther");
    elem.outerHTML = '<p>Love to create web applications that meet the necessities of people</p>';
}
divOther.appendChild(btn);
}

