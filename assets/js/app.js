$("#add").on("click", function () {
    var text = $("#activity").val();

    var newActivity = `<li><span class="delete"><i class="far fa-trash-alt"></i></span> ${text} </li>`
    $(".list").append(newActivity)
    $("#activity").val('')
})



//gray out and line-through, and vice versa.  DOES NOT DELETE FROM LIST
//use the 3 paramaters on the on so future li's will work
$("ul").on('click', 'li', function () {
    $(this).toggleClass("completed")
});

// $("li").on('click', function () {  --- OLD WAY
// //if gray, make black, vice versa
// alert("The color is "+ $(this).css("color"))
//     if ($(this).css("color") === "rgb(128, 128, 128)") {
//         $(this).css("color", "black")
//         $(this).css("text-decoration", "none")
//     }
//     else {
//         $(this).css("color", "gray")
//         $(this).css("text-decoration", "line-through")
//     }
// })


//Click on X to delete
//use the 3 paramaters on the on so future li's will work
$('ul').on('click', '.delete', function (event) {
    $(this).parent().fadeOut(500, function () {  // - $(this) takes care of span only, .parent takes <li> too
        $(this).remove()
    })
    event.stopPropagation(); // - to prevent event bubbling
})





