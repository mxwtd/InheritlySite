import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      themeToggleLightIcon.classList.remove('hidden')
    } else {
      themeToggleDarkIcon.classList.remove('hidden')
    }

    const themeToggleBtn = document.getElementById('theme-toggle')

    const handleThemeToggle = () => {
      themeToggleDarkIcon.classList.toggle('hidden')
      themeToggleLightIcon.classList.toggle('hidden')

      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark')
          localStorage.setItem('color-theme', 'dark')
        } else {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('color-theme', 'light')
        }
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('color-theme', 'light')
        } else {
          document.documentElement.classList.add('dark')
          localStorage.setItem('color-theme', 'dark')
        }
      }
    }

    themeToggleBtn.addEventListener('click', handleThemeToggle)

    return () => {
      themeToggleBtn.removeEventListener('click', handleThemeToggle)
    }
  }, [])
  return (
    <>
      <nav className="min-w-screen relative z-50">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto px-2 md:px-6 p-4 md:p-6">
          <Link to='/' className='flex ml-2 md:mr-24'>
            <img className='w-10 h-10 md:w-12 md:h-12 mr-2' src='https://res.cloudinary.com/djr22sgp3/image/upload/v1684267350/Inheritly_-_Third_design_qodghx.png' />
            <span className='self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white'>Inheritly</span>
          </Link>
          <div className="flex md:order-2 gap-4">
            <button id='theme-toggle' type='button' className='text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sm p-2'>
              <svg id='theme-toggle-dark-icon' className='hidden w-5 h-5 md:w-6 md:h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' /></svg>
              <svg id='theme-toggle-light-icon' className='hidden w-5 h-5 md:w-6 md:h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' fillRule='evenodd' clipRule='evenodd' /></svg>
            </button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden md:inline-block">Dashboard</button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:hidden">
              <svg aria-hidden='true' className='w-6 h-6 text-white dark:text-slate-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col gap-6 font-medium p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700">
              <li>
                <Link to="/" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">About</Link>
              </li>
              <li>
                <Link href="/services" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
