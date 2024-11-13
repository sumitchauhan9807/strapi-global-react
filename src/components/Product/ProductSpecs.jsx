import { baseUrl } from 'src/helpers'

function ProductSpecs({data}) {
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
            {data.ProductSpecs.map((item,index)=>{
              let colorStyle = () => {
                if(index == 0) return 'bg-red-400'
                if(index == 1) return 'bg-blue-400'
                if(index == 2) return 'bg-green-400'
                if(index == 3) return 'bg-purple-400'

              }
              return (
                <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                  <div className="flex items-center mb-1">
                    <span className={`flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded ${colorStyle()}`}>
                      {index + 1}
                    </span>
                    <p className="text-lg font-semibold sm:text-base">
                      {item.Heading}
                    </p>
                  </div>
                  <p className="text-sm text-gray-900">
                    {item.SubHeading}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="relative md:col-span-2 lg:col-span-2">
            <img
              className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
              src={baseUrl() + data.Image.url}
              alt=""
            />
          </div>
        </div><div className="text-center py-10">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition bg-gray-600 duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div>
    </>
  )
}

export default ProductSpecs