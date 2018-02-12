
function submit() {
    if (click_button < 6) {
        $("#buydiologinfo").html("You have to choose 6 numbers!");
        $(".dialog-content").css("background-color", "#F29E55");
    } else if (click_button > 6) {
        $("#buydiologinfo").html("You can only choose 6 numbers at most!");
        $(".dialog-content").css("background-color", "#F29E55");
    } else {
        $("#buydiologinfo").html("Hope you will win the prize!");
        $(".dialog-content").css("background-color", "#F58D82");
    }
    $("#buydialog").show();
}
