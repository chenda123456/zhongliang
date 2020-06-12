! function($) {
    const footer = $('footer');
    footer.load('./footer.html');
    const $allcheck = $('.left input')
    let num = 0;
    let $zongjia = 0;
    let price = 0;
    $.ajax({
        url: 'http://10.31.162.90/project/zhongliang/php/getCartData.php',
        dataType: 'json'
    }).done(function(data) {

        let $strhtml = '';
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
                <i class="li_collect">收藏</i>
                <i class="li_delete">删除</i>
            </div>
            </li>
                `;


        });
        $('#main ul').html($strhtml)

        // numInput.eq(index).on('input', function () {
        //     if (numReg.test(+$(this).val())) {
        //         arrNum = [];    
        //         let buynum = $(this).val();
        //         let sid = $(this).parent().parent().parent().prop('id');
        //         $(this).parent().parent().parent().find('.thePrice').html(`￥${parseFloat(buynum * +$(this).parent().parent().parent().find('.aPrice').html().substring(1)).toFixed(2)}`);
        //         upData(sid, buynum);
        //         allPrice();
        //         storeNumm();console.log(arrNum);
        //     }else{
        //         console.log(2);

        //         $(this).val(arrNum[index]); 
        //     }
        // });

        $('.check').on('click', function() {
            let flag = true;

            $.each($('.check'), function(index, val) {

                if (!$(val).prop('checked')) {
                    flag = false;

                }
            });
            if (!$(this).prop('checked')) {
                $zongjia -= +$(this).parent().parent().find('.xiaoji span').text();
            } else {
                $zongjia += +$(this).parent().parent().find('.xiaoji span').text();
            }
            $('.zongjia').text($zongjia.toFixed(2));
            if (flag) {
                $allcheck.prop('checked', flag)
            } else {
                $allcheck.prop('checked', flag)
            }
            allPrice()
            count();
        });
        $('.number input').change(function() {
            $(this).parent().parent().find('.xiaoji span').html(($(this).parent().parent().find('.number input').val() * $(this).parent().parent().find('.price span').html()).toFixed(2));
            ajax1($(this).parent().parent().attr('sid'), $(this).val());
            allPrice();
            count();
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

            allPrice();
            count();
        });
        $('.jia').on('click', function() {
            let i = $(this).parent().find('input').val();
            i++;
            $(this).parent().find('input').val(i);
            $(this).parent().parent().find('.xiaoji span').html((i * $(this).parent().parent().find('.price span').html()).toFixed(2));
            ajax1($(this).parent().parent().attr('sid'), i);

            allPrice();
            count()
        });
        $('.li_delete').on('click', function() {
            console.log(1);
            if (confirm('确定要全部删除吗')) {
                let id = $(this).parent().parent().attr('sid')
                $.ajax({
                    url: 'http://10.31.162.90/project/zhongliang/php/deleteCartList.php',
                    data: {
                        sid: id,
                    },
                }).done(function() {

                })
                $(this).each(function() {
                    $(this).parent().parent().remove('.list')
                })
            }
            allPrice();
            count()
        })

        $allcheck.click();

    });

    $allcheck.on('click', function() {
        $.each($('.check'), function(index, val) {
            console.log($('.left input').prop('checked'));
            $(val).prop('checked', $allcheck.prop('checked'));
            if ($allcheck.prop('checked')) {
                $zongjia += +$(this).parent().parent().find('.xiaoji span').text();
            }
        })
        console.log($zongjia);
        $('.zongjia').text($zongjia.toFixed(2));
        allPrice();
        count();

    });
    $('.delete').on('click', function() {
        if (confirm('确定要全部删除吗')) {
            $.each($('.list'), function(index, val) {
                console.log(val);
                console.log($(val).find('.check'));

                console.log($(val).find('.check').prop('checked'));
                if ($(val).find('.check').prop('checked')) {
                    console.log($(val).attr('sid'));
                    let id = $(val).attr('sid');
                    $.ajax({
                        url: 'http://10.31.162.90/project/zhongliang/php/deleteCartList.php',
                        data: {
                            sid: id,
                        },
                    }).done(function() {

                    })
                    $(this).remove('.list');
                }

            })
        };

        allPrice();
        count();

    })

    function ajax1(sid, num) {
        $.ajax({
            url: 'http://10.31.162.90/project/zhongliang/php/editCartList.php',
            data: {
                sid: sid,
                buynum: num,
            },
        }).done(function() {})
    }

    function allPrice() {
        const thePrice = $('.xiaoji span');
        price = 0;
        thePrice.each(function() {
            if ($(this).parent().parent().find('.title input').prop('checked')) {
                price += +parseFloat($(this).text());
            }
        });
        $('.zongjia').text(price.toFixed(2));
    }

    function count() {
        const theCount = $('.number input');
        num = 0;
        theCount.each(function() {
            if ($(this).parent().parent().find('.title input').prop('checked')) {
                num += +parseFloat($(this).val());
            }
        })
        $('.checknum').text(num);
    }


}(jQuery)