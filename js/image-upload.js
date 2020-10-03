function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var outputImage = document.querySelector('.js-image-upload');
        outputImage.src = reader.result;
        var uploadFile = document.querySelector(".js-upload");
        uploadFile.value = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}