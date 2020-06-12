! function($) {
    let cookieuser = $.cookie('cookieuser');
    console.log(cookieuser);
    console.log($('.user'));

    if (cookieuser) {
        cookieuser = $.cookie('cookieuser').substring(0, 3) + '****' + $.cookie('cookieuser').substring(7, 11);
        $('.user').text(cookieuser);
        $('.btn').html('退出');
        $('.btn').on('click', function() {
            $.cookie('cookieuser', cookieuser, { expires: -1, path: '/' });
            location.href = 'login.html'
        })

    }
}(jQuery)