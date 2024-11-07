import { useState, useEffect, useRef } from "react"
import { productMenuItems, solutionsMenuItems, pricingMenuItems } from "./menuItems"
import LanguageSelect from 'src/components/small/LanguageSelector'
import Logo from 'src/assets/logo.png'
import { NavLink } from "react-router-dom"
import {SolutionMenuList} from "./menuItems"

export const ProductMenuList = ({ ref }) => {
    return (
        <div className="flex flex-col gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] h-[500px] overflow-hidden z-20 p-8 rounded-2xl">
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

export const PricingMenuList = ({ ref }) => {
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


export default function TopMen2() {
    const ref = useRef(null);
    const [activeMenu, setActiveMenu] = useState('');
    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                setActiveMenu('')
            }
        };
        window.addEventListener('mousedown', handleOutSideClick);
        return () => {
            window.addEventListener('mousedown', handleOutSideClick);
        };
    }, [ref]);


    return (
        <menu className="flex items-center justify-between p-2 px-8 h-24" ref={ref}>
            <img style={{ height: "97px" }} src={Logo} />
            <div className="flex text-xl text-[#3b516d] relative items-center right-16">
                <div className="relative p-4 cursor-pointer" onClick={() => setActiveMenu('products')}>
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'products' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                    >
                        Products
                    </span>
                    {activeMenu === 'products' && <ProductMenuList />}
                </div>
                <div className="relative p-4 cursor-pointer" onClick={() => setActiveMenu('solutions')}>
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'solutions' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                    >
                        Solutions
                    </span>
                    {activeMenu === 'solutions' && <SolutionMenuList />}
                </div>
                <div className="relative p-4 cursor-pointer" onClick={() => setActiveMenu('pricing')}>
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
                <LanguageSelect />
            </div>
        </menu>
    )
}