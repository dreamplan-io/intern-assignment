import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return(

        <nav className="bg-gray-900">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6">
                <div className="flex items-center justify-between">

                    <div className="flex items-center"> 
                        <Image src="/TMBD_logo.svg" width={160} height={90}></Image>
                    </div>

                        <ul className="flex border-center">

                            <li className="mb-px mr-3">
                                <Link href="/"><a className="hover:bg-gray-700 bg-white inline-block rounded-lg py-3 px-6 text-black-700 font-bold"> Home</a></Link>
                            </li>

                            <li>
                                <Link href="/about"><a className="hover:bg-gray-700 bg-white inline-block rounded-lg py-3 px-6 text-black-700 font-bold"> About</a></Link>   
                            </li>
                           
                        </ul> 

                </div>
            </div>
        </nav>
)
}

export default Navbar;