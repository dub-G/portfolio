$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    console.log("lololo")
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
