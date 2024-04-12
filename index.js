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

// sorting
const sortingdata = () => {
    originalData.sort((a, b) => a.price - b.price);
    uimaker(originalData);
}
const datasorting = () => {
    originalData.sort((a, b) => b.price - a.price);
    uimaker(originalData);
}
// filter
const filter = (val) => {
    let temp = originalData.filter((ele) => ele.category === val);
    uimaker(temp);
};
// search
const datasearch = (val) => {
    let temp = originalData.filter((ele) => ele.title == (val))
    uimaker(temp)
}
const searchdata = (e) => {
    e.preventDefault()
    let val = document.getElementById("val").value
    datasearch(val)
}

// sorting
document.getElementById("low").addEventListener("click", sortingdata)
document.getElementById("high").addEventListener("click", datasorting)
// filter
document.getElementById("men").addEventListener("click", () => filter("men's clothing"));
document.getElementById("jewelery").addEventListener("click", () => filter("jewelery"));
document.getElementById("electronics").addEventListener("click", () => filter("electronics"));
document.getElementById("women").addEventListener("click", () => filter("women's clothing"));
// search
document.getElementById("search").addEventListener("submit", searchdata)
