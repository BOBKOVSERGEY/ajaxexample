$(function () {
    $('#send').click(function () {
        var params = {
            text: $('#input1').val(),
        }
        $.post("ajax.php", params, function (data) {
            $('#hello').html(data);
        });
    });
});