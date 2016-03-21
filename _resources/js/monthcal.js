$(document).ready(function() {

  $('#calendar').fullCalendar({

    googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',
    events: 'rc4.sg_bjp2mlscjolhrqpvul12rpg0ko@group.calendar.google.com',

    eventClick: function(event) {
    },

    loading: function(bool) {
      $('#loading').toggle(bool);
    }

  });

});
