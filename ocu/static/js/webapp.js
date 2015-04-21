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
        { date: currentMonth + '-' + '22', title: 'Computer Networks Presentation' },
        { date: currentMonth + '-' + '22', title: 'Entrepreneurship Day' },
        { date: currentMonth + '-' + '28', title: 'Software Presenation' },
        { date: currentMonth + '-' + '29', title: 'Computer Networks Demo' },
        { date: nextMonth + '-' + '05',    title: 'Software Engineering' },
        { date: nextMonth + '-' + '06',    title: 'Computer Networks' },
        { date: nextMonth + '-' + '08',    title: 'Honors Convocation' },
        { date: nextMonth + '-' + '09',    title: 'MSB Commencement and Luncheon' }
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
