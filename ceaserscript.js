function ciphering() {
  var keyInput = parseInt(document.getElementById("key").value);
  var uInput = document.getElementById("ceaser").value;
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var output = "";
  var x;


  for (i = 0; i <= uInput.length; i++) {

    for (j = 0; j <= alphabet.length; j++)
    {

      if (uInput[i] == " ")
      {

        output += " ";
      }
       else if (uInput[i] == alphabet[j])
     {


        var index2 = j + keyInput;
        if (index2 > 25)
        {

          index2 -= 26;
        }

        x = alphabet[index2];
        output += x;
      }


    }


  }
  var sillyString = output.slice(0, -1);
  document.getElementById("test").innerHTML = sillyString;
}

function decipher() {
  var keyInput = parseInt(document.getElementById("key").value);
  var uInput = document.getElementById("ceaser").value;
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var output = "";

  for (i = 0; i <= uInput.length; i++) {

    for (j = 0; j <= alphabet.length; j++) {

      if (uInput[i] == " ") {

        output += " ";

      } else if (uInput[i] == alphabet[j]) {

        var index2 = j - keyInput;
        if (index2 < 0) {

          index2 += 26;
        }
        x = alphabet[index2];
        output += x;
      }


    }


  }

  var sillyString = output.slice(0, -1);
  document.getElementById("test").innerHTML = sillyString;


}
