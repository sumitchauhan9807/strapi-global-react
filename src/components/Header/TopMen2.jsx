import { useState, useEffect,useRef } from "react"
import { productMenuItems ,solutionsMenuItems ,pricingMenuItems} from "../menuItems"
import LanguageSelect from 'src/components/small/LanguageSelector'
import { Link } from "react-router-dom"
import Logo from 'src/assets/logo.png'
import {  useLocation } from 'react-router-dom'
import { TbSettingsAutomation } from "react-icons/tb";

export const ProductMenuList = () => {
    return (
        <div className="flex flex-col gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] h-[690px] overflow-hidden z-20 p-8 rounded-2xl">
            {productMenuItems.map((item,index) => (
                <Link key={index} to={item.link} className="flex gap-4 text-white">
                    <figure className="flex justify-center items-center p-3 bg-[#141b24] text-white rounded-md">
                        {item.icon}
                    </figure>
                    <div className="flex flex-col text-[#e3e0e0]">
                        <strong className="text-base">{item.title}</strong>
                        <small className="text-sm">{item.description}</small>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export const PricingMenuList = () => {
    return (
        <div className="flex flex-col gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] h-[700px] overflow-hidden z-20 p-8 rounded-2xl">
            {pricingMenuItems.map(item => (
                <div className="flex gap-4 text-white">
                    <figure className="flex justify-center items-center p-3 bg-[#141b24] text-white rounded-md">
                        {item.icon}
                    </figure>
                    <div className="flex flex-col text-[#e3e0e0]">
                        <strong className="text-base">{item.title}</strong>
                        <small className="text-sm">{item.description}</small>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const SolutionMenuList = () => {
    return (
        <div className="flex flex-col gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] h-[990px] overflow-hidden z-20 p-8 rounded-2xl">
            {solutionsMenuItems.map((item,index) => (
                <Link key={index} to={item.link} className="flex gap-4 text-white">
                    <figure className="flex justify-center items-center p-3 bg-[#141b24] text-white rounded-md">
                        {item.icon}
                    </figure>
                    <div className="flex flex-col text-[#e3e0e0]">
                        <strong className="text-base">{item.title}</strong>
                        <small className="text-sm">{item.description}</small>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export const SolutionMenuList2 = () => {
	return (
		<div id="mega-menu-full-dropdown" className=" absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] overflow-hidden z-20 p-8 rounded-2xl ">
  <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
    <ul>
      <li>
        <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
				<figure className="flex justify-center items-center p-3 bg-[#141b24] text-white rounded-md">
                        <TbSettingsAutomation/>
                    </figure>
          <div className="font-semibold">Online Stores</div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
        </a>
      </li>
      <li>
        <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="font-semibold">Segmentation</div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
        </a>
      </li>
      <li>
        <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="font-semibold">Marketing CRM</div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="font-semibold">Online Stores</div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
        </a>
      </li>
      <li>
        <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="font-semibold">Segmentation</div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
        </a>
      </li>
      <li>
        <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="font-semibold">Marketing CRM</div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
        </a>
      </li>
    </ul>
  </div>
</div>

	)
}


export default function TopMen2() {
    const ref = useRef(null);
    const [activeMenu, setActiveMenu] = useState('')
		let location = useLocation()
		useEffect(()=>{
			setActiveMenu('')
		},[location])
	return (
        <menu className="flex items-center justify-between p-2 px-8 h-24">
           <Link to="/"><img src={Logo} style={{height:"98px"}}/></Link>
            <div className="flex text-[#3b516d] relative items-center right-16">
                <div style={{fontSize:"15px"}} className="relative p-4 cursor-pointer" onMouseLeave={()=>{ setActiveMenu('')}} onMouseEnter={()=>{ setActiveMenu('products')}} >
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'products' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                    >
                        Products
                    </span>
                    {activeMenu === 'products' && <ProductMenuList/>}
                </div>
                <div style={{fontSize:"15px"}} className="relative p-4 cursor-pointer" onMouseLeave={()=>{ setActiveMenu('')}} onMouseEnter={()=>{ setActiveMenu('features')}}>
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'features' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                    >
                        Solutions
                    </span>
                    {activeMenu === 'features' && <SolutionMenuList2 />}
                </div>
                {/* <div className="relative p-4 cursor-pointer" onMouseLeave={()=>{ setActiveMenu('')}} onMouseEnter={()=>{ setActiveMenu('pricing')}}>
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'pricing' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                    >
                        Pricing
                    </span>
                    {activeMenu === 'pricing' && <PricingMenuList />}
                </div> */}
								<Link style={{fontSize:"15px"}} to="/pricing" className="relative p-4 cursor-pointer">
                    <span
                        className="uppercase font-semibold px-6"
                    >
                        Pricing
                    </span>
                </Link>
                <div style={{fontSize:"15px"}} className="relative p-4 cursor-pointer">
                    <span
                        className="uppercase font-semibold px-6"
                    >
                        About
                    </span>
                </div>
                <LanguageSelect/>
            </div>
        </menu>
    )
}

// add logo
// fotter things
// adding data to Backend 
// adding data in all langs