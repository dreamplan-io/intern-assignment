import Link from 'next/link'

export default function Navbar() {
    return (
      <nav className='flex items-center flex-wrap bg-blue-600 p-3 w-full'>
        <div className='lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:ml-full lg:w-full w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white '>
                Home
              </a>
            </Link>
          
          </div>
      </div>
    </nav>
)};