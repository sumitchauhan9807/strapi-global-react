import React, { useContext } from "react";

import Facebook from "src/assets/icons/Facebook.gif";
import Linkedin from "src/assets/icons/linkedin.gif";
import Xing from "src/assets/icons/xing.gif";
import Skype from "src/assets/icons/Skype.gif";
import Instagram from "src/assets/icons/Instagram.gif";
import Whatsapp from "src/assets/icons/whatsapp.png";
import Signal from "src/assets/icons/Signal.png";
import { GlobalData } from "src/context";

export const SocialMedia = () => {
  const globalData = useContext(GlobalData); // Correctly importing and using GlobalData context

  if (!globalData) {
    console.error("GlobalData is not available in the context.");
    return null; // Ensure the component doesn't break if the context isn't provided
  }

  return (
   
    
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        {/* Facebook */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={globalData.facebook}
          className="transition hover:opacity-80"
        >
          <img src={Facebook} alt="Facebook" className="h-6" />
        </a>

        {/* Skype */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={globalData.skype}
          className="transition hover:opacity-80"
        >
          <img src={Skype} alt="Skype" className="h-6" />
        </a>

        {/* Xing */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={globalData.xing}
          className="transition hover:opacity-80"
        >
          <img src={Xing} alt="Xing" className="h-6" />
        </a>

        {/* LinkedIn */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={globalData.linkedin}
          className="transition hover:opacity-80"
        >
          <img src={Linkedin} alt="LinkedIn" className="h-6" />
        </a>

        {/* Instagram */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={globalData.instagram} // Corrected the link
          className="transition hover:opacity-80"
        >
          <img src={Instagram} alt="Instagram" className="h-6" />
        </a>

        {/* WhatsApp */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={globalData.whatsapp}
          className="transition hover:opacity-80 animate-pulse"
        >
          <img src={Whatsapp} alt="WhatsApp" className="h-6" />
        </a>

        {/* Signal */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={globalData.signal}
          className="transition hover:opacity-80 animate-pulse"
        >
          <img src={Signal} alt="Signal" className="h-6" />
        </a>
      </div>
   
  );
};

export default SocialMedia;
