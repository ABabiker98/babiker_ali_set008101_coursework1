function ciphering()
{
  var uInput = document.getElementById("vigetext").value;
  var  keyValue = document.getElementById("key").value;
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var output ="";
  var x;

    for(i = 0; i < vigetext.length; i++)
    {
      keyValue =+ keyValue;


      for(j = 0; j < keyValue.length;  j++)
      {
          if(keyValue[j] == alphabet[j]){
            var keyIndex = j;
          }

      var index2 = keyIndex + i;

        if(index2 > 25){
          index2 =-26;
        }
        x = alphabet[index2];
        output += x;

    }

}
//var sillyString = output.slice(0, -1);
document.getElementById("test").innerHTML = output;
}
