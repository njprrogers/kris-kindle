/**
 * Created by nickrogers on 01/05/2014.
 */
$(function () {
    var i = 1;

    var execSanta = function () {
        var members = [];
        $('input').each(function(){
            members.push(this.value);
        });
        var gifts = secretSanta(members);
        $('#ss-gifts').html("");
        console.log(gifts);
        $.each(gifts, function(key, value){
            $('#ss-gifts').append('<p>'+key+' has '+value+'</p>');
        });
    };
    var createInput = function () {
        i++;
        var newElement = $("<input/>", {
            "class": "test"+i,
            text: "Click me!",
            keyup: function (e) {
                if (e.keyCode == 13) {
                    if (e.target.value === "") {
                        e.target.classList.add('error');
                    } else {
                        e.target.classList.remove('error');
                        if ($('input').length > 2) {
                            execSanta();
                        }
                        createInput();
                    }
                }
            }
        }).appendTo("#p_scents");
        newElement.focus();
    };
    createInput();

});
