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
             console.log('month', today.getMonth() );
              console.log('day', today.getDay());
              /*
            if (today.getMonth() > 9 || (today.getMonth() === 9 &&  today.getDate() > 2) ){
              let mynextYearBday = today.getFullYear() + 1;
               myNextBDay = new Date(mynextYearBday, 09, 02);
                 console.log('myNextBDay', myNextBDay );
            }
            */
           daysBetween = parseInt((myNextBDay.getTime()- today.getTime())/ (24* 3600 * 1000)) ;
           daysBetween= daysBetween < 0 ? Math.abs(daysBetween) + ' days ago': daysBetween + 'days';
        }     


        return daysBetween;
    }

    const countDown = document.createElement('div');
    countDown.setAttribute("id", "birthDays");
    countDown.innerHTML = '<p> &#127881 &#127873 &#129346 &#127874 : '+ daysUntilMyBDay() + '</p>'
    document.body.appendChild(countDown);


    const pProjects = document.createElement('p');
    pProjects.innerText = "My Playground Projects";
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
                           <th> Login user demo </th>
                         </tr>  
                     
                       <tr>
                         <td> <a href= 'https://adriana-play-matching-game.netlify.app/' target="_blank"> Matching Game </a> </td>
                         <td> JS HTML CSS </td>
                         <td>  
                           <img src="./img/1.1_matching_game_start.png" alt="matching game preview picture" width="150" height="150"> 
                           <img src="./img/1.2_matching_game_play.png" alt="matching game preview picture" width="150" height="150"> 
                         </td>
                         <td></td>
                       </tr>

                     

                        <tr>
                          <td> <a href='https://am-stock-client.herokuapp.com/' target="_blank"> Stocks </a> </td>
                          <td> JS HTML CSS <br>Bootstrap PUG <br>Sequelize <br>Node Express </td>
                          <td> 
                            <img src="./img/6.1_Stocks_stock-list.png" alt="stock game preview picture" width="150" height="150"> 
                            <img src="./img/6.2_Stocks_transaction-add.png" alt="stock game preview picture" width="150" height="150"> 
                            <img src="./img/6.3_Stocks_analysis_barChart.png" alt="stock game preview picture" width="150" height="150"> 
                            <img src="./img/6.4_Stocks_analysis-table.png" alt="matcstockhstocking game preview picture" width="150" height="150"> 
                            <img src="./img/6.5_Stocks_stock-detail.png" alt="stock game preview picture" width="150" height="150"> 
                            <img src="./img/6.6_Stocks_transaction-edit.png" alt="stock game preview picture" width="150" height="150"> 
                            <img src="./img/6_7_Stocks_register.png" alt="stock gstockame preview picture" width="150" height="150"> 
                            <img src="./img/6_7_Stocks_transaction-list.png" alt="stock game preview picture" width="150" height="150"> 
                         </td>
                         <td>
                            <p> User: demo@y.com </p>
                            <p> Password: demo</p>
                         </td>
                       </tr>

                     

                        <tr>
                          <td> <a href='https://adriana-play-art-museum.netlify.app' target="_blank"> Art Museum </a> </td>
                          <td> React v6</td>
                          <td> 
                            <img src="./img/7.1_Component_Galleris_LinkToGalleries.png" alt="art gallery game preview picture" width="150" height="150"> 
                            <img src="./img/7.2_Component_Gallery_ListLinkToArtObjects.png" alt="art gallery game preview picture" width="150" height="150"> 
                            <img src="./img/7.3_Component_ArtObject.png" alt="art gallery game preview picture" width="150" height="150"> 
                         </td>
                         <td>
                            <p> User: - </p>
                            <p> Password: - </p>
                         </td>
                       </tr>


                     

                        <tr>
                          <td> <a href='https://am2-mini-twitter-client.herokuapp.com/' target="_blank"> Mini Twitter </a> </td>
                          <td> JS HTML <br>Bootstrap PUG <br>Sequelize <br>Node Express </td>
                          <td> 
                            <img src="./img/2.1_Twiter_SignUpUser.png" alt="mini twitter game preview picture" width="150" height="150"> 
                            <img src="./img/2.2_Twiter_LoginUser.png" alt="mini twitter game preview picture" width="150" height="150"> 
                            <img src="./img/2.3_Twiter_ListsAllTweets.png" alt="mini twitter game preview picture" width="150" height="150"> 
                            <img src="./img/2.4_Twiter_createMessage.png" alt="mini twitter game preview picture" width="150" height="150"> 
                            <img src="./img/2.5_Twiter_DeleteMessage.png" alt="mini twitter game preview picture" width="150" height="150"> 
                         </td>
                         <td>
                            <p> User: a100!@a1.com </p>
                            <p> Password: 123456</p>
                         </td>
                       </tr>

                       <tr>
                         <td> <a href='https://am-amusement-park.herokuapp.com/user/login/' target="_blank"> Amusement Park </a> </td>
                         <td> JS HTML <br> Bootstrap PUG <br>Sequelize <br> Node Express </td>
                         <td> 
                           <img src="./img/5.1_AmusamentPark.png" alt="amusament park game preview picture" width="150" height="150"> 
                           <img src="./img/5.2_AmusamentPark.png" alt="amusament park game preview picture" width="150" height="150"> 
                           <img src="./img/5.3_AmusamentPark.png" alt="amusament park game preview picture" width="150" height="150"> 
                           <img src="./img/5.4_AmusamentPark.png" alt="amusament park game preview picture" width="150" height="150"> 
                           <img src="./img/5.5_AmusamentPark.png" alt="amusament park game preview picture" width="150" height="150"> 
                           <img src="./img/5.6_AmusamentPark.png" alt="amusament park game preview picture" width="150" height="150"> 
                           <img src="./img/5.7_AmusamentPark.png" alt="amusament park game preview picture" width="150" height="150"> 
                           <img src="./img/5.8_AmusamentPark.png" alt="amusament park game preview picture" width="150" height="150"> 
                        </td>
                        <td>
                            <p> Email: UserDemo1!@1.com </p>
                            <p> Password: UserDemo1!@1.com </p>
                        </td>
                       </tr> 

                     

                        <tr>
                          <td> <a href='https://adriana-play-star-trek-card.netlify.app' target="_blank"> Star Treck Trading Cards </a> </td>
                          <td> React v5</td>
                          <td> 
                            <img src="./img/9.1_TradingCards_store.png" alt="greenhouse preview picture" width="150" height="150"> 
                            <img src="./img/9.2_TradingCards_myDeck.png" alt=" greenhouse preview picture" width="150" height="150"> 
                            <img src="./img/9.3_TradingCards_otherDeck.png" alt="greenhouse preview picture" width="150" height="150"> 
                         </td>
                         <td>
                            <p> User: - </p>
                            <p> Password: - </p>
                         </td>

                     

                        <tr>
                          <td> <a href='https://adriana-play-greenhouse.netlify.app' target="_blank"> GreenHouse </a> </td>
                          <td> React v5</td>
                          <td> 
                            <img src="./img/8.1_GreenHouse_general.png" alt="greenhouse preview picture" width="150" height="150"> 
                            <img src="./img/8.2_GreenHouse_temperature.png" alt=" greenhouse preview picture" width="150" height="150"> 
                            <img src="./img/8.3_GreenHouse_humidity.png" alt="greenhouse preview picture" width="150" height="150"> 
                         </td>
                         <td>
                            <p> User: - </p>
                            <p> Password: - </p>
                         </td>

                     

                        <tr>
                          <td> <a href='https://adriana-play-surveys.netlify.app' target="_blank"> Surveys </a> </td>
                          <td> React v6</td>
                          <td> 
                            <img src="./img/10.1_survey_general.png" alt="survey preview picture" width="150" height="150"> 
                            <img src="./img/10.2_survey1.png" alt="survey preview picture" width="150" height="150"> 
                            <img src="./img/10.3_survey2.png" alt="survey preview picture" width="150" height="150">
                            <img src="./img/10.4_survey_report.png" alt="survey preview picture" width="150" height="150"> 
                         </td>
                         <td>
                            <p> User: - </p>
                            <p> Password: - </p>
                         </td>


 
                       <tr> 
                         <td>
                           Tic Tac Toe Game:
                           <ul class="noBorder">
                             <li> <a href='https://adriana-play-tic-tac-toe.netlify.app' target="_blank"> 2 Playes </li>
                             <li> <a href='https://adriana-play-tic-tac-toe-with-computer.netlify.app' target="_blank"> Play with Computer </li>
                           </ul>

                         </td>
                         <td> JS HTML CSS </td>
                         <td>  
                            <img src="./img/3._TicTacToe.png" alt="tic-tac-tow game preview picture" width="150" height="150"> 
                        </td>
                        <td>
                        </td>
                       </tr>
                       <tr> 

                         <td>
                           BattleShip Game:
                           <ul class="noBorder">
                             <li> <a href='https://adriana-play-battleship.netlify.app' target="_blank"> 1 Player </li>
                             <li> <a href='https://adriana-play-battleship-with-computer.netlify.app' target="_blank"> Play with Computer </li>
                             <li> <a href='https://adriana-play-battleship-against-computer.netlify.app'target="_blank" target="_blank"> Play against Computer </li>
                           </ul>
                         </td>

                         <td> JS HTML CSS </td>
                         <td>  
                             <ul class="noBorder">
                               <li> <img src="./img/4.1_.BattleShip_1Player.png" alt="battleship game preview picture" width="150" height="150"> </li>
                               <li> <img src="./img/4.2_.BattleShip_2Players.png" alt="battleship game preview picture" width="150" height="150"> </li>
                               <li> <img src="./img/4.3_.BattleShip_Against_Computer.png" alt="battleship game preview picture" width="150" height="150"> </li>
                             </ul> 
                        </td>
                        <td></td>
                       </tr>



                     </table>
                
                     `;

    myProjectList.innerHTML = projects;                  


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

