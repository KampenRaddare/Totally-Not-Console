function Main() {
    var firstLine = "Kampen Raddare Console [0.9.0.0]",
    secondLine = "CMD is now online.",
    thirdLine = "C:/>";
        
    ShowWarning();
    
    PrintLine(firstLine, "authorVersion");
    
    setTimeout(function() {
        PrintLine(secondLine, "onlineMessage");    
    }, 3000)
    
    setTimeout(function() {
        PrintLine(thirdLine, "line");
    }, 5000)
    
    setTimeout(function() {
        ExecuteCommand(ChooseCommand());
    }, 6400)
}

function ShowWarning() {
    setTimeout(function() {
        document.getElementById("warningMessage").style.visibility = "hidden";
    }, 5000)
}

/// Summary
/// 'Fancy prints' a line out
/// to the console.
function PrintLine(lineString, ele) {
    var string = lineString,
    baseArr = string.split("");
    
    var value = "",
    index = 0;
    
    var interval = setInterval(function() {
        index++;
        value += baseArr[index - 1];
        document.getElementById(ele).innerHTML = value;
        
        if (index == baseArr.length) {
            clearInterval(interval);
        }
    }, 100)
}

function ChooseCommand() {
    var commandArr = [
        "Party.bat",
        "Bill.exe",
        "Salty.exe",
        //"Halo.exe",
        "cd 'C:/Users/'",
        "DoMath.bat",
        //"sqrt.exe",
        "Nerd3.exe",
        "Reggie.jpg",
        //"Abuse.exe",
        //"Poodin.bat",
        //"WhatTheFuck.gif"
        ],
    rand = Math.floor((Math.random() * commandArr.length));
    
    PrintLine(commandArr[rand], "command");
    
    return commandArr[rand];
}

function ExecuteCommand(command) {
    var image = document.getElementById("commandImage");
    var fileLocation = "Images/";
    
    switch (command) {
        case "Party.bat":
            var body =  document.getElementById("body");
            
            // Rape peeps eyes
            setInterval(function() {
              setTimeout(function() {
                  body.style.backgroundColor = "yellow";
              }, 200)
              setTimeout(function() {
                  body.style.backgroundColor = "blue";
              }, 400)
              setTimeout(function() {
                  body.style.backgroundColor = "red";
              }, 600)
            }, 300)
            break;
        case "Bill.exe":
            image.src = fileLocation + "Cosby.jpg";
            break;
        case "Salty.exe":
            image.src = fileLocation + "SALTY.png";
            break;
        case "Halo.exe":
            break;
        case "cd 'C:/Users/'":
            PrintLine("C:/Users/>", "commandAnswer");
            break;
        case "DoMath.bat":
            PrintLine("23123123123 + 203123124124 * 394403194102409 = 8.923224256790016e+25", "commandAnswer");
            break;
        case "sqrt.exe":
            break;
        case "Nerd3.exe":
            image.src = fileLocation + "Dan Head.png";
            break;
        case "Reggie.jpg":
            image.src = fileLocation + "reggie.gif";
            break;
        case "Abuse.exe":
            break;
        case "Poodin.bat":
            break;
        case "WhatTheFuck.gif":
            break;
        default:
            break;
    }
}