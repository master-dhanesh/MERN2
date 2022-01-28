const signupbtn = document.querySelector('.signupbtn')
const signinbtn = document.querySelector('.signinbtn')
const myForm = document.querySelector('.myForm');


signupbtn.addEventListener('click', function(e) {
    myForm.style.transform = 'translate(0%, 0)'
    signinbtn.classList.remove('borderbottom');
    signupbtn.classList.add('borderbottom');
})

signinbtn.addEventListener('click', function(e) {
    myForm.style.transform = 'translate(-50%, 0)';
    signinbtn.classList.add('borderbottom');
    signupbtn.classList.remove('borderbottom');
    
})

