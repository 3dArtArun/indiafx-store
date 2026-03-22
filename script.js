// ============================================
// IndiaFx Store — Full Ecommerce with Real Products
// High-Sale Psychology Engine
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // === ALL REAL PRODUCTS ===
    const products = [
        {
            id: 1, name: "Handcrafted Etikoppaka Buttabomma | 16 CM",
            price: 792, originalPrice: 999, category: "Etikoppaka",
            image: "https://static.wixstatic.com/media/115547_350f0a6cb983421b85da54e03e62dcb3~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_350f0a6cb983421b85da54e03e62dcb3~mv2.jpg",
            badge: "bestseller", rating: 4.9, reviews: 342, sold: 89, stock: 4,
            url: "https://www.mediafx.app/product-page/handcrafted-etikoppaka-buttabomma-16-cm"
        },
        {
            id: 2, name: "IndiaFx Handcrafted Kondapalli Peacock Set",
            price: 1099, originalPrice: 1450, category: "Kondapalli",
            image: "https://static.wixstatic.com/media/115547_d50a29dba8814abdb4a87a57e0e51182~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_d50a29dba8814abdb4a87a57e0e51182~mv2.jpg",
            badge: "trending", rating: 4.8, reviews: 218, sold: 67, stock: 6,
            url: "https://www.mediafx.app/product-page/indiafx-handcrafted-kondapalli-peacock-set"
        },
        {
            id: 3, name: "Brass Om Shaped Diya (Set of 2)",
            price: 619, originalPrice: 999, category: "Brass & Decor",
            image: "https://static.wixstatic.com/media/115547_50037b8ee849492383e2b903247b532f~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_50037b8ee849492383e2b903247b532f~mv2.jpg",
            badge: "bestseller", rating: 4.9, reviews: 456, sold: 134, stock: 3,
            url: "https://www.mediafx.app/product-page/brass-om-shaped-diya-set-of-2"
        },
        {
            id: 4, name: "Peace Vibes Only! Handcrafted Etikoppaka Buddha",
            price: 394, originalPrice: 599, category: "Etikoppaka",
            image: "https://static.wixstatic.com/media/115547_22b6db2d0a294b0e934d43a68b3c6977~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_22b6db2d0a294b0e934d43a68b3c6977~mv2.jpg",
            badge: "sale", rating: 4.7, reviews: 189, sold: 56, stock: 8,
            url: "https://www.mediafx.app/product-page/peace-vibes-only-handcrafted-etikoppaka-buddha"
        },
        {
            id: 5, name: "Handcrafted Etikoppaka Radha Krishna",
            price: 999, originalPrice: 1450, category: "Etikoppaka",
            image: "https://static.wixstatic.com/media/115547_85e399ac4b3a4e9db8fb69b4c9808ef1~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_85e399ac4b3a4e9db8fb69b4c9808ef1~mv2.jpg",
            badge: "trending", rating: 4.9, reviews: 312, sold: 78, stock: 5,
            url: "https://www.mediafx.app/product-page/handcrafted-etikoppaka-radha-krishna"
        },
        {
            id: 6, name: "Lord Krishna with Cow Idol | Home Decor | 6 Inch",
            price: 559, originalPrice: 995, category: "Brass & Decor",
            image: "https://static.wixstatic.com/media/115547_aaeb11c080a8457fba058ca8c3057bfc~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_aaeb11c080a8457fba058ca8c3057bfc~mv2.jpg",
            badge: "sale", rating: 4.8, reviews: 267, sold: 92, stock: 2,
            url: "https://www.mediafx.app/product-page/lord-krishna-with-cow-idol-home-decor-6-inch"
        },
        {
            id: 7, name: "Handcrafted Etikoppaka Child Hanuman",
            price: 795, originalPrice: 999, category: "Etikoppaka",
            image: "https://static.wixstatic.com/media/115547_e058e1b6062e4a83889db4c31ac6e418~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_e058e1b6062e4a83889db4c31ac6e418~mv2.jpg",
            badge: "new", rating: 4.7, reviews: 134, sold: 41, stock: 7,
            url: "https://www.mediafx.app/product-page/handcrafted-etikoppaka-child-hanuman"
        },
        {
            id: 8, name: "Kalamkari Hand Bag — Multicolored Ethnic",
            price: 399, originalPrice: 899, category: "Bags & Accessories",
            image: "https://static.wixstatic.com/media/43996d_c52c6b0a5c5146fcaa2d5ee75d62d74d~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/43996d_c52c6b0a5c5146fcaa2d5ee75d62d74d~mv2.jpg",
            badge: "bestseller", rating: 4.6, reviews: 523, sold: 201, stock: 11,
            url: "https://www.mediafx.app/product-page/women-s-multicolored-beautiful-ethnic-kalamkari-hand-bag-handmade-by-women-self"
        },
        {
            id: 9, name: "Handcrafted Pembarthy Brass Shiva Parvati Statue",
            price: 2994, originalPrice: 4999, category: "Brass & Decor",
            image: "https://static.wixstatic.com/media/115547_debbe9b609394d08a7ec75df43c51c1a~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_debbe9b609394d08a7ec75df43c51c1a~mv2.png",
            badge: "trending", rating: 5.0, reviews: 87, sold: 23, stock: 2,
            url: "https://www.mediafx.app/product-page/handcrafted-pembarthy-brass-shiva-parvati-statue-sacred-home-decor"
        },
        {
            id: 10, name: "Etikoppaka Handcrafted Wooden Veena",
            price: 575, originalPrice: 1438, category: "Etikoppaka",
            image: "https://static.wixstatic.com/media/115547_b027c31399e1437f880d8e596119ddd7~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_b027c31399e1437f880d8e596119ddd7~mv2.jpg",
            badge: "sale", rating: 4.8, reviews: 198, sold: 65, stock: 9,
            url: "https://www.mediafx.app/product-page/etikoppaka-handcrafted-wooden-veena-handmade"
        },
        {
            id: 11, name: "Wood Nose Shaped Spectacle Holder Stand",
            price: 1120, originalPrice: 1699, category: "Home & Kitchen",
            image: "https://static.wixstatic.com/media/115547_4f9e30f1e00540548de18a613b673798~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_4f9e30f1e00540548de18a613b673798~mv2.jpg",
            badge: "new", rating: 4.7, reviews: 156, sold: 48, stock: 6,
            url: "https://www.mediafx.app/product-page/wood-nose-shaped-spectacle-specs-eyeglass-holder-stand"
        },
        {
            id: 12, name: "Handmade Lakshmi Devi Idol — Divine Decor",
            price: 12999, originalPrice: null, category: "Brass & Decor",
            image: "https://static.wixstatic.com/media/115547_0dc1cb236c3b4af29200d34191270a04~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_0dc1cb236c3b4af29200d34191270a04~mv2.png",
            badge: "premium", rating: 5.0, reviews: 42, sold: 12, stock: 1,
            url: "https://www.mediafx.app/product-page/handmade-lakshmi-devi-idol-divine-decor-for-home-temple"
        },
        {
            id: 13, name: "Etikoppaka Wooden Pull Along Train Toy",
            price: 540, originalPrice: 810, category: "Etikoppaka",
            image: "https://static.wixstatic.com/media/115547_6ec0002816d24c5fa66cb9b9f575405c~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_6ec0002816d24c5fa66cb9b9f575405c~mv2.jpg",
            badge: null, rating: 4.6, reviews: 98, sold: 34, stock: 12,
            url: "https://www.mediafx.app/product-page/etikoppaka-wooden-pull-along-train-toy-for-kids-handmade-by-women-self-help-gro"
        },
        {
            id: 14, name: "IndiaFx Stainless Steel Masala Box for Kitchen",
            price: 1250, originalPrice: 1629, category: "Home & Kitchen",
            image: "https://static.wixstatic.com/media/115547_8857dda2c91c43f1b66d287dbd51634f~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_8857dda2c91c43f1b66d287dbd51634f~mv2.jpg",
            badge: "trending", rating: 4.8, reviews: 287, sold: 112, stock: 5,
            url: "https://www.mediafx.app/product-page/indiafx-stainless-steel-masala-box-for-kitchen"
        },
        {
            id: 15, name: "Hand Painted Steel Glass — Beautiful Floral Design",
            price: 459, originalPrice: 780, category: "Home & Kitchen",
            image: "https://static.wixstatic.com/media/115547_6872ebf537d8432d887baf68ab71f6cd~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_6872ebf537d8432d887baf68ab71f6cd~mv2.jpg",
            badge: "sale", rating: 4.5, reviews: 176, sold: 89, stock: 14,
            url: "https://www.mediafx.app/product-page/hand-painted-steel-glass-beautiful-floral-designed"
        },
        {
            id: 16, name: "Handpainted Wooden Rickshaw — Home Decor Showpiece",
            price: 780, originalPrice: 1350, category: "Etikoppaka",
            image: "https://static.wixstatic.com/media/115547_a177d2382e3942bd871b54793b8f36c7~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_a177d2382e3942bd871b54793b8f36c7~mv2.jpg",
            badge: null, rating: 4.7, reviews: 143, sold: 52, stock: 7,
            url: "https://www.mediafx.app/product-page/handcrafted-perfectly-handpainted-wooden-rickshaw-home-decor-showpiece"
        },
        {
            id: 17, name: "Ceramic Cups with Stand | Set of 6",
            price: 1419, originalPrice: 1700, category: "Home & Kitchen",
            image: "https://static.wixstatic.com/media/115547_55014ea25a594c679fd8139653a4bb3a~mv2.jpeg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_55014ea25a594c679fd8139653a4bb3a~mv2.jpeg",
            badge: "new", rating: 4.6, reviews: 92, sold: 38, stock: 8,
            url: "https://www.mediafx.app/product-page/ceramic-cups-with-stand-set-of6"
        },
        {
            id: 18, name: "Wooden Umbrella Ganesh Idol — Sacred Decor",
            price: 999, originalPrice: null, category: "Brass & Decor",
            image: "https://static.wixstatic.com/media/115547_61ac138fc7ec4fefb9e5c6c0faf1ae95~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_61ac138fc7ec4fefb9e5c6c0faf1ae95~mv2.png",
            badge: "bestseller", rating: 4.9, reviews: 234, sold: 76, stock: 4,
            url: "https://www.mediafx.app/product-page/wooden-umbrella-ganesh-idol-cute-handmade-decor-for-sacred-spaces"
        },
        {
            id: 19, name: "Thoran Wall Hanging — Doorway Decor Gift",
            price: 699, originalPrice: 999, category: "Festival",
            image: "https://static.wixstatic.com/media/115547_5e9c5929570a401790003159ce1e05f7~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_5e9c5929570a401790003159ce1e05f7~mv2.jpg",
            badge: null, rating: 4.5, reviews: 112, sold: 43, stock: 9,
            url: "https://www.mediafx.app/product-page/thoran-wall-hanging-doorway-decor-gift-for-home-made-of-leather"
        },
        {
            id: 20, name: "LED String Lights Window Curtain — 25 LED Bubbles",
            price: 450, originalPrice: 899, category: "Festival",
            image: "https://static.wixstatic.com/media/115547_9d268677399b48bb97a26f94a319fe48~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/115547_9d268677399b48bb97a26f94a319fe48~mv2.jpg",
            badge: "sale", rating: 4.4, reviews: 267, sold: 156, stock: 18,
            url: "https://www.mediafx.app/product-page/led-string-lights-window-curtain-lights-with-25-led-decorative-lighting-bubbles"
        }
    ];

    // === Cart State ===
    let cart = [];

    // === DOM Elements ===
    const cartBtn = document.getElementById('cartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartClose = document.getElementById('cartClose');
    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');
    const cartCount = document.getElementById('cartCount');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartTotal = document.getElementById('cartTotal');
    const shippingBar = document.getElementById('shippingBar');
    const shippingMsg = document.getElementById('shippingMsg');
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    const productGrid = document.getElementById('productGrid');

    // === Render Products ===
    function renderProducts(productList) {
        productGrid.innerHTML = productList.map((p, i) => {
            const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
            const badgeHTML = getBadgeHTML(p.badge, discount);
            const urgencyHTML = getUrgencyHTML(p);
            const savingsHTML = p.originalPrice ? `<span class="price-save">Save ₹${(p.originalPrice - p.price).toLocaleString('en-IN')}</span>` : '';
            const originalHTML = p.originalPrice ? `<span class="price-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : '';

            return `
            <div class="product-card" style="animation-delay: ${i * 0.05}s">
                <div class="product-badges">${badgeHTML}</div>
                <button class="wishlist-toggle" aria-label="Add to wishlist" data-id="${p.id}">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
                <a href="${p.url}" class="product-image" target="_blank">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                    <div class="product-overlay">
                        <button class="btn btn-primary btn-sm quick-add" data-product="${p.id}" onclick="event.preventDefault(); event.stopPropagation();">Add to Cart</button>
                        <a href="${p.url}" class="btn btn-outline btn-sm" target="_blank">Quick View</a>
                    </div>
                </a>
                <div class="product-info">
                    <div class="product-category">${p.category}</div>
                    <h3 class="product-name"><a href="${p.url}" target="_blank">${p.name}</a></h3>
                    <div class="product-rating">
                        <div class="stars">${getStars(p.rating)}</div>
                        <span class="rating-count">(${p.reviews.toLocaleString()})</span>
                    </div>
                    <div class="product-pricing">
                        <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
                        ${originalHTML}
                        ${savingsHTML}
                    </div>
                    ${urgencyHTML}
                </div>
            </div>`;
        }).join('');

        // Re-bind event listeners
        bindProductEvents();
    }

    function getBadgeHTML(badge, discount) {
        let html = '';
        if (badge === 'bestseller') html += '<span class="badge-bestseller">🏆 BESTSELLER</span>';
        if (badge === 'trending') html += '<span class="badge-trending">🔥 TRENDING</span>';
        if (badge === 'new') html += '<span class="badge-new">NEW</span>';
        if (badge === 'premium') html += '<span class="badge-premium">💎 PREMIUM</span>';
        if (discount > 15) html += `<span class="badge-sale">-${discount}%</span>`;
        return html;
    }

    function getStars(rating) {
        const full = Math.floor(rating);
        let s = '';
        for (let i = 0; i < full; i++) s += '⭐';
        return s;
    }

    function getUrgencyHTML(p) {
        if (p.stock <= 3) {
            return `<div class="product-urgency"><span class="urgency-dot"></span>Only ${p.stock} left — order soon!</div>`;
        }
        if (p.sold > 80) {
            return `<div class="product-urgency selling-fast"><span class="urgency-dot"></span>🔥 ${p.sold} sold recently — selling fast!</div>`;
        }
        if (p.price <= 500) {
            return `<div class="product-meta"><span class="meta-shipping">🚚 Free Shipping on ₹500+</span></div>`;
        }
        return `<div class="product-meta"><span class="meta-shipping">🚚 Free Shipping</span></div>`;
    }

    function bindProductEvents() {
        document.querySelectorAll('.quick-add').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(parseInt(btn.dataset.product));
            });
        });
        document.querySelectorAll('.wishlist-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.classList.toggle('active');
                if (btn.classList.contains('active')) {
                    showToast('Added to wishlist ❤️');
                    const wb = document.querySelector('.wishlist-btn .badge');
                    if (wb) wb.textContent = parseInt(wb.textContent) + 1;
                }
            });
        });
    }

    // Initial render
    renderProducts(products);

    // === Cart Functions ===
    function openCart() {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeCart() {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        const existing = cart.find(item => item.id === productId);
        if (existing) existing.qty++;
        else cart.push({ ...product, qty: 1 });
        updateCart();
        showToast(`${product.name.split('—')[0].split('|')[0].trim()} added to cart!`);
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
    }

    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    };
    window.updateQty = function(productId, delta) {
        const item = cart.find(i => i.id === productId);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) { window.removeFromCart(productId); return; }
        updateCart();
    };

    function updateCart() {
        const totalItems = cart.reduce((s, i) => s + i.qty, 0);
        const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
        cartCount.textContent = totalItems;
        cartItemCount.textContent = `(${totalItems} item${totalItems !== 1 ? 's' : ''})`;
        cartTotal.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;

        const threshold = 500;
        const progress = Math.min((totalPrice / threshold) * 100, 100);
        shippingBar.style.width = `${progress}%`;
        if (totalPrice >= threshold) {
            shippingMsg.innerHTML = `🎉 You've unlocked <strong>FREE shipping!</strong>`;
            shippingBar.style.background = 'linear-gradient(90deg, #06d6a0, #34d399)';
        } else {
            shippingMsg.innerHTML = `Add <strong>₹${(threshold - totalPrice).toLocaleString('en-IN')}</strong> more for FREE shipping!`;
        }

        if (cart.length === 0) {
            cartBody.innerHTML = `<div class="cart-empty"><span class="cart-empty-icon">🛒</span><p>Your cart is empty</p><a href="#products" class="btn btn-primary btn-sm" onclick="document.getElementById('cartDrawer').classList.remove('active');document.getElementById('cartOverlay').classList.remove('active');document.body.style.overflow='';">Start Shopping</a></div>`;
            cartFooter.style.display = 'none';
        } else {
            cartFooter.style.display = '';
            cartBody.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
                        <div class="cart-item-qty">
                            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
                            <span class="qty-value">${item.qty}</span>
                            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // === Cart Events ===
    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // === Toast ===
    function showToast(message) {
        toastText.textContent = message;
        toast.classList.add('active');
        setTimeout(() => toast.classList.remove('active'), 3000);
    }

    // === Countdown Timer ===
    let totalSeconds = 6 * 3600 + 45 * 60 + 22;
    setInterval(() => {
        if (totalSeconds <= 0) totalSeconds = 6 * 3600 + 45 * 60 + 22;
        totalSeconds--;
        document.getElementById('hours').textContent = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        document.getElementById('minutes').textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        document.getElementById('seconds').textContent = String(totalSeconds % 60).padStart(2, '0');
    }, 1000);

    // === Search ===
    const searchBtn = document.querySelector('.search-btn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => searchInput.focus(), 300);
    });
    searchClose.addEventListener('click', () => searchOverlay.classList.remove('active'));
    searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) searchOverlay.classList.remove('active'); });

    // Live search
    searchInput.addEventListener('input', () => {
        const q = searchInput.value.toLowerCase().trim();
        if (q.length < 2) return;
        const results = products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
        if (results.length > 0) {
            renderProducts(results);
            searchOverlay.classList.remove('active');
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { searchOverlay.classList.remove('active'); closeCart(); }
    });

    // === Category Nav ===
    document.querySelectorAll('.nav-link[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const cat = link.dataset.category;
            if (cat === 'All') renderProducts(products);
            else renderProducts(products.filter(p => p.category === cat));
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // === Mobile Menu ===
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const spans = menuToggle.querySelectorAll('span');
        if (mainNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        }
    });

    // === Scroll Top ===
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
        const header = document.querySelector('.header');
        header.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.06)' : 'none';
    });
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // === Price Range ===
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    if (priceRange) {
        priceRange.addEventListener('input', () => {
            const v = parseInt(priceRange.value);
            priceValue.textContent = `₹${v.toLocaleString('en-IN')}`;
        });
    }

    // === Sort ===
    document.getElementById('sortSelect').addEventListener('change', function() {
        let sorted = [...products];
        switch (this.value) {
            case 'price-low': sorted.sort((a, b) => a.price - b.price); break;
            case 'price-high': sorted.sort((a, b) => b.price - a.price); break;
            case 'rating': sorted.sort((a, b) => b.rating - a.rating); break;
            case 'newest': sorted.sort((a, b) => b.id - a.id); break;
            case 'discount': sorted.sort((a, b) => {
                const dA = a.originalPrice ? (1 - a.price / a.originalPrice) : 0;
                const dB = b.originalPrice ? (1 - b.price / b.originalPrice) : 0;
                return dB - dA;
            }); break;
        }
        renderProducts(sorted);
        showToast(`Sorted by: ${this.options[this.selectedIndex].text}`);
    });

    // === View Toggle ===
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            productGrid.style.gridTemplateColumns = btn.dataset.view === 'list' ? '1fr' : '';
        });
    });

    // === Newsletter ===
    const nf = document.getElementById('newsletterForm');
    if (nf) nf.addEventListener('submit', (e) => { e.preventDefault(); showToast('🎉 Welcome! Check your email for 15% OFF code.'); nf.reset(); });

    // === Filter Toggle (mobile) ===
    const filterToggle = document.getElementById('filterToggle');
    const sidebar = document.getElementById('sidebar');
    if (filterToggle) filterToggle.addEventListener('click', () => sidebar.classList.toggle('active'));

    // === Clear Filters ===
    document.getElementById('clearFilters').addEventListener('click', () => {
        document.querySelectorAll('.filter-option input').forEach(cb => cb.checked = false);
        if (priceRange) { priceRange.value = 21999; priceValue.textContent = '₹21,999'; }
        renderProducts(products);
        showToast('Filters cleared');
    });

    // === Search Tags ===
    document.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', () => { searchInput.value = tag.textContent; searchInput.dispatchEvent(new Event('input')); });
    });

    // === Live Viewers Update ===
    setInterval(() => {
        const el = document.getElementById('liveViewers');
        if (el) el.textContent = `${30 + Math.floor(Math.random() * 20)} people`;
    }, 8000);

    // === Purchase Notifications (Social Proof) ===
    const names = ['Priya S.', 'Rahul K.', 'Ananya M.', 'Suresh P.', 'Meera T.', 'Kiran R.', 'Deepa V.', 'Arjun B.'];
    const cities = ['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Pune', 'Vizag', 'Kochi'];

    function showPurchaseNotif() {
        const name = names[Math.floor(Math.random() * names.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];
        const prod = products[Math.floor(Math.random() * products.length)];
        const mins = Math.floor(Math.random() * 30) + 1;

        const notif = document.createElement('div');
        notif.style.cssText = `position:fixed;bottom:24px;left:24px;background:white;border-radius:14px;padding:12px 16px;box-shadow:0 8px 32px rgba(0,0,0,0.12);z-index:100;display:flex;align-items:center;gap:12px;font-size:13px;max-width:340px;transform:translateX(-120%);transition:transform 0.5s cubic-bezier(0.4,0,0.2,1);border:1px solid #e5e7eb;`;
        notif.innerHTML = `
            <img src="${prod.image}" style="width:48px;height:48px;border-radius:8px;object-fit:cover;" alt="">
            <div><strong>${name}</strong> from ${city}<br><span style="color:#6b7280;font-size:12px;">Bought ${prod.name.split('—')[0].split('|')[0].trim()} — ${mins}m ago</span></div>`;
        document.body.appendChild(notif);
        requestAnimationFrame(() => notif.style.transform = 'translateX(0)');
        setTimeout(() => { notif.style.transform = 'translateX(-120%)'; setTimeout(() => notif.remove(), 500); }, 5000);
    }

    setTimeout(() => { showPurchaseNotif(); setInterval(showPurchaseNotif, 25000 + Math.random() * 20000); }, 8000);

    // === Load More ===
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            loadMoreBtn.innerHTML = '<span style="display:inline-block;width:18px;height:18px;border:2px solid #ccc;border-top-color:#333;border-radius:50%;animation:spin 0.6s linear infinite;"></span> Loading...';
            const style = document.createElement('style');
            style.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
            document.head.appendChild(style);
            setTimeout(() => {
                showToast('All products loaded!');
                loadMoreBtn.textContent = 'All products shown';
                loadMoreBtn.disabled = true;
                loadMoreBtn.style.opacity = '0.5';
            }, 1500);
        });
    }
});
