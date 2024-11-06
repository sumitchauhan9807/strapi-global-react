export default function RobotController() {
    return (
        <>
            <section className="grid grid-cols-2 my-16">
                <figure></figure>
                <div className="flex flex-col">
                    <small>SOLUTION</small>
                    <span className="text-3xl font-semibold my-4">Robot controller</span>
                    <p className="text-base font-light">
                        No time for the controling sales managers? Do you miss calls and at the same time lose customers and company profits?

                        Invite a Robot Controller that will call back missed calls and connect your client with an available manager.
                    </p>
                    <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8">BUY NOW</button>
                </div>
            </section>
            <section className="flex flex-col max-w-[1200px] mx-auto items-center">
                <h4 className="font-bold text-2xl">How can you manage without a Robot Controller?</h4>
                <div className="flex items-center gap-8 py-8">
                    <button>An entrepreneur needs to</button>
                    <button>Head of sales will have to</button>
                </div>
                <span className="text-gray-400">Track channels for receiving information and quickly contact a potential client.</span>
            </section>
            <section className="grid grid-cols-2 my-16 max-w-[1200px] mx-auto">
                <figure className="border"></figure>
                <div className="flex flex-col">
                    <span className="text-3xl font-semibold my-4">Do you want these functions to be faster, easier and more efficient?</span>
                    <p className="text-base font-light">Connect a Robot Controller on the KOMPaaS Virtual PBX, which will relieve you and your employees from these routine tasks.</p>
                    <button className="w-max p-2 px-4 rounded text-white bg-[#141b24] my-8">ORDER</button>
                </div>
            </section>
            <section className="flex flex-col items-center max-w-[1200px] mx-auto justify-center">
                <h4 className="text-2xl font-bold my-8">How does it work with a Robot that returns calls?</h4>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <div className="flex relative bg-gray-100 w-[300px] justify-center p-8">
                            <span className="flex h-8 w-8 justify-center items-center bg-green-500 p-2 rounded-full absolute left-[-20px] top-[20px]">
                                1
                            </span>
                            <span>You missed a customer call</span>
                        </div>
                        <div className="flex relative bg-gray-100  w-[300px] justify-center p-8">
                            <span className="flex h-8 w-8 justify-center items-center bg-green-500 p-2 rounded-full absolute left-[-20px] top-[20px]">
                                2
                            </span>
                            <span>The system calls your free manager</span>
                        </div>
                        <div className="flex relative bg-gray-100 w-[300px] justify-center p-8">
                            <span className="flex h-8 w-8 justify-center items-center bg-green-500 p-2 rounded-full absolute left-[-20px] top-[20px]">
                                3
                            </span>
                            <span>After successful connection with the manager, the system calls the client back</span>
                        </div>
                        <div className="flex flex-col relative bg-gray-100 w-[300px] justify-center p-8">
                            <span className="flex h-8 w-8 justify-center items-center bg-green-500 p-2 rounded-full absolute left-[-20px] top-[20px]">
                                4
                            </span>
                            <span>The manager and the client are now talking. The lost call has become a lead.</span>
                            <button className="bg-green-300 w-max p-2 px-3 my-2">ORDER</button>
                        </div>
                    </div>
                    <figure>

                    </figure>
                </div>
            </section>
            <section className="flex flex-col items-center max-w-[1200px] mx-auto justify-center">
                <h4 className="text-2xl font-bold my-8">Who will need it and when?</h4>
                <div className="flex gap-8">
                    <div className="bg-gray-100 p-16 w-[500px]">
                        <p>
                            The sales department has decided to quickly increase the customer base and the marketing department launched an advertising campaign, without calculating the strength of sales managers. As a result, there were more incoming calls than the managers can handle. The robot automatically calls back subscribers, and customer service employees do not miss a single request.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-16 w-[500px]">
                        <p>
                            The robot controller will help companies that wish to improve their customer service and this will result in increased user loyalty.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center max-w-[1200px] bg-gray-100 my-32 p-16 mx-auto justify-center overflow-hidden">
                <h4 className="text-2xl font-bold my-8">Advantages</h4>
                <div className="flex my-4">
                    <div className="flex items-center w-[360px] gap-4">
                        <figure className="w-16 h-16 bg-green-400 rounded-full"></figure>
                        <span className="w-[60%]">Automatically returns all missed calls</span>
                    </div>
                    <div className="flex items-center w-[360px] gap-4">
                        <figure className="w-16 h-16 bg-green-400 rounded-full"></figure>
                        <span className="w-[60%]">Settings allow you to select a number, operator or queue</span>
                    </div>
                    <div className="flex items-center w-[360px] gap-4">
                        <figure className="w-16 h-16 bg-green-400 rounded-full"></figure>
                        <span className="w-[60%]">Works on a schedule and does not call back at night</span>
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="flex items-center w-[360px] gap-4">
                        <figure className="w-16 h-16 bg-green-400 rounded-full"></figure>
                        <span className="w-[60%]">You control the number of attempts to call back</span>
                    </div>
                    <div className="flex items-center w-[360px] gap-4">
                        <figure className="w-16 h-16 bg-green-400 rounded-full"></figure>
                        <span className="w-[60%]">Set time intervals between dial-up attempts</span>
                    </div>
                    <div className="flex items-center w-[360px] gap-4">
                        <figure className="w-16 h-16 bg-green-400 rounded-full"></figure>
                        <span className="w-[60%]">Numbers are excluded from the auto-call list if they have already been reached</span>
                    </div>
                </div>
            </section>
        </>
    )
}
