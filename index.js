
function words(count){
  if(count.value.length <= 140)
    {
    document.getElementById("count").innerHTML = count.value.length+'/140';
    }
  else
    {
      window.alert("Maximum count should be 140")
    }
}