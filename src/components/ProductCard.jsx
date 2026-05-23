function ProductCard({ prod }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 w-[300px]">
            
            {/* Product Image */}
            <div className="h-[220px] overflow-hidden">
                <img
                    src={prod.src}
                    alt={prod.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="p-4">

                {/* Category */}
                <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                    {prod.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold mt-3 text-gray-800">
                    {prod.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {prod.description}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-green-600">
                        ${prod.price}
                    </h3>

                    {/* Rating */}
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg text-sm font-semibold">
                        ⭐ {prod.rating}
                    </span>
                </div>

                {/* Stock */}
                <div className="mt-3">
                    {
                        prod.stock > 0 ? (
                            <p className="text-green-600 font-medium">
                                In Stock ({prod.stock})
                            </p>
                        ) : (
                            <p className="text-red-500 font-medium">
                                Out of Stock
                            </p>
                        )
                    }
                </div>

                {/* Button */}
                <button className="w-full mt-5 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard;