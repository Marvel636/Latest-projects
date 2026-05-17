// ─── PRODUCT DATA ───
let products = [
  {
    id: 1,
    name: "Hair Growth Oil",
    size: "Small",
    image: "assets/products/hair oil.jpg",
    ngn: 5000,
    usd: 3,
    tag: "bestseller",
    category: "Oil",
    sizes: [
      { label: "50ml", ngn: 5000, usd: 4, originalNgn: 6000 },
      { label: "100ml", ngn: 10000, usd: 8 },
    ],
  },
  {
    id: 2,
    name: "Hair Growth Cream",
    size: "Medium",
    image: "assets/products/Hair cream.jpg",
    ngn: 4000,
    usd: 3,
    tag: "bestseller",
    category: "Cream",
    sizes: [
      { label: "50g", ngn: 2000, usd: 2 },
      { label: "100g", ngn: 4000, usd: 3 },
      { label: "250g", ngn: 8000, usd: 6, originalNgn: 10000 },
    ],
  },
  {
    id: 3,
    name: "Hair Growth Oil",
    size: "100ml",
    image: "assets/products/hair oil.jpg",
    ngn: 10000,
    usd: 8,
    tag: "bestseller",
    category: "Oil",
    sizes: [
      { label: "50ml", ngn: 5000, usd: 4, originalNgn: 6000 },
      { label: "100ml", ngn: 10000, usd: 8 },
    ],
  },
  {
    id: 4,
    name: "Leave-in Conditioner",
    size: "250ml",
    image: "assets/products/scalp serum.jpg",
    ngn: 2500,
    usd: 2,
    tag: "new",
    category: "Serum",
    sizes: [
      { label: "250ml", ngn: 2500, usd: 2 },
      { label: "500ml", ngn: 5000, usd: 4 },
    ],
  },
  {
    id: 5,
    name: "Black Soap Shampoo",
    size: "250ml",
    image: "assets/products/shampoo.jpg",
    ngn: 4500,
    usd: 4,
    tag: "bestseller",
    category: "Shampoo",
    sizes: [
      { label: "250ml", ngn: 4500, usd: 4 },
      { label: "500ml", ngn: 9000, usd: 8 },
    ],
  },
  {
    id: 6,
    name: "Hair Growth Cream",
    size: "Small",
    image: "assets/products/Hair cream.jpg",
    ngn: 2000,
    usd: 2,
    tag: "bestseller",
    category: "Cream",
    sizes: [
      { label: "50g", ngn: 2000, usd: 2 },
      { label: "100g", ngn: 4000, usd: 3 },
      { label: "250g", ngn: 8000, usd: 6, originalNgn: 10000 },
    ],
  },
  {
    id: 7,
    name: "Hair Growth Oil",
    size: "50ml",
    image: "assets/products/hair oil.jpg",
    ngn: 5000,
    usd: 4,
    tag: "bestseller",
    category: "Oil",
    sizes: [
      { label: "50ml", ngn: 5000, usd: 4, originalNgn: 6000 },
      { label: "100ml", ngn: 10000, usd: 8 },
    ],
  },
  {
    id: 8,
    name: "Leave-in Conditioner",
    size: "500ml",
    image: "assets/products/scalp serum.jpg",
    ngn: 5000,
    usd: 4,
    tag: "new",
    category: "Serum",
    sizes: [
      { label: "250ml", ngn: 2500, usd: 2 },
      { label: "500ml", ngn: 5000, usd: 4 },
    ],
  },
  {
    id: 9,
    name: "Hair Growth Cream",
    size: "Big",
    image: "assets/products/Hair cream.jpg",
    ngn: 8000,
    usd: 6,
    tag: "new",
    category: "Cream",
    sizes: [
      { label: "50g", ngn: 2000, usd: 2 },
      { label: "100g", ngn: 4000, usd: 3 },
      { label: "Big", ngn: 8000, usd: 6 },
    ],
  },
  {
    id: 10,
    name: "Black Soap Shampoo",
    size: "500ml",
    image: "assets/products/shampoo.jpg",
    ngn: 9000,
    usd: 8,
    tag: "",
    category: "Shampoo",
    sizes: [
      { label: "250ml", ngn: 4500, usd: 4 },
      { label: "500ml", ngn: 7500, usd: 8 },
    ],
  },
  {
    id: 11,
    name: "Leave-in Conditioner",
    size: "250ml",
    image: "assets/products/scalp serum.jpg",
    ngn: 2500,
    usd: 2,
    tag: "new",
    category: "Conditioner",
    sizes: [
      { label: "200ml", ngn: 6000, usd: 11 },
      { label: "400ml", ngn: 10000, usd: 18 },
    ],
  },
  {
    id: 12,
    name: "Leave-in Conditioner",
    size: "500ml",
    image: "assets/products/scalp serum.jpg",
    ngn: 5000,
    usd: 4,
    tag: "",
    category: "Conditioner",
    sizes: [
      { label: "200ml", ngn: 6000, usd: 11 },
      { label: "400ml", ngn: 10000, usd: 18 },
    ],
  },
  {
    id: 13,
    name: "Luxury Bundle Kit",
    size: "Full Set",
    image: "assets/products/complete-set.jpg",
    ngn: 25000,
    usd: 40,
    tag: "bestseller",
    category: "Bundle",
    sizes: [{ label: "Full Set", ngn: 25000, usd: 40 }],
  },
  {
    id: 14,
    name: "Medium Luxury Bundle Kit",
    size: "Full Set",
    image: "assets/products/complete-set.jpg",
    ngn: 25000,
    usd: 20,
    tag: "bestseller",
    category: "Bundle",
    sizes: [{ label: "Full Set", ngn: 25000, usd: 40 }],
  },
  {
    id: 15,
    name: "Small Bundle Kit",
    size: "Full Set",
    image: "assets/products/complete-set.jpg",
    ngn: 15000,
    usd: 13,
    tag: "bestseller",
    category: "Bundle",
    sizes: [{ label: "Full Set", ngn: 25000, usd: 40 }],
  },
  {
    id: 16,
    name: "Deep Conditioner",
    image: "assets/products/scalp serum.jpg",
    tag: "coming soon",
    category: "Conditioner",
    sizes: [],
  },
  {
    id: 17,
    name: "Hair Spray",
    image: "assets/products/hair oil.jpg",
    tag: "Coming Soon",
    category: "Spray",
    sizes: [],
  },
  {
    id: 18,
    name: "Hair Butter",
    image: "assets/products/shampoo.jpg",
    tag: "Coming Soon",
    category: "Butter",
    sizes: [],
  },
];

