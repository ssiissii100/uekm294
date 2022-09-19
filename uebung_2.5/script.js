//Ändern Sie den Namen eines bestehenden Albums*/
document.getElementById("changeme").innerHTML = "FISCHHHHHHHHH!!!";

//Ändern Sie den Namen eines bestehenden Albums
document.getElementById("changeme2").innerHTML = "FISCHHHHHHHHH!!! (4:20)";

//Löschen Sie einen Track eines bestehenden Albums
document.getElementById("changeme3").remove();

//Löschen Sie ein bestehendes Album
document.getElementById("changeme4").remove();

//Fügen Sie einen neuen Track zu einem bestehenden Album hinzu
let oldList = document.getElementById("changeme5");
let newListItem = document.createElement("li");

newListItem.innerHTML = "NEEEWEST FUNNNNN";
oldList.appendChild(newListItem);

//Fügen Sie ein völlig neues Album hinzu
let albumDiv = document.getElementById("newlist");
let albumTitle = document.createElement("h2");
albumDiv.appendChild(albumTitle);

albumTitle.innerHTML = "FISHES ON THE FLY";
let ol = document.createElement("ol");
let songs = ["Fishi the fish (5:00)", "Random Fishes! (3:50)","Let the fish fly (2:20)"];

for(let i of songs){
    let li = document.createElement("li");
    li.innerHTML = i;
    ol.appendChild(li);
}

document.getElementById("newlist").append(ol);

//Ändern Sie die Farbe des Hintergrundes
document.body.style.backgroundColor = "red";

//Ändern Sie die Schriftgrösse von allen h1-Elementen
let title = document.getElementsByTagName("h1");

for(i = 0; i < title.length; i++){
    title[i].style.fontSize = "50px";
}

//Ändern Sie das Padding von allen Listenelementen
let list = document.getElementsByTagName("li");

for(i = 0; i < title.length; i++){
    list[i].style.paddingLeft = "50px";
}






