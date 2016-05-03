$(function () {
            //scroll down
            $("div div div div div div nav div ul li a").bind('click', function (event) {
                event.preventDefault();//先取消超連結原本預設動作
                var $anchor = $(this);
                $('body').animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1000, 'easeInOutQuint');
            });
        });