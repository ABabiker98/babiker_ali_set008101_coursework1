function ciphering() {

  var uInput = document.getElementById("rot").value;
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  var output = "";
  var x;

  for (i = 0; i <= uInput.length; i++) {

    for (j = 0; j <= alphabet.length; j++) {

      if (uInput[i] == " ") {

        //  output.push(" ");
        output += uInput[i];
      } else if (uInput[i] == alphabet[j]) {

        var index2 = j + 2;

        if (index2 > 25) {

          index2 -= 26;
        }

        x = alphabet[index2];

        output += x;

      }

    }

  }
  // this line removes the last char from the string
  // i had an error where the letter c was added at the end of every
  // output
  var sillyString = output.slice(0, -1);
  
  document.getElementById("test").innerHTML = sillyString;
}

function decipher() {
  var uInput = document.getElementById("rot").value;
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
  ];
  var output = "";
  var x;

  for (i = 0; i <= uInput.length; i++)
  {

    for (j = 0; j <= alphabet.length; j++)
    {

      if (uInput[i] == " ")
      {

        output += " ";
      }
      else if (uInput[i] == alphabet[j]) {

        var index2 = j - 2;

        if (index2 < 0)
        {

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
