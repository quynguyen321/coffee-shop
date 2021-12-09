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
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let removeCartItemButtons = document.getElementsByClassName('fas fa-times')

  for (let i = 0; i<removeCartItemButtons.length; i++){
    let button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

// let addToCartButtons = document.getElementsByClassName('btn')
//   for (let i = 0; i< addToCartButtons.length; i++) {
//        let button = addToCartButtons[i]
//        button.addEventListener('click', addToCartClicked)
// }

// function addToCartClicked(event) {
//     var button = event.target
//     var shopItem = button.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     var price = shopItem.getElementsByClassName('price')[0].innerText
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//     addItemToCart(title, price, imageSrc)
//     updateCartTotal()
// }
function geProduct(){
    axios.get('http://localhost:9876/api/products')
    .then(res =>{
        console.log(res)

    })
}

