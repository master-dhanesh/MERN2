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

// --------------------------------------------------------------

const signupform = document.querySelector('.signupform');
const second = document.querySelector('.second');

const Users = [];


function Add(u) {
    second.innerHTML = ''
    u.forEach(e => {
        second.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.name}</h5>
          <p class="card-text">${e.email}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    })

}

    
    


signupform.addEventListener('submit', function(e){
    e.preventDefault();

    let {email, name, password} = e.target

    let data = {
        email: email.value,
        name: name.value,
        password: password.value,
    }

    Users.push(data);
    
    email.value = '';
    name.value = '';
    password.value = '';
    console.log(Users);

    Add(Users)
});