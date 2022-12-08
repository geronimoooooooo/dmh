/*JavaScript*/

function helloWorld(){
    console.log("hello world");    
}
/**al function */
function alerter(){
    alert("msg2");
}

$(function(){
 
    $("#b1").click(function(){
        console.log("this hide");
        $(this).hide();
    });

    $('.rules').click(function(){
        $(this).hide();
    });
    
});