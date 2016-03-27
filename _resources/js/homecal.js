$(document).ready(function() {

  //Poster display
  $.ajax({
    url: 'https://spreadsheets.google.com/feeds/list/1vwEDjW19YoJZmRTDVsRCMGysjePw81ls8CSe90NeRCA/1/public/values?alt=json',
    dataType: "jsonp",
    success: function (data) {
      for(var i=0; i<data.feed.entry.length; i++)
      {
        //Check valid poster dates
        if(data.feed.entry[i]['gsx$approved']['$t'] == "Y" &&
        (data.feed.entry[i]['gsx$startdate']['$t'] == "" || moment(data.feed.entry[i]['gsx$startdate']['$t'], "MM/DD/YYYY").isBefore()) &&
        (data.feed.entry[i]['gsx$enddate']['$t'] == "" || moment(data.feed.entry[i]['gsx$enddate']['$t']+ "23:59", "MM/DD/YYYY HH:mm").isAfter()))
        {
          $('<div class="item"><img src="'+data.feed.entry[i]['gsx$posterurl']['$t']+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
          $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators');
        }
      }
      //Activate carousel
      $('.item').first().addClass('active');
      $('.carousel-indicators > li').first().addClass('active');
      $('#carousel-example-generic').carousel();
    }

  });

  //College Calendar
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
