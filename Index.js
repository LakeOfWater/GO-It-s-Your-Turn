//If nudge button is toggled display the hidden "It's your turn" message.

//If nudge button is clicked then run this code.
const nudgeButton = document.getElementById("Nudge");
const notif = document.getElementById("notif");
const nudgeSent = document.getElementById("nudgeSent");

nudgeButton.addEventListener("click", function() {
    nudgeButton.innerHTML = "Nudge Sent!"
    function nudgeTimer(){
        nudgeButton.innerHTML = "Send Nudge"
    }
    setTimeout(nudgeTimer, 3000)
});




Notification.requestPermission().then(result => {
    if (result === "granted"){
        
    }
})


