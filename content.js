

$(function(){
setInterval(runFunction, 1000);
});


var count = 0;

function runFunction(){

$( ".userContentWrapper" ).each(function( index ) {
 

if( ( $( this ).is(':contains("blue")') ) || ( $( this ).is(':contains("black")') ) || ( $( this ).is(':contains("white")') ) || ( $( this ).is(':contains("gold")') ) ){
$(this).html("This Post has Been Quarantined For Mentioning the Unspeakable");
count=count+1;
}

});

console.log(count + " posts removed!");


}


