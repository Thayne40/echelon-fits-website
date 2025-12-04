let cart = [];
let currentFilter = 'all';

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`${page}-page`).classList.add('active');
    window.scrollTo(0, 0);
    document.getElementById('mobile-menu').classList.add('hidden');
    
    if (page === 'memberships') loadMemberships();
    if (page === 'classes') loadClasses();
    if (page === 'programs') loadPrograms();
    if (page === 'shop') loadProducts();
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('active');
}

const memberships = [
    { name: 'Basic', price: 20, color: '#4B5563', features: ['Access 6AM-10PM', 'Cardio equipment', 'Strength training', 'Locker access', '1 guest pass/month'] },
    { name: 'Standard', price: 40, color: '#1E3A8A', popular: true, features: ['24/7 access', 'All Basic features', 'Unlimited classes', '3 guest passes', 'Towel service', '10% merch discount'] },
    { name: 'Premium', price: 60, color: '#1E40AF', features: ['24/7 access', 'All Standard features', '2 PT sessions/month', '5 guest passes', 'Premium locker', '15% discount'] },
    { name: 'VIP', price: 100, color: '#D97706', features: ['Private entrance', 'All Premium features', '8 PT sessions/month', 'Unlimited guests', 'Luxury locker', '25% discount', 'VIP lounge', 'Massage therapy'] }
];

function loadMemberships() {
    const container = document.getElementById('membership-container');
    container.innerHTML = memberships.map(tier => `
        <div class="relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all" style="background: linear-gradient(135deg, ${tier.color}, ${tier.color}dd);">
            ${tier.popular ? '<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>' : ''}
            <div class="text-white">
                <h3 class="text-2xl font-bold mb-2">${tier.name}</h3>
                <div class="mb-6"><span class="text-5xl font-bold">$${tier.price}</span><span class="text-lg">/month</span></div>
                <ul class="space-y-3 mb-8">${tier.features.map(f => `<li class="flex items-start"><span class="mr-2">✓</span><span class="text-sm">${f}</span></li>`).join('')}</ul>
                <button class="w-full bg-white text-blue-900 py-3 rounded-lg font-semibold hover:bg-gray-100">Get Started</button>
            </div>
        </div>
    `).join('');
}

const classes = [
    { name: 'HIIT Training', time: '6:00 AM', instructor: 'Sarah Johnson', spots: 12, difficulty: 'Advanced' },
    { name: 'Strength & Power', time: '7:30 AM', instructor: 'Mike Thompson', spots: 8, difficulty: 'Intermediate' },
    { name: 'Yoga Flow', time: '9:00 AM', instructor: 'Emma Davis', spots: 15, difficulty: 'All Levels' },
    { name: 'Spin Class', time: '12:00 PM', instructor: 'Chris Martinez', spots: 3, difficulty: 'Intermediate' },
    { name: 'Boxing', time: '5:00 PM', instructor: 'Jordan Lee', spots: 10, difficulty: 'Beginner' },
    { name: 'Olympic Lifting', time: '6:30 PM', instructor: 'Alex Rodriguez', spots: 6, difficulty: 'Advanced' }
];

function loadClasses() {
    const container = document.getElementById('classes-container');
    container.innerHTML = classes.map(cls => `
        <div class="bg-white rounded-xl p-6 shadow-lg">
            <div class="flex justify-between items-start mb-4">
                <div><h3 class="text-xl font-bold mb-1">${cls.name}</h3><p class="text-sm text-gray-600">${cls.instructor}</p></div>
                <span class="px-3 py-1 rounded-full text-xs font-semibold ${cls.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' : cls.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}">${cls.difficulty}</span>
            </div>
            <div class="flex items-center text-gray-600 mb-4"><span class="text-sm">🕐 ${cls.time}</span></div>
            <div class="flex justify-between items-center">
                <span class="text-sm font-semibold ${cls.spots < 5 ? 'text-red-600' : 'text-green-600'}">${cls.spots} spots left</span>
                <button class="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-800">Book Now</button>
            </div>
        </div>
    `).join('');
}

const programs = [
    { name: '12-Week Transformation', description: 'Complete body transformation combining strength, nutrition, and accountability', duration: '12 weeks', difficulty: 'All Levels', includes: ['3x weekly training', 'Meal plans', 'Progress tracking', 'Body analysis'] },
    { name: 'Strength Builder', description: 'Build serious strength with progressive overload principles', duration: '8 weeks', difficulty: 'Intermediate-Advanced', includes: ['4x weekly sessions', 'Strength testing', 'Video analysis', 'Supplement guide'] },
    { name: 'Athletic Performance', description: 'Enhance speed, agility, and explosive power', duration: '10 weeks', difficulty: 'Advanced', includes: ['Sport-specific training', 'Plyometrics', 'Speed drills', 'Performance metrics'] },
    { name: 'Weight Loss Challenge', description: 'Sustainable fat loss through training and nutrition', duration: '8 weeks', difficulty: 'All Levels', includes: ['Group sessions', 'Weekly check-ins', 'Meal prep guides', 'Community support'] }
];

