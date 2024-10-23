
function SubNav() {
  return (
    <>
     <nav className=" border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
              </li>
              <li>
                <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                  </svg></button>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="mega-menu-full-dropdown" className="absolute mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul aria-labelledby="mega-menu-full-dropdown-button">
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
            </ul>
            <ul className="hidden md:block">
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Audience Management</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Creative Tools</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Marketing Automation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div class="relative">
  <button type="button" class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
    <span>Solutions</span>
    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  </button>

 
  <div class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
    <div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
      <div class="p-4">
        <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
          </div>
          <div>
            <a href="#" class="font-semibold text-gray-900">
              Analytics
              <span class="absolute inset-0"></span>
            </a>
            <p class="mt-1 text-gray-600">Get a better understanding of your traffic</p>
          </div>
        </div>
        <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>
          </div>
          <div>
            <a href="#" class="font-semibold text-gray-900">
              Engagement
              <span class="absolute inset-0"></span>
            </a>
            <p class="mt-1 text-gray-600">Speak directly to your customers</p>
          </div>
        </div>
        <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
            </svg>
          </div>
          <div>
            <a href="#" class="font-semibold text-gray-900">
              Security
              <span class="absolute inset-0"></span>
            </a>
            <p class="mt-1 text-gray-600">Your customers&#039; data will be safe and secure</p>
          </div>
        </div>
        <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <div>
            <a href="#" class="font-semibold text-gray-900">
              Integrations
              <span class="absolute inset-0"></span>
            </a>
            <p class="mt-1 text-gray-600">Connect with third-party tools</p>
          </div>
        </div>
        <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
          <div>
            <a href="#" class="font-semibold text-gray-900">
              Automations
              <span class="absolute inset-0"></span>
            </a>
            <p class="mt-1 text-gray-600">Build strategic funnels that will convert</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
        <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
          <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z" clip-rule="evenodd" />
          </svg>
          Watch demo
        </a>
        <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
          <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" />
          </svg>
          Contact sales
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default SubNav