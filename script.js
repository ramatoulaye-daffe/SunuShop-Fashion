
// MENU RESPONSIVE
const menuToggle = document.getElementById("menu-toggle");

const nav = document.querySelector(".nav");

if (menuToggle && nav) {
    
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("responsive");
    });
}

// NEWSLETTER
const newsletterForm = document.getElementById("newsletter-form");

const newsletterEmail = document.getElementById("newsletter-email");

const newsletterMessage = document.getElementById("newsletter-message");

if (newsletterForm) {
   
    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault(); //empêche le formulaire de recharger la page
        
        const email = newsletterEmail.value.trim();  //récupère l’adresse saisie par l’utilisateur

        if (email === "") {
            newsletterMessage.textContent =
                "Veuillez saisir votre adresse e-mail.";
            return;
        }

        newsletterMessage.textContent =
            "Merci ! Vous êtes maintenant inscrit à notre newsletter.";
        newsletterForm.reset(); //vide le formulaire après l’inscription

    });
}

// GESTION DU PANIER
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart = cart.map(product => ({ // Ajouter quantity aux anciens produits
    ...product,
    quantity: product.quantity || 1
}));

const cartCount = document.querySelector("#cart-count");

const addCartButtons = document.querySelectorAll(".add-cart-btn");

// Mettre à jour le nombre d'articles 
function updateCartCount() {  
    if (cartCount) {
        const totalQuantity = cart.reduce(
            (total, product) => total + product.quantity,
            0
        );
        cartCount.textContent = totalQuantity;
    }
}

function saveCart() { 
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Ajouter un produit au panier
function addToCart(button) { 
   
    const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: Number(button.dataset.price),
        image: button.dataset.image,
        quantity: 1
    };

    // Vérifier si le produit existe déjà
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }
    saveCart();
    updateCartCount();   // Actualiser le nombre de produits
    renderCart();        //  Actualiser l'affichage du panier
    alert(`${product.name} a été ajouté au panier !`); // Message de confirmation
}

addCartButtons.forEach(function (button) { // Écouter le clic sur chaque bouton
    
    button.addEventListener("click", function () {
        addToCart(button);
    });

});

// AFFICHER LES PRODUITS DU PANIER
function renderCart() {

    const cartItems = document.getElementById("cart-items");

    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) {
        return;
    }
    cartItems.innerHTML = "";
   
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <p class="empty-cart">
                Ton panier est vide
            </p>
        `;
        cartTotal.innerHTML = `
            <h3>Total : 0 FCFA</h3>
        `;
        updateCartCount();
        return;
    }

    let total = 0;  // Vider l'affichage avant de le reconstruire
   
    cart.forEach((product, index) => {  // Parcourir les produits du panier
       
        const productTotal = product.price * product.quantity;

        total += productTotal;

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");
        
        cartItem.innerHTML = `
            <img 
                src="${product.image}" 
                alt="${product.name}"
            >
            <div class="cart-item-info">
                <h3>${product.name}</h3>
                <p>
                    Prix unitaire :
                    ${product.price.toLocaleString("fr-FR")} FCFA
                </p>
                <div class="quantity-controls">
                    <button 
                        class="quantity-btn decrease-btn"
                        data-index="${index}"
                    >
                        −
                    </button>
                    <span>${product.quantity}</span>
                    <button 
                        class="quantity-btn increase-btn"
                        data-index="${index}"
                    >
                        +
                    </button>
                </div>
                <p>
                    Sous-total :
                    <strong>
                        ${productTotal.toLocaleString("fr-FR")} FCFA
                    </strong>
                </p>
                <button 
                    class="remove-cart"
                    data-index="${index}"
                >
                    Supprimer
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    // Afficher le total
    cartTotal.innerHTML = `
        <h2>
            Total : ${total.toLocaleString("fr-FR")} FCFA
        </h2>
    `;

    // Boutons +
    document.querySelectorAll(".increase-btn").forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            cart[index].quantity++;
            saveCart();
            renderCart();
            updateCartCount();
        });
    });
    
     // Boutons −
    document.querySelectorAll(".decrease-btn").forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                cart.splice(index, 1);
            }
            saveCart();
            renderCart();
            updateCartCount();
        });
    });

    // Boutons Supprimer
    const removeButtons = document.querySelectorAll(".remove-cart");

    removeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const index = Number(button.dataset.index);
            cart.splice(index, 1); // Supprimer le produit du tableau
            saveCart();   // Sauvegarder les changements
            updateCartCount();  // Actualiser le nombre
            renderCart();   // Actualiser l'affichage
        });
    });
}

// VIDER LE PANIER
const clearCartButton = document.querySelector("#clear-cart");

if (clearCartButton) {

    clearCartButton.addEventListener("click", () => {

        if (cart.length === 0) {
            alert("Votre panier est déjà vide.");
            return;
        }

        const confirmation = confirm(
            "Voulez-vous vraiment vider le panier ?"
        );

        if (confirmation) {
            cart = [];
            saveCart();
            renderCart();
            updateCartCount();
        }
    });
}

// PASSER LA COMMANDE
const checkoutButton = document.querySelector("#checkout-btn");

if (checkoutButton) {

    checkoutButton.addEventListener("click", () => {
        
        if (cart.length === 0) {
            alert("Votre panier est vide.");
            return;
        }

        window.location.href = "commande.html";
    });
}

// Initialisation
updateCartCount();
renderCart();

// GESTION DU FORMULAIRE DE COMMANDE
const orderForm = document.getElementById("order-form");
const orderMessage = document.getElementById("order-message");

if (orderForm) {
    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (cart.length === 0) {
            alert("Votre panier est vide.");
            return;
        }

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const payment = document.getElementById("payment").value;

        const order = {
            name,
            phone,
            email,
            address,
            payment,
            products: cart,
            date: new Date().toLocaleString()
        };

        localStorage.setItem("lastOrder", JSON.stringify(order));

        cart = [];
        localStorage.removeItem("cart");

        updateCartCount();
        orderForm.reset();

        if (orderMessage) {
            orderMessage.textContent =
                "Votre commande a été enregistrée avec succès ! Merci pour votre confiance.";
        }
    });
}

