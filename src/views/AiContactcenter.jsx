import useAxios from 'src/Hooks/UseAxios'
import { PageSkeleton } from 'src/components/small/Skeletons'
import { constructQueryString } from 'src/helpers'
import { useSelector } from 'react-redux'
import { useEffect ,useState } from 'react';
import ProductDescription from 'src/components/Product/ProductDescription'
import ProductSpecs from 'src/components/Product/ProductSpecs'
import DeployingSteps from 'src/components/Product/DeployingSteps'


let qs = constructQueryString([
  "Description",
  "Description.ProductSpecs",
  "Description.Image",
  "ProductSpecs",
  "ProductSpecs.ProductSpecs",
  "ProductSpecs.Image",
  "DeployingSteps",
  "DeployingSteps.Steps",
  "DeployingSteps.Image"
]);

const PhoneNumber = () => {
  const [data, setData] = useState([]);
  const language = useSelector((state) => state.language);
  const { response, loading, error } = useAxios({
    method: "get",
    url: `ai-contact-center?${qs}locale=${language.language}`,
  });
  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);
  if (loading) return <PageSkeleton />
  if (!data.data) return
  return (
    <div className="flex items-center justify-center p-10 bg-gray-50 rounded-lg">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<<<<<<< HEAD
        <div className="grid items-center justify-center lg:grid-cols-2 grid-cols-1">
          <div className="flex-1 ">
            <img src={AI} alt="Robot" className="w-full h-full max-w-xl transition duration-300 transform hover:scale-105 hover:grayscale-0 grayscale" />
          </div>
          <div className="flex-2 p-6">
            <h3 className="text-blue-500 uppercase font-bold text-sm">Product</h3>
            <h1 className="text-5xl font-semi-bold text-gray-800 mt-2 mb-4">AI Contact Center
            </h1>
            <p className="text-gray-600 text-lg mb-4 font-sans ">
            The virtual communication channel connecting the operator's <br /> telecommunications platform (CPaaS) and the client's equipment
            </p>
            <ul className="list-none space-y-2 text-gray-700 grid lg:grid-cols-2 grid-cols-1 font-sans ">
              <li>Calls automation</li>
              <li>Order confirmation</li>
              <li>Quality control</li>
              <li>Customer identification</li>
              <li>Customer base update</li>
              <li>Debt collection</li>
            </ul>
            <div className="flex items-center gap-6 mt-6 ">
              <div className="border-2 shadow-2xl  px-6 py-4 rounded-lg gap-3"> <span className="text-xl font-sans uppercase text-gray-800">1 channel $1/mo</span>
                <button className="bg-gray-600 hover:bg-gray-500 pr-5 text-white py-2 px-4 rounded transition duration-300">
                  BUY NOW
                </button></div>
            </div>
          </div>
        </div> <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-10">
          <h2 className="max-w-lg mb-6 font-sans text-2xl font-semi-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {' '}
            How does IP telephony differ from other types of communication?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          IP telephony is the latest, most widespread, inexpensive and popular type of communication for small, medium and large businesses.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-red-400">
                1
              </span>
              <p className="text-lg font-semibold sm:text-base">
              Favorable price
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Take a good look at the recipe. Don’t just skim it; read it
              through from start to finish. As you read, visualize doing the
              steps which will help when you’re prepping.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-50 rounded bg-blue-400">
                2
              </span>
              <p className="text-lg font-semibold sm:text-base">
              Mobility

              </p>
            </div>
            <p className="text-sm text-gray-900">
              All recipes are written using certain conventions, which define
              the characteristics of common ingredients. The rules vary from
              place to place.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded md:text-teal-50 bg-deep-purple-accent-400 md:bg-green-400">
                3
              </span>
              <p className="text-lg font-semibold sm:text-base">
              Convenient interface
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Check the “prep time” and “total time” listed at the top to be
              sure you have enough time to complete the recipe. Look for hints,
              such as the words “meanwhile” .
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-50 rounded md:text-white bg-teal-accent-400 md:bg-purple-400">
                4
              </span>
              <p className="text-lg font-semibold sm:text-base">Reliability</p>
            </div>
            <p className="text-sm text-gray-900">
              Missing a prep instruction can leave you scrambling in the middle
              of a recipe. Keep your eyes peeled for time-consuming steps and be
              careful.
            </p>
          </div>
        </div>
        <div className="relative md:col-span-2 lg:col-span-2">
          <img
            className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
            src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
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
     <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-10">
          <h2 className="max-w-lg mb-6 font-sans text-2xl font-semi-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {' '}
            Automated call to automate
            outgoing calls and conversations
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Transactional automated calls
          </p>
        </div>
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2 py-10" >
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Select a pricing plan</p>
                <p className="text-gray-700">
                  All recipes are written using certain conventions, which define
                  the characteristics of common ingredients. The rules vary from
                  place to place.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Step 2</p>
                <p className="text-gray-700">
                  The first mate and his Skipper too will do their very best to
                  make the others comfortable in their tropic island nest. Michael
                  Knight a young loner.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Step 3</p>
                <p className="text-gray-700">
                  Tell them I hate them. Is the Space Pope reptilian!? Tell her
                  she looks thin. Hello, little man. I will destroy you!
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Step 4</p>
                <p className="text-gray-700">
                  If one examines precultural libertarianism, one is faced with a
                  choice: either accept rationalism or conclude that context is a
                  product.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-6 text-gray-600"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="mb-2 text-lg font-bold">Success</p>
                <p className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
              Sed ut perspiciatis unde omnis iste
            </p>
          </div>
          <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
              Well, the way they make shows is
            </p>
          </div>
          <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
              Some don't, become nothing again
            </p>
          </div>
          <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
              Pommy ipsum smeg head whizz morris
            </p>
          </div>
          <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
              Taking the mick middle class bog
            </p>
          </div>
          <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
              Sportacus andrew weatherall goose
            </p>
          </div>
          <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
              Semi beard cream bun disaster alpha
            </p>
          </div>
          <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
              Bro ipsum dolor sit amet gaper dart
            </p>
          </div>
        </div>
      </div>
=======
        <ProductDescription
         data={data.data.Description}
        />
        <ProductSpecs
          data={data.data.ProductSpecs}
        />
        <DeployingSteps
        data={data.data.DeployingSteps}
        />
>>>>>>> 3a3b7e471aa028d03c76ce11bc430c136e5b0982
      </div>
    </div>
  );
};

export default PhoneNumber;
