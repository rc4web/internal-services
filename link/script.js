function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function submit(){
  $('#submit-btn').addClass("disabled");
  var name = $('#name').val();
  var email = $('#email').val();
  var shorturl = $('#shorturl').val();
  var actualurl = $('#actualurl').val();
  if ((name !== "") && (email !== "") && (validateEmail(email))) {
    $.ajax({
      crossDomain:true,
      url: "https://docs.google.com/forms/d/11wlglU_rdwBw0e7bXsOYtKL-kviOiw8ZsMX9levtOiI/formResponse",
      data: {"entry.1304944202" : shorturl, "entry.1818151476" : email, "entry.774341015" : name, "entry.845461746": actualurl},
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function (){
          $('#form-body').css("display","none");
          $('#success-body').css("display","inline");
          $('#doneURL').text("http://link.rc4.sg/"+shorturl);
        },
        200: function (){
          $('#form-body').css("display","none");
          $('#success-body').css("display","inline");
          $('#doneURL').text("http://link.rc4.sg/"+shorturl);
        },
        default: function() {
          console.log("NOT OKAY");
          $('#failed-body').css("display","block");
          $('#submit-btn').removeClass("disabled");
        }
      }
    });
  }
  else {
    //Error message
    console.log("NOT OKAY BAD");
    $('#failed-body').css("display","block");
    $('#submit-btn').removeClass("disabled");
  }
}
