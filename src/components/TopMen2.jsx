import { useState, useEffect,useRef } from "react"
import { productMenuItems } from "./menuItems"

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


export default function TopMen2() {
    const ref = useRef(null);
    const [activeMenu, setActiveMenu] = useState('')
    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                setActiveMenu('')
            }
        };
        ['mousedown'].forEach(event => window.addEventListener(event, handleOutSideClick));
        return () => {
            ['mousedown'].forEach(event => window.addEventListener(event, handleOutSideClick));
        };
    }, [ref])
    return (
        <menu className="flex items-center justify-between p-2 px-8 h-24">
            <figure className="h-12 w-12 border-2 border-black rounded-full mx-8">
                <embed src="" type="" />
            </figure>
            <div className="flex text-xl text-[#3b516d] relative items-center right-16">
                <div className="relative p-4">
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'products' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                        onClick={() => setActiveMenu('products')}
                    >
                        Products
                    </span>
                    {activeMenu === 'products' && <ProductMenuList ref={ref}/>}
                </div>
                <div className="relative p-4">
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'features' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                        onClick={() => setActiveMenu('features')}
                    >
                        Features
                    </span>
                    {activeMenu === 'features' && <ProductMenuList />}
                </div>
                <div className="relative p-4">
                    <span
                        className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === 'pricing' ? 'bg-[#24282e] text-white' : 'text-[#3b516d]'}`}
                        onClick={() => setActiveMenu('pricing')}
                    >
                        Pricing
                    </span>
                    {activeMenu === 'pricing' && <ProductMenuList />}
                </div>
                <div className="relative p-4">
                    <span
                        className="uppercase font-semibold px-6"
                    >
                        About
                    </span>
                </div>
                <select name="" id="" className="border p-2 rounded">
                    <option value="">Language</option>
                </select>
            </div>
        </menu>
    )
}