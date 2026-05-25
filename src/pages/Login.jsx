export default function Login() {

    return (
                
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-cyan-100 flex items-center justify-center overflow-hidden relative px-4">

                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">

                    {/* Floating Gradient Blobs */}
                    <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-pink-300/40 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>

                    <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

                    {/* Small Floating Circles */}
                    <div className="absolute top-20 right-20 w-20 h-20 bg-pink-200/50 rounded-full blur-xl animate-bounce"></div>

                    <div className="absolute bottom-20 left-20 w-16 h-16 bg-cyan-200/50 rounded-full blur-xl animate-pulse"></div>
                </div>

                {/* Glass Card */}
                <div className="relative z-10 w-full max-w-md backdrop-blur-2xl bg-white/40 border border-white/50 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 transition-all duration-500 hover:scale-[1.02]">

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                            Welcome Back ✨
                        </h1>

                        <p className="text-gray-600 mt-3 text-sm">
                            Login to continue your journey
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 mb-2 text-sm font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 shadow-sm"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 mb-2 text-sm font-medium">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-300 shadow-sm"
                            />
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="accent-pink-500" />
                                Remember me
                            </label>

                            <a
                                href="#"
                                className="hover:text-pink-500 transition duration-300"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold tracking-wide hover:scale-105 hover:shadow-xl hover:shadow-pink-300/40 active:scale-95 transition-all duration-500"
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-gray-600 text-sm mt-6">
                        Don’t have an account?
                        <span className="text-pink-500 cursor-pointer hover:text-cyan-500 transition duration-300 ml-1 font-medium">
                            Sign Up
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
        
