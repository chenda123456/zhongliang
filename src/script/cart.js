! function($) {
    const footer = $('footer');
    footer.load('./footer.html');

    const $title = $('.title div');
    const $url = $('.title img');
    const $price = $('.price span')
    const $number = $('.number input')

    $.ajax({
        url: 'http://10.31.162.90/project/zhongliang/php/getCartData.php',
        dataType: 'json'
    }).done(function(data) {

        let $strhtml = '';
        $.each(data, function(index, val) {

            $strhtml += `
                <li class="list">
                <div class="title">
                <input type="checkbox" name="" id="">
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
        $('.jian').on('click', function() {
            let i = $('.number input').val();
            i--;
            if (i <= 1) {
                i = 1;
            }
            $('.number input').val(i);
            $('.xiaoji span').html((i * $('.price span').html()).toFixed(2));
        });
        $('.jia').on('click', function() {
            let i = $('.number input').val();
            i++;
            $('.number input').val(i);
            $('.xiaoji span').html((i * $('.price span').html()).toFixed(2));
        });
        $('.number input').change(function() {
            $('.xiaoji span').html(($('.number input').val() * $('.price span').html()).toFixed(2));
        })

    });

}(jQuery)