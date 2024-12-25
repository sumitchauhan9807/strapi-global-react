import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from 'src/assets/logo.png'
import { useProductMenuItems ,useSolutionsMenuItems } from "../menuItems";
import {  useLocation } from 'react-router-dom'
import { GlobalData } from "src/context";
import { useContext } from 'react';
import { baseUrl } from 'src/helpers'
import LanguageSelect from "src/components/small/LanguageSelector";

function MobileMenu() {
  const globalData = useContext(GlobalData);

  let menuRef = useRef("")
  let location = useLocation()

  useEffect(()=>{
    setActiveSubNav(null)
  },[location])
  const [activeSubNav,setActiveSubNav] = useState(null)
  const setActiveTab = (val) => {
    if(activeSubNav == val) {
      setActiveSubNav(null)
      return
    }
    setActiveSubNav(val)
  }
	return (
		<>
			<nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
					<a  className="flex items-center space-x-3 rtl:space-x-reverse">
           <Link to="/"><img src={baseUrl() + globalData.DarkLogo.url} style={{height:"98px"}}/></Link>
					</a>
            <LanguageSelect/>
					<button onClick={()=> menuRef.current.classList.toggle('hidden') }  data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
					<div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1" ref={menuRef}>
						<ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li onClick={()=>setActiveTab('products')}>
                <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
									Products
									<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
									</svg>
								</button>
							</li>
							<li onClick={()=>setActiveTab('soultions')}>
								<button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
									Solutions
									<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
									</svg>
								</button>
							</li>
							<Link to="/pricing">
								<a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
									Pricing
								</a>
							</Link>
              <Link to="/partners">
								<a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
									Partners
								</a>
							</Link>
              <Link to="/countries">
								<a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
									Countries
								</a>
							</Link>
              <Link to="/Team">
								<a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
									Team
								</a>
							</Link>
              <Link to="/contactus">
								<a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
									Contact Us
								</a>
							</Link>
						
						</ul>
					</div>
				</div>
				{activeSubNav == 'products' && <ProductMenuList/>}
				{activeSubNav == 'soultions' && <SolutionMenuList/>}
      </nav>
		</>
	);
}

const ProductMenuList = () => {
	let productMenuItems = useProductMenuItems()
  return (
    <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
      <ul>
      {productMenuItems.map((item,index) => (
        <li key={index}>
        <Link  to={item.link} className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="font-semibold">{item.title}</div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
        </Link>
      </li>
      ))}
      </ul>
    </div>
  </div>
  )
}

const SolutionMenuList = () => {
	let solutionsMenuItems = useSolutionsMenuItems()
  return (
    <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
      <ul>
      {solutionsMenuItems.map((item,index) => (
        <li key={index}>
        <Link  to={item.link} className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="font-semibold">{item.title}</div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
        </Link>
      </li>
      ))}
      </ul>
    </div>
  </div>
  )
}
export default MobileMenu