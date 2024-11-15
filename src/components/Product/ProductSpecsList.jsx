function ProductSpecsList({data}){ 
  return (
    <>
     <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-10">
          <h2 className="max-w-lg mb-6 font-sans text-2xl font-semi-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {data.Heading}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          {data.SubHeading}
          </p>
        </div>
        
        <div className="max-w-screen-lg sm:mx-auto">
        {data.ProductSpecs.map((item,index)=>{
          return (
            <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
              {item.Heading}
              </h5>
              <div className="relative pr-8">
                <p className="text-base text-gray-700 md:text-lg">
                {item.SubHeading}
                </p>
              </div>
            </div>
            <div className="flex justify-start w-56 lg:justify-end">
              {/* <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a> */}
            </div>
          </div>
          )
        })}
      </div> 
    </>
  )
}

export default ProductSpecsList