products = products.filter(
  (p, index, self) => index === self.findIndex((prod) => prod.id === p.id)
);

// ─── STATE ───
let cart = [];
let currentModal = null;
let selectedPayment = "paystack";
let selectedSize = null;
let currentIndex = 4;

// ─── EMAILJS INIT ───
if (typeof emailjs !== "undefined") {
  emailjs.init("DZl7KFHMy_zrJcdgA");
}

// ─── RENDER PRODUCTS ───
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  const isMobile = window.innerWidth <= 768;
  const productsToRender = isMobile
    ? products.slice(0, currentIndex)
    : products;

  productsToRender.forEach((p, i) => {
    const tagHtml = p.tag
      ? `<span class="product-tag tag-${p.tag
          .toLowerCase()
          .replace(/\s+/g, "-")}">${p.tag}</span>`
      : "";
    const oldPriceHtml = p.originalNgn
      ? `<span class="price-ngn-old">₦${p.originalNgn.toLocaleString()}</span>`
      : "";
    const priceHtml = p.ngn
      ? `<span class="price-ngn">₦${p.ngn.toLocaleString()}</span>${oldPriceHtml}<span class="price-usd">$${
          p.usd
        }</span>`
      : `<span class="price-ngn" style="font-size:13px;opacity:0.6;">Coming Soon</span>`;
    const actionsHtml = p.ngn
      ? `<div class="product-actions">
           <button class="btn-cart" onclick="addToCart(${p.id})">Add to Cart</button>
           <button class="btn-quick" onclick="openQuickView(${p.id})">
             <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
           </button>
         </div>`
      : "";

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.transitionDelay = `${(i % 4) * 0.07}s`;
    card.innerHTML = `
<div class="product-img-wrap">
  <img src="${p.image}" alt="${p.name}" class="product-img">
  ${tagHtml}
</div>
<div class="product-info">
  <div class="product-name">${p.name}</div>
  <div class="product-size">${p.size || ""}</div>
  <div class="product-pricing">${priceHtml}</div>
  ${actionsHtml}
</div>`;
    grid.appendChild(card);
  });

  if (isMobile) {
    const showMoreWrapper = document.createElement("div");
    showMoreWrapper.style.textAlign = "center";
    showMoreWrapper.style.marginTop = "20px";
    const btnText = currentIndex >= products.length ? "Show Less" : "Show More";
    showMoreWrapper.innerHTML = `<button class="btn-cart" id="showMoreBtn">${btnText}</button>`;
    grid.appendChild(showMoreWrapper);
    document.getElementById("showMoreBtn").addEventListener("click", () => {
      if (currentIndex >= products.length) {
        currentIndex = 4;
      } else {
        currentIndex = Math.min(currentIndex + 4, products.length);
      }
      renderProducts();
    });
  }

  observeElements();
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768 && currentIndex > products.length)
    currentIndex = 4;
  renderProducts();
});

