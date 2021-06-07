import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const About = () => {
    return (

        <div>
            <Head>
                <title>Intern assignment | About </title>
                <link rel="icon" href="/favicon.ico" />     
            </Head>

            <Navbar/>

            
            <div className="flex justify-center items-center">
                <div className="mx-28 text-gray-800 m-8">
        
                    <h1 className="text-4xl font-serif text-center font-extrabold mb-8">Praktikant Opgave:</h1>
                    <h2 className="font-normal text-l">Scopet for denne opgave er at finde ud af hvor meget praktikanten ved om de teknologier som Dreamplan bruger.
                    For ikke at skulle bruge tid på at oprette et helt nyt projekt, skal du bruge denne standard React/Tailwind/NextJs skabelon, som er sådan vores nuværende projekter ser ud.</h2>

                    <h1 className="font-bold text-l underline mt-10" > Opgave 1</h1>
                    <h2 className="font-normal text-l">Opret en konto på themoviedb: <Link href="https://www.themoviedb.org/"><a className="underline">https://www.themoviedb.org/</a></Link>og hent en apikey, som du kan bruge til at hente en listen af film via deres api.
                    Lav en liste på forsiden med alle de mest populære film lige nu, sorter filmene efter popularitet(trending), og vis listen på dansk.
                    Vis informationer som titel, beskrivelse, billede og popularitet på listen.</h2>

                    <h1 className="font-bold text-l underline mt-8"> Opgave 2</h1>
                    <h2 className="font-normal text-l">Vis detaljer om den enkelte film på en ny Next.js side</h2>

                    <h1 className="font-bold text-l underline mt-8"> Opgave 3</h1>
                    <h2 className="font-normal text-l">Lav på listen en favorit knap, hvor man kan gemme sine favoritter, så de gemmes lokalt.</h2>

                    <h1 className="font-bold text-l underline mt-8"> Ekstra opgave</h1>
                    <h2 className="font-normal text-l">Lav et link i toppen af forsiden til en side, hvor du lister alle de favoritfilm som er blevet gemt.</h2> 
                            
                </div>
            </div>
        </div>
    )
}

    export default About;