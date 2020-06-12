! function($) {
    const footer = $('footer');
    footer.load('./footer.html');

    const $u_rule = $('.username span');
    const $p_rule = $('.password span')
    let userFlag = false;
    let passFlag = false;
    let userReg = /^1[34578]\d{9}$/;
    $('#phone').on('change', function() {
        if (!userReg.test($(this).val())) {
            $u_rule.html('您输入的手机号码格式有误，请重新输入').css({ color: 'red', borderColor: 'red' })
            userFlag = false;
        } else {
            $u_rule.html('');
            userFlag = true;
        }
    });
    $('#password').on('input', function() {
        if ($(this).val() !== '') {

            $p_rule.html('');
            passFlag = true;

        } else {
            $p_rule.html('密码不能为空').css({
                color: 'red'
            });
            passFlag = false;
        }
    });
    $('.submit').on('click', function() {
        console.log(userFlag);
        console.log(passFlag);


        if (userFlag && passFlag) {
            console.log(1);
            $.ajax({
                type: 'post',
                url: 'http://10.31.162.90/project/zhongliang/php/login.php',
                data: {
                    user: $('#phone').val(),
                    pass: $('#password').val()
                }
            }).done(function(result) {
                if (result) {
                    console.log(1);

                    $('.false').hide()
                    $.cookie('cookieuser', $('#phone').val(), { expires: 10, path: '/' });
                    location.href = 'index.html';
                } else {
                    console.log(5);

                    $('.false').show()
                }
            });
        } else {
            console.log(2);
            return false;
        }

    })

}(jQuery)