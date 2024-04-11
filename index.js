const uimaker = (data) => {
    data.map(product => {
        let title = document.createElement("h5");
        title.innerHTML = product.title;
        let price = document.createElement("h4");
        price.innerHTML = product.price;
        let category = document.createElement("h5")
        category.innerHTML = product.category;
        let description = document.createElement("h5");
        description.innerHTML = product.description;
        let image = document.createElement("img");
        image.src = product.image;

        let div = document.createElement("div");
        div.append(image, title, price, category, description);
        document.getElementById("container").append(div);
    });
}


let data=[]
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((datas) => {
data=datas
        uimaker(datas)
    })



const filter = (val) => {
    let temp = data.filter((ele) => ele.category == (val))
    uimaker(temp)
}
document.getElementById("men").addEventListener("click", () => filter("men's clothing"))
document.getElementById("jewelery").addEventListener("click", () => filter("jewelery"))
document.getElementById("electronics").addEventListener("click", () => filter("electronics"))
document.getElementById("women").addEventListener("click", () => filter("women's clothing"))