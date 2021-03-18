import { FunctionComponent } from 'react'
import Link from 'next/link'

import DarkModeToggle from './dark-mode-toggle'

const Navbar: FunctionComponent = () => {
  return (
    <header className="flex justify-between items-center w-full max-w-3xl mx-auto px-8 md:px-10 py-6">
      <Link href="/">
        <a>
          <h1 className="font-black text-xl text-main-blue dark:text-main-light-blue">
            MyApp
          </h1>
        </a>
      </Link>
      <nav className="flex items-center">
        <DarkModeToggle />
      </nav>
    </header>
  )
}

export default Navbar
