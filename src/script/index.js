! function($) {
    const header = $('header');
    header.load('./header.html');
    const footer = $('footer');
    footer.load('./footer.html');

    $(window).on('scroll', function() {
        let $top = $(window).scrollTop();
        const $box = $('#top');
        if ($top >= 800) {
            $box.stop(true).animate({
                top: 0
            });
        } else {
            $box.stop(true).animate({
                top: -86
            });
        }
    });

    class Lunbo {
        constructor() {
            this.lunbo = $('#banner .lunbo');
            this.picul = $('#banner .lunbo ul');
            this.picli = this.picul.children();
            this.btnli = $('#banner .lunbo ol li');
            this.leftarrow = $('#banner .btn_l');
            this.rightarrow = $('#banner .btn_r');
            this.index = 0;
            this.timer = null;
        }


        init() {
            let _this = this;
            let _this1 = this;
            this.btnli.on('click', function() {
                console.log(1);
                _this.index = $(this).index();
                _this.tabswitch();

            });

            this.rightarrow.on('click', function() {
                _this.rightevent()
            });

            this.leftarrow.on('click', function() {
                _this.leftevent()
            });

            this.timer = setInterval(function() {
                _this.rightarrow.click();
            }, 2000);

            this.lunbo.hover(function() {
                clearInterval(_this.timer);
            }, function() {
                _this.timer = setInterval(function() {
                    _this.rightarrow.click();
                }, 2000);
            });

        }

        tabswitch() {
            this.btnli.eq(this.index).addClass('active').siblings('ol li').removeClass('active');
            this.picli.eq(this.index).show().siblings('ul li').hide();

        }

        rightevent() {
            this.index++;
            if (this.index > this.btnli.length - 1) {
                this.index = 0;
            }
            this.tabswitch();
        }
        leftevent() {
            this.index--;
            if (this.index < 0) {
                this.index = this.btnli.length - 1;
            }
            this.tabswitch();
        }


    }
    new Lunbo().init();
    class Lunbo2 {
        constructor() {
            this.lunbo = $('#drink .lunbo');
            this.picul = $('#drink .lunbo ul');
            this.picli = this.picul.children();
            this.btnli = $('#drink .lunbo ol li');
            this.leftarrow = $('#drink .btn_l');
            this.rightarrow = $('#drink .btn_r');
            this.index = 0;
            this.timer = null;
        }


        init() {
            let _this = this;
            this.btnli.on('click', function() {
                console.log(1);
                _this.index = $(this).index();
                _this.tabswitch();

            });
            this.rightarrow.on('click', function() {
                _this.rightevent()
            });

            this.leftarrow.on('click', function() {
                _this.leftevent()
            });

            this.timer = setInterval(function() {
                _this.rightarrow.click();
            }, 2000);
            this.lunbo.hover(function() {
                clearInterval(_this.timer);
            }, function() {
                _this.timer = setInterval(function() {
                    _this.rightarrow.click();
                }, 2000);
            });

        }

        tabswitch() {
            this.btnli.eq(this.index).addClass('active').siblings('ol li').removeClass('active');
            this.picli.eq(this.index).show().siblings('ul li').hide();

        }

        rightevent() {
            this.index++;
            if (this.index > this.btnli.length - 1) {
                this.index = 0;
            }
            this.tabswitch();
        }
        leftevent() {
            this.index--;
            if (this.index < 0) {
                this.index = this.btnli.length - 1;
            }
            this.tabswitch();
        }


    }

    new Lunbo2().init();
    class Lunbo3 {
        constructor() {
            this.lunbo = $('#cereals .lunbo');
            this.picul = $('#cereals .lunbo ul');
            this.picli = this.picul.children();
            this.btnli = $('#cereals .lunbo ol li');
            this.leftarrow = $('#cereals .btn_l');
            this.rightarrow = $('#cereals .btn_r');
            this.index = 0;
            this.timer = null;
        }


        init() {
            let _this = this;
            this.btnli.on('click', function() {
                console.log(1);
                _this.index = $(this).index();
                _this.tabswitch();

            });
            this.rightarrow.on('click', function() {
                _this.rightevent()
            });

            this.leftarrow.on('click', function() {
                _this.leftevent()
            });

            this.timer = setInterval(function() {
                _this.rightarrow.click();
            }, 2000);
            this.lunbo.hover(function() {
                clearInterval(_this.timer);
            }, function() {
                _this.timer = setInterval(function() {
                    _this.rightarrow.click();
                }, 2000);
            });

        }

        tabswitch() {
            this.btnli.eq(this.index).addClass('active').siblings('ol li').removeClass('active');
            this.picli.eq(this.index).show().siblings('ul li').hide();

        }

        rightevent() {
            this.index++;
            if (this.index > this.btnli.length - 1) {
                this.index = 0;
            }
            this.tabswitch();
        }
        leftevent() {
            this.index--;
            if (this.index < 0) {
                this.index = this.btnli.length - 1;
            }
            this.tabswitch();
        }


    }

    new Lunbo3().init();
    class Lunbo4 {
        constructor() {
            this.lunbo = $('#infant .lunbo');
            this.picul = $('#infant .lunbo ul');
            this.picli = this.picul.children();
            this.btnli = $('#infant .lunbo ol li');
            this.leftarrow = $('#infant .btn_l');
            this.rightarrow = $('#infant .btn_r');
            this.index = 0;
            this.timer = null;
        }


        init() {
            let _this = this;
            this.btnli.on('click', function() {
                console.log(1);
                _this.index = $(this).index();
                _this.tabswitch();

            });
            this.rightarrow.on('click', function() {
                _this.rightevent()
            });

            this.leftarrow.on('click', function() {
                _this.leftevent()
            });
            this.timer = setInterval(function() {
                _this.rightarrow.click();
            }, 2000);
            this.lunbo.hover(function() {
                clearInterval(_this.timer);
            }, function() {
                _this.timer = setInterval(function() {
                    _this.rightarrow.click();
                }, 2000);
            });

        }

        tabswitch() {
            this.btnli.eq(this.index).addClass('active').siblings('ol li').removeClass('active');
            this.picli.eq(this.index).show().siblings('ul li').hide();

        }

        rightevent() {
            this.index++;
            if (this.index > this.btnli.length - 1) {
                this.index = 0;
            }
            this.tabswitch();
        }
        leftevent() {
            this.index--;
            if (this.index < 0) {
                this.index = this.btnli.length - 1;
            }
            this.tabswitch();
        }


    }

    new Lunbo4().init();

    $(function() {
        const $btns = $('.l_common .right .btn');
        const $items = $('.right .item');
        $btns.hover(function() {
            $(this).addClass('active').siblings('.l_common .right .btn').removeClass('active');
            $items.eq($(this).index('.btn')).show().siblings('.l_common .right .item').hide();

        })
    })
    render2(7, $('#import .jingxuan ul'))
    render2(8, $('#milk .jingxuan ul'))
    render2(9, $('#relaxation .jingxuan ul'))


    render1(1, $('#import .remai ul '));
    render1(2, $('#milk .remai ul'));
    render1(3, $('#relaxation .remai ul'));

    function render1(number, obj) {
        $.ajax({
            type: 'post',
            url: 'http://10.31.162.90/project/zhongliang/php/indexdata.php',
            data: {
                pagesize: 8,
                page: number,
            },
            dataType: 'json'
        }).done(data => {
            let str = '';
            $.each(data, function(index, value) {
                str += `
                <li>
                <a href="./detail.html?sid=${value.sid}">
                    <ol>
                        <li>
                        <img class="lazy" data-original="${value.url}">

                        </li>
                        <li class="name">
                        ${value.title}
                        </li>
                        <li class="price">
                            <em>￥</em>
                            <span>${value.price}</span>
                        </li>
                    </ol>
                </a>
            </li>
                `;
            });
            obj.html(str);
            $(function() {
                $("img.lazy").lazyload({ effect: "fadeIn" });
            });
        })
    }

    function render2(number, obj) {
        $.ajax({
            type: 'post',
            url: 'http://10.31.162.90/project/zhongliang/php/indexdata.php',
            data: {
                pagesize: 4,
                page: number,
            },
            dataType: 'json'
        }).done(data => {
            let str = '';
            $.each(data, function(index, value) {
                str += `
                <li>
                <a href="./detail.html?sid=${value.sid}">
                    <ol>
                        <li>
                        <img class="lazy" data-original="${value.url}">

                        </li>
                        <li class="name">
                        ${value.title}
                        </li>
                        <li class="price">
                            <em>￥</em>
                            <span>${value.price}</span>
                        </li>
                    </ol>
                </a>
            </li>
                `;
            });
            obj.append(str);
            $(function() {
                $("img.lazy").lazyload({ effect: "fadeIn" });
            });
        })
    }
    const $loutinav = $('#loutinav');
    const $louti = $('#loutinav li');
    const $louceng = $('.l_common');

    $louti.not('.last').on('click', function() {
        $(window).off('scroll');
        $(this).addClass('active').siblings('li').removeClass('active');
        let $loucengtop = $louceng.eq($(this).index()).offset().top;
        $('html,body').stop().animate({
            scrollTop: $loucengtop - 100
        }, function() {
            $(window).on('scroll', function() {
                scroll();
            });
        });
        $(window).on('scroll', function() {
            let $top = $(window).scrollTop();
            const $box = $('#top');
            if ($top >= 800) {
                $box.stop(true).animate({
                    top: 0
                });
            } else {
                $box.stop(true).animate({
                    top: -86
                });
            }
        });
    });


    function scroll() {
        let $top = $(window).scrollTop();
        $top >= 600 ? $loutinav.show() : $loutinav.hide();
        $(window).on('scroll', function() {
            let $top = $(window).scrollTop();
            $top >= 600 ? $loutinav.show() : $loutinav.hide();
            $louceng.each(function(index, element) {
                let $loucengtop = $(this).offset().top + $(element).height() / 2;
                if ($loucengtop > $top) {
                    $louti.removeClass('active');
                    $louti.eq(index).addClass('active');
                    return false;
                }
            });
        });
    }
    scroll()

    $('#loutinav .last').on('click', function() {
        $('html,body').stop().animate({
            scrollTop: 0
        });
    })
}(jQuery)