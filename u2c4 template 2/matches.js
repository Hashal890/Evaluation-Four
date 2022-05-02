// write js code here corresponding to matches.html

let scheduleArray = JSON.parse(localStorage.getItem("schedule")) || [];

let venue;
let mainBody = document.querySelector("tBody");;

function display(scheduleArray){
    mainBody.innerHTML="";

    scheduleArray.forEach(function(el){
        let matchNum = document.createElement("th");
        matchNum.innerText = el.matchNum;
    
        let teamA = document.createElement("th");
        teamA.innerText = el.teamA;
    
        let teamB = document.createElement("th");
        teamB.innerText = el.teamB;
    
        let date = document.createElement("th");
        date.innerText = el.date;
    
        venue = document.createElement("th");
        venue.innerText = el.venue;
    
        let addTOFavourites = document.createElement("button");
        addTOFavourites.textContent = "Add as Favourites";
        addTOFavourites.style.color = "green";
        addTOFavourites.style.textAlign = "center";
        addTOFavourites.style.cursor = "pointer";
        addTOFavourites.style.fontSize = "20px";
        addTOFavourites.style.border = "0px";
        addTOFavourites.style.backgroundColor = "white";
        addTOFavourites.addEventListener("click",function(){
            addTOFavouritesFun(el);
        });
        
        let innerBody = document.createElement("tr");
        innerBody.backgroundColor = "rgb(4,104,170)";
        innerBody.append(matchNum,teamA,teamB,date,venue,addTOFavourites);

        mainBody.append(innerBody);
    });

}
display(scheduleArray);

let filterByVenue = document.querySelector("#filterVenue");
filterByVenue.addEventListener("change",function(el){
    if(filterByVenue.value=="none") display(scheduleArray);
    else{
        filteredValues = scheduleArray.filter(function(el){
            return el.venue === filterByVenue.value;
        });

        display(filteredValues);
        // console.log(filteredValues);
    }
    // console.log(filterByVenue)
});

let favouritesArray = [];
function addTOFavouritesFun(el){
    let favouritesObj = { matchNum : el.matchNum,
                          teamA : el.teamA,
                          teamB : el.teamB,
                          date : el.date,
                          venue : el.venue };

    favouritesArray.push(favouritesObj);

    localStorage.setItem("favourites",JSON.stringify(favouritesArray));
}

