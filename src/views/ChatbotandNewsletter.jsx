import React from "react";
import chatbot from "../assets/images/chatbot.gif"


const ChatbotNews = () => {
    return (
        <div className="flex items-center justify-center p-10 bg-gray-50 rounded-lg">

            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid items-center justify-center lg:grid-cols-2 grid-cols-1">
                    {/* <img src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="absolute inset-0 z-0 object-cover w-full h-56" alt="" /> */}
                    <div className="flex-1 ">
                        <img src={chatbot} alt="Robot" className="w-full h-full max-w-xl transition duration-300 transform hover:scale-105 hover:grayscale-0 grayscale" />
                    </div>
                    <div className="flex-2 p-6">
                        <h3 className="text-blue-500 uppercase font-bold text-sm">Solution</h3>
                        <h1 className="text-5xl font-semi-bold text-gray-800 mt-2 mb-4">Chatbots VS newsletter</h1>
                        <p className="text-gray-600 text-lg mb-4 font-sans">
                            Software product which automates call center together with Virtual ChatbotNews services:
                        </p>
                        <ul className="list-none space-y-2 text-gray-700 grid grid-cols-2 font-sans ">
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

                <div className="max-w-screen-xl sm:mx-auto">


                    <div className="flex flex-col lg:flex-row">
                        <div className="max-w-xl pr-16 mx-auto mb-10">
                            <h5 className="mb-6 text-3xl font-sans leading-none">
                                What is the difference between the newsletter sent by Chatbot and the simple e-mail?
                            </h5>
                            <p className="mb-6 text-gray-900">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
                                omnis iste natus.
                            </p>

                        </div>
                        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                            <div className="max-w-md">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </div>
                                <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
                                <p className="text-sm text-gray-700">
                                    A flower in my garden, a mystery in my panties. Heart attack never
                                    stopped old Big Bear. I didn't even know we were calling him Big
                                    Bear.
                                </p>
                            </div>
                            <div className="max-w-md">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>

                                </div>
                                <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
                                <p className="text-sm text-gray-700">
                                    Rough pomfret lemon shark plownose chimaera southern sandfish
                                    kokanee northern sea robin Antarctic cod. Yellow-and-black
                                    triplefin.
                                </p>
                            </div>


                        </div>
                    </div>
                </div> <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-10">
                    <h2 className="max-w-lg mb-6 font-sans text-2xl font-semi-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        {' '}
                        Automated call to automate
                        outgoing calls and conversations.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Transactional automated calls.
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
                                <p className="mb-2 text-lg font-bold">Step 1</p>
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
            </div>
        </div>
    );
};

export default ChatbotNews;