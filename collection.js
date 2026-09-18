
const collectionProducts = [
    {
        id: 101,
        name: "Sac de luxe",
        price: 35000,
        category: "Nouveautés",
        collection: "nouveautes",
        description: "Un sac de luxe élégant et raffiné, conçu pour apporter une touche chic à toutes vos tenues. Son design moderne et ses finitions soignées en font un accessoire idéal pour les sorties, les événements ou le quotidien.",
        image: "images/sac5.jpg"
    },

    {
        id: 102,
        name: "Ensemble chic",
        price: 25000,
        category: "Nouveautés",
        collection: "nouveautes",
        description: "Un ensemble chic et tendance pensé pour celles qui recherchent élégance et confort. Sa coupe moderne permet de créer facilement un look sophistiqué, aussi bien pour une sortie que pour une occasion spéciale.",
        image: "images/nouv1.jpg"
    },

    {
        id: 103,
        name: "Combinaison moderne",
        price: 45000,
        category: "Nouveautés",
        collection: "nouveautes",
        description: "Une combinaison moderne au style élégant et contemporain. Sa coupe soigneusement travaillée met en valeur la silhouette tout en offrant une grande liberté de mouvement. Parfaite pour un look à la fois tendance et sophistiqué.",
        image: "images/nouv5.jpg"
    },

    {
        id: 104,
        name: "Ensemble tendance",
        price: 30000,
        category: "Nouveautés",
        collection: "nouveautes",
        description: "Un ensemble tendance et polyvalent qui s'adapte facilement à différentes occasions. Avec son style moderne et son allure élégante, il permet de composer un look soigné et actuel tout en restant confortable.",
        image: "images/nouv6.jpg"
    },

    {
        id: 105,
        name: "Costume chic",
        price: 50000,
        category: "Nouveautés",
        collection: "nouveautes",
        description: "Un costume chic et élégant avec une coupe moderne, idéal pour les cérémonies, les événements professionnels ou les occasions spéciales. Une pièce raffinée qui apporte une allure sophistiquée et assurée.",
        image: "images/nouv10.jpg"
    },

    {
        id: 106,
        name: "Combinaison tendance",
        price: 35000,
        category: "Nouveautés",
        collection: "nouveautes",
        description: "Une combinaison tendance au style contemporain, parfaite pour créer une tenue élégante sans effort. Sa coupe moderne offre un look féminin, confortable et adapté aussi bien aux sorties qu'aux événements.",
        image: "images/nouv3.jpg"
    },

    {
        id: 107,
        name: "Ensemble short tendance",
        price: 25000,
        category: "Nouveautés",
        collection: "nouveautes",
        description: "Un ensemble composé d'un haut élégant et d'un short assorti, idéal pour un look décontracté et tendance. Léger et facile à porter, il convient parfaitement aux sorties, aux balades ou aux journées ensoleillées.",
        image: "images/nouv9.jpg"
    },

    {
        id: 108,
        name: "Robe tendance",
        price: 40000,
        category: "Nouveautés",
        collection: "nouveautes",
        description: "Une robe tendance au design élégant et féminin, conçue pour mettre en valeur la silhouette. Facile à porter et à accessoiriser, elle convient aussi bien aux sorties qu'aux occasions spéciales.",
        image: "images/nouv4.jpg"
    },
    
    {
        id: 109,
        name: "Pantalon tendance",
        price: 30000,
        category: "Produits populaires",
        collection: "populaires",
        description: "Un pantalon tendance au style moderne et élégant, facile à associer avec différents hauts. Une pièce polyvalente idéale pour créer une tenue chic et actuelle.",
        image: "images/best1.jpg"
    },
    {
        id: 110,
        name: "Veste chic",
        price: 30000,
        category: "Produits populaires",
        collection: "populaires",
        description: "Une veste chic et élégante avec une coupe moderne, parfaite pour compléter une tenue sophistiquée. Elle s'adapte facilement aux sorties, aux événements et aux occasions spéciales.",
        image: "images/veste.jpg"
    },
    {
        id: 111,
        name: "Haut tendance",
        price: 30000,
        category: "Produits populaires",
        collection: "populaires",
        description: "Un haut tendance au design moderne et élégant, facile à porter au quotidien. Il permet de composer rapidement une tenue féminine et actuelle.",
        image: "images/haut1.jpg"
    },
    {
        id: 112,
        name: "Jean noir",
        price: 30000,
        category: "Produits populaires",
        collection: "populaires",
        description: "Un jean chic et polyvalent conçu pour offrir un style moderne et confortable. Il peut être associé aussi bien à un haut décontracté qu'à une tenue plus élégante.",
        image: "images/best5.jpg"
    },
    {
        id: 113,
        name: "Robe moderne",
        price: 30000,
        category: "Produits populaires",
        collection: "populaires",
        description: "Une robe au style moderne et décontracté, pensé pour s'adapter facilement à différents looks. Une pièce confortable et facile à porter au quotidien.",
        image: "images/robe10.jpg"
    },
    
    {
        id: 114,
        name: "Moccassin",
        price: 30000,
        category: "Produits populaires",
        collection: "populaires",
        description: "Un cargo tendance au style moderne et décontracté, offrant une allure pratique et actuelle. Une pièce idéale pour composer un look urbain et confortable.",
        image: "images/shoes5.jpg"
    },

    {
        id: 115,
        name: "Jean fleurette",
        price: 30000,
        category: "Produits populaires",
        collection: "populaires",
        description: "Un jean original avec un motif fleuri qui apporte une touche de fraîcheur et de personnalité à votre style. Idéal pour créer une tenue tendance et unique.",
        image: "images/best7.jpg"
    },

    {
        id: 116,
        name: "Sac a main",
        price: 35000,
        category: "Produits populaires",
        collection: "populaires",
        description: "Un sac a main élégant et raffiné, conçu pour apporter une touche chic à toutes vos tenues. Son design moderne et ses finitions soignées en font un accessoire idéal pour les sorties, les événements ou le quotidien.",
        image: "images/sac2.jpg"
    },
    
];

