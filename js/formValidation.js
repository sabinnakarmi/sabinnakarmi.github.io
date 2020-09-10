function formValidation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    if(name=="" || email=="" || contact==""){
        alert("Input all fields");
    }
    else{
        alert("Feedback Submitted"); 
        window.open('mailto:sabin262@gmail.com')
    }
}


function validate(){ 
      if ( ( Registration.jobPosition[0].checked == false ) && ( Registration.jobPosition[1].checked == false ) ){
        alert ( "Please choose a position." );
        return false;
      }   
      if( document.Registration.txtName.value == "" ){
        alert( "Please provide your Name!" );
        document.Registration.txtName.focus() ;
        return false;
      }

      if( document.Registration.txtAddress.value == "" ){
        alert( "Please provide your Address!" );
        document.Registration.txtAddress.focus() ;
        return false;
      }

      if( document.Registration.Category.value == "-1" ){
        alert( "Please provide your Category!" );
        document.Registration.Category.focus() ;
        return false;
      }   

      var email = document.Registration.emailid.value;
      atpos = email.indexOf("@");
      dotpos = email.lastIndexOf(".");
      if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.Registration.emailid.focus() ;
        return false;
      }

      if( document.Registration.mobileno.value == "" || isNaN( document.Registration.mobileno.value) || document.Registration.mobileno.value.length != 10 ){
        alert( "Please provide a 10 digit contact number." );
        document.Registration.mobileno.focus() ;
        return false;
      }

      if( document.Registration.githubbitbucket.value == "" ){
        alert( "Please provide your github or bibucket profile link." );
        document.Registration.githubbitbucket.focus() ;
        return false;
      }
      else{
        alert("Form Submitted.");
      }
      return( true );
}

function uploadResume() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    document.body.appendChild(x);
}

var myIndex = 0;
          carousel();

          function carousel() {
              var i;
              var x = document.getElementsByClassName("mySlides");
              for (i = 0; i < x.length; i++) {
                 x[i].style.display = "none";  
              }
              myIndex++;
              if (myIndex > x.length) {myIndex = 1}    
              x[myIndex-1].style.display = "block";  
              setTimeout(carousel, 3000);
          }
//Google map API key: AIzaSyCHYfv3mZzZgdYjcT7bdIWCUc_DqO74Qzc 