$(function () {
    // Timer
    let time = 1800;

    const timer = $('.timer'),
        minutesVal = $('#minutes'),
        secondsVal = $('#seconds'),
        minutesText = $('#minutesText'),
        secondsText = $('#secondsText');

    const declOfNum = (number, texts) => {
        let cases = [2, 0, 1, 1, 1, 2];
        return texts[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };

    const addZero = (number) => {
        if (number <= 9) {
            return '0' + number;
        } else {
            return number;
        }
    };

    const timeCounter = () => {
        if (time > 0) {
            time--;

            let leftMinutes = Math.floor((time / 60) % 60),
                leftSeconds = Math.floor(time % 60);

            minutesVal.text(addZero(leftMinutes));
            secondsVal.text(addZero(leftSeconds));

            minutesText.text(declOfNum(leftMinutes, ['Минута', 'Минуты', 'Минут']));
            secondsText.text(declOfNum(leftSeconds, ['Секунда', 'Секунды', 'Секунд']));
        }
    };


    setInterval(timeCounter, 1000);

    $(function () {
        $('.reviews__items').slick({
            arrows: false,
            dots: true,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 841,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });


    $(".anchor").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).attr('href');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 80
        }, 700);
    });


    const navList = $('.nav__list'),
        navBtn = $('.nav__btn');

    navBtn.on('click', function () {
        navBtn.toggleClass('active');
        navList.toggleClass('active');
    });

    $(document).on('click', function (e) {
        if (!(e.target.closest('.nav'))) {
            navBtn.removeClass('active');
            navList.removeClass('active');
        }
    });
});