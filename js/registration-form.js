const email = document.getElementById("email");
let inputField = document.querySelector('.form__field__input');
email.addEventListener("input", function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Sorry your email should contain an @");
  } else {
    email.setCustomValidity("");
  }
});

inputField.addEventListener('input', function(event) {
  let floated = document.querySelector('.form__field--floating');
   floated.classList.add('is-active')
})














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