var selectBox = document.getElementById('contact-options');
var emailInputDiv = document.getElementById('email-input');
var phoneInputDiv = document.getElementById('phone-input'); 

selectBox.addEventListener('change', () => {
    if(selectBox.value === 'email') {
        //Make phone div disappear & email div appear
        phoneInputDiv.style.display = "none";
        emailInputDiv.style.display = "block";
    } else if (selectBox.value === 'phone') {
        //Make email div disappear & phone div appear
        emailInputDiv.style.display = "none";
        phoneInputDiv.style.display = "block";
    } else {
        //SelectOne is chosen, make both divs disappear
        emailInputDiv.style.display = "none";
        phoneInputDiv.style.display = "none";
    }
})

