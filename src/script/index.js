! function($) {
    const header = $('header');
    header.load('./header.html');
}(jQuery)

! function($) {
    const footer = $('footer');
    footer.load('./footer.html');
}(jQuery)
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
            _this.index = $(this).index(); //接收当前索引，不支持箭头函数。
            _this.tabswitch();

        });

        //左右箭头事件
        this.rightarrow.on('click', function() {
            _this.rightevent()
        });

        this.leftarrow.on('click', function() {
            _this.leftevent()
        });

        //自动轮播
        this.timer = setInterval(function() {
            _this.rightarrow.click();
        }, 2000);

        //鼠标移入移出停止开启对应的自动轮播
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
            _this.index = $(this).index(); //接收当前索引，不支持箭头函数。
            _this.tabswitch();

        });

        //左右箭头事件
        this.rightarrow.on('click', function() {
            _this.rightevent()
        });

        this.leftarrow.on('click', function() {
            _this.leftevent()
        });

        //自动轮播
        this.timer = setInterval(function() {
            _this.rightarrow.click();
        }, 2000);

        //鼠标移入移出停止开启对应的自动轮播
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
            _this.index = $(this).index(); //接收当前索引，不支持箭头函数。
            _this.tabswitch();

        });

        //左右箭头事件
        this.rightarrow.on('click', function() {
            _this.rightevent()
        });

        this.leftarrow.on('click', function() {
            _this.leftevent()
        });

        //自动轮播
        this.timer = setInterval(function() {
            _this.rightarrow.click();
        }, 2000);

        //鼠标移入移出停止开启对应的自动轮播
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
            _this.index = $(this).index(); //接收当前索引，不支持箭头函数。
            _this.tabswitch();

        });

        //左右箭头事件
        this.rightarrow.on('click', function() {
            _this.rightevent()
        });

        this.leftarrow.on('click', function() {
            _this.leftevent()
        });

        //自动轮播
        this.timer = setInterval(function() {
            _this.rightarrow.click();
        }, 2000);

        //鼠标移入移出停止开启对应的自动轮播
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
    $btns.on('click', function() {
        $(this).addClass('active').siblings('.l_common .right .btn').removeClass('active');
        $items.eq($(this).index('.btn')).show().siblings('.l_common .right .item').hide();

    })

})