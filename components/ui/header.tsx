import Link from 'next/link';

import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/" className="font-medium text-custom-h1 hover:text-custom-secondary px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="font-medium text-custom-h1 hover:text-custom-secondary px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="font-medium text-custom-h1 hover:text-custom-secondary px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#" className="font-medium text-custom-h1 hover:text-custom-secondary px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="font-medium text-custom-h1 hover:text-custom-secondary px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
