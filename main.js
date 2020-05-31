console.log('It works')

$(document).ready(function() {
    $('.submit').click(function(event){
        event.preventDefault()
        console.log('clicked submit')

        var email = $('.email').val()
        var name = $('.name').val()
        var message = $('.message').val()
        var status = $('.status')
        status.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            status.append('<div>email valid</div>')
        } else {
            event.preventDefault()
           status.append('<div>email is not valid</div>')
        }

        if(name.length >= 2) {
            status.append('<div>Name is Valid</div>')
        } else {
            event.preventDefault()
            status.append('<div>Name is not valid</div>')
        }

        if(message.length >= 10) {
            status.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            status.append('<div>Message too short</div>')
        }
    })
})