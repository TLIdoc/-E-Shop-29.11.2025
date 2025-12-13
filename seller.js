const urlParams = new URLSearchParams(window.location.search)
let user_id = urlParams.get("user_id")
console.log(user_id)

const BASE_URL = "https://my-json-server.typicode.com/TLIdoc/-E-Shop-29.11.2025"
let main = document.querySelector("main")


function getUser(){
    fetch (BASE_URL + "/users?id=" + user_id)
    .then(async (res)=>{
        let data = await res.json()
        data = data[0]
        console.log(data)
        document.querySelector(".seller h1").innerHTML = data.name
        document.querySelector(".seller h3").innerHTML = "EL пошта: " + data.email
        document.querySelector(".seller h4").innerHTML = data.id
    })
}
getUser()


function getProducts(){
    fetch (BASE_URL + "/products?user_id=" + user_id)
    .then(async (res)=>{
        let data = await res.json()
        data = data[0]
        console.log(data)
        drawProducts(data)
    })
}
getProducts()


function addProductToCart(product_id){
    console.log(product_id)
}

function drawProducts(products){
    main.innerHTML = ""
    products.forEach(p=>{
        main.innerHTML += `
        <div class="product">
        <h3>${p.name}</h3>
        <h4>${p.price}</h4>
        </div>
        `
    })
}
let cartButton = document.getElementById("cart")
let cart = document.querySelector(".cart")

let cartIsOpen = false
cartButton.addEventListener("click", function(){
    cartIsOpen = !cartIsOpen
    cart.style.display = cartIsOpen ? "flex" : "none"
})