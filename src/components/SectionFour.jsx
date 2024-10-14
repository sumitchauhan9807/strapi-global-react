import { baseUrl } from 'src/helpers'

export const SectionFour = ({data}) => {
  // console.log(data,"data")
  // if(!data?.data) return
  const {Heading ,Images,Lists,SubHeading } = data 

    return (
        <div className="bg-gray-50">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-50">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-gray-800 uppercase rounded-full bg-gray-300">
              Brand New
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-5xl font-sans leading-tight tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {Heading}
             
          </h2>
          <p className="text-lg text-gray-700">
            {SubHeading}
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-10 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg transition duration-300 transform hover:scale-105 hover:grayscale-0 grayscale"
              src={baseUrl()+ Images[0].url}
              alt=""
            />
            {Images.map((image,index)=>{
              if(index == 0 ) return
              return (
                <img
                key={image.id}
                  className="object-cover w-full h-48 rounded shadow-lg transition duration-300 transform hover:scale-105 hover:grayscale-0 grayscale"
                  src={baseUrl()+ image.url}
                  alt=""
                />
              )
            })}
            
            
          </div>
          <div className="flex flex-col justify-center">
            {Lists.map((list)=>{
              return (
              <div key={list.id} className="pb-4 mb-4 border-b border-gray-300">
                <h6 className="mb-2 font-semibold text-lg leading-5 text-gray-900">
                  {list.Heading}
                </h6>
                <p className="text-sm text-gray-700">
                {list.SubHeading}
                </p>
              </div>
              )
            })}
          </div>
        </div>
      </div></div>
    );
  };
  export default SectionFour;  