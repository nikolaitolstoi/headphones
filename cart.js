//Массив проводных наушников

const headphones = [
    {
        img: "img/img1.png",
        title: "Apple BYZ S852I",
        standartPrice: 3560,
        sale: true,
        salePrice: 2927,
        rate: 4.7,
        id: 10000
    },
    {
        img: "img/img2.png",
        title: "Apple BYZ S852I",
        standartPrice: 3527,
        sale: false,
        salePrice: 2927,
        rate: 4.7,
        id: 20000
    },
    {
        img: "img/img3.png",
        title: "Apple BYZ S852I",
        standartPrice: 3527,
        sale: false,
        salePrice: 2927,
        rate: 4.7,
        id: 30000
    },
    {
        img: "img/img2.png",
        title: "Apple BYZ S852I",
        standartPrice: 3527,
        sale: true,
        salePrice: 2927,
        rate: 4.7,
        id: 40000
    },
    {
        img: "img/img1.png",
        title: "Apple BYZ S852I",
        standartPrice: 2500,
        sale: false,
        salePrice: 2927,
        rate: 4.7,
        id: 50000
    },
]

//Массив беспроводных наушников

const wirelessHeadphones = [
    {
        img: "img/img4.png",
        title: "Apple BYZ S852I",
        standartPrice: 3560,
        sale: false,
        salePrice: 2927,
        rate: 4.7,
        id: 11000
    },
    {
        img: "img/img5.png",
        title: "Apple BYZ S852I",
        standartPrice: 3527,
        sale: true,
        salePrice: 2927,
        rate: 4.7,
        id: 22000
    },
    {
        img: "img/img6.png",
        title: "Apple EarPods",
        standartPrice: 3527,
        sale: false,
        salePrice: 2927,
        rate: 4.7,
        id: 33000
    },
    {
        img: "img/img4.png",
        title: "BlaBla Headphones",
        standartPrice: 3527,
        sale: true,
        salePrice: 2927,
        rate: 4.7,
        id: 44000
    },
    {
        img: "img/img4.png",
        title: "BlaBla Headphones",
        standartPrice: 3527,
        sale: true,
        salePrice: 2927,
        rate: 4.7,
        id: 55000
    }
]

const products = [...headphones, ...wirelessHeadphones]

//Перенесение корзины и счетчика над иконкой корзины
const cartIcon = document.querySelector('.header-icon_cart')
let cart = JSON.parse(window.sessionStorage.getItem('cart'))
cart ||= {
    total: 0
}

const changeAmountInCart = () => {
    cartIcon.setAttribute('data-amount', cart.total)
    if (cart.total!=0) {
        cartIcon.classList.add('header-icon_active') 
    }
    else {
        cartIcon.classList.remove('header-icon_active') 
    }
    window.sessionStorage.setItem('cart', JSON.stringify(cart))
} 

changeAmountInCart()

//Отрисовка корзины
const cartList = document.querySelector('.cart-list')

for (item in cart) {
    if (item === 'total') {
        continue
    }
    else {
        cartList.innerHTML+= `<div class="cart-item" data-id="${item}">
                                    <div class="cart-item__delete-button" data-id="${item}">
                                        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z" fill="#DF6464"/>
                                        </svg> 
                                    </div>
                                    <div class="cart-item__content-wrapper">
                                        <div class="img"><img src="" alt="" title=""></div>
                                        <div class="cart-item__content">
                                            <div class="cart-item__name"><span></span></div>
                                            <div class="cart-item__price-for-piece"><span></span></div>
                                        </div>
                                    </div>
                                    <div class="cart-item__purchase-wrapper">
                                        <div class="card-item__amount-wrapper">
                                            <div class="cart-item__change-amount cart-item__minus-amount" data-id="${item}"></div>
                                            <input type="number" class="cart-item__manual-amount-change" value="" data-id="${item}">
                                            <div class="cart-item__change-amount cart-item__plus-amount" data-id="${item}"></div>
                                        </div>
                                        <div class="cart-item__total-price-for-item"><span></span></div>
                                    </div> 
                                </div>`
    } 
}

//Заполенение элементов корзины

const cartItems = document.querySelectorAll('.cart-item')
let totalPrice = 0
for (let i=0; i<cartItems.length; i++) {
    for (item of products) {
        if (parseInt(cartItems[i].getAttribute('data-id'))===item.id) {
            cartItems[i].querySelector('.img').querySelector('img').setAttribute('src', `${item.img}`)
            cartItems[i].querySelector('.img').querySelector('img').setAttribute('title', `${item.title}`)
            cartItems[i].querySelector('.img').querySelector('img').setAttribute('alt', `${item.title}`)
            cartItems[i].querySelectorAll('span')[0].innerText = item.title
            //Если товар на акции, то под названием пишем цену по акции, иначе обычную цену
            let price = 0
            if (item.sale) {
                price = item.salePrice
            }
            else {
                price = item.standartPrice
            }
            cartItems[i].querySelectorAll('span')[1].innerHTML = price + ' &#8381'
            cartItems[i].querySelector('input').setAttribute('value', `${cart[item.id]}`)
            cartItems[i].querySelectorAll('span')[2].innerHTML = price*cart[item.id] + ' &#8381'
            totalPrice+=price*cart[item.id]
            break
        }
    }
    
}

