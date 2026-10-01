/* =========================================
   COVERX
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   WHATSAPP NUMBER
========================================= */

const WHATSAPP_NUMBER = "918087143887";


/* =========================================
   PRODUCTS

   यहां से तुम अपने products add कर सकते हो.
========================================= */

const products = [

  /* ================= COVERS ================= */

  {
    id: 1,
    name: "iPhone 15 Premium Cover",
    category: "Cover",
    brand: "Apple",
    model: "iPhone 15",
    price: 299,
    image: "images/covers/iphone15.jpg"
  },

  {
    id: 2,
    name: "iPhone 14 Transparent Cover",
    category: "Cover",
    brand: "Apple",
    model: "iPhone 14",
    price: 199,
    image: "images/covers/iphone14.jpg"
  },

  {
    id: 3,
    name: "Vivo V40 Premium Cover",
    category: "Cover",
    brand: "Vivo",
    model: "Vivo V40",
    price: 299,
    image: "images/covers/vivo-v40.jpg"
  },

  {
    id: 4,
    name: "Oppo A5 5G Cover",
    category: "Cover",
    brand: "Oppo",
    model: "Oppo A5 5G",
    price: 249,
    image: "images/covers/oppo-a5-5g.jpg"
  },

  {
    id: 5,
    name: "Realme 13 5G Cover",
    category: "Cover",
    brand: "Realme",
    model: "Realme 13 5G",
    price: 249,
    image: "images/covers/realme13.jpg"
  },


  /* ================= GLASS ================= */

  {
    id: 101,
    name: "iPhone 15 9D Tempered Glass",
    category: "Glass",
    brand: "Apple",
    model: "iPhone 15",
    price: 149,
    image: "images/glass/iphone15.jpg"
  },

  {
    id: 102,
    name: "Vivo V40 Full Glue Glass",
    category: "Glass",
    brand: "Vivo",
    model: "Vivo V40",
    price: 149,
    image: "images/glass/vivo-v40.jpg"
  },

  {
    id: 103,
    name: "Oppo A5 5G Tempered Glass",
    category: "Glass",
    brand: "Oppo",
    model: "Oppo A5 5G",
    price: 129,
    image: "images/glass/oppo-a5.jpg"
  },


  /* ================= CAMERA LENS ================= */

  {
    id: 201,
    name: "iPhone 15 Camera Lens Protector",
    category: "Lens",
    brand: "Apple",
    model: "iPhone 15",
    price: 129,
    image: "images/lens/iphone15.jpg"
  },

  {
    id: 202,
    name: "Vivo V40 Camera Lens",
    category: "Lens",
    brand: "Vivo",
    model: "Vivo V40",
    price: 129,
    image: "images/lens/vivo-v40.jpg"
  },


  /* ================= CHARGERS ================= */

  {
    id: 301,
    name: "Vivo Fast Charger",
    category: "Charger",
    brand: "Vivo",
    model: "Vivo Fast Charger",
    price: 499,
    image: "images/chargers/vivo.jpg"
  },

  {
    id: 302,
    name: "Oppo Fast Charger",
    category: "Charger",
    brand: "Oppo",
    model: "Oppo Fast Charger",
    price: 499,
    image: "images/chargers/oppo.jpg"
  },

  {
    id: 303,
    name: "Realme Fast Charger",
    category: "Charger",
    brand: "Realme",
    model: "Realme Fast Charger",
    price: 499,
    image: "images/chargers/realme.jpg"
  },

  {
    id: 304,
    name: "Redmi Fast Charger",
    category: "Charger",
    brand: "Redmi",
    model: "Redmi Fast Charger",
    price: 449,
    image: "images/chargers/redmi.jpg"
  },


  /* ================= CABLES ================= */

  {
    id: 401,
    name: "Type-C Fast Charging Cable",
    category: "Cable",
    brand: "Vivo",
    model: "Type-C",
    price: 199,
    image: "images/cables/type-c.jpg"
  },

  {
    id: 402,
    name: "Oppo Type-C Cable",
    category: "Cable",
    brand: "Oppo",
    model: "Type-C",
    price: 199,
    image: "images/cables/oppo.jpg"
  },

  {
    id: 403,
    name: "Realme Type-C Cable",
    category: "Cable",
    brand: "Realme",
    model: "Type-C",
    price: 199,
    image: "images/cables/realme.jpg"
  }

];


/* =========================================
   CART
========================================= */

