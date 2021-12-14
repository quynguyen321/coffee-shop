

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

    getCart()
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const delButton = document.querySelector('#check-out');
delButton.addEventListener("click", function(e) {
    e.preventDefault();

    axios
      .delete(`/api/cart`)
      .then(function(response) {
        alert(response.data);
        removeAllChildNodes(itemcartcheckout)
        
      });
});

const productBoxContainer = document.querySelector('.box-container') 
const itemcartcheckout = document.querySelector('.cart-item')
function getCart(){
    axios
        .get('/api/cart')
        .then((res) => {
            console.log(res.data)
            res.data.map(el =>{
                let contentBox = document.createElement('div')
                contentBox.classList.add('content')

                let productBox = document.createElement("div")
                let productName = document.createElement('h3')
                productName.classList.add('shop-item-title')
                productName.textContent = el.product_name
                productBox.appendChild(productName)
                itemcartcheckout.appendChild(productBox)

                let imgTag = document.createElement("img")
                imgTag.classList.add('shop-item-image')
                imgTag.src = el.image
                itemcartcheckout.appendChild(imgTag)

                let productPrice = document.createElement('div')
                productPrice.classList.add('price')
                productPrice.textContent = el.price 
                itemcartcheckout.appendChild(productPrice)
                
            })

            
        })
        .catch((err) => console.log(err))
}
function getProduct(){
    axios.get('/api/products')
    .then(res =>{
        console.log(res)
        res.data.map(el=>{
            let productBox = document.createElement("div")
            productBox.setAttribute('name', el.order_id )
            productBox.classList.add('box')
            productBox.classList.add('product')
            productBoxContainer.appendChild(productBox)


            let imgTag = document.createElement("img")
            imgTag.classList.add('shop-item-image')
            imgTag.src = el.image
            productBox.appendChild(imgTag)

            let productName = document.createElement('h3')
            productName.classList.add('shop-item-title')
            productName.textContent = el.product_name
            productBox.appendChild(productName)

            let productPrice = document.createElement('div')
            productPrice.classList.add('price')
            productPrice.textContent = el.price 
            productBox.appendChild(productPrice)
            
            let productBtn = document.createElement('a')
            productBtn.classList.add('btn')
            productBtn.classList.add('submit')
          
            
            productBtn.textContent = "add to cart"
            productBox.appendChild(productBtn)
        })

        let products = document.querySelectorAll('.product')


        products.forEach(prod => {
              let cartObj = {
                 order_id: +prod.getAttribute('name'),
                 product_name: prod.querySelector('.shop-item-title').textContent,
                 image: prod.querySelector('.shop-item-image').getAttribute('src'),
                 price: +prod.querySelector('.price').textContent,
                }

            let cartBtn = prod.querySelector('.submit')
            cartBtn.addEventListener('click', function() {
                
                axios
                    .post('/api/cart', cartObj)
                    .then(() => alert('Item added'))
                    .catch((err)=> console.log(err))

            })
        })

    })
}

const form = document.querySelector('form')

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let number = document.querySelector('#contact-number')

    let bodyObj = {
        name: name.value,
        email: email.value, 
        number: number.value

    }
console.log(bodyObj)
    axios
    .post('http://localhost:9876/api/contact', bodyObj)
    .then(res=> alert(res.data))
    .catch(err=> console.log(err))

    name.value = ''
    email.value = ''
    number.value = ''
}


form.addEventListener('submit', submitHandler)


document.addEventListener("DOMContentLoaded",getProduct)
document.addEventListener("DOMContentLoaded",getCart)
