


function check() {

  var complexity = prompt("How long of a password do you want? Between 8 and 128 characters");


  if (complexity >= 8 && complexity <= 128) {
    create()
    function create() {
      console.log(complexity)


      var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

      var password = "";

      for (var i = 0; i < complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
      }

      document.getElementById("password").value = password;
    }

  } else {
    alert("L2P")
  }
}

function copyToClip() {
  document.getElementById("password").select();

  document.execCommand("Copy");

  alert("Your new password has been copied");
}

// doesnt work
// function create() {    
    // function check() {
    //     if (complexity > 8) {
    //         create()

    //     } else if (complexity < 128); {
    //         create()

    //     } else () {
    //         prompt("How long of a password? Between 8 and 28 characters")

    //     }
    // }
//     console.log(complexity)


//     var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

//     var password = "";

//     for (var i = 0; i < complexity; i++) {
//         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
//     }

//     document.getElementById("password").value = password;


// }

// console.log(password)

