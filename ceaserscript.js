function ciphering() {
  /*set up the variables we will need to encrypt a user message
  retrieving the user input from the textbox as well as a key value
  the alphabet array will be looped through within the cipher
  */
  var keyInput = parseInt(document.getElementById("key").value);
  var uInput = document.getElementById("ceaser").value;
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  var output = "";
  var x;
  /*Loop through the alphabet and the user input
  compare each character of the user input with the alphabet
  if a match is found, the index has a number added on to it,
  which is determined by a user input
  and an output string is built by running the new index through
  the alphabet to replace each character
  */

  for (i = 0; i <= uInput.length; i++) {

    for (j = 0; j <= alphabet.length; j++) {

      if (uInput[i] == " ") {

        output += " ";
      } else if (uInput[i] == alphabet[j]) {


        var index2 = j + keyInput;
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
/*The only difference between coding and decoding is that we subtract the user input
number from the index
 rather than it being added on
*/
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
