const btn = document.querySelector('.btn')

const email = document.querySelector('input')


const error = document.querySelector('.error');

const eImage = document.querySelector('.error-image')

const form = document.querySelector('form');

btn.addEventListener('click', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let emailval = email.value;
        if (!isEmail(emailval)) {
            error.style.display = 'block';
            eImage.style.display = 'block';
        } else {
            error.style.display = 'none';
            eImage.style.display = 'none';
        }
    })
})

const isEmail = (email) => {
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}