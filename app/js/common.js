$(function() {

	$('button.hamburger').click(function () {
        $(this).toggleClass( "is-active" );
        $('.nav').toggleClass( "is-open" );
        $('.darken').toggleClass( "is-active-dark" );
        $('body').toggleClass('not-scrolling');
    })

});