// ─── CART ───
function addToCart(id, size = null) {
  const p = products.find((x) => x.id === id);
  if (!p || !p.ngn) return;
  const sizeLabel = size || p.size;
  const sizeData =
    p.sizes && p.sizes.find((s) => s.label === sizeLabel)
      ? p.sizes.find((s) => s.label === sizeLabel)
      : { ngn: p.ngn, usd: p.usd };
  const existing = cart.find((x) => x.id === id && x.size === sizeLabel);
  if (existing) existing.qty++;
  else
    cart.push({
      id,
      name: p.name,
      size: sizeLabel,
      image: p.image,
      ngn: sizeData.ngn,
      usd: sizeData.usd,
      qty: 1,
    });
  updateCart();
  animateBadge();
  showToast(`${p.name} added to cart ✓`, "success");
}

function removeFromCart(id, size) {
  const el = document.querySelector(`[data-cart-id="${id}-${size}"]`);
  if (el) {
    el.classList.add("removing");
    setTimeout(() => {
      cart = cart.filter((x) => !(x.id === id && x.size === size));
      updateCart();
    }, 300);
  } else {
    cart = cart.filter((x) => !(x.id === id && x.size === size));
    updateCart();
  }
}

function updateQty(id, size, delta) {
  const item = cart.find((x) => x.id === id && x.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id, size);
  else updateCart();
}

function updateCart() {
  const itemsEl = document.getElementById("cartItems");
  const emptyEl = document.getElementById("cartEmpty");
  const badge = document.getElementById("cartBadge");
  const total = cart.reduce((a, x) => a + x.qty, 0);
  const subtotalNgn = cart.reduce((a, x) => a + x.ngn * x.qty, 0);
  const subtotalUsd = cart.reduce((a, x) => a + x.usd * x.qty, 0);
  const shippingNgn = cart.length ? 1500 : 0;
  const shippingUsd = 0;

  badge.textContent = total;
  badge.classList.toggle("visible", total > 0);

  if (!cart.length) {
    emptyEl.style.display = "flex";
    document.querySelectorAll(".cart-item").forEach((e) => e.remove());
  } else {
    emptyEl.style.display = "none";
    document.querySelectorAll(".cart-item").forEach((e) => e.remove());
    cart.forEach((item) => {
      const el = document.createElement("div");
      el.className = "cart-item";
      el.setAttribute("data-cart-id", `${item.id}-${item.size}`);
      el.innerHTML = `
        <div class="cart-item-img"><img src="${item.image}" alt="${
        item.name
      }"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-size">${item.size}</div>
          <div class="cart-item-price">₦${(
            item.ngn * item.qty
          ).toLocaleString()} / $${(item.usd * item.qty).toLocaleString()}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQty(${item.id},'${
        item.size
      }',-1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id},'${
        item.size
      }',1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id},'${
        item.size
      }')">×</button>`;
      itemsEl.appendChild(el);
    });
  }

  document.getElementById(
    "cartSubtotal"
  ).textContent = `₦${subtotalNgn.toLocaleString()} / $${subtotalUsd.toLocaleString()}`;
  document.getElementById("cartShipping").textContent = shippingNgn
    ? `₦${shippingNgn.toLocaleString()} / $${shippingUsd}`
    : "Free";
  document.getElementById("cartTotal").textContent = `₦${(
    subtotalNgn + shippingNgn
  ).toLocaleString()} / $${(subtotalUsd + shippingUsd).toLocaleString()}`;
  updateCheckoutTotal();
}

