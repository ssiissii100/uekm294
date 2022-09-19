let time = new Date(Date.now());
let houers = time.getHours();

let greetingStr = prompt("Enter your name", "name");

if (houers < 12)
    alert("Good Morning " + greetingStr);
else if (houers == 12){
    alert("Good Noon " + greetingStr)
}
else if (houers > 12 && houers <= 18){
    alert("Good Afternoon " + greetingStr)
}
else{
    alert("Good Night " + greetingStr)
}
S