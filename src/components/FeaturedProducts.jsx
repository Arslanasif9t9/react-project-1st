import ProductCard from "./ProductCard";

function FeaturedProducts() {

    const allProducts = [
        {
            id: 1,
            title: "Wireless Headphones",
            price: 59.99,
            category: "Electronics",
            rating: 4.5,
            stock: 20,
            src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            description: "High quality wireless headphones with noise cancellation."
        },
        {
            id: 2,
            title: "Smart Watch",
            price: 89.99,
            category: "Electronics",
            rating: 4.3,
            stock: 15,
            src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            description: "Stylish smart watch with health tracking features."
        },
        {
            id: 3,
            title: "Gaming Mouse",
            price: 35.50,
            category: "Accessories",
            rating: 4.7,
            stock: 30,
            src: "https://images.unsplash.com/photo-1527814050087-3793815479db",
            description: "RGB gaming mouse with high precision sensor."
        },
        {
            id: 4,
            title: "Laptop Backpack",
            price: 42.00,
            category: "Bags",
            rating: 4.4,
            stock: 18,
            src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            description: "Water resistant backpack for laptops and travel."
        },
        {
            id: 5,
            title: "Bluetooth Speaker",
            price: 49.99,
            category: "Electronics",
            rating: 4.6,
            stock: 25,
            src: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
            description: "Portable Bluetooth speaker with deep bass sound."
        },
        {
            id: 6,
            title: "Running Shoes",
            price: 74.99,
            category: "Fashion",
            rating: 4.2,
            stock: 12,
            src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            description: "Comfortable running shoes for daily workouts."
        },
        {
            id: 7,
            title: "DSLR Camera",
            price: 499.99,
            category: "Photography",
            rating: 4.8,
            stock: 8,
            src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
            description: "Professional DSLR camera with 4K video recording."
        },
        {
            id: 8,
            title: "Office Chair",
            price: 129.99,
            category: "Furniture",
            rating: 4.5,
            stock: 10,
            src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            description: "Ergonomic office chair for maximum comfort."
        }
    ];

    const showButton = allProducts.length > 6;

    return (
        <section className="py-16 px-10 bg-gray-100">

            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">
                    Featured Products
                </h1>

                <p className="text-gray-500 mt-3">
                    Discover our latest trending products
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

                {allProducts.map((product) => {
                    if (product.id >= 7) return null;

                    return (
                        <ProductCard
                            key={product.id}
                            prod={product}
                        />
                    );
                })}

            </div>

            {/* Button */}
            {showButton && (
                <div className="flex justify-center mt-12">
                    <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                        View All Products
                    </button>
                </div>
            )}

        </section>
    )
}

export default FeaturedProducts;