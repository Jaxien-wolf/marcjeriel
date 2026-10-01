const gifButton = document.querySelector(".page-gif");
const music = new Audio("ssstik.io_1790825714392.mp3");

gifButton?.addEventListener("click", () => {
	music.currentTime = 0;
	music.play();
});

