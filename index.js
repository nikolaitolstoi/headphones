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
        sale: true,
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


//Проверка на длинное название

for (let i of wirelessHeadphones) {
    if (i.title.length >20) {
        i.title = i.title.slice(0,17) + '...'
    }
}

//Получение блоков-контейнеров для карточек

const sectionHeadphones = document.querySelector('.section_headphones')
const sectionWirelessHeadphones = document.querySelector('.section_wireless-headphones')

const cardListHeadphones = sectionHeadphones.querySelector('.card-list')
const cardListWirelessHeadphones = sectionWirelessHeadphones.querySelector('.card-list')


//Отрисовка карточек по кол-ву элементов в массиве "наушники" 

for (item of headphones) {
    cardListHeadphones.innerHTML +=  `<div class="card card_headphones">
                                <div class="card__img"><img src="" alt=""></div> 
                                <div class="card__content-wrapper">
                                    <div class="card__name"><span></span></div>
                                    <div class="card__price" data-sale-price=""><span></span></div>
                                </div>
                                <div class="card__content-wrapper">
                                    <div class="card__rate">
                                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z" fill="#FFCE7F"/>
                                        </svg>
                                        <span></span>
                                    </div>
                                    <div class="card__purchase-button" data-id="">Купить</div>       
                                </div>
                            </div>`                   
}

//Отрисовка карточек по кол-ву элементов в массиве "беспроводные наушники"

for (item of wirelessHeadphones) {
    cardListWirelessHeadphones.innerHTML +=  `<div class="card card_wireless-headphones">
                                <div class="card__img"><img src="" alt="" title=""></div> 
                                <div class="card__content-wrapper">
                                    <div class="card__name"><span></span></div>
                                    <div class="card__price" data-sale-price=""><span></span></div>
                                </div>
                                <div class="card__content-wrapper">
                                    <div class="card__rate">
                                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z" fill="#FFCE7F"/>
                                        </svg>
                                        <span></span>
                                    </div>
                                    <div class="card__purchase-button" data-id="">Купить</div>       
                                </div>
                            </div>`
}

//Получение отрисованных карточек для проводных и беспроводных наушников

const cardsHeadphones = document.querySelectorAll('.card_headphones')
const cardsWirelessHeadphones = document.querySelectorAll('.card_wireless-headphones')

//Заполнение секции проводных наушников

for (let i=0; i<cardsHeadphones.length;i++) {
    cardsHeadphones[i].querySelector('img').setAttribute('src', headphones[i].img)
    cardsHeadphones[i].querySelector('img').setAttribute('alt', headphones[i].title)
    cardsHeadphones[i].querySelector('img').setAttribute('title', headphones[i].title)
    cardsHeadphones[i].querySelectorAll('span')[0].innerText = headphones[i].title
    cardsHeadphones[i].querySelectorAll('span')[2].innerText = headphones[i].rate
    cardsHeadphones[i].querySelector('.card__purchase-button').setAttribute('data-id', headphones[i].id)
    //Если товар на акции, то старую цену вниз и зачеркиваем, а новую на место старой
    let price = 0
    if (headphones[i].sale) {
        cardsHeadphones[i].querySelector('.card__price').classList.add('card__price_sale')
        price = headphones[i].salePrice 
        cardsHeadphones[i].querySelector('.card__price').setAttribute('data-sale-price', headphones[i].standartPrice)
    }
    else {
        price = headphones[i].standartPrice
    } 
    cardsHeadphones[i].querySelectorAll('span')[1].innerHTML = price + ' &#8381'
}

//Заполнение секции беспроводных наушников
for (let i=0; i<cardsWirelessHeadphones.length;i++) {
    cardsWirelessHeadphones[i].querySelector('img').setAttribute('src', wirelessHeadphones[i].img)
    cardsWirelessHeadphones[i].querySelector('img').setAttribute('alt', wirelessHeadphones[i].title)
    cardsWirelessHeadphones[i].querySelector('img').setAttribute('title', wirelessHeadphones[i].title)
    cardsWirelessHeadphones[i].querySelectorAll('span')[0].innerText = wirelessHeadphones[i].title
    cardsWirelessHeadphones[i].querySelectorAll('span')[2].innerText = wirelessHeadphones[i].rate
    cardsWirelessHeadphones[i].querySelector('.card__purchase-button').setAttribute('data-id', wirelessHeadphones[i].id)
    //Если товар на акции, то старую цену вниз и зачеркиваем, а новую на место старой
    let price = 0
    if (wirelessHeadphones[i].sale) {
        cardsWirelessHeadphones[i].querySelector('.card__price').classList.add('card__price_sale')
        price = wirelessHeadphones[i].salePrice 
        cardsWirelessHeadphones[i].querySelector('.card__price').setAttribute('data-sale-price', wirelessHeadphones[i].standartPrice)
    }
    else {
        price = wirelessHeadphones[i].standartPrice
    }
    cardsWirelessHeadphones[i].querySelectorAll('span')[1].innerHTML = price + ' &#8381'
}

//Добавление в корзину и ее отрисовка
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
} 
cartIcon.setAttribute('data-amount', cart.total)
changeAmountInCart()

const cardPurchaseButtons = document.querySelectorAll('.card__purchase-button')
cardPurchaseButtons.forEach(el => {
    const itemID = el.getAttribute('data-id')
    el.addEventListener('click', () => {
        if (Object.keys(cart).includes(itemID)) {
            cart[itemID]++
            cart.total++
        }
        else {
            Object.keys(cart).push(itemID)
            cart[itemID]=1
            cart.total++
        }
        changeAmountInCart()
        window.sessionStorage.setItem('cart', JSON.stringify(cart))
    })
    
})




