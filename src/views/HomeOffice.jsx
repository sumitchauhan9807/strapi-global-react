import { FaRegCheckCircle } from "react-icons/fa";

export default function HomeOffice() {
    return (
        <>
            <section className="grid grid-cols-2 my-16">
                <figure></figure>
                <div className="flex flex-col">
                    <small>SOLUTION</small>
                    <span className="text-3xl font-semibold my-4">Home office</span>
                    <p className="text-base font-light">We plan, set up and turn it on in 1 day.</p>
                    <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8">BUY NOW</button>
                </div>
            </section>
            <section className="flex flex-col max-w-[1200px] items-center mx-auto gap-8">
                <h4 className="text-xl font-bold my-16">Advantages</h4>
                <div className="flex gap-8">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="w-12 h-12 border"></span>
                        <h5 className="font-bold">Flexibility</h5>
                        <span>
                            All our products are «cloud based». You don’t have to buy expensive equipment. By switching to telecommuting, you remain a participant in the company's internal network.
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="w-12 h-12 border"></span>
                        <h5 className="font-bold">Practical interface</h5>
                        <span>Phone conversations without crackling, interruptions and noise, regardless of distance.</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="w-12 h-12 border"></span>
                        <h5 className="font-bold">A unique approach</h5>
                        <span>Phone conversations without crackling, interruptions and noise, regardless of distance.</span>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center my-16">
                <h4 className="flex font-bold text-2xl mx-auto my-8">Ready solutions</h4>
                <section className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col p-16 bg-[#fafafa]">
                        <span className="text-xl font-bold my-4">Remote control of employees</span>
                        <p>
                            Phone call recording, online monitoring, cost control, complete statistics, etc., all serve to monitor employee work, phone line load, and overall network status in real-time.
                        </p>
                        <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8" >READ MORE</button>
                    </div>
                    <div className="flex flex-col bg-[#fafafa] p-16">
                        <span className="text-xl font-bold my-4">Conference talks</span>
                        <p>
                            Conference calls are used to bring all participants in the business process into one telephone connection, so that meetings can be joined from anywhere in the world, from both mobile and landline phones. To enter the conference, call the meeting organizer and dial the short ID number of the virtual meeting.
                        </p>
                        <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8">READ MORE</button>
                    </div>
                    <div className="flex flex-col bg-[#fafafa] p-16">
                        <span className="text-xl font-bold my-4">Softphone</span>
                        <p>
                            If you not only want to receive calls, but also make outgoing calls, using a softphone outside the office is very beneficial. This is a free application that mimics your phone on any device, be it a softphone, tablet or PC. By connecting the required number of virtual phone numbers, managers with softphones can contact customers, regardless of their location.
                        </p>
                        <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8">READ MORE</button>
                    </div>
                    <div className="flex flex-col bg-[#fafafa] p-16">
                        <span className="text-xl font-bold my-4">CRM integration</span>
                        <p>
                            The most important task of CRM integration is to automate business processes. By integrating the CRM system with a telephone fleet, reliable communication, efficient control and registration of call data can be arranged under one hat, all of which serve to build a quality sales "funnel".
                        </p>
                        <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8">READ MORE</button>
                    </div>
                </section>
            </section>
            <section className="flex justify-center my-16">
                <div className="flex flex-col p-4 mt-14 gap-2 mx-4">
                    <small className="flex items-center h-[200px] text-base justify-end ">Monthly fee:</small>
                    <div className="flex flex-col items-end gap-7 mt-4">
                        <small className="text-base">Fixed-line direction:</small>
                        <small className="text-base">Mobile direction:</small>
                        <small className="text-base">Additional channel:</small>
                        <small className="text-base">Number of channels:</small>
                        <small className="text-base">Auto geo replacement:</small>
                        <small className="text-base">Call management features:</small>
                        <small className="text-base">Real second billing:</small>
                    </div>
                </div>
                <section className="flex flex-col items-center gap-8">
                    <div className="flex items-center">
                        <button className="border p-2 px-4 bg-blue-200">Billed monthly</button>
                        <button className="border p-2 px-4">Billed anually</button>
                    </div>
                    <section className="flex gap-2">
                        <div className="w-[250px] bg-gray-100">
                            <div className="flex flex-col p-4 h-[200px]">
                                <h5 className="text-2xl font-bold border-b py-4">Basics</h5>
                                <span className="text-xl font-bold my-2">$1,49</span>
                                <button className="border p-2 px-4 rounded bg-blue-300 w-max my-2">Buy Now</button>
                            </div>
                            <div className="flex flex-col gap-6 text-xl font-semibold p-4">
                                <span>$0,02/minute</span>
                                <span>$0,09/minute</span>
                                <span>$0,49</span>
                                <span>1</span>
                                <span>$1,00</span>
                                <span>$0,49</span>
                                <span><FaRegCheckCircle /></span>
                            </div>
                        </div>
                        <div className="w-[250px] bg-gray-100">
                            <div className="flex flex-col p-4 h-[200px]">
                                <h5 className="text-2xl font-bold border-b py-4">Megachannel</h5>
                                <span className="text-xl font-bold my-2">$9,99</span>
                                <button className="border p-2 px-4 rounded bg-blue-300 w-max my-2">Buy Now</button>
                            </div>
                            <div className="flex flex-col gap-6 text-xl font-semibold p-4">
                                <span>$0,02/minute</span>
                                <span>$0,09/minute</span>
                                <span>$0,49</span>
                                <span>1</span>
                                <span>$1,00</span>
                                <span>$0,49</span>
                                <span><FaRegCheckCircle /></span>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <section className="flex flex-col items-center my-16">
                <h6 className="text-3xl font-bold">Activate the solution</h6>
                <span>Follow the instructions to activate the solution.</span>
                <form action="" className="flex flex-col w-[360px] my-8 gap-4">
                    <input type="text" placeholder="Your name" className="border p-2 rounded"/>
                    <input type="text" placeholder="Your email" className="border p-2 rounded"/>
                    <input type="text" placeholder="Your phone number" className="border p-2 rounded"/>
                    <button className="bg-blue-200 p-2">Send</button>
                </form>
            </section>
        </>
    )
}
