new WOW().init();

function openModal() {
    document.getElementById('imageModal').style.display = "block";
    document.getElementById("photo").style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
    document.getElementById("photo").style.overflowY = "visible";
}

var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var img = document.getElementsByClassName("img-gallery");
    var modalImg = document.getElementById("modal-image");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    var currentImageText = document.getElementById("current-image");
    if (n > img.length) {slideIndex = 1}
    if (n < 1) {slideIndex = img.length}
    modalImg.src = img[slideIndex-1].src
    currentImageText.innerHTML = slideIndex+"/"+img.length;
}
                