//Заполнение итоговой суммы

const totalPriceForCart = document.querySelector('.total-price__content').querySelector('span')
totalPriceForCart.innerHTML = `&#8381 ${totalPrice}`

//Изменение количества товаров на кнопки и изменение итоговой суммы
const changeAmountButtons = document.querySelectorAll('.cart-item__change-amount')
changeAmountButtons.forEach(el => {
    el.addEventListener('click', () => {
        if (el.classList.contains('cart-item__minus-amount')) {
            if (cart[el.getAttribute('data-id')]<=0) {
                cart[el.getAttribute('data-id')] = 0
            }
            else {
                cart[el.getAttribute('data-id')]--
                cart.total--
                let price = 0           
                for (item of products) {
                    if (parseInt(el.getAttribute('data-id'))===item.id) {
                        if (item.sale) {
                            price = item.salePrice
                        }
                        else {
                            price = item.standartPrice
                        }
                    }
                }
                for (let i=0; i<cartItems.length; i++) {
                    if (parseInt(cartItems[i].getAttribute('data-id'))===parseInt(el.getAttribute('data-id'))) {
                        cartItems[i].querySelector('input').value = cart[el.getAttribute('data-id')]
                        cartItems[i].querySelector('input').setAttribute('value', `${cart[el.getAttribute('data-id')]}`)
                        cartItems[i].querySelectorAll('span')[2].innerHTML = price*cart[el.getAttribute('data-id')] + ' &#8381'
                        break
                    }
                }
                totalPrice-=price
                
                totalPriceForCart.innerHTML = `&#8381 ${totalPrice}`
            }
            changeAmountInCart()
        }
        else if (el.classList.contains('cart-item__plus-amount')) {
            cart[el.getAttribute('data-id')]++
            cart.total++
            let price = item.salePrice
            for (item of products) {
                if (parseInt(el.getAttribute('data-id'))===item.id) {
                    if (item.sale) {
                        price = item.salePrice
                    }
                    else {
                        price = item.standartPrice
                    }
                }
            }
            for (let i=0; i<cartItems.length; i++) {
                if (parseInt(cartItems[i].getAttribute('data-id'))===parseInt(el.getAttribute('data-id'))) {
                    cartItems[i].querySelector('input').value = cart[el.getAttribute('data-id')]
                    cartItems[i].querySelector('input').setAttribute('value', `${cart[el.getAttribute('data-id')]}`)
                    cartItems[i].querySelectorAll('span')[2].innerHTML = price*cart[el.getAttribute('data-id')] + ' &#8381'
                    break
                }
            }
                totalPrice+=price
                totalPriceForCart.innerHTML = `&#8381 ${totalPrice}`
            
            changeAmountInCart()
        }
    })
})

//Изменение количества товаров вручную

const manualInputs = document.querySelectorAll('.cart-item__manual-amount-change')
manualInputs.forEach(el => {
    el.addEventListener('change', () => {
        let oldValue = parseInt(el.getAttribute('value'))
        let val = parseInt(el.value)
        val ||= 0
        let price = 0
        for (item of products) {
            if (parseInt(el.getAttribute('data-id'))===item.id) {
                if (item.sale) {
                    price = item.salePrice
                }
                else {
                    price = item.standartPrice
                }
            }
        }
        for (let i=0; i<cartItems.length; i++) {
            if (parseInt(cartItems[i].getAttribute('data-id'))===parseInt(el.getAttribute('data-id'))) {
                cartItems[i].querySelector('input').value = val
                cartItems[i].querySelector('input').setAttribute('value', val)
                cartItems[i].querySelectorAll('span')[2].innerHTML = price*val + ' &#8381'
                break
            }
        }

        cart.total-=oldValue
        cart.total+=val
        cart[el.getAttribute('data-id')]=val
        changeAmountInCart()
        totalPrice+=price*val
        totalPrice-=price*oldValue
        totalPriceForCart.innerHTML = `&#8381 ${totalPrice}`
 
    })
})

//Удаление товара из корзины и перерисовка корзины

const deleteItemFromCartButtons = document.querySelectorAll('.cart-item__delete-button')
deleteItemFromCartButtons.forEach(el => {
    el.addEventListener('click', () => {
        let price = 0
        let deletedItems = cart[el.getAttribute('data-id')]
        delete(cart[el.getAttribute('data-id')])
        cart.total-=deletedItems
        changeAmountInCart()
        for (let i=0; i<cartItems.length; i++) {
            if (parseInt(cartItems[i].getAttribute('data-id'))===parseInt(el.getAttribute('data-id'))) {
                cartItems[i].remove()
            }
        }
        for (item of products) {
            if (parseInt(el.getAttribute('data-id'))===item.id) {
                if (item.sale) {
                    price = item.salePrice
                }
                else {
                    price = item.standartPrice
                }
            }
        }
        totalPrice-=price*deletedItems
        totalPriceForCart.innerHTML = `&#8381 ${totalPrice}`
    })
})