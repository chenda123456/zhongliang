! function($) {
    const header = $('header');
    header.load('./header.html');
    const footer = $('footer');
    footer.load('./footer.html');

    let array_default = [];
    let array = [];
    let prev = null;
    let next = null;

    const $list = $('#list');
    $.ajax({
        url: 'http://10.31.162.90/project/zhongliang/php/listdata.php',
        dataType: 'json'
    }).done(function(data) {
        let $strhtml = '<ul>';
        $.each(data, function(index, value) {
            $strhtml += `
                <li>
                <a href="detail.html?sid=${value.sid}" target="_blank">
                <img class="lazy" data-original="${value.url}">
                </a>
                <div class="price">
                    <em>￥</em>
                    <span>${value.price}</span>
                </div>
                <div class="name">
                    <a href="detail.html?sid=${value.sid}" target="_blank">					
                    ${value.title}
                    </a>
                </div>
                <div class="btn">
                    <button>已评价</button>
                    <button class="collect">
                        <i></i>
                        收藏
                    </button>
                    <button class="cart">
                        <i></i>
                        加入购物车</button>
                </div>
            </li>
            `;
        });
        $strhtml += '</ul>';

        $list.html($strhtml);
        $(function() {
            $("img.lazy").lazyload({ effect: "fadeIn" });
        });
        array_default = [];
        array = [];
        prev = null;
        next = null;
        $('#list li').each(function(index, element) {
            array[index] = $(this);

            array_default[index] = $(this);
            // console.log(array_default);

        });
    });

    $('.page').pagination({
        pageCount: 4,
        jump: true,
        coping: true,
        prevContent: '上一页',
        nextContent: '下一页',
        homePage: '首页',
        endPage: '尾页',
        callback: function(api) {
            console.log(api.getCurrent());
            $.ajax({
                url: 'http://10.31.162.90/project/zhongliang/php/listdata.php',
                data: {
                    page: api.getCurrent()
                },
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '<ul>';
                $.each(data, function(index, value) {
                    $strhtml += `
                    <li>
                    <a href="detail.html?sid=${value.sid}" target="_blank">
                        <img class="lazy" data-original="${value.url}">
                    </a>
                    <div class="price">
                        <em>￥</em>
                        <span>${value.price}</span>
                    </div>
                    <div class="name">
                        <a href="detail.html?sid=${value.sid}" target="_blank">					
                        ${value.title}
                        </a>
                    </div>
                    <div class="btn">
                        <button>已评价</button>
                        <button class="collect">
                            <i></i>
                            收藏
                        </button>
                        <button class="cart">
                            <i></i>
                            加入购物车</button>
                    </div>
                </li>
                    `;
                });
                $strhtml += '</ul>';
                $list.html($strhtml);
                $(function() {
                    $("img.lazy").lazyload({ effect: "fadeIn" });
                });

                array_default = [];
                array = [];
                prev = null;
                next = null;
                $('#list li').each(function(index, element) {
                    array[index] = $(this);
                    array_default[index] = $(this);
                });
            })
        }
    });
    console.log($('button'));

    $('button').eq(0).on('click', function() {

        $.each(array_default, function(index, value) {
            $('#list ul').append(value);

        });
        return;
    });
    $('button').eq(2).on('click', function() {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                prev = parseFloat(array[j].find('.price span').html());

                next = parseFloat(array[j + 1].find('.price span').html());
                if (prev > next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }

        $.each(array, function(index, value) {
            console.log(value);

            $('#list ul').append(value);
        });
    });
    $('button').eq(3).on('click', function() {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                prev = parseFloat(array[j].find('.price span').html());
                next = parseFloat(array[j + 1].find('.price span').html());

                if (prev < next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }

        $.each(array, function(index, value) {
            $('#list ul').append(value);
        });
    })
}(jQuery)