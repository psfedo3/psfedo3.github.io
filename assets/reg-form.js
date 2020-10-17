 
   // psfedo3 registration form js
   
   (function($) {
     var $seeds = $('.js-seeds');

     $('.js-join-form').submit(function() {
       var form = this;


       $("#js-reg-submit").html(
         '<svg class="icon icon--small rotate-center"><use xlink:href="#icon-loading"></use></svg> Sending...'
       );
       $(form).addClass('disabled');

       $.ajax({
         type: $(this).attr('method'),
         url: $(this).attr('action'),
         data: $(this).serialize(),
         contentType: 'application/x-www-form-urlencoded',
         success: function(data) {
           showModal('Request submitted', 'Thanks! Your request to to join our family has been received and moderated.We would get back to you');

           $("#js-reg-submit")
             .html("Submit");

           $(form)[0].reset();
           $(form).removeClass('disabled');
           grecaptcha.reset();
           $('#file').reset();
         },
         error: function(err) {
           console.log(err);
        var ecode = (err.responseJSON || {}).errorCode || "unknown";
           showModal('Error', 'Opps Something bad happened please review your submission.<br>[' + ecode + ']');
           $("#js-reg-submit").html("Submit")
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
   
   
  // image preview
  
var file = document.querySelector('#file');
file.addEventListener('change', update);

  function update(evt) {

    var files = evt.target.files;
    var file = files[0];

    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('previewImg').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

function ResizeImage() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    var filesToUploads = document.getElementById('file').files;
    var file = filesToUploads[0];
    if (file) {

      var reader = new FileReader();
      // Set the image once loaded into file reader
      reader.onload = function(e) {

        var img = document.createElement("img");
        img.src = e.target.result;

        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var MAX_WIDTH = 200;
        var MAX_HEIGHT = 200;
        var width = img.width;
        var height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        dataurl = canvas.toDataURL(file.type);

     document.getElementById('js-avatar').value = dataurl;
  document.getElementById('msg').innerText = 'Image Uploaded Sucessfully now click the button below to submit form';
      }
      reader.readAsDataURL(file);

    } else {
      document.getElementById('msg').innerText = 'Oh you have to add a picture first';
      }
    

  } 
}


