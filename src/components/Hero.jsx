import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">Brand Collective</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 text-4xl sm:text-6xl md:text-7xl">Best Snowboards</p>
      </h1>
      <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        Browse Our Collections
      </h2>
      <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
        <Link to='/collections/hydrogen' className="w-[120px] inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-300 hover:text-black hover:transition-all hover:ease-in hover:delay-75">
          Hydrogen
        </Link>
        <Link to='/collections/neon' className="w-[120px] inline-flex items-center justify-center border-solid border-2 border-black px-6  py-3 rounded-md font-semibold text-gray-900 hover:bg-gray-300 hover:border-gray-300 hover:transition-all hover:ease-in hover:delay-75">
          Neon
        </Link>
      </div>
    </div>
  )
}
