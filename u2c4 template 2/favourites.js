// write js code here corresponding to favourites.html

let favouritesArray = JSON.parse(localStorage.getItem("favourites"));

favouritesArray.forEach(function(el){
    let matchNum = document.createElement("th");
    matchNum.innerText = el.matchNum;

    let teamA = document.createElement("th");
    teamA.innerText = el.teamA;

    let teamB = document.createElement("th");
    teamB.innerText = el.teamB;

    let date = document.createElement("th");
    date.innerText = el.date;

    let venue = document.createElement("th");
    venue.innerText = el.venue;

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.style.color = "red";
    del.style.fontSize = "20px";
    del.style.cursor = "pointer";
    del.style.backgroundColor = "white";
    del.style.padding = "10px";
    del.style.border = "0px";
    del.addEventListener("click",function(el,index){
        del.parentNode.remove();
        localStorage.removeItem(index);
    });

    let innerBody = document.createElement("tr");
    innerBody.append(matchNum,teamA,teamB,date,venue,del);

    let mainBody = document.querySelector("tbody");
    mainBody.append(innerBody);
});