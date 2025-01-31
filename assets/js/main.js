(function($) {
    var e = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $blocker = $('#blocker'),
        $header = $('#header'),
        $footer = $('#footer'),
        $main = $('#main'),
        $main_articles = $main.children('article'),
        $particles = $('#particles-js');
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });
    e.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
            $blocker.removeClass('display');
            setTimeout(function() {
                $blocker.removeClass('is-preload')
            }, 500);
            $particles.removeClass('is-preload')
        }, 100)
    });
    if (browser.name == 'ie') {
        var f;
        e.on('resize.flexbox-fix', function() {
            clearTimeout(f);
            f = setTimeout(function() {
                if ($wrapper.prop('scrollHeight') > e.height()) $wrapper.css('height', 'auto');
                else $wrapper.css('height', '100vh')
            }, 250)
        }).triggerHandler('resize.flexbox-fix')
    }
    var g = $header.children('nav'),
        $nav_li = g.find('li');
    if ($nav_li.length % 2 == 0) {
        g.addClass('use-middle');
        $nav_li.eq(($nav_li.length / 2)).addClass('is-middle')
    }
    var h = 325,
        locked = false;
    $main._show = function(a, b) {
        var c = $main_articles.filter('#' + a);
        if (c.length == 0) return;
        if (locked || (typeof b != 'undefined' && b === true)) {
            $body.addClass('is-switching');
            $body.addClass('is-article-visible');
            $main_articles.removeClass('active');
            $header.hide();
            $footer.hide();
            $main.show();
            c.show();
            c.addClass('active');
            locked = false;
            setTimeout(function() {
                $body.removeClass('is-switching')
            }, (b ? 1000 : 0));
            return
        }
        locked = true;
        if ($body.hasClass('is-article-visible')) {
            var d = $main_articles.filter('.active');
            d.removeClass('active');
            setTimeout(function() {
                d.hide();
                c.show();
                setTimeout(function() {
                    c.addClass('active');
                    e.scrollTop(0).triggerHandler('resize.flexbox-fix');
                    setTimeout(function() {
                        locked = false
                    }, h)
                }, 25)
            }, h)
        } else {
            $body.addClass('is-article-visible');
            setTimeout(function() {
                $header.hide();
                $footer.hide();
                $main.show();
                c.show();
                setTimeout(function() {
                    c.addClass('active');
                    e.scrollTop(0).triggerHandler('resize.flexbox-fix');
                    setTimeout(function() {
                        locked = false
                    }, h)
                }, 25)
            }, h)
        }
    };
    $main._hide = function(a) {
        var b = $main_articles.filter('.active');
        if (!$body.hasClass('is-article-visible')) return;
        if (typeof a != 'undefined' && a === true) history.pushState(null, null, '#');
        if (locked) {
            $body.addClass('is-switching');
            b.removeClass('active');
            b.hide();
            $main.hide();
            $footer.show();
            $header.show();
            $body.removeClass('is-article-visible');
            locked = false;
            $body.removeClass('is-switching');
            e.scrollTop(0).triggerHandler('resize.flexbox-fix');
            return
        }
        locked = true;
        b.removeClass('active');
        setTimeout(function() {
            b.hide();
            $main.hide();
            $footer.show();
            $header.show();
            setTimeout(function() {
                $body.removeClass('is-article-visible');
                e.scrollTop(0).triggerHandler('resize.flexbox-fix');
                setTimeout(function() {
                    locked = false
                }, h)
            }, 25)
        }, h)
    };
    $main_articles.each(function() {
        var b = $(this);
        $('<div class="close">Close</div>').appendTo(b).on('click', function() {
            location.hash = ''
        });
        b.on('click', function(a) {
            a.stopPropagation()
        })
    });
    $body.on('click', function(a) {
        if ($body.hasClass('is-article-visible')) $main._hide(true)
    });
    e.on('keyup', function(a) {
        switch (a.keyCode) {
            case 27:
                if ($body.hasClass('is-article-visible')) $main._hide(true);
                break;
            default:
                break
        }
    });
    e.on('hashchange', function(a) {
        if (location.hash == '' || location.hash == '#') {
            a.preventDefault();
            a.stopPropagation();
            $main._hide()
        } else if ($main_articles.filter(location.hash).length > 0) {
            a.preventDefault();
            a.stopPropagation();
            $main._show(location.hash.substr(1))
        }
    });
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    else {
        var i = 0,
            scrollPos = 0,
            $htmlbody = $('html,body');
        e.on('scroll', function() {
            i = scrollPos;
            scrollPos = $htmlbody.scrollTop()
        }).on('hashchange', function() {
            e.scrollTop(i)
        })
    }
    $main.hide();
    $main_articles.hide();
    if (location.hash != '' && location.hash != '#') e.on('load', function() {
        $main._show(location.hash.substr(1), true)
    })
})(jQuery);
console.log("\n\n███████╗███████╗██████╗  ██████╗  █████╗ ██████╗ ███████╗ █████╗ \n╚══███╔╝██╔════╝██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗\n  ███╔╝ █████╗  ██████╔╝██║   ██║███████║██████╔╝█████╗  ███████║\n ███╔╝  ██╔══╝  ██╔══██╗██║   ██║██╔══██║██╔══██╗██╔══╝  ██╔══██║\n███████╗███████╗██║  ██║╚██████╔╝██║  ██║██║  ██║███████╗██║  ██║\n╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝\n\n------------------------------------------------ 2025|零次元动漫社");
console.log('%c 唷！ %c', 'background:#24272A; color:#ffffff', '', '你在干什么呢~(/ω•＼*)');