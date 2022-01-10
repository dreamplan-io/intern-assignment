import Favorites from '../components/Favorites'
import Header from '../components/Header'

function favorites() {
    return (
        <div>
            <Header />
            <Favorites />
            <div className="bg-red-500">hello</div>
            <div className="uppercase border-2 border-white bg-black">try again</div>
            
        </div>
    )
}

export default favorites
