import { useState } from 'react'
import { setLang } from 'src/redux/language'
import { useDispatch ,useSelector } from "react-redux";

import USA from 'src/assets/flags/usa.png'
import arabic from 'src/assets/flags/arabic.png'
import france from 'src/assets/flags/france.png'
import germany from 'src/assets/flags/germany.png'
import hungary from 'src/assets/flags/hungary.png'
import italy from 'src/assets/flags/italy.png'
import romania from 'src/assets/flags/romania.png'
import russia from 'src/assets/flags/russia.png'
import serbia from 'src/assets/flags/serbia.png'


function LanguageSelector() {
  const [isOpen ,setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const language = useSelector((state) => state.language);
  const setLanguage = (lang) => {
    dispatch(setLang(lang))
  }
  return (
    <a className="relative inline-block text-left ml-2 h-full">
      <div>
        <button onClick={() => setIsOpen((prev) => !prev) } type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white p-2 px-4 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Language {language.language}
          <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      { isOpen && <div className="absolute right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
        <div style={{width:"116px"}} className="py-1" role="none">
          {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
          <a onClick={(e) => {e.preventDefault(); setLanguage('en'); }} href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
            <img src={USA} style={{float:'left',height:'20px',marginRight:"7px"}}/>
            USA
          </a>
          <a onClick={(e) => {e.preventDefault(); setLanguage('ar'); }} href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
            <img src={arabic} style={{float:'left',height:'20px',marginRight:"7px"}}/>
            العربية
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
            <img src={france} style={{float:'left',height:'20px',marginRight:"7px"}}/>
            française
          </a>
          <a  onClick={(e) => {e.preventDefault(); setLanguage('de'); }}  href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
            <img src={germany} style={{float:'left',height:'20px',marginRight:"7px"}}/>
            Deutsch
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
            <img src={hungary} style={{float:'left',height:'20px',marginRight:"7px"}}/>
            Magyarország
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
            <img src={italy} style={{float:'left',height:'20px',marginRight:"7px"}}/>
            Italia
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
            <img src={romania} style={{float:'left',height:'20px',marginRight:"7px"}}/>
            română
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
            <img src={russia} style={{float:'left',height:'20px',marginRight:"7px"}}/>
            Русский
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">
            <img src={serbia} style={{float:'left',height:'20px',marginRight:"7px"}}/>
            Србија
          </a>
        </div>
      </div>}
    </a>
  )
}

export default LanguageSelector