import { useState, useEffect,useRef } from "react"
import { productMenuItems ,solutionsMenuItems ,pricingMenuItems} from "./menuItems"
import LanguageSelect from 'src/components/small/LanguageSelector'

export const ProductMenuList = ({ref}) => {
    return (
        <div className="flex flex-col gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] h-[500px] overflow-hidden z-20 p-8 rounded-2xl" ref={ref}>
            {productMenuItems.map(item => (
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

export const PricingMenuList = ({ref}) => {
    return (
        <div className="flex flex-col gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] h-[700px] overflow-hidden z-20 p-8 rounded-2xl" ref={ref}>
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

export const SolutionMenuList = ({ref}) => {
    return (
        <div className="flex flex-col gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] h-[300px] overflow-hidden z-20 p-8 rounded-2xl" ref={ref}>
            {solutionsMenuItems.map(item => (
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


export default function TopMen2() {
    const ref = useRef(null);
    const [activeMenu, setActiveMenu] = useState('')
	return (
        <menu className="flex items-center justify-between p-2 px-8 h-24">
            <img style={{height:"97px"}} src="https://www.global-world.us/logo.png"/>
            <div className="flex text-xl text-[#3b516d] relative items-center right-16">
                <div className="relative p-4 cursor-pointer" onMouseLeave={()=>{ setActiveMenu('')}} onMouseEnter={()=>{ setActiveMenu('products')}} >
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'products' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                    >
                        Products
                    </span>
                    {activeMenu === 'products' && <ProductMenuList ref={ref}/>}
                </div>
                <div className="relative p-4 cursor-pointer" onMouseLeave={()=>{ setActiveMenu('')}} onMouseEnter={()=>{ setActiveMenu('features')}}>
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'features' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                    >
                        Solutions
                    </span>
                    {activeMenu === 'features' && <SolutionMenuList />}
                </div>
                <div className="relative p-4 cursor-pointer" onMouseLeave={()=>{ setActiveMenu('')}} onMouseEnter={()=>{ setActiveMenu('pricing')}}>
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'pricing' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                    >
                        Pricing
                    </span>
                    {activeMenu === 'pricing' && <PricingMenuList />}
                </div>
                <div className="relative p-4 cursor-pointer">
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