import { baseUrl } from 'src/helpers'

function ProductDescription({data}) {
  return(
    <>
    <div className="flex items-center justify-center">
          <div className="flex-1 ">
            <img src={baseUrl() + data.Image.url} alt="Robot" className="w-full max-w-xs" />
          </div>
          <div className="flex-2 p-6">
            <h3 className="text-blue-500 uppercase font-bold text-sm">Product</h3>
            <h1 className="text-5xl font-semi-bold text-gray-800 mt-2 mb-4">{data.ProductName}</h1>
            <p className="text-gray-600 text-lg mb-4 font-sans ">
            {data.ProductDescription}
            </p>
            <ul className="list-none space-y-2 text-gray-700 grid lg:grid-cols-2 grid-cols-1 font-sans ">
              {data.ProductSpecs.map((list)=>{
                return  <li key={list.id}>{list.text}</li>
              })}
            </ul>
            <div className="flex items-center gap-6 mt-6 ">
              <div className="border-2 shadow-2xl  px-6 py-4 rounded-lg gap-3"> 
              <span className="text-xl font-sans uppercase text-gray-800">+44 Start $0.99/mo</span> <br/>
                <center><button className="bg-gray-600 hover:bg-gray-500 pr-5 text-white py-2 px-4 rounded transition duration-300 mt-2">
                  BUY NOW
                </button></center>
                </div>
            </div>
          </div>
        </div> 
    </>
  )
}

export default ProductDescription