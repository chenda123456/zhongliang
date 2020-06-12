! function($) {
    const footer = $('footer');
    footer.load('./footer.html');

    const $phoneNum = $('#phone');
    const $phoneWro = $('.u-rule');
    const $password = $('#password');
    const $submit = $('.submit');

    let userReg = /^1[34578]\d{9}$/;
    let userFlag = false;
    let passFlag = false;
    let regsiterUrl = 'http://10.31.162.90/project/zhongliang/php/registry.php';
    $phoneNum.on('input', function() {

        if (userReg.test($(this).val())) {

            $phoneWro.show();
            $.ajax({
                type: 'post',
                url: regsiterUrl,
                data: {
                    username: $phoneNum.val()
                }
            }).done(function(data) {

                if (!data) {
                    $('.u-rule span').html('√').css('color', 'green');
                    userFlag = true;
                } else {
                    $('.u-rule span').html('该用户名已经存在').css('color', 'red');
                    userFlag = false;
                }
            })
        } else {
            $('.u-rule span').html('请输入11位手机号码').css('color', 'red');
            $phoneWro.show();
            userFlag = false;
        }
    })
    const $p_rule = $('.p-rule span')

    let checkUpper = /[A-Z]+/;
    let checklower = /[a-z]+/;
    let checkNum = /\d+/;
    let checkOhter = /[\W\_]+/;
    $password.on('input', function() {

        let passVal = $(this).val();
        if (passVal.length >= 8 && passVal.length <= 20) {
            $p_rule.show();
            $p_rule.eq(1).html('密码强度太低').css({
                color: 'red'
            });;
            let conut = 0;
            if (checkUpper.test(passVal)) {
                conut++;
                console.log("conut" + conut);
            }
            if (checklower.test(passVal)) {
                conut++;
                console.log("conut" + conut);
            }
            if (checkNum.test(passVal)) {
                conut++;
                console.log("conut" + conut);
            }
            if (checkOhter.test(passVal)) {
                conut++;
                console.log("conut" + conut);

            }
            switch (conut) {
                case 1:
                    $p_rule.eq(0).html('弱').css({ background: 'red' });
                    passFlag = false;
                    break;
                case 2:
                case 3:
                    $p_rule.eq(0).html('中').css({ background: 'yellow' });
                    passFlag = true;

                    break;
                case 4:
                    $p_rule.eq(0).html('强').css({ background: 'green' });
                    passFlag = true;
                    break;
            }
        } else {
            $p_rule.eq(0).html('').css({ background: '#f9f9f9' });
            $p_rule.eq(1).html('密码长度错误').css({
                color: 'red'
            });
            passFlag = false;
        }
    });
    $password.on('input', function() {
        if ($(this).val() !== '') {
            if (passFlag) {
                $p_rule.eq(1).html('√').css({
                    color: 'green'
                });
                passFlag = true;
            }
        } else {
            $p_rule.eq(0).html('').css({ background: '#f9f9f9' });
            $p_rule.eq(1).html('密码不能为空').css({
                color: 'red'
            });
            passFlag = false;
        }
    });




    console.log(passFlag);
    console.log(userFlag);


    // data-true 手机号和密码都通过才能点击创建账号
    // if ($('.data-true').length == 2) {
    //     $('.submit').removeAttr('disabled');
    // } else {
    //     $('.submit').attr('disabled', 'disabled');
    // }


    //密码正则提示
    $('#password').on('click', function() {
        $('.p-rule').addClass('show')
    });
    $submit.on('click', function() {
        console.log(userFlag);
        console.log(passFlag);


        if (userFlag && passFlag) {
            console.log(1);
            $.ajax({
                type: 'post',
                url: regsiterUrl,
                data: {
                    username: $phoneNum.val(),
                    password: $password.val()
                }
            }).done(function(result) {
                if (result) {
                    $('.hasname').html('注册成功').css({ color: '#3EB135', borderColor: '#3EB135' }).stop().fadeIn().delay(800).fadeOut();
                    location.href = 'login.html';
                } else {
                    $('.hasname').html('注册失败').css({ color: 'red', borderColor: 'red' }).stop().fadeIn().delay(800).fadeOut();
                }
            });


        } else {
            console.log(2);
            return false;
        }

    })

}(jQuery)