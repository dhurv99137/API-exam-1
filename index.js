const uimaker = (data) => {
    document.getElementById("container").innerHTML = "";
    data.map(product => {
        let title = document.createElement("h5");
        title.innerHTML = product.title;
        let price = document.createElement("h4");
        price.innerHTML = product.price;
        let category = document.createElement("h5");
        category.innerHTML = product.category;
        let description = document.createElement("p");
        description.innerHTML = product.description;
        let image = document.createElement("img");
        image.src = product.image;

        let div = document.createElement("div");
        div.append(image, title, price, category, description);
        document.getElementById("container").append(div);
    });
}

let originalData = []; 

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((datas) => {
        originalData = datas;
        uimaker(datas);
    });

const filter = (val) => {
    let temp = originalData.filter((ele) => ele.category === val);
    uimaker(temp);
};

document.getElementById("men").addEventListener("click", () => filter("men's clothing"));
document.getElementById("jewelery").addEventListener("click", () => filter("jewelery"));
document.getElementById("electronics").addEventListener("click", () => filter("electronics"));
document.getElementById("women").addEventListener("click", () => filter("women's clothing"));
