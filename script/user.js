class User {
    constructor (options) {
        this.username = options.username
        this.password = options.password
        this.token = options.token
    }

    userLogin () {
        const NODE = this
        const from = document.querySelector('#form__login')
        const modal = document.querySelector('.modal')

        from.addEventListener('submit', function () {
            const username = document.querySelector('#username').value
            const password = document.querySelector('#password').value

            if (username === NODE.username && password === NODE.password) {
                const modalBackdrop = document.querySelector('.modal-backdrop')
                modal.classList.remove('show')

                modalBackdrop.className = ''
                document.body.className = ''    
                document.body.style = ''    

                this[0].value = ''
                this[1].value = ''

                localStorage.setItem('TOKEN', user.token)
            }

        }) 
    }

    init () {
        this.userLogin()
    }

}

const user = new User ({
    userId: 5,
    username: 'Alex',
    password: '123456',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs'
})

user.init()