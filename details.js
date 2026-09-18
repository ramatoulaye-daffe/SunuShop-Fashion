
const productDetails = document.getElementById("product-detail-container");

const similarProductsContainer = document.getElementById(
    "similar-products-container"
);

// Récupérer l'ID dans l'URL
const urlParams = new URLSearchParams(window.location.search);

const productId = Number(urlParams.get("id"));

// Récupérer tous les produits
const allProducts = [
    ...products,
    ...(typeof collectionProducts !== "undefined"
        ? collectionProducts
        : [])
];

// Chercher le produit
const product = allProducts.find(
    (item) => Number(item.id) === productId
);


// GESTION DU PANIER
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
    let cart = getCart();

    const existingProduct = cart.find(
        item => Number(item.id) === Number(product.id)
    );

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: Number(product.id),
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart(cart);

    updateCartCount();

    alert(`${product.name} a été ajouté au panier !`);
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (!cartCount) {
        return;
    }

    const cart = getCart();

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalQuantity;
}

// AFFICHER LE PRODUIT
if (!product) {

    productDetails.innerHTML = `
        <p class="no-products">
            Produit introuvable.
        </p>
    `;

} else {

    productDetails.innerHTML = `
        <div class="product-detail-image">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

        </div>

        <div class="product-detail-content">

            <span class="product-category">
                ${product.category}
            </span>

            <h1>
                ${product.name}
            </h1>

            <p class="product-detail-price">
                ${product.price.toLocaleString("fr-FR")} FCFA
            </p>

            <p class="product-detail-description">
                ${product.description}
            </p>

            <button
                class="add-to-cart-btn"
                data-id="${product.id}"
            >
                <i class="fa-solid fa-cart-shopping"></i>
                Ajouter au panier
            </button>

        </div>
    `;

    console.log("Produit affiché avec succès !");
    
    // AJOUTER LE PRODUIT AU PANIER
    const addToCartButton = productDetails.querySelector(
        ".add-to-cart-btn"
    );

    if (addToCartButton) {
        addToCartButton.addEventListener("click", function () {
            addToCart(product);
        });
    }

}
updateCartCount();