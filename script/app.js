class Shopify {
    /* Отрисовка продуктов, смотря от токена */
    productsUi (products, isAuth) {
        const productsContent = document.querySelector('.main__content')

        for (const [i, p] of products.entries()) {
            productsContent.innerHTML += `
                <div class="card main__content-card" style="width: 18rem;" data-id="${p.id}">
                    <img src="${p.thumbnail}" class="card-img-top main__content-img" alt="${p.title}">
                    <div class="card-body main__content-body">
                        <h5 class="card-title">${p.title}</h5>
                        <p class="card-text">${p.description}</p>
                        <button type="button" class="btn btn-primary brand-btn ${isAuth}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            ${p.title}
                        </button>
                    </div>
                </div>
            `

            if (i === products.length - 1) {
                this.productsClickHandler(products)
            }
        }
    }

    productsClickHandler (products) {
        const NODE = this
        const productsBtns = document.querySelectorAll('.brand-btn')

        productsBtns.forEach(p => {
            p.addEventListener('click', function () {
                const dataId = +this.closest('.main__content-card').getAttribute('data-id')
                const selectedProduct = products.filter(p => p.id === dataId)
                NODE.modalUiProductUi(selectedProduct[0])
            })
        })
    }

    modalUiProductUi (product) {
        const modalContent = document.querySelector('.modal__content')
        modalContent.innerHTML = ''
        console.log(product);
        modalContent.innerHTML += `
            <div class="modal-header">
                <h2 class="modal-title fs-5" id="staticBackdropLabel"> ${product.title} </h2>
                
            </div>
            <div class="modal-body">
                <img src="${product.thumbnail}" class="card-img-top main__content-img" alt="${product.title}">
                <p class="mt-4"> ${product.description} </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        `
    }

    getProducts () {
        requests.getRequest('https://dummyjson.com/products', products => {
            const token = localStorage.getItem('TOKEN')
            const login = document.querySelector('#login')
            const logout = document.querySelector('#logout')

            let hide = 'hide'

            /* Проверка на TOKEN */
            if (token !== null) {
                login.style="display: none"
                hide = 'true'
                logout.classList.remove('hide')
            }

            this.productsUi(products.products, hide)
        })
    }

    logOutClickHandler () {
        const logout = document.querySelector('#logout')

        logout.addEventListener('click', function () {
            localStorage.clear()
            window.location.reload()
        })
    }

    init () {
        this.getProducts()
        this.logOutClickHandler()
    }
}

const shopify = new Shopify()

shopify.init()