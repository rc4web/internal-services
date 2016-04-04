function submit(){
  $('#submit-btn').addClass('disabled')
  var name = $('#name').val();
  var email = $('#email').val();
  var imageURL = $('#imageURL').val();
  var title = $('#title').val();
  var phone = $('#phone').val();
  var startDate = "";//$('#startDate').val();
  var endDate = "";//$('#endDate').val();
  if ((name !== "") && (email !== "")) {
    $.ajax({
      crossDomain:true,
      url: "https://docs.google.com/forms/d/1WSRQiP8P4qRYZgycpghrQT29WP_3yATkayZS3YJONBc/formResponse",
      data: {"entry.964858369" : name,
              "entry.502632158" : email,
              "entry.1050258183" : title,
              "entry.1863528430": phone,
              "entry.253945077": imageURL,
              "entry.974321791": startDate,
              "entry.383206033": endDate},
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

var fileSelected = function(event) {

  var myFormData = new FormData();
  myFormData.append('image', $('#posterFile')[0].files[0]);

  $('#posterFile')[0].style.display = 'none';
  $('#uploadProgress')[0].style.display = 'block';
  $('#uploadError')[0].style.display = 'none';

  $.ajax({
      url: 'https://api.imgur.com/3/image',
      headers: {
          'Authorization': 'Client-ID 696525e9aeb0211'
      },
      type: 'POST',
      processData: false,
      contentType: false,
      data: myFormData,
      success: function(res, textStatus, jqXHR) {
        console.log('cool');console.log(res);
        $('#uploadProgress')[0].style.display = 'none';
        $('#imageURL')[0].style.display = 'block';
        $('#imageURL')[0].value = res.data.link;
        //Enable submit button
        $('#submit-btn').removeClass('disabled')
      },
      error: function(res, textStatus, jqXHR) {
        $('#uploadProgress')[0].style.display = 'none';
        $('#posterFile')[0].style.display = 'block';
        $('#uploadError')[0].style.display = 'block';
      }
  });


}

jQuery.fn.extend({
    disable: function(state) {
        return this.each(function() {
            this.disabled = state;
        });
    }
});