let cart = JSON.parse(
  localStorage.getItem("coverxCart")
) || [];


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

  localStorage.setItem(
    "coverxCart",
    JSON.stringify(cart)
  );

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(name, price, category = "") {

  const existing = cart.find(
    item =>
      item.name === name &&
      item.price === price
  );


  if (existing) {

    existing.quantity++;

  } else {

    cart.push({

      name: name,

      price: price,

      category: category,

      quantity: 1

    });

  }


  saveCart();

  updateCart();


  alert(
    name + " added to cart!"
  );

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

  const countElement =
    document.getElementById("cartCount");


  const itemsElement =
    document.getElementById("cartItems");


  const totalElement =
    document.getElementById("cartTotal");


  let totalQuantity = 0;

  let totalPrice = 0;


  cart.forEach(item => {

    totalQuantity += item.quantity;

    totalPrice +=
      item.price * item.quantity;

  });


  if (countElement) {

    countElement.textContent =
      totalQuantity;

  }


  if (!itemsElement) {
    return;
  }


  if (cart.length === 0) {

    itemsElement.innerHTML = `

      <div
        style="
          text-align:center;
          padding:40px 10px;
          color:#777;
        "
      >

        <div style="font-size:50px">
          🛒
        </div>

        <p>
          Your cart is empty
        </p>

      </div>

    `;

  } else {

    itemsElement.innerHTML = "";


    cart.forEach((item, index) => {

      itemsElement.innerHTML += `

        <div class="cart-item">

          <div class="cart-item-info">

            <h4>
              ${item.name}
            </h4>

            <p>
              ₹${item.price}
              ×
              ${item.quantity}
            </p>

          </div>


          <div class="quantity-controls">

            <button
              onclick="changeQuantity(
                ${index},
                -1
              )"
            >
              −
            </button>


            <span>
              ${item.quantity}
            </span>


            <button
              onclick="changeQuantity(
                ${index},
                1
              )"
            >
              +
            </button>


            <button
              class="remove-btn"
              onclick="removeFromCart(
                ${index}
              )"
            >
              ✕
            </button>

          </div>

        </div>

      `;

    });

  }


  if (totalElement) {

    totalElement.textContent =
      "₹" + totalPrice;

  }

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(index, change) {

  if (!cart[index]) {
    return;
  }


  cart[index].quantity += change;


  if (cart[index].quantity <= 0) {

    cart.splice(index, 1);

  }


  saveCart();

  updateCart();

}


/* =========================================
   REMOVE
========================================= */

function removeFromCart(index) {

  cart.splice(index, 1);

  saveCart();

  updateCart();

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

  const overlay =
    document.getElementById(
      "cartOverlay"
    );


  if (overlay) {

    overlay.classList.add(
      "active"
    );

  }


  updateCart();

}


/* =========================================
   CLOSE CART
========================================= */

function closeCart(event) {

  const overlay =
    document.getElementById(
      "cartOverlay"
    );


  if (!overlay) {
    return;
  }


  if (
    event &&
    event.target !== overlay
  ) {

    return;

  }


  overlay.classList.remove(
    "active"
  );

}


/* =========================================
   WHATSAPP CHECKOUT
========================================= */

function checkoutWhatsApp() {

  if (cart.length === 0) {

    alert(
      "Your cart is empty!"
    );

    return;

  }


  let message =
    "🛍️ *COVERX NEW ORDER*%0A%0A";


  let total = 0;


  cart.forEach((item, index) => {

    const subtotal =
      item.price *
      item.quantity;


    total += subtotal;


    message +=
      `${index + 1}. ${item.name}%0A`;

    message +=
      `Price: ₹${item.price}%0A`;

    message +=
      `Quantity: ${item.quantity}%0A`;

    message +=
      `Subtotal: ₹${subtotal}%0A%0A`;

  });


  message +=
    `*TOTAL: ₹${total}*%0A%0A`;

  message +=
    "Please confirm my order.";


  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


  window.open(
    url,
    "_blank"
  );

}


/* =========================================
   QUICK ORDER
========================================= */

function quickOrder() {

  const product =
    document
      .getElementById(
        "quickProduct"
      )?.value.trim();


  const name =
    document
      .getElementById(
        "customerName"
      )?.value.trim();


  const phone =
    document
      .getElementById(
        "customerPhone"
      )?.value.trim();


  if (
    !product ||
    !name ||
    !phone
  ) {

    alert(
      "Please fill all details."
    );

    return;

  }


  let message =
    "🛍️ *COVERX QUICK ORDER*%0A%0A";


  message +=
    `Product: ${product}%0A`;

  message +=
    `Customer: ${name}%0A`;

  message +=
    `Phone: ${phone}%0A%0A`;

  message +=
    "Please confirm my order.";


  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


  window.open(
    url,
    "_blank"
  );

}


/* =========================================
   CATEGORY PAGE
========================================= */

function getCurrentCategory() {

  const params =
    new URLSearchParams(
      window.location.search
    );


  return (
    params.get("category")
    || "Cover"
  );

}


/* =========================================
   CATEGORY NAME
========================================= */

function getCategoryTitle(category) {

  const titles = {

    Cover:
      "Mobile Covers",

    Glass:
      "Tempered Glass",

    Lens:
      "Camera Lens Protectors",

    Charger:
      "Mobile Chargers",

    Cable:
      "Charging Cables"

  };


  return (
    titles[category]
    || "Products"
  );

}


/* =========================================
   LOAD CATEGORY PAGE
========================================= */

function loadCategoryPage() {

  const grid =
    document.getElementById(
      "categoryProductGrid"
    );


  if (!grid) {
    return;
  }


  const category =
    getCurrentCategory();


  const title =
    document.getElementById(
      "categoryTitle"
    );


  const smallTitle =
    document.getElementById(
      "categorySmallTitle"
    );


  const description =
    document.getElementById(
      "categoryDescription"
    );


  if (title) {

    title.textContent =
      getCategoryTitle(
        category
      );

  }


  if (smallTitle) {

    smallTitle.textContent =
      "COVERX • " +
      category.toUpperCase();

  }


  if (description) {

    description.textContent =
      "Search and choose your " +
      getCategoryTitle(category);

  }


  loadBrandFilter(
    category
  );


  renderCategoryProducts();

}


/* =========================================
   BRAND FILTER
========================================= */

function loadBrandFilter(category) {

  const select =
    document.getElementById(
      "brandFilter"
    );


  if (!select) {
    return;
  }


  const brands = [
    ...new Set(

      products

        .filter(
          product =>
            product.category === category
        )

        .map(
          product =>
            product.brand
        )

    )
  ];


  select.innerHTML =
    `<option value="All">
      All Brands
    </option>`;


  brands.forEach(brand => {

    select.innerHTML += `

      <option value="${brand}">
        ${brand}
      </option>

    `;

  });

}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderCategoryProducts() {

  const grid =
    document.getElementById(
      "categoryProductGrid"
    );


  if (!grid) {
    return;
  }


  const category =
    getCurrentCategory();


  const search =
    (
      document
        .getElementById(
          "productSearch"
        )?.value
        || ""
    )
      .toLowerCase()
      .trim();


  const selectedBrand =
    document
      .getElementById(
        "brandFilter"
      )?.value
      || "All";


  const filtered =
    products.filter(product => {


      const correctCategory =
        product.category === category;


      const matchesSearch =

        product.name
          .toLowerCase()
          .includes(search)

        ||

        product.model
          .toLowerCase()
          .includes(search)

        ||

        product.brand
          .toLowerCase()
          .includes(search);


      const matchesBrand =
        selectedBrand === "All"
        ||
        product.brand === selectedBrand;


      return (
        correctCategory &&
        matchesSearch &&
        matchesBrand
      );

    });


  grid.innerHTML = "";


  if (filtered.length === 0) {

    grid.innerHTML = `

      <div
        style="
          grid-column:1/-1;
          text-align:center;
          padding:60px 20px;
          color:#777;
        "
      >

        <div style="font-size:50px">
          🔍
        </div>

        <h3>
          Product not found
        </h3>

        <p>
          Try another model or brand.
        </p>

      </div>

    `;

    return;
  }


  filtered.forEach(product => {

    grid.innerHTML += `

      <div class="product-card">

        <div
          class="product-image"
          style="
            padding:20px;
          "
        >

          <img
            src="${product.image}"
            alt="${product.name}"
            style="
              width:100%;
              height:100%;
              object-fit:contain;
              border-radius:15px;
            "
            onerror="
              this.style.display='none';
              this.parentElement.innerHTML +=
              '<span style=&quot;font-size:80px&quot;>📱</span>';
            "
          >

        </div>


        <div class="product-info">

          <p class="product-category">
            ${product.brand}
          </p>


          <h3>
            ${product.name}
          </h3>


          <p
            style="
              color:#777;
              font-size:13px;
              margin-bottom:10px;
            "
          >
            Model:
            ${product.model}
          </p>


          <div class="rating">
            ★★★★★
          </div>


          <div class="product-bottom">

            <strong>
              ₹${product.price}
            </strong>


            <button
              onclick="
                addToCart(
                  '${product.name.replace(
                    /'/g,
                    "\\'"
                  )}',
                  ${product.price},
                  '${product.category}'
                )
              "
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    `;

  });

}


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    updateCart();

    loadCategoryPage();

  }
);