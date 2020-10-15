 
   // psfedo3 registration form js
   
   (function($) {
     var $seeds = $('.js-seeds');

     $('.js-join-form').submit(function() {
       var form = this;


       $("#js-form-submit").html(
         '<svg class="icon icon--small rotate-center"><use xlink:href="#icon-loading"></use></svg> Sending...'
       );
       $(form).addClass('disabled');

       $.ajax({
         type: $(this).attr('method'),
         url: $(this).attr('action'),
         data: $(this).serialize(),
         contentType: 'application/x-www-form-urlencoded',
         success: function(data) {
           showModal('Comment submitted', 'Thanks! Your request to to join our family has been received and moderated.We would get back to you');

           $("#js-form-submit")
             .html("Submit");

           $(form)[0].reset();
           $(form).removeClass('disabled');
           grecaptcha.reset();
         },
         error: function(err) {
           console.log(err);
        var ecode = (err.responseJSON || {}).errorCode || "unknown";
           showModal('Error', 'Opps Something bad happened please review your submission.<br>[' + ecode + ']');
           $("#js-form-submit").html("Submit")
         }
       });
       return false;
     });

     $('.js-close-modal').click(function() {
       $('body').removeClass('show-modal');
     });

     function showModal(title, message) {
       $('.js-modal-title').text(title);
       $('.js-modal-text').html(message);
       $('body').addClass('show-modal');
     }
   })(jQuery);
   
   
  // some styles for the form
  
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
    }
    reader.readAsDataURL(event.target.files[0]);
  }