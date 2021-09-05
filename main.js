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
        let inputs = this.$form.querySelectorAll('input')
        for (let input of inputs){
            // переделать
            if(this.dataValidator(input))
            {
                this.errorMessages('Не верные данные что то такое !!!')
                return 0
            }
        }
    }
    dataValidator(input)
    {
        if(input.value.length > 2 && input.value.length > 4) return true
        return false
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