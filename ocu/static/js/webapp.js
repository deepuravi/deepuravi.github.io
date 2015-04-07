$(document).ready(function(){

    $(".activitiesNav").mouseover(function(){
        $(".activities-nav").show();
    });

    $(".activitiesNav").mouseout(function(){
        $(".activities-nav").hide();
    });

    $(".programNav").mouseover(function(){
        $(".program-nav").show();
    });

    $(".programNav").mouseout(function(){
        $(".program-nav").hide();
    });

    var currentMonth = moment().format('YYYY-MM');
    var nextMonth    = moment().add('month', 1).format('YYYY-MM');
    var events = [
        { date: currentMonth + '-' + '10', title: 'Conference', location: 'Library' },
        { date: currentMonth + '-' + '19', title: 'Meeting', location: 'Central Park' },
        { date: currentMonth + '-' + '23', title: 'Demonstration', location: 'Computer center' },
        { date: nextMonth + '-' + '07',    title: 'Photo Session', location: 'Library' }
    ];

    $('#mini-clndr').clndr({
        template: $('#mini-clndr-template').html(),
        events: events,
        clickEvents: {
           click: function(target) {
               if(target.events.length) {
                   var daysContainer = $('#mini-clndr').find('.days-container');
                   daysContainer.toggleClass('show-events', true);
                   $('#mini-clndr').find('.x-button').click( function() {
                       daysContainer.toggleClass('show-events', false);
                   });
               }
           }
        },
        adjacentDaysChangeMonth: true,
        forceSixRows: true
    });
});
