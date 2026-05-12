//If nudge button is toggled display the hidden "It's your turn" message.

//If nudge button is clicked then run this code.
const nudgeButton = document.getElementById("Nudge");
const notif = document.getElementById("notif");
const nudgeSent = document.getElementById("nudgeSent");

nudgeButton.addEventListener("click", function() {
if (notif.style.display === "none") {
notif.style.display = "block";
nudgeSent.style.display = "inline";
nudgeButton.textContent = "Undo Nudge!";
} else {
notif.style.display = "none";
nudgeSent.style.display = "none";
nudgeButton.textContent = "Send Nudge";
}
});

// practice
document.getElementById("Nudge").addEventListener("click", buttonStuff());


function buttonStuff() {
if (notif.style.display === "none") {
notif.style.display = "block";
nudgeSent.style.display = "inline";
nudgeButton.textContent = "Undo Nudge!";
} else {
notif.style.display = "none";
nudgeSent.style.display = "none";
nudgeButton.textContent = "Send Nudge";
}
}

