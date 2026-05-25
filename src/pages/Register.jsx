export default function Register () {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-cyan-100 flex items-center justify-center overflow-hidden relative px-6 py-10">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Floating Gradient Blobs */}
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-pink-300/40 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>

        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-cyan-300/40 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-300/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating Small Circles */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-pink-200/50 rounded-full blur-2xl animate-bounce"></div>

        <div className="absolute bottom-20 left-20 w-16 h-16 bg-cyan-200/50 rounded-full blur-2xl animate-pulse"></div>

      </div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-lg backdrop-blur-2xl bg-white/40 border border-white/50 rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-8 md:p-10 transition-all duration-500 hover:scale-[1.02]">

        {/* Heading */}
        <div className="text-center mb-8">

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent mb-3">
            Create Account ✨
          </h1>

          <p className="text-gray-600 text-sm md:text-base">
            Join us and start your beautiful journey
          </p>

        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-5 py-3 rounded-2xl bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-2xl bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-5 py-3 rounded-2xl bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-5 py-3 rounded-2xl bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Terms */}
          <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              className="accent-pink-500 w-4 h-4"
            />

            I agree to the Terms & Conditions
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 text-white font-semibold tracking-wide hover:scale-105 hover:shadow-[0_10px_30px_rgba(236,72,153,0.35)] active:scale-95 transition-all duration-500"
          >
            Register
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">

          <div className="flex-1 h-[1px] bg-gray-300"></div>

          <span className="text-gray-500 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-300"></div>

        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">

          <button className="py-3 rounded-2xl bg-white/60 border border-white/50 text-gray-700 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
            Google
          </button>

          <button className="py-3 rounded-2xl bg-white/60 border border-white/50 text-gray-700 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
            Github
          </button>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-8">

          Already have an account?

          <span className="text-cyan-500 cursor-pointer hover:text-pink-500 transition duration-300 ml-1 font-medium">
            Login
          </span>

        </p>

      </div>

      {/* Custom Floating Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>

    </div>
  );
}
