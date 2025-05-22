// Scroll to Top Btn
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollToTopBtn.style.opacity = "0.8";
  } else {
    scrollToTopBtn.style.opacity = "0";
  }
};

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});

// PopUp IMG
var modal = document.getElementById("myModal");

// Gallery 1
var img = document.getElementById("gallery1");
var modalImg = document.getElementById("imgPopUp");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Gallery 2
var img = document.getElementById("gallery2");
var modalImg = document.getElementById("imgPopUp");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Gallery 3
var img = document.getElementById("gallery3");
var modalImg = document.getElementById("imgPopUp");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

// Contact
function validateForm() {
  var form = document.getElementsByClassName("contact-form");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var text = document.getElementById("text").value;
  var popUpS = document.getElementById("pop-up-s");
  var popUpF = document.getElementById("pop-up-f");
  var spanS = document.getElementsByClassName("closePopUpS")[0];
  var spanF = document.getElementsByClassName("closePopUpF")[0];

  spanS.onclick = function () {
    popUpS.style.display = "none";
    document.body.style.overflow = "auto";
    Contact.reset();
  };
  spanF.onclick = function () {
    popUpF.style.display = "none";
    document.body.style.overflow = "auto";
  };

  if (name == "" || email == "" || text == "") {
    popUpF.style.display = "block";
    document.body.style.overflow = "hidden";
    return false;
  } else {
    popUpS.style.display = "block";
    document.body.style.overflow = "hidden";
    return false;
  }
}
