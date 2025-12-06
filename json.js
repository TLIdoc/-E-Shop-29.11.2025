const BASE_URL = "https://my-json-server.typicode.com/TLIdoc/-E-Shop-29.11.2025"
let main = document.querySelector("main")

let products = []

function getProducts(){
    fetch (BASE_URL + "/products")
    .then(async (res)=>{
        let data = await res.json()
            console.log(data)
            products = data
            drawProducts()
    })
}

getProducts()

function drawProducts(){
    main.innerHTML = ""
    products.forEach(p=>{
        main.innerHTML += `
        <div class="product">
        <h3>${p.name}</h3>
        <a href="/seller/${p.user_id}">Seller page</a>
        </div>
        `
    })
}