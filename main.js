var dispStr='';

//On document ready execute function
$(document).ready(function() {

  //On click of any button display it in display div
    $("button").click(function(){
        dispStr=dispStr+this.innerHTML;
        $('#display').text(dispStr);
    });

    //On click of clear clear display div
    $('#clear').click(function(){
        dispStr='';
        $('#display').text(dispStr);
    });

    //Onclick of equals evaluate display string
    $('#equals').click(function(){
      dispStr=dispStr.replace('=','');
        $('#display').text(eval(dispStr));
    });
});