// INFORMATIONS DES COLLECTIONS
const collections = {

    nouveautes: {
        title: "Nouveautés",
        description: "Découvrez nos derniers produits ajoutés à SunuShop."
    },

    populaires: {
        title: "Produits populaires",
        description: "Découvrez les produits les plus appréciés par nos clients."
    },

    enfants: {
        title: "Collection enfants",
        description: "Complétez votre style avec notre sélection d'accessoires."
    },

    promotions: {
        title: "Promotions",
        description: "Profitez de nos meilleures offres à prix réduits."
    }
};

const collectionTitle = document.getElementById("collection-title");

const collectionDescription = document.getElementById("collection-description");

const collectionProductsContainer = document.getElementById("collection-products-container");

const collectionProductsSection = document.getElementById("collection-products-section");

// FILTRES DES COLLECTIONS
const collectionSearch = document.getElementById("collection-search");

const collectionMinPrice = document.getElementById("collection-min-price");

const collectionMaxPrice = document.getElementById("collection-max-price");

const collectionSort = document.getElementById("collection-sort");

const resetCollectionFilters = document.getElementById("reset-collection-filters");

// COLLECTION SÉLECTIONNÉE
const collectionUrlParams = new URLSearchParams(window.location.search);

const collectionId = Number(collectionUrlParams.get("id"));

let selectedCollection = collectionUrlParams.get("collection") || "nouveautes";


// GESTION DES FAVORIS
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

// Ajouter ou retirer un produit des favoris
function toggleFavorite(productId, favoriteButton) {
    let favorites = getFavorites();

    productId = Number(productId);

    if (favorites.includes(productId)) {

        // Retirer des favoris
        favorites = favorites.filter(id => id !== productId);

        favoriteButton.innerHTML =
            '<i class="fa-regular fa-heart"></i>';

        favoriteButton.classList.remove("favorite-active");

        console.log("Produit retiré des favoris");
    } else {

        // Ajouter aux favoris
        favorites.push(productId);

        favoriteButton.innerHTML =
            '<i class="fa-solid fa-heart"></i>';

        favoriteButton.classList.add("favorite-active");

        console.log("Produit ajouté aux favoris");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

// AFFICHER LES PRODUITS
function displayCollectionProducts(

    filteredProducts = null

) {
    if (!collectionProductsContainer) {
        return;
    }

    collectionProductsContainer.innerHTML = "";

    const collection = collections[selectedCollection];

    if (collection) {
        if (collectionTitle) {
            collectionTitle.textContent =
                collection.title;
        }

        if (collectionDescription) {
            collectionDescription.textContent =
                collection.description;
        }
    }

    let productsToDisplay;

    if (filteredProducts !== null) {

        productsToDisplay = filteredProducts;

    } else {
        
        productsToDisplay =
            collectionProducts.filter(
                (product) =>
                    product.collection
                        .toLowerCase() ===
                    selectedCollection
                        .toLowerCase()
            );
    }

    if (productsToDisplay.length === 0) {

        collectionProductsContainer.innerHTML = `

            <div class="collection-no-result">

                <i class="fa-solid fa-box-open"></i>

                <h3>
                    Aucun produit trouvé
                </h3>

                <p>
                    Essayez de modifier votre recherche
                    ou vos filtres.
                </p>

            </div>
        `;
        return;
    }

    productsToDisplay.forEach(
        function (product) {

            const productCard = document.createElement("div");

            productCard.classList.add(
                "collection-product-card"
            );

            productCard.innerHTML = `

                <div class="collection-product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-card-image"
                    >

                    <button
                        class="collection-favorite-btn"
                        data-id="${product.id}"
                        aria-label="Ajouter aux favoris"
                        type="button"
                    >
                        <i class="fa-regular fa-heart"></i>
                    </button>

                </div>

                <div class="collection-product-content">

                    <span class="collection-product-category">
                        ${product.category}
                    </span>

                    <h3>${product.name}</h3>

                    <p>${product.description}</p>

                    <strong>
                        ${product.price.toLocaleString("fr-FR")} FCFA
                    </strong>


                    <div class="collection-product-buttons">

                        <a
                            href="details_produits.html?id=${product.id}"
                            class="collection-product-button"
                        >
                            <i class="fa-solid fa-eye"></i>
                            Aperçu du produit
                        </a>

                    </div>

                </div>
            `;
            collectionProductsContainer.appendChild(productCard);

            // FAVORIS ❤️
            const favoriteButton = productCard.querySelector(
                ".collection-favorite-btn"
            );

            const favorites = getFavorites();

            if (favorites.includes(Number(product.id))) {
                favoriteButton.innerHTML =
                    '<i class="fa-solid fa-heart"></i>';

                favoriteButton.classList.add("favorite-active");
            }

            favoriteButton.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                toggleFavorite(product.id, favoriteButton);
            });
        }
    );
}

