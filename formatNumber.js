export const formatNumber = (number) =>{
    var string = number.toString();
  
    string = Array.from(string);
    const indexOfDot=string.indexOf('.');
  
    if (indexOfDot!==-1){
      for(var i = indexOfDot-3; i>0; i=i-3){
          string.splice(i,0,',');
      } 
    }else{
      for(var i = string.length-3; i>0; i=i-3){
          string.splice(i,0,',');
      } 
    }
    return string.join("");
  }