function ciphering() {
  var uInput = document.getElementById("bash").value;
  var alphaverse = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm',
    'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'
  ];
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  var output = "";
  var x;

  for (i = 0; i < uInput.length; i++) {

    for (j = 0; j < alphabet.length; j++) {


      if (uInput[i] == " ") {
        output += uInput[i];
      } else if (uInput[i] == alphabet[j]) {
        var index2 = j;
        x = alphaverse[index2];
        output += x;
      }
    }
  }
  document.getElementById("test").innerHTML = output;
}


function decipher() {

  var uInput = document.getElementById("bash").value;
  var alphaverse = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l',
    'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'
  ];
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  var output = "";
  var x;

  for (i = 0; i < uInput.length; i++)
  {

    for (j = 0; j < alphabet.length; j++)
    {


      if (uInput[i] == " ")
      {

        output += uInput[i];
      }
      else if (uInput[i] == alphaverse[j])
      {

        var index2 = j;
        x = alphabet[index2];
        output += x;
      }
    }
  }
  document.getElementById("test").innerHTML = output;
}
