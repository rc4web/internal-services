$.ajax({
  url: 'https://spreadsheets.google.com/feeds/list/1x6AIK5gzAghtu2SXc2D0qq6M-UHKpPuX2ykrZwVQNZg/1/public/values?alt=json',
  dataType: "json",
  success: function(data){
    igList = [];
    // sportsList = [];
    // artsList = [];
    // othersList = [];

    //Parse Data
    for(var i=0; i<data.feed.entry.length; i++)
    {
      igList[i] = {
        'name' : data.feed.entry[i]['gsx$igname']['$t'],
        'description' : data.feed.entry[i]['gsx$description']['$t'],
        'timeslot' : data.feed.entry[i]['gsx$weeklytimeslots']['$t'],
        'photo' : data.feed.entry[i]['gsx$igphotourl']['$t'],
        'type' : data.feed.entry[i]['gsx$igtype']['$t'],
        'igHead' : data.feed.entry[i]['gsx$currentighead']['$t'],
        'igHeadContact' : data.feed.entry[i]['gsx$currentigheadcontactnumberoptional']['$t']
      };

      //For Sorting by type (Future)
      // if(igList[i].type == 'Sports')
      //   sportsList.push(igList[i]);
      // else if(igList[i].type == 'Others')
      //   othersList.push(igList[i]);
      // else if(igList[i].type == 'Performing Arts')
      //   artsList.push(igList[i]);

      var content = document.querySelector('template').content;

      //Add data into template
      var igImage = content.querySelector('.igDetailsImage');
      if(igList[i].photo != '')
        igImage.src = igList[i].photo;

      var igName = content.querySelector('.igTitle');
      igName.textContent = igList[i].name;

      var igDetails = content.querySelector('.igDetailsText');
      igDetails.textContent = igList[i].description;

      var igTimeSlot = content.querySelector('.igTimeSlot');
      igTimeSlot.textContent = igList[i].timeslot;

      var igHead = content.querySelector('.igHead');
      igHead.textContent = igList[i].igHead;
      if(igList[i].igHeadContact !== '')
        igHead.textContent += " (" + igList[i].igHeadContact +")";

      //Add populated template to actual page
      var rowToAdd = !(i%2)?'.ig-list-left':'.ig-list-right';
      document.querySelector(rowToAdd).insertBefore(
        document.importNode(content, true),document.querySelector(rowToAdd + ' > .contentBeforeThis'));

    }
    $('.contentBeforeThis').remove();
  }
});
