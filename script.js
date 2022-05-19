var i = $('#inputfield')[0]
var e = $.Event('keyup')
e.which = 32
setInterval(function() {
    if ($('.highlight')[0]) {
        i.focus()
        i.value = $('.highlight').text()
        $(i).trigger(e)
    }
}, 100)
