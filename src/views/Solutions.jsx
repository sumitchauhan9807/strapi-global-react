

export default function Solutions() {
    return (
        <>
            <section className="grid grid-cols-2">
                <figure></figure>
                <div className="flex flex-col">
                    <small>SOLUTION</small>
                    <span className="text-3xl font-semibold my-4">Phone numbers for corporate customers</span>
                    <p className="text-base font-light">2 phone number types in order to catch the clients</p>
                    <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8">BUY NOW</button>
                </div>
            </section>
            <section className="grid grid-cols-2 gap-8 my-16 max-w-[1280px] mx-auto bg-[#fafafa] p-8">
                <figure className="border"></figure>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-semibold my-4">How to choose telecommunication operator for your business?</h3>
                    <p className="text-base font-light my-4">
                        The choice often depends on such small things, for example that it should be easily accessible, or that the phone number is easy to remember based on its advertising, or that it can be called free of charge from anywhere in the country.
                    </p>
                </div>
            </section>
            <section className="flex flex-col max-w-[1280px] mx-auto">
                <h4 className="flex font-bold text-2xl mx-auto my-8">We connect a business phone number</h4>
                <section className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col p-16 bg-[#fafafa]">
                        <span className="text-xl font-bold my-4">Unified toll-free number service</span>
                        <p>
                            You and not your customer pay for calls to these numbers. Therefore, you will be available by phone from any city, and your customer has no problem with the price of the call.
                        </p>
                        <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8" >READ MORE</button>
                    </div>
                    <div className="flex flex-col bg-[#fafafa] p-16">
                        <span className="text-xl font-bold my-4">Fancy phone number to strengthen the company's</span>
                        <p>
                            Your phone number will be easy to remember, they will call you without looking for your website first, avoiding its rating and comparison with competitors.
                        </p>
                        <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8">READ MORE</button>
                    </div>
                </section>
            </section>
        </>
    )
}
