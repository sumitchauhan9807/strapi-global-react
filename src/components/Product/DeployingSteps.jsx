import { baseUrl } from 'src/helpers'

function DeployingSteps({data}) {
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
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2 py-10" >
          <div className="lg:py-6 lg:pr-16">
            {data.Steps.map((step)=>{
              return (
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
                    <p className="mb-2 text-lg font-bold">{step.Heading}</p>
                    <p className="text-gray-700">
                    {step.SubHeading}
                    </p>
                  </div>
                </div>
              )
            })}
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
              className=" w-full rounded shadow-lg  "
              src={baseUrl() + data.Image.url}
              alt=""
            />
          </div>
        </div>
    </>
  )
}

export default DeployingSteps