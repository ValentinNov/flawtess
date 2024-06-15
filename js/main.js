$(function () {

    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',
        infinite: false,
    });

    $('.questions__item-title').on('click', function () {
        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
    });

    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'video', 'contacts'],
        menu: '#header__nav'
    });

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.menu__list-link').on('click', function () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });


    //popup form
    function closeForm() {
        $('.form-popup-bg').removeClass('is-visible');
    }

    $(document).ready(function ($) {

        /* Contact Form Interactions */
        $('#btnOpenForm').on('click', function (event) {
            event.preventDefault();

            $('.form-popup-bg').addClass('is-visible');
        });

        //close popup when clicking x or off popup
        $('.form-popup-bg').on('click', function (event) {
            if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
                event.preventDefault();
                $(this).removeClass('is-visible');
            }
        });
    });


});



// timer
var hours = 0;
var mins = 0;
var seconds = 0;


function startTimer() {
    timex = setTimeout(function () {
        seconds++;
        if (seconds > 59) {
            seconds = 0; mins++;
            if (mins > 59) {
                mins = 0; hours++;
                if (hours < 10) { $("#hours").text('0' + hours + ':') } else $("#hours").text(hours + ':');
            }

            if (mins < 10) {
                $("#mins").text('0' + mins + ':');
            }
            else $("#mins").text(mins + ':');
        }
        if (seconds < 10) {
            $("#seconds").text('0' + seconds);
        } else {
            $("#seconds").text(seconds);
        }


        startTimer();
    }, 1000);
}
startTimer();


