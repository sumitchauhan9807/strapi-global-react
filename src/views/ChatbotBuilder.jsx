import React from "react";
import chatbot2 from "../assets/images/chatbot2.gif"


const ChatBotbuilder = () => {
    return (
        <div className="flex items-center justify-center p-10 bg-gray-50 rounded-lg">

            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid items-center justify-center lg:grid-cols-2 grid-cols-1">
                    {/* <img src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="absolute inset-0 z-0 object-cover w-full h-56" alt="" /> */}
                    <div className="flex-1 ">
                        <img src={chatbot2} alt="Robot" className="w-full h-full max-w-xl transition duration-300 transform hover:scale-105 hover:grayscale-0 grayscale" />
                    </div>
                    <div className="flex-2 p-6">
                        <h3 className="text-blue-500 uppercase font-bold text-sm">Solution</h3>
                        <h1 className="text-5xl font-semi-bold text-gray-800 mt-2 mb-4">Chatbot builder</h1>
                        <p className="text-gray-600 text-lg mb-4 font-sans">
                            Software product which automates call center together with Virtual ChatBotbuilder services:
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
                            <div className="border-2 shadow-2xl  px-6 py-4 rounded-lg gap-3"> <span className="text-xl font-sans uppercase text-gray-800">from $19.99/mo</span>
                                <button className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded transition duration-300">
                                    BUY NOW
                                </button></div>
                        </div>
                    </div>
                </div>
                <div className="p-8 rounded shadow-xl sm:p-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                ncrease average conversion rate!
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                                perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
                                error sit voluptatem accusantium doloremque rem aperiam.
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>

                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-10">
                    <h2 className="max-w-lg mb-6 font-sans text-2xl font-semi-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        {' '}
                        Automated call to automate
                        outgoing calls and conversations.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Transactional automated calls.
                    </p>
                </div>
                <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                A flower in my garden, a mystery in my panties. Heart attack never
                                stopped old Big Bear.
                            </p>
                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Rough pomfret lemon shark plownose chimaera southern sandfish
                                kokanee northern sea.
                            </p>
                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                A slice of heaven. O for awesome, this chocka full cuzzie is as
                                rip-off as a cracker.
                            </p>
                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">A slice of heaven</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Disrupt inspire and think tank, social entrepreneur but
                                preliminary thinking think tank compelling.
                            </p>
                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>


                <div className="grid gap-12 row-gap-8 lg:grid-cols-2 py-24">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Heading goes here
             
            </h2>
            {/* <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p> */}
          </div>
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                I'll be sure to note that in my log
              </h6>
              <p className="text-sm text-gray-900">
                Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly got in a gaum
                Powrtland stove up dooryahd
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Iterative approaches to corporate strategy
              </h6>
              <p className="text-sm text-gray-900">
                A slice of heaven. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://kompaas.tech/img/pages/chatbot-builder/advs__robot-with-plus.svg"
            alt=""
          />
        </div>
      </div>
                
                
                
                
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>

                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        {' '}
                        pricing. Pay as you grow.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>


                
                <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
                    <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                <div>
                                    <p className="text-sm font-bold tracking-wider uppercase">
                                        Personal use
                                    </p>
                                    <p className="text-5xl font-extrabold">Free</p>
                                </div>
                                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                                    <svg
                                        className="w-10 h-10 text-gray-600"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <path
                                            d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                                            fill="none"
                                            stroke="currentColor"
                                        />
                                        <path
                                            d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                                            fill="none"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="mb-2 font-bold tracking-wide">Features</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <svg
                                                className="w-4 h-4 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            10 deploys per day
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <svg
                                                className="w-4 h-4 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-800">10 GB of storage</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <svg
                                                className="w-4 h-4 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-800">Unlimited domains</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <svg
                                                className="w-4 h-4 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-800">SSL Certificates</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                            >
                                Start for free
                            </a>
                            <p className="text-sm text-gray-600">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                <div>
                                    <p className="text-sm font-bold tracking-wider uppercase">
                                        For your team
                                    </p>
                                    <p className="text-5xl font-extrabold">$39</p>
                                </div>
                                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-10 h-10 text-deep-purple-accent-400"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <path
                                            d="M4,7L4,7 C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C6,6.105,5.105,7,4,7z"
                                            fill="none"
                                            stroke="currentColor"
                                        />
                                        <path
                                            d="M6,21H3v-4 l-2,0v-5c0-1.105,0.895-2,2-2h1"
                                            fill="none"
                                            stroke="currentColor"
                                        />
                                        <path
                                            d="M20,7L20,7 c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2h0c-1.105,0-2,0.895-2,2v0C18,6.105,18.895,7,20,7z"
                                            fill="none"
                                            stroke="currentColor"
                                        />
                                        <path
                                            d="M18,21h3v-4 l2,0v-5c0-1.105-0.895-2-2-2h-1"
                                            fill="none"
                                            stroke="currentColor"
                                        />
                                        <path
                                            d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                                            fill="none"
                                            stroke="currentColor"
                                        />
                                        <path
                                            d="M15,23H9v-6H7v-5 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                                            fill="none"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="mb-2 font-bold tracking-wide">Features</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <svg
                                                className="w-4 h-4 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-800">Unlimited deploys</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <svg
                                                className="w-4 h-4 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            Up to 10 Team Members
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <svg
                                                className="w-4 h-4 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-800">100 GB of starge</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <svg
                                                className="w-4 h-4 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-800">24/7 support</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <svg
                                                className="w-4 h-4 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-800">Global CDN</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </a>
                            <p className="text-sm text-gray-600">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChatBotbuilder;
