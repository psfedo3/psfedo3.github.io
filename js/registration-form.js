---
layout: blank
---



{% assign emails =  site.data.seeds | map: "data" | map: "email" | inspect %}
 var emailArray = {{ emails }};
function validateForm() {
  var email = document.getElementById("email").value;
    if (emailArray.includes(email)) {
    alert("This Email has already been used by another seed");
    return false;
  }
}

 
 
let inputField = document.querySelector('.form__field__input');
inputField.addEventListener('input', function(event) {
  var floated = document.querySelectorAll('.form__field--floating');
  for (i = 0; i < floated.length; i++) {
    floated[i].classList.add('is-active');
  }
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