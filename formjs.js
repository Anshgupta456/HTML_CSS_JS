document.getElementById("survey-form").onkeyup = function() {
    countFields()
      }
      document.getElementById("survey-form").onclick = function() {
    countFields()
      }
         
  function countFields(){
  const charactersCount = document.getElementById('count');
  var text = document.querySelectorAll('.input-text');
  var checkbox = document.querySelectorAll('.input-checkbox');
  var scroll = document.querySelectorAll('.scrolldown');
  var dropdown = document.querySelectorAll('.dropdown');
  var count = 0;
  
  
  for( var i = 0; i< text.length; i++){
      if(text[i].value != ''){
          count++ ;
      };
      
    }
    for( var i = 0; i< scroll.length; i++){
      var element = scroll[i];
      var getvalue = element.options[element.selectedIndex].value;
      if(getvalue !=''){
          count++ ;
          break;
      }
      
    }
    for( var i = 0; i< dropdown.length; i++){
      var element1 = dropdown[i];
      var gvalue = element1.options[element1.selectedIndex].value;
      if(gvalue !=''){
          count++ ;
          break;
      }
    
    }
    for(var i = 0; i<checkbox.length; i++){
      if(checkbox[i].checked){
          count++ ;
          break;
      }
    }
    charactersCount.innerText=count;      
  };