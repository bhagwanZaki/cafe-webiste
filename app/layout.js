import '../css/globals.css'
import logo from "../assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="navBar">
        <Image src={logo} className="logo" />
        <div className="navitems">
          <Link className='link' href="/">
            Menu
          </Link>
          <Link className='link' href="/">
            Our Story
          </Link>
          <Link className='link' href="/">
            Contact Us
          </Link>
          <Link className='link' href="/">
            About us
          </Link>
        </div>
        </div>
        {children}
        </body>
    </html>
  )
}
