if (matchMedia) {
    const mq = window.matchMedia("(min-width: 991px)");
    mq.addListener(ImageChange);
    ImageChange(mq);
}
function ImageChange(mq) {
    if (mq.matches) {
        document.getElementById("first-img").src = "images/Main-slide/PC/IMG_1937.jpg";
        document.getElementById("second-img").src = "images/Main-slide/PC/IMG_4518.jpg";
        document.getElementById("third-img").src = "images/Main-slide/PC/IMG_5130-4.jpg";
        document.getElementById("fourth-img").src = "images/Main-slide/PC/IMG_2035.jpg";
    } else {
        document.getElementById("first-img").src = "images/Main-slide/Mobile/Botanicki%201.jpg";
        document.getElementById("second-img").src = "images/Main-slide/Mobile/IMG_0228%20LR%20PS.jpg";
        document.getElementById("third-img").src = "images/Main-slide/Mobile/IMG_1547.jpg";
        document.getElementById("fourth-img").src = "images/Main-slide/Mobile/IMG_4801.jpg";
    }
}
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

function replace() {
    document.getElementById("first-img").src = "images/Main-slide/Mobile/Botanicki%201.jpg";
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
         
echo.init({
    callback: function (element, op) {
        console.log(element, 'has been', op + 'ed')
    }
});
