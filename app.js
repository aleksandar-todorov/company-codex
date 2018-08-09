var result = "";
var firstN = "";
var LastN = "";
var Com = "";
var Bra = "";

$("div.col-2:nth-child(1) > input:nth-child(2)").on("change paste keyup", function () {
    firstN = $("div.col-2:nth-child(1) > input:nth-child(2)").val().toLowerCase();
    result = `${firstN.charAt(0)}.${LastN}@${Bra}-${Com}.com`;
    $("#krai").val(result);
});

$("div.col-2:nth-child(1) > input:nth-child(4)").on("change paste keyup", function () {
    LastN = $("div.col-2:nth-child(1) > input:nth-child(4)").val().toLowerCase();
    result = `${firstN.charAt(0)}.${LastN}@${Bra}-${Com}.com`;
    $("#krai").val(result);
});

$("div.col-2:nth-child(2) > input:nth-child(2)").on("change paste keyup", function () {
    Com = $("div.col-2:nth-child(2) > input:nth-child(2)").val().toLowerCase();
    result = `${firstN.charAt(0)}.${LastN}@${Bra}-${Com}.com`;
    $("#krai").val(result);
});

$("div.col-2:nth-child(2) > input:nth-child(4)").on("change paste keyup", function () {
    Bra = $("div.col-2:nth-child(2) > input:nth-child(4)").val().toLowerCase();
    result = `${firstN.charAt(0)}.${LastN}@${Bra}-${Com}.com`;
    $("#krai").val(result);
});