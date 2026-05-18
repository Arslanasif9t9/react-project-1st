export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wider">
            Welcome To Our Website
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Build Modern <br />
            Digital Experiences
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-xl">
            Create beautiful and responsive websites using React and
            Tailwind CSS with smooth user experience and modern UI design.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-black text-white px-7 py-3 rounded-2xl hover:bg-gray-800 transition duration-300">
              Get Started
            </button>

            <button className="border border-black text-black px-7 py-3 rounded-2xl hover:bg-black hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Hero"
            className="w-full max-w-xl rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}