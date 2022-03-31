function signAlert() {
    let answer = window.confirm("Are you sure this email is correct?");
    if (answer == true) {
        window.alert("Your email have been saved");
        window.location.href = "index.html";
    } else {
        window.alert("Please enter your email again."); 
      
    }

    return false;
  
}
