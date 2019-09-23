var lerMaisBtn1 = $("#lerMaisBtn1");
var lerMaisBtn2 = $("#lerMaisBtn2");
var lerMaisBtn3 = $("#lerMaisBtn3");

$(lerMaisBtn1).on("click", function(){
    let item1 = $("#item1");
    $(item1).toggleClass("esconde-texto")
});

$(lerMaisBtn2).on("click", function(){
    let item2 = $("#item2");
    $(item2).toggleClass("esconde-texto")
});

$(lerMaisBtn3).on("click", function(){
    let item3 = $("#item3");
    $(item3).toggleClass("esconde-texto")
});