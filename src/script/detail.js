! function($) {
    const header = $('header');
    header.load('./header.html');
    const footer = $('footer');
    footer.load('./footer.html');

    let $sid = location.search.substring(1).split('=')[1];
    const $smallpic = $('.smallpic');
    const $bpic = $('.b_pic');
    const $title = $('.title');
    const $price = $('.pri span');
    if (!$sid) {
        $sid = 1;
    }
    $.ajax({
        url: 'http://10.31.162.90/project/zhongliang/php/getsid.php',
        data: {
            sid: $sid
        },
        dataType: 'json'
    }).done(function(data) {
        console.log(data);
        $smallpic.attr('src', data.url);
        $smallpic.attr('sid', data.sid);
        $bpic.attr('src', data.url);
        $title.html(data.title);
        $price.html(data.price);
        console.log(data.piclisturl.split(',').slice(0, 5));
        let picarr = data.piclisturl.split(',').slice(0, 5);
        let $strhtml = '';
        $.each(picarr, function(index, value) {
            $strhtml += '<li><img src="' + value + '"/>></li>';
        });
        $('.list ul').html($strhtml);
    });
    const $spic = $('.spic');
    const $sf = $('.sf');
    const $bf = $('.bf');
    const $list = $('.list');
    const $num = $('.num input')

    $sf.width($spic.width() * $bf.width() / $bpic.width());
    $sf.height($spic.height() * $bf.height() / $bpic.height());
    let $bili = $bpic.width() / $spic.width();
    $spic.hover(function() {
        $sf.css('visibility', 'visible');
        $bf.css('visibility', 'visible');
        $(this).on('mousemove', function(ev) {
            let $leftvalue = ev.pageX - $('.left').offset().left - $sf.width() / 2;
            let $topvalue = ev.pageY - $('.left').offset().top - $sf.height() / 2;
            if ($leftvalue < 0) {
                $leftvalue = 0;
            } else if ($leftvalue >= $spic.width() - $sf.width()) {
                $leftvalue = $spic.width() - $sf.width()
            }

            if ($topvalue < 0) {
                $topvalue = 0;
            } else if ($topvalue >= $spic.height() - $sf.height()) {
                $topvalue = $spic.height() - $sf.height()
            }

            $sf.css({
                left: $leftvalue,
                top: $topvalue
            });

            $bpic.css({
                left: -$leftvalue * $bili,
                top: -$topvalue * $bili
            });

        });
    }, function() {
        $sf.css('visibility', 'hidden');
        $bf.css('visibility', 'hidden');
    });
    $('.list ul').on('click', 'li', function() {
        let $imgurl = $(this).find('img').attr('src');
        $smallpic.attr('src', $imgurl);
        $bpic.attr('src', $imgurl);

    });
    $('.jian').on('click', function() {
        let i = $num.attr('value');
        console.log($num.attr('value'));
        i--;
        if (i <= 1) {
            i = 1;
        }
        $num.attr('value', i);

    });
    $('.jia').on('click', function() {
        let i = $num.attr('value');
        i++;
        $num.attr('value', i);

    });

    $('.cart').on('click', function() {
        console.log($smallpic.attr('src'));
        console.log($title.html());
        console.log(+$price.html());
        console.log($num.val());
        console.log($sid);

        $.ajax({
            type: 'post',
            url: 'http://10.31.162.90/project/zhongliang/php/addCartList.php',
            data: {
                sid: $sid,
                url: $smallpic.attr('src'),
                title: $title.html(),
                price: +$price.html(),
                buynum: $num.val(),
            },
        }).done(function(data) {
            alert('添加成功')
        })
    })



}(jQuery)