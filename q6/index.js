$(document).ready(function () {  
    $("button").click(function () { 
        let input = $("input").val();
        $("#addItem").append(`<p>${input}</p>`);
        $("#input").val("item");
    $("p").click(function () { 
        $(this).remove();
    });
    });
});