function animateBadge() {
  const b = document.getElementById("cartBadge");
  b.classList.remove("bounce");
  void b.offsetWidth;
  b.classList.add("bounce");
}

function openCart() {
  document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartSidebar").classList.add("open");
}
function closeCart() {
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartSidebar").classList.remove("open");
}

// ─── QUICK VIEW ───
function openQuickView(id) {
  currentModal = products.find((x) => x.id === id);
  if (!currentModal || !currentModal.sizes || !currentModal.sizes.length)
    return;
  document.getElementById(
    "modalImg"
  ).innerHTML = `<img src="${currentModal.image}" alt="${currentModal.name}">`;
  document.getElementById("modalTag").textContent = currentModal.category;
  document.getElementById("modalName").textContent = currentModal.name;

  const so = document.getElementById("sizeOptions");
  so.innerHTML = "";
  selectedSize = currentModal.sizes[0];
  currentModal.sizes.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.className = "size-opt" + (i === 0 ? " selected" : "");
    btn.textContent = s.label;
    btn.onclick = () => {
      document
        .querySelectorAll(".size-opt")
        .forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedSize = s;
      document.getElementById(
        "modalPriceNgn"
      ).textContent = `₦${s.ngn.toLocaleString()}`;
      document.getElementById("modalPriceUsd").textContent = `$${s.usd}`;
    };
    so.appendChild(btn);
  });
  document.getElementById(
    "modalPriceNgn"
  ).textContent = `₦${currentModal.sizes[0].ngn.toLocaleString()}`;
  document.getElementById(
    "modalPriceUsd"
  ).textContent = `$${currentModal.sizes[0].usd}`;
  document.getElementById("quickViewModal").classList.add("open");
}
function closeQuickView() {
  document.getElementById("quickViewModal").classList.remove("open");
}
function addFromModal() {
  if (!currentModal || !selectedSize) return;
  addToCart(currentModal.id, selectedSize.label);
  closeQuickView();
}

// ─── CHECKOUT ───
function openCheckout() {
  if (!cart.length) {
    closeCart();
    setTimeout(() => {
      showToast("Your cart is empty 🛒", "error");
      window.location.href = "#shop";
    }, 200);
    return;
  }
  closeCart();
  updateCheckoutTotal();
  document.getElementById("checkoutOverlay").classList.add("open");
}
function closeCheckout() {
  document.getElementById("checkoutOverlay").classList.remove("open");
}

function updateCheckoutTotal() {
  const subtotalNgn = cart.reduce((a, x) => a + x.ngn * x.qty, 0);
  const subtotalUsd = cart.reduce((a, x) => a + x.usd * x.qty, 0);
  const shippingNgn = cart.length ? 1500 : 0;
  const shippingUsd = +(shippingNgn / 1600).toFixed(2);
  const totalNgn = subtotalNgn + shippingNgn;
  const totalUsd = +(subtotalUsd + shippingUsd).toFixed(2);
  const el = document.getElementById("checkoutTotal");
  if (el) el.textContent = `₦${totalNgn.toLocaleString()} / $${totalUsd}`;
}

function selectPayment(el, method) {
  document.querySelectorAll(".pay-method").forEach((m) => {
    m.classList.remove("selected");
    m.querySelector("input").checked = false;
  });
  el.classList.add("selected");
  el.querySelector("input").checked = true;
  selectedPayment = method;
}

function validateForm() {
  const fields = ["fullName", "emailAddr", "phoneNum", "address", "city"];
  for (const f of fields) {
    const el = document.getElementById(f);
    if (!el.value.trim()) {
      el.focus();
      el.style.borderColor = "#ef4444";
      setTimeout(() => (el.style.borderColor = ""), 2000);
      return false;
    }
  }
  return true;
}

