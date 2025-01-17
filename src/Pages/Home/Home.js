import React, {useEffect, useRef, useState} from "react";
import Navb from "../../components/Navb";
import Welcome from "../../components/Welcome";
import Speakers from "../../components/Speakers";
import Menu from "../../components/Menu";
import Landing from "../../components/Landing";
import Madeit from "../../components/Madeit";
import Gallery from "../../components/Gallery";
import Footer from "../../components/footer";



export default function Home() {
    const refSpeaker = useRef(null);
    const refGallery = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    const scrollToSpeaker = () => {
        refSpeaker.current.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollToGallery = () => {
        refGallery.current.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <>
            {!showMenu &&<div className={'z-50 absolute w-screen'}>
                <Navb menuControl={setShowMenu} menuState={showMenu}/>
            </div>
            }
            {showMenu &&
                <div className={'z-50 sticky top-0'}>
                    <div className={'absolute w-screen'}>
                        <Navb menuControl={setShowMenu} menuState={showMenu}/>
                    </div>
                    <Menu scrollToSpeaker={scrollToSpeaker} closeMenu={setShowMenu} scrollToGallery={scrollToGallery}/>
                </div>
            }
            <div>
                <Landing />
                <Welcome />
                <div ref={refSpeaker}>
                    <Speakers />
                </div>
                <Madeit />
                <div ref={refGallery}>
                    <Gallery />
                </div>
                <Footer />
            </div>
        </>
    )
}