var dispos = [
    '09-17-2018',
    '09-18-2018',
    '09-19-2018',
    '09-20-2018',
    '09-21-2018',
    '09-24-2018',
    '09-25-2018',
    '09-26-2018',
    '09-27-2018',
    '09-28-2018',
    '09-29-2018',
    '10-08-2018',
    '10-09-2018',
    '10-10-2018',
    '10-11-2018',
    '10-12-2018',
    '10-15-2018',
    '10-18-2018',
    '10-19-2018',
];
$(function() {
    var transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition' : 'transitionend',
            'OTransition' : 'oTransitionEnd',
            'msTransition' : 'MSTransitionEnd',
            'transition' : 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        $wrapper = $( '#custom-inner' ),
        $calendar = $( '#calendar' ),
        cal = $calendar.calendario( {
            onDayClick : function( $el, $contentEl, dateProperties ) {
                console.log(dateProperties)
                console.log(dateProperties)

                if( $contentEl.length > 0 ) {
                    showEvents( $contentEl, dateProperties );
                }

            },
            displayWeekAbbr : true
        } ),
        $month = $( '#custom-month' ).html( cal.getMonthName() ),
        $year = $( '#custom-year' ).html( cal.getYear() );

    $( '#custom-next' ).on( 'click', function() {
        cal.gotoNextMonth( updateMonthYear );
    } );
    $( '#custom-prev' ).on( 'click', function() {
        cal.gotoPreviousMonth( updateMonthYear );
    } );

    function updateMonthYear() {				
        $month.html( cal.getMonthName() );
        $year.html( cal.getYear() );
    }

});