function processPayment() {
  if (!validateForm()) return;
  const btn = document.getElementById("payBtn");
  btn.classList.add("loading");
  btn.textContent = "Processing...";
  btn.disabled = true;
  if (selectedPayment === "paystack") initPaystack();
  else initCryptoPayment();
}

function initPaystack() {
  const email = document.getElementById("emailAddr").value;
  const sub = cart.reduce((a, x) => a + x.ngn * x.qty, 0);
  const total = (sub + 1500) * 100;
  const orderNum = "SN-" + Math.floor(100000 + Math.random() * 900000);
  const handler = PaystackPop.setup({
    key: "pk_live_9413f242c2820cdc70d5a7a94477d0759e4f6859",
    email: email,
    amount: total,
    currency: "NGN",
    ref: orderNum,
    callback: function (response) {
      onPaymentSuccess(orderNum, response.reference, "Paystack");
    },
    onClose: function () {
      resetPayBtn();
    },
  });
  handler.openIframe();
}

function initCryptoPayment() {
  // Reset pay button and open the crypto modal
  resetPayBtn();
  closeCheckout();
  openCryptoModal();
}

function openCryptoModal() {
  document.getElementById("cryptoOverlay").classList.add("open");
  document.getElementById("cryptoModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCryptoModal() {
  document.getElementById("cryptoOverlay").classList.remove("open");
  document.getElementById("cryptoModal").classList.remove("open");
  document.body.style.overflow = "";
}

function copyAddress(el) {
  const addr = el.childNodes[0].textContent.trim();
  navigator.clipboard.writeText(addr).then(() => {
    el.classList.add("copied");
    const hint = el.querySelector(".copy-hint");
    const original = hint.textContent;
    hint.textContent = "copied!";
    setTimeout(() => {
      el.classList.remove("copied");
      hint.textContent = original;
    }, 2000);
  });
}

function handleReceiptUpload(input) {
  const file = input.files[0];
  const drop = document.getElementById("receiptDrop");
  const name = document.getElementById("receiptFileName");
  if (file) {
    drop.classList.add("has-file");
    name.textContent = "✓ " + file.name;
  }
}

function submitCryptoOrder() {
  const receiptFile = document.getElementById("receiptFile");
  if (!receiptFile.files.length) {
    showToast("Please upload your transaction receipt", "error");
    return;
  }

  // Capture everything BEFORE closing anything
  const cartSnapshot = cart.map((item) => ({ ...item }));
  const orderNum = "SN-" + Math.floor(100000 + Math.random() * 900000);
  const ref = "CRYPTO-" + Date.now();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("emailAddr").value;
  const phone = document.getElementById("phoneNum").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;

  const orderItems = cartSnapshot
    .map(
      (item) =>
        `${item.name} (${item.size}) x${item.qty} - ₦${(
          item.ngn * item.qty
        ).toLocaleString()}`
    )
    .join("\n");
  const total = cartSnapshot.reduce((a, x) => a + x.ngn * x.qty, 0) + 1500;

  // Convert receipt to base64, then send email
  const file = receiptFile.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const base64Receipt = reader.result; // data:image/...;base64,...

    if (typeof emailjs !== "undefined") {
      emailjs
        .send("service_rgekp7g", "template_admin", {
          order_number: orderNum,
          payment_reference: ref,
          payment_method: "Crypto (Manual Transfer)",
          customer_name: fullName,
          customer_email: email,
          to_email: email,
          phone_number: phone,
          delivery_address: address + ", " + city,
          order_items: orderItems,
          order_total:
            "$" +
            (total / 1600).toFixed(2) +
            " USD (₦" +
            total.toLocaleString() +
            ")",
          receipt_note: "Customer uploaded a transaction receipt: " + file.name,
        })
        .then(
          (res) => console.log("Admin crypto email sent!", res.status),
          (err) => console.error("Admin crypto email failed:", err)
        );

      // Also send customer confirmation
      sendCustomerReceipt(orderNum, ref, "Crypto", cartSnapshot, {
        fullName,
        email,
        address,
        city,
      });
    }
  };
  reader.readAsDataURL(file);

  // Close modals and show success
  closeCryptoModal();
  cart = [];
  updateCart();
  document.getElementById("orderNumber").textContent = orderNum;
  document.getElementById("successOverlay").classList.add("open");
  showToast("Order submitted! We'll verify your payment shortly ✓", "success");
}

