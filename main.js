var timerBtn = document.getElementById("timerBtn");
var contentElement = document.getElementById("content");
var startStopBtn = document.getElementById("startStopBtn");
var toggleBreakBtn = document.getElementById("toggleBreakBtn");
console.log("Das ist alles irgendwie zusammengeschustert, weil ich das im Browser designed habe.😅 Ich müsste alles nochmal von vorne machen, wenn die Idee gut ist. Btw. denke ich, ist für diese Methode sowieso Bleistift und Eieruhr besser xD");
timerBtn.addEventListener("mousedown", function () {
    contentElement.classList.add("timerVisable");
});
document.addEventListener("mouseup", function () {
    contentElement.classList.remove("timerVisable");
});
startStopBtn.addEventListener("click", function () {
    startStopBtn.classList.toggle("toggled");
});
var toggleBreak = function () {
    document.body.classList.toggle("break");
    timerBtn.classList.toggle("toggled");
};
toggleBreakBtn.addEventListener("click", toggleBreak);
