// function Features () {
//   return (
//     <div>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
//         <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
//           <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
//                 Boost Your Productivity </h2>
//               <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
//                 Enhance your workflow with advanced features
//               </p>
//             </div>
//             <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
             
//               <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
//                 <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
//                   <i className="fa-solid fa-chart-column text-3xl text-gray-900" />
//                 </div>
//                 <h3 className="mt-12 text-xl font-bold text-gray-900">Advanced Analytics</h3>
//                 <p className="mt-5 text-base text-gray-600">Track and analyze your data with powerful analytics tools. Gain valuable
//                   insights for better decision-making.</p>
//               </div>
              
//               <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
//                 <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
//                   <i className="fa-solid fa-truck-fast text-3xl text-gray-900" />
//                 </div>
//                 <h3 className="mt-12 text-xl font-bold text-gray-900">Fast Integration</h3>
//                 <p className="mt-5 text-base text-gray-600">Seamlessly integrate with your existing tools and systems for a smooth
//                   workflow experience.</p>
//               </div>
              
//               <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
//                 <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
//                   <i className="fa-solid fa-shield text-3xl text-gray-900" />
//                 </div>
//                 <h3 className="mt-12 text-xl font-bold text-gray-900">Security First</h3>
//                 <p className="mt-5 text-base text-gray-600">Ensure the safety of your data with top-notch security features. Your
//                   privacy is our priority.</p>
//               </div>
              
//               <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
//                 <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
//                   <i className="fa-solid fa-cloud text-3xl text-gray-900" />
//                 </div>
//                 <h3 className="mt-12 text-xl font-bold text-gray-900">Cloud Integration</h3>
//                 <p className="mt-5 text-base text-gray-600">Access your data from anywhere with seamless cloud integration. Work
//                   without boundaries.</p>
//               </div>
             
//               <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
//                 <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
//                   <i className="fa-solid fa-pen-nib text-3xl text-gray-900" />
//                 </div>
//                 <h3 className="mt-12 text-xl font-bold text-gray-900">Task Management</h3>
//                 <p className="mt-5 text-base text-gray-600">Organize your workflow with efficient task management features. Stay on
//                   top of your projects effortlessly.</p>
//               </div>
              
//               <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
//                 <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
//                   <i className="fa-solid fa-bolt text-3xl text-gray-900" />
//                 </div>
//                 <h3 className="mt-12 text-xl font-bold text-gray-900">Performance Metrics</h3>
//                 <p className="mt-5 text-base text-gray-600">Monitor and measure your performance with comprehensive metrics.
//                   Optimize your processes for maximum efficiency.</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//   )
// }

// export default Features
import React from "react";
import { FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";

const Features = ({data}) => {
  const contacts = [
    {
      title: "Mehrwertdienste",
      phone: "0800-55 007 77",
      actionText: "Jetzt anrufen",
      type: "phone",
    },
    {
      title: "Network Operation Center",
      phone: "0800-032 68 35",
      actionText: "Jetzt anrufen",
      type: "phone",
    },
    {
      title: "Service-Team",
      phone: "0800-032 68 35",
      actionText: "Jetzt anrufen",
      type: "phone",
    },
    {
      title: "Finance-Team Debitoren",
      phone: "0211-55 007-332",
      actionText: "Jetzt mailen",
      type: "email",
    },
    {
      title: "Finance-Team Kreditoren",
      phone: "0211-55 007-332",
      actionText: "Jetzt mailen",
      type: "email",
    },
    {
      title: "WhatsApp Business",
      actionText: "Jetzt chatten",
      type: "chat",
    },
    {
      title: "Apple Messages",
      actionText: "Jetzt chatten",
      type: "chat",
    },
    {
      title: "Zentrale",
      phone: "0211-55 007-0",
      actionText: "Jetzt anrufen",
      type: "phone",
    },
    {
      title: "Sales",
      phone: "0800-55 007-400",
      actionText: "Jetzt anrufen",
      type: "phone",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "phone":
        return <FiPhone className="text-orange-500 text-4xl" />;
      case "email":
        return <FiMail className="text-orange-500 text-4xl" />;
      case "chat":
        return <FiMessageCircle className="text-orange-500 text-4xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
     	<h1 className="text-2xl md:text-3xl font-bold text-center mb-6">{data.Heading}</h1>
			<p className="text-center text-gray-600 text-base md:text-lg mb-8">{data.SubHeading}</p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {data.Lists.map((contact, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform flex items-center"
          >
            <div className="mr-4">{getIcon('phone')}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {contact.Heading}
              </h3>
             
                <p className="text-gray-600 mb-4">{contact.Number}</p>
              
              <button className="text-orange-500 font-medium text-sm hover:underline">
                Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;


