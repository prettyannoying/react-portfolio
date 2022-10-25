import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['k', 'e', 'n', 'y']
    const jobArray = ['d','e', 'v','e', 'l','o','p','e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>  
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>

                <h2>I cry while writing code, and while I am not writing code</h2>
                <Link to="/contact" className="flat-button">Checkout me crying over any thing</Link>
                
            </div>
            <Logo/>
        </div>
    );
}
export default Home