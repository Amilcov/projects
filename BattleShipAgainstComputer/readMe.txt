Learn: 
   1.  Mac - see hidden files in a folder: cmd + shift + . 
   
   2.  VS debugger => fix err file not found (it start debug on 127.0.1 instead on local on my index.html )
       .vscode -> lunch.json -> in configuration (array of objects)-> url key:
               Not OK: 127.0.0.1
               OK: "url": "file:///Users/adrianaclaudia/AAO/Week09/Day3/RE-DO/3.4%20BattleShip%20against%20Computer%20Player/index.html",
                  
    Note: other imporetant key: "webRoot": "${workspaceFolder}"
   
   3. event.target.className vs eventTargetClassList
        className: returns: strings "classA classB classC"
        ClassList: returns DOMListNodes