// ─── PAYMENT SUCCESS ───
function onPaymentSuccess(orderNum, ref, method) {
  closeCheckout();
  resetPayBtn();

  // Capture cart snapshot BEFORE clearing
  const cartSnapshot = cart.map((item) => ({ ...item }));

  sendAdminNotification(orderNum, ref, method, cartSnapshot);
  sendCustomerReceipt(orderNum, ref, method, cartSnapshot);

  cart = [];
  updateCart();
  document.getElementById("orderNumber").textContent = orderNum;
  document.getElementById("successOverlay").classList.add("open");
}

// ─── ADMIN EMAIL ───
function sendAdminNotification(orderNum, ref, method, cartSnapshot) {
  if (typeof emailjs === "undefined") return;

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("emailAddr").value;
  const phone = document.getElementById("phoneNum").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;

  const orderItems = cartSnapshot
    .map(
      (item) =>
        `${item.name} (${item.size}) x${item.qty} - ₦${(
          item.ngn * item.qty
        ).toLocaleString()}`
    )
    .join("\n");

  const total = cartSnapshot.reduce((a, x) => a + x.ngn * x.qty, 0) + 1500;

  emailjs
    .send("service_rgekp7g", "template_admin", {
      order_number: orderNum,
      payment_reference: ref,
      payment_method: method,
      customer_name: fullName,
      customer_email: email,
      to_email: email,
      phone_number: phone,
      delivery_address: address + ", " + city,
      order_items: orderItems,
      order_total: "₦" + total.toLocaleString(),
    })
    .then(
      (res) => console.log("Admin email sent!", res.status),
      (err) => console.error("Admin email failed:", err)
    );
}

// ─── CUSTOMER RECEIPT EMAIL ───
function sendCustomerReceipt(
  orderNum,
  ref,
  method,
  cartSnapshot,
  preCapured = null
) {
  if (typeof emailjs === "undefined") return;

  // Use pre-captured data (for crypto flow) or read from form (for Paystack flow)
  const fullName = preCapured
    ? preCapured.fullName
    : document.getElementById("fullName").value;
  const email = preCapured
    ? preCapured.email
    : document.getElementById("emailAddr").value;
  const address = preCapured
    ? preCapured.address
    : document.getElementById("address").value;
  const city = preCapured
    ? preCapured.city
    : document.getElementById("city").value;

  const orderItems = cartSnapshot
    .map(
      (item) =>
        `<tr>
        <td style="padding:10px;border-bottom:1px solid #eee;">${item.name} (${
          item.size
        })</td>
        <td style="padding:10px;border-bottom:1px solid #eee;text-align:center;">x${
          item.qty
        }</td>
        <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;">₦${(
          item.ngn * item.qty
        ).toLocaleString()}</td>
      </tr>`
    )
    .join("");

  const subtotal = cartSnapshot.reduce((a, x) => a + x.ngn * x.qty, 0);
  const total = subtotal + 1500;

  emailjs
    .send("service_rgekp7g", "template_customer", {
      customer_name: fullName,
      customer_email: email,
      to_email: email, // ← FIXED: now correctly sends to the customer's actual email
      order_number: orderNum,
      payment_reference: ref,
      payment_method: method,
      order_items: orderItems,
      delivery_address: `${address}, ${city}`,
      order_total: "₦" + total.toLocaleString(),
    })
    .then(
      (res) => console.log("Customer receipt sent!", res.status),
      (err) => console.error("Customer receipt failed:", err)
    );
}

function resetPayBtn() {
  const btn = document.getElementById("payBtn");
  btn.classList.remove("loading");
  btn.textContent = "Pay Now – Secure Checkout";
  btn.disabled = false;
}
function closeSuccess() {
  document.getElementById("successOverlay").classList.remove("open");
}

// ─── TOAST ───
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ─── NAVBAR ───
document.getElementById("cartBtn").addEventListener("click", openCart);
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// ─── HAMBURGER ───
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("hamburger").classList.toggle("open");
  document.getElementById("mobileNav").classList.toggle("open");
});
function closeMobileNav() {
  document.getElementById("hamburger").classList.remove("open");
  document.getElementById("mobileNav").classList.remove("open");
}

