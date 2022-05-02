// write js code here corresponding to index.html
// You should add submit event on the form
let scheduleArray = [];

let form = document.querySelector("form");
form.addEventListener("submit",function(){
    event.preventDefault();

    let scheduleObj = { matchNum : form.matchNum.value,
                        teamA : form.teamA.value,
                        teamB : form.teamB.value,
                        date : form.date.value,
                        venue : form.venue.value };

    scheduleArray.push(scheduleObj);

    localStorage.setItem("schedule",JSON.stringify(scheduleArray));
});

