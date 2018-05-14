if (matchMedia) {
    const mq = window.matchMedia("(min-width: 991px)");
    mq.addListener(ImageChange);
    ImageChange(mq);
}
function ImageChange(mq) {
    if (mq.matches) {
        document.getElementById("first-img").src = "images/Main-slide/PC/DSC_1423.jpg";
        document.getElementById("second-img").src = "images/Main-slide/PC/DSC_0300-2.jpg";
        document.getElementById("third-img").src = "images/Main-slide/PC/IMG_1937.jpg";
        document.getElementById("fourth-img").src = "images/Main-slide/PC/IMG_1910-2.jpg";
        document.getElementById("fifth-img").src = "images/Main-slide/PC/IMG_2035.jpg";
    } else {
        document.getElementById("first-img").src = "images/Photoshoots/Vertical/DSC_0261.jpg";
        document.getElementById("second-img").src = "images/Main-slide/Mobile/IMG_1116.jpg";
        document.getElementById("third-img").src = "images/Main-slide/Mobile/IMG_1327.jpg";
        document.getElementById("fourth-img").src = "images/Main-slide/Mobile/IMG_2147.jpg";
        document.getElementById("fifth-img").src = "images/Main-slide/Mobile/IMG_2799.jpg";
    }
}

function validateForm() {
    document.getElementById('status').innerHTML = "Sending...";
    formData = {
        'name'     : $('input[name=name]').val(),
        'email'    : $('input[name=email]').val(),
        'subject'  : $('input[name=subject]').val(),
        'message'  : $('textarea[name=message]').val()
    };


    $.ajax({
    url : "mail.php",
    type: "POST",
    data : formData,
    success: function(data, textStatus, jqXHR)
    {

        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
        $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function (jqXHR, textStatus, errorThrown)
    {
        $('#status').text(jqXHR);
    }
    });

}

function changeCollapseColor() {
    var collapseVisible = $(".collapse").is(":visible");
    if(collapseVisible) {
        document.getElementById("navbar").style.backgroundColor = "transparent";
    } else {
        document.getElementById("navbar").style.backgroundColor = "black";
        document.getElementById("navbar").style.opacity = "0.9";
    }
}

function openModal() {
    document.getElementById('imageModal').style.display = "block";
    document.getElementById("photo").style.overflow = "hidden";
    var elm = document.getElementById("modal-image");
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
    document.getElementById("photo").style.overflowY = "visible";
}

var selectedImage = 1;

var imageIndex = 1;
showImage(imageIndex);

function currentImage(n) {
    showImage(imageIndex = n);
    var elm = document.getElementById("image-holder");
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
}

function plusImage(n) {
    showImageModal(imageIndex += n);
    var elm = document.getElementById("modal-image");
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
}

function currentImageModal(n) {
    showImageModal(imageIndex = n);
}

function showImageModal(n) {
    var img = document.getElementsByClassName("img-gallery");
    var modalImg = document.getElementById("modal-image");
    var currentImageText = document.getElementById("current-image");
    if (n > img.length) {imageIndex = 1}
    if (n < 1) {imageIndex = img.length}
    modalImg.src = img[imageIndex-1].src;
    currentImageText.innerHTML = imageIndex+"/"+img.length;
}

function showImage(n) {
    var image = document.getElementsByClassName("img-select");
    var imageHolder = document.getElementById("image-holder");
    if (n > image.length) {imageIndex = 1}
    if (n < 1) {imageIndex = image.length}
    imageHolder.src = image[imageIndex-1].src;
    selectedImage = imageIndex;
}

function getSelectedImage() {
    if (selectedImage == null) {
        selectedImage = 1;
    }
    return selectedImage;
}
         
echo.init({
    callback: function (element, op) {
        console.log(element, 'has been', op + 'ed')
    }
});