// ─── MODAL CLOSE ON BG CLICK ───
document
  .getElementById("quickViewModal")
  .addEventListener("click", function (e) {
    if (e.target === this) closeQuickView();
  });
document
  .getElementById("checkoutOverlay")
  .addEventListener("click", function (e) {
    if (e.target === this) closeCheckout();
  });
document
  .getElementById("successOverlay")
  .addEventListener("click", function (e) {
    if (e.target === this) closeSuccess();
  });

// ─── SCROLL ANIMATIONS ───
function observeElements() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  document
    .querySelectorAll(".fade-up,.product-card")
    .forEach((el) => obs.observe(el));
}

// ─── INIT ───
renderProducts();
observeElements();
setTimeout(() => {
  document.querySelectorAll(".hero .fade-up").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), i * 150);
  });
}, 100);

// ─── ROTATING HERO TEXT ───
const words = [
  "Hair Perfection",
  "Radiant Growth",
  "Stronger Strands",
  "Silky Confidence",
  "Natural Luxury",
];
const rotatingWord = document.getElementById("rotating-word");
let wordIndex = 0;
function rotateText() {
  rotatingWord.classList.add("word-fade-out");
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % words.length;
    rotatingWord.textContent = words[wordIndex];
    rotatingWord.classList.remove("word-fade-out");
    rotatingWord.classList.add("word-fade-in");
  }, 600);
  setTimeout(() => {
    rotatingWord.classList.remove("word-fade-in");
  }, 1200);
}
setInterval(rotateText, 3500);

// ─── SCROLL ICON ANIMATIONS ───
const scrollElements = document.querySelectorAll(".scroll-animate");
const elementInView = (el, offset = 0) =>
  el.getBoundingClientRect().top <=
  (window.innerHeight || document.documentElement.clientHeight) - offset;
const displayScrollElement = (element) => {
  element.classList.add("active");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) displayScrollElement(el);
  });
};
window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();

// ─── 3D MODAL IMAGE TILT ───
const modalImgWrap = document.getElementById("modalImg");
function enable3DEffect() {
  if (window.innerWidth > 768) {
    modalImgWrap.addEventListener("mousemove", handleMove);
    modalImgWrap.addEventListener("mouseleave", resetTilt);
  } else {
    modalImgWrap.removeEventListener("mousemove", handleMove);
    modalImgWrap.removeEventListener("mouseleave", resetTilt);
    modalImgWrap.style.transform = "none";
  }
}
function handleMove(e) {
  const rect = modalImgWrap.getBoundingClientRect();
  const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
  const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
  modalImgWrap.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}
function resetTilt() {
  modalImgWrap.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg)";
}
enable3DEffect();
window.addEventListener("resize", enable3DEffect);

// ─── ABOUT SLIDER (pause on hover/touch) ───
const slider = document.querySelector(".about-slider");
if (slider) {
  const track = slider.querySelector(".about-track");
  slider.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });
  slider.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
  slider.addEventListener(
    "touchstart",
    () => {
      track.style.animationPlayState = "paused";
    },
    { passive: true }
  );
  slider.addEventListener("touchend", () => {
    track.style.animationPlayState = "running";
  });
}

// ─── FAQ TOGGLE ───
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains("open");

  // Close all open ones first
  document.querySelectorAll(".faq-question.open").forEach((q) => {
    q.classList.remove("open");
    q.nextElementSibling.classList.remove("open");
  });

  // Open clicked one if it wasn't already open
  if (!isOpen) {
    btn.classList.add("open");
    answer.classList.add("open");
  }
}

// ─── TRUST BAR COUNTER ANIMATION ───
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const step = (target / duration) * 16;
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

// Trigger counters when trust bar scrolls into view
const trustObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target
          .querySelectorAll(".trust-num[data-target]")
          .forEach(animateCounter);
        trustObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

const trustBar = document.querySelector(".trust-bar");
if (trustBar) trustObs.observe(trustBar);
const receiptInput = document.getElementById("receiptFile");

receiptInput.addEventListener("change", () => {
  const file = receiptInput.files[0];

  if (file) {
    showToast(`Receipt selected: ${file.name}`, "success");
  }
});