// FILTRER LES PRODUITS
function filterCollectionProducts() {

    if (!selectedCollection) {
        return;
    }

    // Recherche
    const searchValue =
        collectionSearch
            ? collectionSearch.value
                .toLowerCase()
                .trim()
            : "";

    // Prix minimum
    const minPrice =
        collectionMinPrice &&
        collectionMinPrice.value !== ""
            ? Number(
                collectionMinPrice.value
            )
            : 0;

    // Prix maximum
    const maxPrice =
        collectionMaxPrice &&
        collectionMaxPrice.value !== ""
            ? Number(
                collectionMaxPrice.value
            )
            : Infinity;

    // Tri
    const sortValue =
        collectionSort
            ? collectionSort.value
            : "default";

    // FILTRAGE
    let filteredProducts =
        collectionProducts.filter(
            function (product) {

                const sameCollection =
                    product.collection
                        .toLowerCase() ===
                    selectedCollection
                        .toLowerCase();

                const matchesSearch =
                    product.name
                        .toLowerCase()
                        .includes(
                            searchValue
                        );

                const matchesMinPrice =
                    product.price >=
                    minPrice;

                const matchesMaxPrice =
                    product.price <=
                    maxPrice;

                return (
                    sameCollection &&
                    matchesSearch &&
                    matchesMinPrice &&
                    matchesMaxPrice
                );
            }
        );

    // TRI
    if (sortValue === "price-asc") {

        filteredProducts.sort(
            (a, b) =>
                a.price - b.price
        );

    }
    else if (
        sortValue === "price-desc"
    ) {
        filteredProducts.sort(
            (a, b) =>
                b.price - a.price
        );
    }

    else if (
        sortValue === "name-asc"
    ) {
        filteredProducts.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );
    }
    
    else if (
        sortValue === "name-desc"
    ) {
        filteredProducts.sort(
            (a, b) =>
                b.name.localeCompare(
                    a.name
                )
        );
    }

    // Afficher
    displayCollectionProducts(
        filteredProducts
    );
}

// ÉVÉNEMENTS DES FILTRES
if (collectionSearch) {

    collectionSearch.addEventListener(
        "input",
        filterCollectionProducts
    );
}

if (collectionMinPrice) {

    collectionMinPrice.addEventListener(
        "input",
        filterCollectionProducts
    );
}

if (collectionMaxPrice) {

    collectionMaxPrice.addEventListener(
        "input",
        filterCollectionProducts
    );
}

if (collectionSort) {

    collectionSort.addEventListener(
        "change",
        filterCollectionProducts
    );
}

// RÉINITIALISER
if (resetCollectionFilters) {

    resetCollectionFilters.addEventListener(
        "click",
        function () {

            if (collectionSearch) {
                collectionSearch.value = "";
            }

            if (collectionMinPrice) {
                collectionMinPrice.value = "";
            }

            if (collectionMaxPrice) {
                collectionMaxPrice.value = "";
            }

            if (collectionSort) {
                collectionSort.value =
                    "default";
            }
            filterCollectionProducts();

        }
    );
}

// CHANGER DE COLLECTION
const collectionCards =
    document.querySelectorAll(
        ".collection-card"
    );

collectionCards.forEach(
    (card) => {

        card.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const collectionName = card.dataset.collection;

                if (!collectionName) {
                    return;
                }

                selectedCollection = collectionName;

                // Réinitialiser les filtres
                if (collectionSearch) {
                    collectionSearch.value =
                        "";
                }

                if (collectionMinPrice) {
                    collectionMinPrice.value =
                        "";
                }

                if (collectionMaxPrice) {
                    collectionMaxPrice.value =
                        "";
                }

                if (collectionSort) {
                    collectionSort.value =
                        "default";
                }

                // Afficher la nouvelle collection
                displayCollectionProducts();

                // Descendre vers les produits
                if (collectionProductsSection) {

                    collectionProductsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }
);
displayCollectionProducts();
