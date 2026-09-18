

const productsContainer = document.getElementById("products-container");

const searchInput = document.getElementById("search-input");

const categoryFilter = document.getElementById("category-filter");

const sortFilter = document.getElementById("sort-filter");

const pagination = document.getElementById("pagination");

const productsPerPage = 8;

let currentPage = 1;

// AFFICHER LES PRODUITS
function displayProducts(productsToDisplay) {
    
  if (!productsContainer) {
    return;
  }

  productsContainer.innerHTML = "";

  if (productsToDisplay.length === 0) {
    productsContainer.innerHTML = `
      <p class="no-products">
        Aucun produit trouvé.
      </p>
    `;
    return;
  }

  // Calcul du début et de la fin
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  // Produits de la page actuelle
  const productsToShow = productsToDisplay.slice(start, end);

  productsToShow.forEach((product) => {
    const productCard = document.createElement("article");

    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <div class="product-card-image-container">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-card-image"
            >
            <button
                class="favorite-btn"
                data-id="${product.id}"
                aria-label="Ajouter aux favoris"
            >
                <i class="fa-regular fa-heart"></i>
            </button>

        </div>
    
        <div class="product-card-content">

            <span class="product-category">
            ${product.category}
            </span>

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <strong>
            ${product.price.toLocaleString("fr-FR")} FCFA
            </strong>

            <div class="product-buttons">
                <a 
                    href="details_produits.html?id=${product.id}"
                    class="view-product-btn"
                >
                    <i class="fa-solid fa-eye"></i>
                    Aperçu du produit
                </a>

            </div>
        </div>
    `;
    productsContainer.appendChild(productCard);
  });

    // Gestion des boutons "Ajouter au panier"
    const buttons = document.querySelectorAll(".add-to-cart-btn");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
        const productId = Number(button.dataset.id);

        addProductToCart(productId);
        });
    });

    // Gestion des boutons "Favoris"
    const favoriteButtons = document.querySelectorAll(
        ".favorite-btn"
    );

    const favorites = getFavorites();
    favoriteButtons.forEach((button) => {
        const productId = Number(button.dataset.id);

        if (favorites.includes(productId)) {
            button.innerHTML = '<i class="fa-solid fa-heart"></i>';
            button.classList.add("favorite-active");
        }

        button.addEventListener("click", () => {
            toggleFavorite(productId, button);
        });

    });
}

function addProductToCart(productId) {

  let product = products.find(
    (product) => product.id === productId
  );

  if (!product && typeof collectionProducts !== "undefined") {

    product = collectionProducts.find(
      (product) => product.id === productId
    );

  }

  if (!product) {     // Si aucun produit n'est trouvé
    return;
  }

  const existingProduct = cart.find(   // Vérifier si le produit existe déjà dans le panier
    (item) => item.id === product.id
  );

  if (existingProduct) {
    existingProduct.quantity += 1;

  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();

  if (typeof updateCartCount === "function") {  // Mettre à jour le nombre de produits
    updateCartCount();
  }
  alert("Produit ajouté au panier !");
}

// RECHERCHE + FILTRE + TRI
function filterProducts() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedSort = sortFilter ? sortFilter.value : "default";

    // Recherche + catégorie
    let filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    // TRI
    if (selectedSort === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);

    } else if (selectedSort === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);

    } else if (selectedSort === "name-asc") {
        filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    } else if (selectedSort === "name-desc") {
        filteredProducts.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    // Retour à la première page
    currentPage = 1;
    displayProducts(filteredProducts);
    displayPagination(filteredProducts);
}
if (searchInput && categoryFilter) {
    searchInput.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);
}
if (sortFilter) {
    sortFilter.addEventListener("change", filterProducts);
}

// PAGINATION
function displayPagination(productsToDisplay) {
    if (!pagination) {
        return;
    }
    pagination.innerHTML = "";

    const totalPages = Math.ceil(
        productsToDisplay.length / productsPerPage
    );

    if (totalPages <= 1) {
        return;
    }

    for (let page = 1; page <= totalPages; page++) {

        const button = document.createElement("button");
        button.textContent = page;
        button.classList.add("page-btn");

        if (page === currentPage) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {

            currentPage = page;
            displayProducts(productsToDisplay);
            displayPagination(productsToDisplay);

            // Retour vers les produits
            document
                .getElementById("produits")
                ?.scrollIntoView({
                    behavior: "smooth"
                });
        });
        pagination.appendChild(button);
    }
}

function updateProducts(productsToDisplay) {
    currentPage = 1;
    displayProducts(productsToDisplay);
    displayPagination(productsToDisplay);
}
if (productsContainer) {
    displayProducts(products);
    displayPagination(products);
}

// FAVORIS
const favoritesContainer = document.getElementById("favorites-container");

const emptyFavorites = document.getElementById("empty-favorites");

// RÉCUPÉRER LES FAVORIS
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function displayFavorites() {

    if (!favoritesContainer) {
        return;
    }

    favoritesContainer.innerHTML = "";

    if (favorites.length === 0) {
        emptyFavorites.style.display = "block";
        return;
    }

    emptyFavorites.style.display = "none";

    favorites.forEach((productId) => {
        const allProducts = [
            ...products,
            ...(typeof collectionProducts !== "undefined"
                ? collectionProducts
                : [])
        ];
        const product = allProducts.find(
            (product) => product.id === productId
        );
        if (!product) {
            return;
        }
        const productCard = document.createElement("article");

        productCard.classList.add("favorite-card");

        productCard.innerHTML = `
            <div class="product-card-image-container">

                <img
                src="${product.image}"
                alt="${product.name}"
                class="product-card-image"
                >

                <button 
                    class="favorite-btn"
                    data-id="${product.id}"
                    aria-label="Ajouter aux favoris"
                    type="button"
                >
                    <i class="fa-regular fa-heart"></i>
                </button>

            </div>

            <div class="product-card-content">

                <span class="product-category">
                ${product.category}
                </span>

                <h3>${product.name}</h3>

                <p>
                ${product.description}
                </p>

                <strong>
                ${product.price.toLocaleString("fr-FR")} FCFA
                </strong>

                <div class="product-buttons">
                    <a 
                        href="details_produits.html?id=${product.id}"
                        class="view-product-btn"
                    >
                        <i class="fa-solid fa-eye"></i>
                        Aperçu du produit
                    </a>

                </div>
            </div>
            `;
        favoritesContainer.appendChild(productCard); 
    }); 

    const removeButtons = document.querySelectorAll(  // AFFICHER LES FAVORIS
        ".remove-favorite-btn"
    );

    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = Number(button.dataset.id);

            favorites = favorites.filter(
                (id) => id !== productId
            );
            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );
            displayFavorites();
        });
    });
}
displayFavorites();

// GESTION DES FAVORIS
function getFavorites() {
    const favorites = JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

    return favorites.map(id => Number(id));
}

function saveFavorites(favorites) {

    const normalizedFavorites = favorites.map(id => Number(id));

    localStorage.setItem(
        "favorites",
        JSON.stringify(normalizedFavorites)
    );
}

function toggleFavorite(productId, button) {

    productId = Number(productId);

    let favorites = getFavorites();

    if (favorites.includes(productId)) {

        // RETIRER DES FAVORIS
        favorites = favorites.filter(
            id => Number(id) !== productId
        );

        button.innerHTML = '<i class="fa-regular fa-heart"></i>';

        button.classList.remove("favorite-active");

    } else {

        // AJOUTER AUX FAVORIS
        favorites.push(productId);

        button.innerHTML = '<i class="fa-solid fa-heart"></i>';

        button.classList.add("favorite-active");
    }
    saveFavorites(favorites);

    console.log("Favoris enregistrés :",getFavorites());
}

// CARROUSEL DES PRODUITS EN PROMOTION
const promotions = [
    {
        name: "Pull-over tendance",
        image: "images/pull-vert.jpg",
        oldPrice: 30000,
        discount: 15
    },

    {
        name: "Jordan tendance",
        image: "images/shoes6.jpg",
        oldPrice: 40000,
        discount: 20
    },

    {
        name: "Sac à main élégant",
        image: "images/sac3.jpg",
        oldPrice: 25000,
        discount: 15
    },

    {
        name: "Boyfriend noir",
        image: "images/jean-noir.jpg",
        oldPrice: 30000,
        discount: 20
    }
];

let promotionIndex = 0;

const promotionImage = document.getElementById("promotion-image");
const promotionName = document.getElementById("promotion-name");
const promotionOldPrice = document.getElementById("promotion-old-price");
const promotionNewPrice = document.getElementById("promotion-new-price");
const promotionDiscount = document.getElementById("promotion-discount");


// Fonction pour formater les prix
function formatPrice(price) {
    return price.toLocaleString("fr-FR") + " FCFA";
}

// Fonction pour afficher un produit
function afficherPromotion(index) {

    const produit = promotions[index];

    const reduction = produit.oldPrice * produit.discount / 100;
    const newPrice = produit.oldPrice - reduction;

    // Relancer l'animation
    const productContainer = document.querySelector(".promotion-product");

    productContainer.classList.remove("promotion-animation");

    // Force le navigateur à recalculer l'animation
    void productContainer.offsetWidth;

    productContainer.classList.add("promotion-animation");

    // Mise à jour
    promotionImage.src = produit.image;
    promotionImage.alt = produit.name;

    promotionName.textContent = produit.name;

    promotionOldPrice.textContent = formatPrice(produit.oldPrice);

    promotionNewPrice.textContent = formatPrice(newPrice);

    promotionDiscount.textContent = `-${produit.discount}%`;
}

// Changer automatiquement toutes les 4 secondes
setInterval(() => {

    promotionIndex++;

    if (promotionIndex >= promotions.length) {
        promotionIndex = 0;
    }

    afficherPromotion(promotionIndex);

}, 4000);

