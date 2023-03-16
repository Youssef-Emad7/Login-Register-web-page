const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});

// Password show/hide

function show() {
            let x = document.getElementById('password');
            if (x.type === "password"){
                x.type = "text";
                document.getElementById('image').src = 'E:/Projects/front/Images/show.png'
            }
            else {
                x.type = "password";
                document.getElementById('image').src = 'E:/Projects/front/Images/hide.png'
            }
}

function showCopy() {
            let x = document.getElementById('password-copy');
            if (x.type === "password"){
                x.type = "text";
                document.getElementById('image-copy').src = 'E:/Projects/front/Images/show copy.png'
            }
            else {
                x.type = "password";
                document.getElementById('image-copy').src = 'E:/Projects/front/Images/hide copy.png'
            }
}