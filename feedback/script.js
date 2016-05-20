function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function submit(){
  $('submit-btn');
  var name = $('#name').val();
  var email = $('#email').val();
  var contact = $('#contact').val();
  var category = $('#category').val();
  var feedback = $('#feedback').val();

  if ((category !== "") && (feedback !== "")) {
    $.ajax({
      crossDomain:true,
      url: "https://docs.google.com/forms/d/1UFXSC3Y0Z_2s8SXoDPRGuKAF20zFADUKvVVRMA1jmL0/formResponse",

      data: {"entry.1871524577" : name,
             "entry.1080232883" : email,
             "entry.425750602" : contact,
             "entry.990579579": category,
             "entry.1449721559": feedback},
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function (){
          $('#form-body').css("display","none");
          $('#success-body').css("display","inline");
        },
        200: function (){
          $('#form-body').css("display","none");
          $('#success-body').css("display","inline");
        },
        default: function() {
          console.log("NOT OKAY");
        }
      }
    });
  }
  else {
    //Error message
    console.log("NOT OKAY BAD");
  }
}
