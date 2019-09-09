const giftCardBtn = document.querySelector(".giftcards");
const submitBtn = document.querySelector("#sendBtn");
const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close2")[0];

giftCardBtn.onclick = function() {
	modal.style.display = "block";
};

span.onclick = function() {
	modal.style.display = "none";
};

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

submitBtn.onclick = function() {
	modal2.style.display = "block";
};

span2.onclick = function() {
	modal2.style.display = "none";
};

window.onclick = function(event) {
	if (event.target == modal) {
		modal2.style.display = "none";
	}
};
