const products = {
    // Fresh Fruit Juices
    'annar-juice': {
        id: 'annar-juice',
        name: 'Annar Juice',
        category: 'fresh-fruit-juices',
        image: 'Product images/Fresh Fruit Juices/Annar Juice.png',
        desc: 'Freshly extracted pomegranate juice full of antioxidants.',
        popularity: 90,
        badge: 'FRESH',
        variations: {
            '150ML': 60,
            '300ML': 110
        }
    },
    'mosami-juice': {
        id: 'mosami-juice',
        name: 'Mosami Juice',
        category: 'fresh-fruit-juices',
        image: 'Product images/Fresh Fruit Juices/Mosami Juice.png',
        desc: 'Sweet and tangy mosami juice for instant energy.',
        popularity: 88,
        variations: {
            '150ML': 50,
            '300ML': 90
        }
    },
    'orange-juice': {
        id: 'orange-juice',
        name: 'Orange Juice',
        category: 'fresh-fruit-juices',
        image: 'Product images/Fresh Fruit Juices/Orange Juice.png',
        desc: 'Pure, squeezed orange juice loaded with Vitamin C.',
        popularity: 95,
        badge: 'BEST SELLER',
        variations: {
            '150ML': 55,
            '300ML': 100
        }
    },
    'pineapple-juice': {
        id: 'pineapple-juice',
        name: 'Pineapple Juice',
        category: 'fresh-fruit-juices',
        image: 'Product images/Fresh Fruit Juices/Pineapple Juice.png',
        desc: 'Refreshing tropical pineapple juice.',
        popularity: 85,
        variations: {
            '150ML': 50,
            '300ML': 90
        }
    },
    'tarbuj-juice': {
        id: 'tarbuj-juice',
        name: 'Tarbuj Juice',
        category: 'fresh-fruit-juices',
        image: 'Product images/Fresh Fruit Juices/Tarbuj Juice.png',
        desc: 'Hydrating watermelon juice, perfect for summer.',
        popularity: 92,
        badge: 'SUMMER SPECIAL',
        variations: {
            '150ML': 45,
            '300ML': 80
        }
    },

    // Healthy & Detox Juices
    'alovera-juice': {
        id: 'alovera-juice',
        name: 'Alovera Juice',
        category: 'healthy-detox',
        image: 'Product images/Healthy & Detox Juices/Alovera Juice.png',
        desc: 'Pure aloe vera extract for digestion and glowing skin.',
        popularity: 70,
        badge: 'DETOX',
        variations: {
            '150ML': 40,
            '300ML': 70
        }
    },
    'amla-juice': {
        id: 'amla-juice',
        name: 'Amla Juice',
        category: 'healthy-detox',
        image: 'Product images/Healthy & Detox Juices/Amla Juice.png',
        desc: 'Immunity boosting Indian gooseberry juice.',
        popularity: 75,
        variations: {
            '150ML': 40,
            '300ML': 70
        }
    },
    'beetroot-juice': {
        id: 'beetroot-juice',
        name: 'Beetroot Juice',
        category: 'healthy-detox',
        image: 'Product images/Healthy & Detox Juices/Beetroot Juice.png',
        desc: 'Rich beetroot juice for heart health and stamina.',
        popularity: 82,
        badge: 'HEALTHY',
        variations: {
            '150ML': 50,
            '300ML': 90
        }
    },
    'carrot-juice': {
        id: 'carrot-juice',
        name: 'Carrot Juice',
        category: 'healthy-detox',
        image: 'Product images/Healthy & Detox Juices/Carrot Juice.png',
        desc: 'Fresh carrot juice packed with Vitamin A.',
        popularity: 80,
        variations: {
            '150ML': 45,
            '300ML': 85
        }
    },
    'green-juice': {
        id: 'green-juice',
        name: 'Green Juice',
        category: 'healthy-detox',
        image: 'Product images/Healthy & Detox Juices/Green Juice.png',
        desc: 'A powerful blend of green vegetables for complete detox.',
        popularity: 85,
        badge: 'SUPERFOOD',
        variations: {
            '150ML': 60,
            '300ML': 110
        }
    },

    // Milk Shakes
    'banana-shake': {
        id: 'banana-shake',
        name: 'Banana Shake',
        category: 'milk-shakes',
        image: 'Product images/Milk Shakes/Banana Shake.png',
        desc: 'Classic creamy and thick banana milk shake.',
        popularity: 88,
        variations: {
            '150ML': 60,
            '300ML': 110
        }
    },
    'chocolate-shake': {
        id: 'chocolate-shake',
        name: 'Chocolate Shake',
        category: 'milk-shakes',
        image: 'Product images/Milk Shakes/Chocolate Shake (1).png',
        desc: 'Rich and indulgent chocolate milk shake.',
        popularity: 96,
        badge: 'POPULAR',
        variations: {
            '150ML': 70,
            '300ML': 130
        }
    },
    'dry-fruit-shake': {
        id: 'dry-fruit-shake',
        name: 'Dry Fruit Shake',
        category: 'milk-shakes',
        image: 'Product images/Milk Shakes/Dry Fruit Shake (2).png',
        desc: 'Nutrient-rich shake loaded with mixed dry fruits.',
        popularity: 90,
        badge: 'PREMIUM',
        variations: {
            '150ML': 90,
            '300ML': 160
        }
    },
    'mango-shake': {
        id: 'mango-shake',
        name: 'Mango Shake',
        category: 'milk-shakes',
        image: 'Product images/Milk Shakes/Mango shake.png',
        desc: 'Sweet and creamy Alphonso mango milk shake.',
        popularity: 98,
        badge: 'BEST SELLER',
        variations: {
            '150ML': 80,
            '300ML': 140
        }
    },
    'strawberry-shake': {
        id: 'strawberry-shake',
        name: 'Strawberry Shake',
        category: 'milk-shakes',
        image: 'Product images/Milk Shakes/Strawbarry Shake (3).png',
        desc: 'Deliciously pink and creamy strawberry shake.',
        popularity: 92,
        variations: {
            '150ML': 75,
            '300ML': 135
        }
    },

    // Smoothies
    'banana-peanut-smoothie': {
        id: 'banana-peanut-smoothie',
        name: 'Banana Peanut Smoothie',
        category: 'smoothies',
        image: 'Product images/Smoothies Category/Banana Penut Smoothies.png',
        desc: 'High-protein blend of bananas and peanut butter.',
        popularity: 85,
        badge: 'PROTEIN',
        variations: {
            '150ML': 80,
            '300ML': 140
        }
    },
    'blueberry-smoothie': {
        id: 'blueberry-smoothie',
        name: 'Blueberry Smoothie',
        category: 'smoothies',
        image: 'Product images/Smoothies Category/Bluebarry Smoothie.png',
        desc: 'Antioxidant-rich creamy blueberry smoothie.',
        popularity: 88,
        variations: {
            '150ML': 85,
            '300ML': 150
        }
    },
    'mango-smoothie': {
        id: 'mango-smoothie',
        name: 'Mango Smoothie',
        category: 'smoothies',
        image: 'Product images/Smoothies Category/Mango Smoothie.png',
        desc: 'Thick, tropical, and fulfilling mango smoothie.',
        popularity: 94,
        badge: 'NEW',
        variations: {
            '150ML': 90,
            '300ML': 160
        }
    },
    'mix-fruits-smoothie': {
        id: 'mix-fruits-smoothie',
        name: 'Mix Fruits Smoothie',
        category: 'smoothies',
        image: 'Product images/Smoothies Category/Mix fruits Smoothie.png',
        desc: 'A vibrant blend of fresh seasonal fruits.',
        popularity: 90,
        variations: {
            '150ML': 85,
            '300ML': 150
        }
    },
    'strawberry-smoothie': {
        id: 'strawberry-smoothie',
        name: 'Strawberry Smoothie',
        category: 'smoothies',
        image: 'Product images/Smoothies Category/Strawbarry Smoothies.png',
        desc: 'Refreshing and thick strawberry smoothie.',
        popularity: 89,
        variations: {
            '150ML': 80,
            '300ML': 140
        }
    }
};

// Global active variations state for the UI
// Stores { productId: '150ML' or '300ML' }
let activeVariations = {};

Object.keys(products).forEach(key => {
    activeVariations[key] = '150ML'; // Default to 150ML
});
