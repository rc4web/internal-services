$(document).ready(function() {
  $('#calendar').fullCalendar({
    loading: function(bool) {
    $('#loading').toggle(bool); },
    googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',
    defaultView: 'list',
    height: 480,
    timeFormat: 'h:mm',
    allDayText: 'all-day',
    editable: false,
    header: {
      right: '',
      left:'' },
    views: {
          month: { timeFormat: '(h:mm)t', } },
    eventRender: function (event, element) {
          element.attr('href', 'javascript:void(0);');
          element.click(function() {} );
        },
    eventSources: [
      { googleCalendarId: 'rc4.sg_bjp2mlscjolhrqpvul12rpg0ko@group.calendar.google.com',
        className: 'rc4-cal', } ]	}); });
