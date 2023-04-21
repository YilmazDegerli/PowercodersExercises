const products = [
    {
      title: "Bottle 1",
      image: "img/bottle-glas.jpg",
      price: "CHF 30.00",
      isAvailable: true,
      color: [ "Green", "Red", "Blue" ],
      material: "Glass"
    },
    {
        title: "Bottle 2",
        image: "img/bottle-green.jpg",
        price: "CHF 27.00",
        isAvailable: true,
        color: [ "Green", "Red", "Blue" ],
        material: "Glass"
      },
      {
        title: "Bottle 3",
        image: "img/bottle-grey.jpg",
        price: "CHF 35.00",
        isAvailable: true,
        color: [ "Green", "Red", "Blue" ],
        material: "Glass"
      },
      {
        title: "Bottle 4",
        image: "img/bottle-white-2.jpg",
        price: "CHF 15.00",
        isAvailable: true,
        color: [ "Green", "Red", "Blue" ],
        material: "Glass"
      },
      {
        title: "Bottle 5",
        image: "img/bottle-white.jpg",
        price: "CHF 20.00",
        isAvailable: true,
        color: [ "Green", "Red", "Blue" ],
        material: "Glass"
      },
      {
        title: "Bottle 6",
        image: "img/bottle-wood.jpg",
        price: "CHF 40.00",
        isAvailable: true,
        color: [ "Green", "Red", "Blue" ],
        material: "Wooden"
      }
];
const store = document.querySelector(".shop");
products.forEach((product) => {
    if (product.isAvailable) {
        store.innerHTML += `
        <article>
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>${product.price}</p>
            <p>${product.color[0]}</p>
            <p>${product.material}</p>
            <button>Add to chart</button>
        </article>`
    }
});