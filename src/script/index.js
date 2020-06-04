! function($) {
    const header = $('header');
    header.load('./header.html');
}(jQuery)
class Lunbo {
    constructor() {
        this.lunbo = $('.lunbo');
        this.picul = $('.lunbo ul');
        this.picli = this.picul.children();
        this.btnli = $('.lunbo ol li');
        this.leftarrow = $('.btn_l');
        this.rightarrow = $('.btn_r');
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

new Lunbo().init();