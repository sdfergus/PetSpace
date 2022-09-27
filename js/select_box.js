var selectBox = document.getElementById('contact-options');

selectBox.addEventListener('change', () => {
    if(selectBox.value === 'email') {
        console.log('EMAIL SELECTED!');
        //Make email div appear
    } else if (selectBox.value === 'phone') {
        console.log('PHONE SELECTED!');
        //Make phone div appear
    } else {
        //Make div disappear
    }
})

