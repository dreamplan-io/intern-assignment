import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return(
    <div className="mx-auto my-8 w-9/12">
      <header>
        <h1 className="text-6xl text-center">Movies</h1>
      <nav className="my-4">
        <ul className="flex flex-row space-x-4 justify-center">
          <li>
            <Link href="/">
              <a className="">Home</a>
              </Link>
            </li>
        </ul>
      </nav>
      <hr></hr>
      </header>
    <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
