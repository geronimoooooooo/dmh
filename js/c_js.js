/*JavaScript*/

function helloWorld(){
    console.log("hello world");    
}
/**al function */
function alerter(){
    alert("msg2");
}

$(function(){
    console.log("this hide");
    $("#b1").click(function(){
        $(this).hide();
    });
    
});