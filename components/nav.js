import Link from 'next/link'
import Image from 'next/image'

const Nav = ({ siteTitle }) => (
  <nav className='z-10 fixed w-full p-4 flex bg-tint h-12'>
    <div className='flex items-center flex-shrink-0 mr-6'>
      <Link href='/'>
        <a><Image
          src='/logo.png'
          alt='Sharp Logo'
          width={110}
          height={35}
          layout='intrinsic'
           />
        </a>
      </Link>
    </div>
  </nav>
)

export default Nav
