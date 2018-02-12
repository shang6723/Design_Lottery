
var click_button = 0;

$(document).ready(function() {
    produce_button();

    $(".close").click(function () {
        $("#buydialog").hide();
    });
});

function produce_button () {
    for (var i = 1; i < 41; i++){
        var number_button = "<button type='button' class='button-number' id='number" + i 
            + "' onClick='button_click(number"+ i +")'>" + i + "</button>";
        $("#lottery_number").append(number_button);
        $(window).click(function (event) {
            if (event.type == "click") {
                $("#buydialog").hide();
            }
        });
    }
}

function button_click (number) {
    var btn_bgcolor = $(number).css("background-color");
    if (btn_bgcolor == "rgb(85, 118, 105)") {           // button already clicked before
        $(number).css("background-color", "rgb(102, 155, 124)");
        click_button--;
    } else {
        $(number).css("background-color", "rgb(85, 118, 105)");
        click_button++;
    }
}