! function($) {
    const footer = $('footer');
    footer.load('./footer.html');

    const $title = $('.title div');
    const $url = $('.title img');
    const $price = $('.price span')
    const $number = $('.number input')
    let n = 0;
    let $zongjia = 0;
    let price = 0;
    $.ajax({
        url: 'http://10.31.162.90/project/zhongliang/php/getCartData.php',
        dataType: 'json'
    }).done(function(data) {

        let $strhtml = '';
        // let $zongjia = 0;
        $.each(data, function(index, val) {

            $strhtml += `
                <li class="list" sid="${val.sid}">
                <div class="title">
                <input type="checkbox" name="" id="" class="check">
                <img src="${val.url}" alt="">
                <div>${val.title}</div>
            </div>
            <div class="price">
                <em>￥</em>
                <span>${(+val.price).toFixed(2)}</span>
            </div>
            <div class="number">
                <span class="jian">-</span>
                <input type="text" value="${val.buynum}">
                <span class="jia">+</span>
            </div>
            <div class="xiaoji">
            <em>￥</em>
            <span>${(val.price*val.buynum).toFixed(2)}</span>
            </div>
            <div class="caozuo">
                <a href="" class="collect">收藏</a>
                <a href="" class="delete">删除</a>
            </div>
            </li>
                `;

        });
        $('#main ul').html($strhtml)


        $('.check').on('click', function() {
            let flag = true;
            n = 0;
            $.each($('.check'), function(index, val) {

                if (!$(val).prop('checked')) {
                    flag = false;

                } else {
                    n++;
                    // console.log($(this).parent().parent().find('.xiaoji span').text());

                }
                $('.checknum').text(n);
            })
            if (!$(this).prop('checked')) {
                $zongjia -= +$(this).parent().parent().find('.xiaoji span').text();
            } else {
                // console.log($(this).parent().parent().find('.xiaoji span').text());
                $zongjia += +$(this).parent().parent().find('.xiaoji span').text();
            }
            // console.log($zongjia);
            $('.zongjia').text($zongjia.toFixed(2));
            if (flag) {
                $('.left input').prop('checked', flag)
            } else {
                $('.left input').prop('checked', flag)
            }

        });
        $('.number input').change(function() {
            $(this).parent().parent().find('.xiaoji span').html(($(this).parent().parent().find('.number input').val() * $(this).parent().parent().find('.price span').html()).toFixed(2));
            ajax1($(this).parent().parent().attr('sid'), $(this).val());
            allPrice()
        })
        $('.jian').on('click', function() {
            console.log($zongjia);

            let i = $(this).parent().find('input').val();
            i--;
            if (i <= 1) {
                i = 1;
            }
            $(this).parent().find('input').val(i);
            $(this).parent().parent().find('.xiaoji span').html((i * $(this).parent().parent().find('.price span').html()).toFixed(2));

            ajax1($(this).parent().parent().attr('sid'), i);

            // if ($(this).parent().parent().find('.title input').prop('checked')) {
            //     if (i == 1) {
            //         $zongjia = +$('.zongjia').text();
            //     } else {
            //         $zongjia -= +$(this).parent().parent().find('.price span').text();
            //     }
            // }

            // console.log($zongjia);

            // $('.zongjia').text($zongjia.toFixed(2));
            allPrice()
        });
        $('.jia').on('click', function() {
            let i = $(this).parent().find('input').val();
            i++;
            $(this).parent().find('input').val(i);
            $(this).parent().parent().find('.xiaoji span').html((i * $(this).parent().parent().find('.price span').html()).toFixed(2));
            ajax1($(this).parent().parent().attr('sid'), i);
            // console.log($(this).parent().parent().find('.title input').prop('checked'));

            // if ($(this).parent().parent().find('.title input').prop('checked')) {
            //     console.log($(this).parent().parent().find('.price span').text());

            //     $zongjia += +$(this).parent().parent().find('.price span').text();
            // } else {
            //     console.log(1);

            // }
            // console.log($zongjia);

            // $('.zongjia').text($zongjia.toFixed(2));
            allPrice()
        });



    });

    function ajax1(sid, num) {
        $.ajax({
            url: 'http://10.31.162.90/project/zhongliang/php/editCartList.php',
            data: {
                sid: sid,
                buynum: num,
            },
        }).done(function() {
            // console.log(1);
        })
    }
    $('.left input').on('click', function() {
            n = 0
                // let $zongjia = 0
                // console.log($(this).prop('checked'));
            $.each($('.check'), function(index, val) {
                console.log($('.left input').prop('checked'));
                // console.log($(val).prop('checked'));
                $(val).prop('checked', $('.left input').prop('checked'));
                if ($('.left input').prop('checked')) {
                    n++;
                    $zongjia += +$(this).parent().parent().find('.xiaoji span').text();
                }
            })
            console.log($zongjia);

            console.log(n);
            $('.checknum').text(n);
            $('.zongjia').text($zongjia.toFixed(2));

        })
        // console.log(n);

    function allPrice() {
        const thePrice = $('.xiaoji span'); //单款总价
        price = 0;
        thePrice.each(function() {
            if ($(this).parent().parent().find('.title input').prop('checked')) {
                price += +parseFloat($(this).text());
            }
        });
        $('.zongjia').text(price.toFixed(2));
    }


}(jQuery)