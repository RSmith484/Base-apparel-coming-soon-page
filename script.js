const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error-message')
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
form.addEventListener('submit', (e) => {

    let messages = []
    
    if (email.value === '' || email.value == null) {
        messages.push('An email address is required')
        email.style.borderColor = 'hsl(0, 93%, 68%)'
        form.classList.add('error')
    }

    if (email.value.match(emailRegExp)) {
        email.style.borderColor = '#333'
        messages.push('')
        form.classList.remove('error')
    } 
    else {
        messages.push('Please provide a valid email')
        email.style.borderColor = 'hsl(0, 93%, 68%)'
        form.classList.add('error')
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})