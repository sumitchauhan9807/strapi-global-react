import { FaRegLightbulb } from "react-icons/fa";
import contactFormVectorImg from '../assets/images/contactForm.jpg'

export default function Solutions() {
    return (
        <>
            <section className="flex relative items-center w-full h-[400px] overflow-hidden border">
                <img
                    className="absolute w-full"
                    src="https://blog.bevatel.com/wp-content/uploads/2021/02/call-center-solutions-for-developing-your-business-project.jpeg"
                    alt="" />
            </section>
            {/* <div className="h-screen bg-cover bg-no-repeat" style={{ backgroundImage: 'url("")', height: '400px' }} /> */}
            <section className="grid grid-cols-2 my-16">
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
            <section className="flex justify-center max-w-[1200px] mx-auto gap-4 my-16">
                <figure>
                    <FaRegLightbulb size={56} color="blue" />
                </figure>
                <p>
                    These phone numbers are all connected to a Virtual PBX, they work everywhere there is internet access.
                    Calls between establishments are free and the cost of talking to customers is cheaper than landline or mobile phone calls.
                </p>
            </section>
            <section className="flex flex-col max-w-[1200px] items-center mx-auto gap-8">
                <h4 className="text-xl font-bold my-16">Important benefits</h4>
                <div className="flex gap-8">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="w-12 h-12 border"></span>
                        <h5 className="font-bold">Good call quality</h5>
                        <span>Phone conversations without crackling, interruptions and noise, regardless of distance.</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="w-12 h-12 border"></span>
                        <h5 className="font-bold">Good call quality</h5>
                        <span>Phone conversations without crackling, interruptions and noise, regardless of distance.</span>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="w-12 h-12 border"></span>
                        <h5 className="font-bold">Good call quality</h5>
                        <span>Phone conversations without crackling, interruptions and noise, regardless of distance.</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="w-12 h-12 border"></span>
                        <h5 className="font-bold">Good call quality</h5>
                        <span>Phone conversations without crackling, interruptions and noise, regardless of distance.</span>
                    </div>
                </div>
            </section>
            <section className="flex items-center my-32 border max-w-[1200px] mx-auto p-8 gap-8">
                <figure className="w-[600px]">
                    <img src={contactFormVectorImg} alt="" />
                </figure>
                <form>
                    <h5 className="text-2xl font-bold">Write us</h5>
                    <div className="flex flex-col">
                        <div className="flex items-center w-full my-2 gap-2">
                            <input type="text" placeholder="name" className="border w-full p-2"/>
                            <input type="text" placeholder="email" className="border w-full p-2" />
                        </div>
                        <input type="text" placeholder="phone number" className="border p-2" />
                        <button className="bg-green-600 w-max p-2 px-8 my-2 font-bold text-white">Submit</button>
                    </div>
                    <div className="flex justify-between gap-8">
                        <small className="text-gray-400 w-[60%]">
                            If you have any further questions, please call this number for a free consultation:
                        </small>
                        <small>000 000 000</small>
                    </div>
                </form>
            </section>
        </>
    )
}
