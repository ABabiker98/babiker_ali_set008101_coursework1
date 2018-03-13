function ciphering() {

  var uInput = document.getElementById("vigetext").value;

  var keyValue = document.getElementById("key").value;

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  var output = "";
  var x;
  var KeyArray = [];
  var counter = 0;

  // populates the keyarray
  for (var j = 0; j < keyValue.length; j++) {

    for (var n = 0; n < alphabet.length; n++) {

      if (keyValue[j] == alphabet[n]) {

        KeyArray.push(n);
      }
    }
  }

  for (var i = 0; i < uInput.length; i++) {

    for (var n = 0; n < alphabet.length; n++) {
      if (uInput[i] == " ") {


        output += uInput[i];
      } else if (uInput[i] == alphabet[n]) {

        var index = n + KeyArray[counter];

        if (index > 25) {

          index -= 26;
        }



        x = alphabet[index];
        output += x;
        counter++;
        if (counter == KeyArray.length) {
          counter = 0;
        }

      }
    }
  }
  //var sillyString = output.slice(0, -1);
  document.getElementById("test").innerHTML = output;

}

function decipher() {

  var uInput = document.getElementById("vigetext").value;
  var keyValue = document.getElementById("key").value;

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  var output = "";
  var x;
  var KeyArray = [];
  var counter = 0;

  // populates the keyarray
  for (var j = 0; j < keyValue.length; j++) {

    for (var n = 0; n < alphabet.length; n++) {

      if (keyValue[j] == alphabet[n]) {

        KeyArray.push(n);
      }
    }
  }

  for (var i = 0; i < uInput.length; i++) {

    for (var n = 0; n < alphabet.length; n++) {
      if (uInput[i] == " ") {


        output += uInput[i];
      } else if (uInput[i] == alphabet[n]) {

        var index = n - KeyArray[counter];

        if (index < 0) {

          index += 26;
        }



        x = alphabet[index];
        output += x;
  counter++;
        if (counter == KeyArray.length) {
          counter = 0;
        }

      }
    }
  }
  //var sillyString = output.slice(0, -1);
  document.getElementById("test").innerHTML = output;

}