function loadPrograms() {
    const container = document.getElementById('programs-container');
    container.innerHTML = programs.map(program => `
        <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold">${program.name}</h3>
                <span class="px-3 py-1 bg-blue-900 text-white rounded-full text-sm font-semibold">${program.duration}</span>
            </div>
            <p class="text-gray-600 mb-4">${program.description}</p>
            <div class="mb-4"><span class="inline-block px-3 py-1 bg-white rounded-full text-sm font-semibold">${program.difficulty}</span></div>
            <div class="mb-6"><p class="font-semibold mb-2">Includes:</p><ul class="space-y-2">${program.includes.map(item => `<li class="flex items-start"><span class="mr-2 text-blue-900">→</span><span class="text-sm">${item}</span></li>`).join('')}</ul></div>
            <button class="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800">Enroll Now</button>
        </div>
    `).join('');
}

const products = [
    // APPAREL
    {
        id: 1,
        name: "Echelon Fits Performance T-Shirt",
        price: 29.99,
        category: "apparel",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
        description: "Premium cotton blend, moisture-wicking",
        rating: 4.8
    },
    {
        id: 2,
        name: "Classic Logo Hoodie",
        price: 54.99,
        category: "apparel",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
        description: "Ultra-soft fleece, perfect for layering",
        rating: 4.9
    },
    {
        id: 3,
        name: "Athletic Tank Top",
        price: 24.99,
        category: "apparel",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop",
        description: "Lightweight and breathable",
        rating: 4.7
    },
    {
        id: 4,
        name: "Performance Joggers",
        price: 49.99,
        category: "apparel",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop",
        description: "Four-way stretch fabric, tapered fit",
        rating: 4.8
    },
    {
        id: 5,
        name: "Compression Shorts",
        price: 34.99,
        category: "apparel",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop",
        description: "Muscle support and flexibility",
        rating: 4.6
    },
    {
        id: 6,
        name: "Training Shorts",
        price: 32.99,
        category: "apparel",
        image: "https://images.unsplash.com/photo-1591293835940-4c1e72c9dd77?w=500&h=500&fit=crop",
        description: "Lightweight with secure pockets",
        rating: 4.7
    },
    {
        id: 7,
        name: "Snapback Hat",
        price: 24.99,
        category: "apparel",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
        description: "Embroidered logo, adjustable fit",
        rating: 4.5
    },
    {
        id: 8,
        name: "Performance Leggings",
        price: 44.99,
        category: "apparel",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop",
        description: "High-waisted, squat-proof material",
        rating: 4.9
    },
    {
        id: 9,
        name: "Sports Bra",
        price: 32.99,
        category: "apparel",
        image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?w=500&h=500&fit=crop",
        description: "Maximum support, moisture-wicking",
        rating: 4.8
    },
    {
        id: 10,
        name: "Compression Shirt",
        price: 39.99,
        category: "apparel",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
        description: "Long sleeve, temperature regulating",
        rating: 4.6
    },
    // ACCESSORIES
    {
        id: 11,
        name: "Stainless Steel Water Bottle",
        price: 19.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
        description: "32oz, keeps drinks cold for 24 hours",
        rating: 4.8
    },
    {
        id: 12,
        name: "Premium Gym Bag",
        price: 64.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
        description: "Water-resistant, multiple compartments",
        rating: 4.9
    },
    {
        id: 13,
        name: "Resistance Band Set",
        price: 29.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&h=500&fit=crop",
        description: "5 levels of resistance included",
        rating: 4.7
    },
    {
        id: 14,
        name: "Lifting Straps",
        price: 14.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
        description: "Heavy-duty cotton, reinforced stitching",
        rating: 4.8
    },
    {
        id: 15,
        name: "Workout Gloves",
        price: 19.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1556906918-e24edfcbdfb8?w=500&h=500&fit=crop",
        description: "Padded palm, breathable mesh",
        rating: 4.6
    },
    {
        id: 16,
        name: "Jump Rope",
        price: 12.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1611672585731-fa10502796c8?w=500&h=500&fit=crop",
        description: "Speed rope with ball bearings",
        rating: 4.5
    },
    {
        id: 17,
        name: "Foam Roller",
        price: 24.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=500&h=500&fit=crop",
        description: "High-density foam for muscle recovery",
        rating: 4.6
    },
    {
        id: 18,
        name: "Shaker Bottle",
        price: 9.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1607454806185-8b970661ff81?w=500&h=500&fit=crop",
        description: "BPA-free, leak-proof lid with mixer",
        rating: 4.5
    },
    {
        id: 19,
        name: "Yoga Mat",
        price: 34.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
        description: "Extra thick, non-slip surface",
        rating: 4.8
    },
    {
        id: 20,
        name: "Wrist Wraps",
        price: 16.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
        description: "Adjustable support for heavy lifts",
        rating: 4.6
    },
    {
        id: 21,
        name: "Lifting Belt",
        price: 49.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
        description: "Leather construction, double prong buckle",
        rating: 4.9
    },
    // SUPPLEMENTS
    {
        id: 22,
        name: "Whey Protein Powder",
        price: 49.99,
        category: "supplements",
        image: "https://images.unsplash.com/photo-1579722821273-0f6c7d5a8747?w=500&h=500&fit=crop",
        description: "25g protein per serving, chocolate flavor",
        rating: 4.8
    },
    {
        id: 23,
        name: "Pre-Workout Energy",
        price: 39.99,
        category: "supplements",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop",
        description: "200mg caffeine, explosive energy",
        rating: 4.7
    },
    {
        id: 24,
        name: "BCAA Recovery",
        price: 34.99,
        category: "supplements",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&h=500&fit=crop",
        description: "Amino acids for muscle recovery",
        rating: 4.6
    },
    {
        id: 25,
        name: "Creatine Monohydrate",
        price: 24.99,
        category: "supplements",
        image: "https://images.unsplash.com/photo-1579722821273-0f6c7d5a8747?w=500&h=500&fit=crop",
        description: "5g per serving, unflavored",
        rating: 4.8
    },
    {
        id: 26,
        name: "Post-Workout Recovery",
        price: 44.99,
        category: "supplements",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop",
        description: "Carbs + protein for optimal recovery",
        rating: 4.7
    },
    {
        id: 27,
        name: "Multivitamin Pack",
        price: 29.99,
        category: "supplements",
        image: "https://images.unsplash.com/photo-1550572017-4fade102c5a8?w=500&h=500&fit=crop",
        description: "Daily essential vitamins and minerals",
        rating: 4.6
    },
    {
        id: 28,
        name: "Fat Burner Capsules",
        price: 39.99,
        category: "supplements",
        image: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=500&h=500&fit=crop",
        description: "Thermogenic formula, metabolism support",
        rating: 4.5
    },
    {
        id: 29,
        name: "Electrolyte Powder",
        price: 19.99,
        category: "supplements",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&h=500&fit=crop",
        description: "Hydration support, zero sugar",
        rating: 4.7
    }
];

