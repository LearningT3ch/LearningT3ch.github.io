$(document).ready(function(){
    let wpm = $("#wpm").val();
    let wnr = $("#wnr").val();
    $("#wpm-nr").text(wpm);
    $("#wnr-nr").text(wnr);

    $("#wpm").change(function(){
      let newval=$(this).val();
      $("#wpm-nr").text(newval);
    });

    $("#wnr").change(function(){
        let newval=$(this).val();
        $("#wnr-nr").text(newval);
      });

    $("#go").click(function(){
         let text = $("textarea").val();
         let wpm = $("#wpm").val();
         let wnr = $("#wnr").val();
         reset();
         compile(text, wpm, wnr);
    });

    $('#menu').click(function(){
        $('#get').slideToggle(1000);
    });
  });
var cp_text;
var cr_word;
var i = 0;

function reset(){
cp_text = null;
cr_word = null;
i = 0;
};

function compile(_text, _wpm, _wnr){
    cp_text = _text.split(" ");
    display(_wpm,_wnr);
};

function current_word(_wnr){
    switch(Number(_wnr)){
        case 1:
        cr_word = cp_text[i++];
        break;
        case 2: 
        cr_word = cp_text[i++] + " " + cp_text[i++] ;
        break;
        case 3: 
        cr_word = cp_text[i++] + " " + cp_text[i++] + " " + cp_text[i++] ;
        break;
        case 4: 
        cr_word = cp_text[i++] + " " + cp_text[i++] + " " + cp_text[i++] + " " + cp_text[i++];
        break;
        case 5: 
        cr_word = cp_text[i++] + " " + cp_text[i++] + " " + cp_text[i++] + " " + cp_text[i++] + " " + cp_text[i++];
    }
    $("#words").text(cr_word);
    //add more words!!!
};

function wpm_to_sec(wpm, wnr){
    let mili_seconds = 60 / wpm * wnr;
    Math.floor(mili_seconds);
    return(mili_seconds * 1000);
};

function display(_wpm,_wnr){
    let speed = wpm_to_sec(_wpm, _wnr);
    let mili = 0;
    let nr_word = 0;
    if(cp_text.length > 1){
    $("#get").hide();
    setTimeout(function(){    while(nr_word <= cp_text.length/_wnr){
        setTimeout(function(){current_word(_wnr); }, mili);
        mili = mili + speed;
        nr_word++; 
    }; },1000);
} else {
    $("#words").text("Please enter a text to read");
}
};

