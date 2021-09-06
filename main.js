class Form{
    constructor(selector, error)
    {
        this.$form = document.querySelector(selector)
        this.$error = document.querySelector(error)
        this.$form.addEventListener('submit', (event) => {
            this.mainForm(event)
        })
    }
    mainForm(event)
    {
        event.preventDefault()
        let data = new Object()
        let inputs = this.$form.querySelectorAll('input')
        for (let input of inputs){
            data[input.name] = input.value
        }
        if(!this.dataValidator(data))
        {
            this.errorMessages('Incorrect username or password.')
            // info console
            console.log('error in dataValidator: ')
            console.log(data)
            return false
        }
        this.$error.style.display = 'none'

        // info console
        console.log('send data: ')
        console.log(data)
    }
    dataValidator(datas)
    {
        for (let d in datas)
        {
            if(datas[d].length <= 2) return false
            if(datas[d].length >= 8) return false
        }
        return true
    }
    errorMessages(messages)
    {
        this.$error.style.display = 'flex'
        this.$error.querySelector('.messeage').innerHTML = messages
        this.$error.querySelector('.close').addEventListener('click', () => {
        this.$error.style.display = 'none'
        })
    }
}
new Form('.main-form', '.error')