function loadProducts() {
    const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    const container = document.getElementById('products-container');
    container.innerHTML = filtered.map(product => `
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover-scale">
            <div class="h-48 bg-gray-100 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-1">${product.name}</h3>
                <p class="text-sm text-gray-600 mb-2">${product.description}</p>
                <div class="flex items-center mb-2"><span class="text-yellow-400 text-sm">★ ${product.rating}</span></div>
                <div class="flex items-center justify-between">
                    <span class="text-xl font-bold text-blue-900">$${product.price}</span>
                    <button onclick="addToCart(${product.id})" class="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-semibold">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    currentFilter = category;
    loadProducts();
    document.querySelectorAll('#shop-page .mb-8 button').forEach(btn => {
        btn.classList.remove('bg-blue-900', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700');
    });
    event.target.classList.remove('bg-white', 'text-gray-700');
    event.target.classList.add('bg-blue-900', 'text-white');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
        alert(`${product.name} added to cart!`);
    }
}

function updateCart() {
    const count = cart.length;
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');
    
    if (count > 0) {
        cartCount.classList.remove('hidden');
        cartCount.textContent = count;
    } else {
        cartCount.classList.add('hidden');
    }
    
    cartTotal.textContent = count;
    
    if (count === 0) {
        cartItems.innerHTML = '<p class="text-gray-500">Your cart is empty</p>';
    } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartItems.innerHTML = `
            <div class="space-y-4">
                ${cart.map((item, idx) => `
                    <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p class="font-semibold">${item.name}</p>
                            <p class="text-sm text-gray-600">$${item.price}</p>
                        </div>
                        <button onclick="removeFromCart(${idx})" class="text-red-600 hover:text-red-800">✕</button>
                    </div>
                `).join('')}
                <div class="pt-4 border-t">
                    <div class="flex justify-between mb-4">
                        <span class="font-bold">Total:</span>
                        <span class="font-bold text-blue-900">$${total.toFixed(2)}</span>
                    </div>
                    <button class="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800">Checkout</button>
                </div>
            </div>
        `;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.addEventListener('DOMContentLoaded', function() {
    navigateTo('home');
});
