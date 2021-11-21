$ (document).ready (function(){
    $("#currentDay").text(moment().format("dddd , MMM , Do"))
// pulled from local storage 
$ ("8 .description").val(localStorage.getItem("8"));
$ ("9 .description").val(localStorage.getItem("9"));
$ ("10 .description").val(localStorage.getItem("10"));
$ ("11.description").val(localStorage.getItem("11"));
$ ("12 .description").val(localStorage.getItem("12"));
$ ("13 .description").val(localStorage.getItem("13"));
$ ("14 .description").val(localStorage.getItem("14"));
$ ("15 .description").val(localStorage.getItem("15"));
$ ("16 .description").val(localStorage.getItem("16"));

// save button handler 
$ (".saveBtn").on("click", function(){
    let desc= $ (this).siblings(".description").val();
    let hour= $ (this).parent().attr("id");

    localStorage.setItem(hour,desc);
})

function timeUpdater (){
    let thisHour= moment().hours();

    $(".time-block").each(function() {
        let timeBlockHour =parseInt ($(this). attr("id"));
        
        if(timeBlockHour < thisHour){
            $(this). addClass ("past");
        }else if (timeBlockHour === thisHour){
            $(this). removeClass ("past");
            $(this). addClass ("present");
        }else {
            $(this). removeClass ("past");
            $(this). removeClass ("present");  
            $(this). addClass ("future");  
        }
    })

}

timeUpdater ();
});