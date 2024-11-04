import React from 'react';

export const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 py-10 px-4">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-10 text-center">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">
                        Hi, how can we help you?
                    </h2>
                    <p className="text-base text-gray-600 md:text-lg mb-8">
                        Contact us with your inquiries, and we’ll get back to you as soon as possible.
                    </p>
                    <form className="flex flex-col items-center w-full md:flex-row md:px-5">
                        <input
                            placeholder="Enter your email"
                            required
                            type="email"
                            className="flex-grow w-full h-12 px-4 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg md:mr-2 md:mb-0 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent transition-shadow duration-200"
                        />
                        <button
                            className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 bg-[#6c5ce7] rounded-lg hover:bg-[#5a54c1] focus:shadow-outline"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {/* Contact Options */}
            <div className="bg-gray-800 py-16 text-white">
                <div className="max-w-screen-xl px-4 mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4 text-center">
                    {[
                        "Friendly support, always there to help.",
                        "Quick responses within 24 hours.",
                        "Expert advice on all inquiries.",
                        "Connect with us easily anytime.",
                        "Dedicated customer service.",
                        "Reliable assistance on all issues.",
                        "Trustworthy guidance and solutions.",
                        "24/7 availability for emergencies.",
                    ].map((text, index) => (
                        <div
                            key={index}
                            className="p-8 bg-gray-900 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                        >
                            <p className="font-medium text-gray-200">{text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form Section */}
            <section className="bg-white py-16">
                <div className="max-w-lg mx-auto text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">
                        Reach Out to Us
                    </h3>
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] transition-shadow duration-200"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] transition-shadow duration-200"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] transition-shadow duration-200"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 font-semibold text-white bg-[#6c5ce7] rounded-lg hover:bg-[#5a54c1] transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
