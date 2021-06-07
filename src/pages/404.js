import {useEffect} from 'react'
import {useRouter} from 'next/router'

// F.eks. http://localhost:3000/abouttttt

const PageNotFound = () => {
    const router = useRouter();

    useEffect(() => {
        console.log('useEffectblev taget i brug')
        setTimeout(() => {
            router.push('/');
        }, 4000)
    }, [])

    

    return (
        <div className="text-gray-800 font-serif text-center font-extrabold m-20">
            <p>Beklager... Den ønskede side blev ikke fundet</p>
            <p>Du vil automatisk komme tilbage til forsiden om et øjeblik....</p>
        </div>
    );
}

export default PageNotFound;