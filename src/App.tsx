import {Fragment, useEffect} from 'react'
import "./styles/styles.scss"
import anime from 'animejs';
import Header from "./components/header.tsx";
import Content from "./components/content.tsx";
import Footer from "./components/footer.tsx";

function App() {
    document.title = 'Салон штор.ру'

    useEffect(() => {
        anime({
            targets: ["header", "footer"],
            opacity: [0, 1],
            autoplay: true,
            duration: 2000,
            delay: 200,
            easing: 'easeInOutExpo'
        });

        anime({
            targets: ["#info", "#ratings"],
            translateX: [250, 0],
            opacity: [0, 1],
            autoplay: true,
            duration: 2000,
            delay: 200,
            easing: 'easeInOutExpo'
        });

        anime({
            targets: ["#photos"],
            translateX: [-250, 0],
            opacity: [0, 1],
            autoplay: true,
            duration: 2000,
            delay: 400,
            easing: 'easeInOutExpo'
        });
    }, []);

    return (
        <Fragment>
            <Header/>
            {
                window.innerWidth <= 600 ? <div className={'mobile-content-container'}>
                    <Content/>
                </div> : <div className={'desktop-content-container'}>
                    <Content/>
                </div>
            }
            <Footer/>
        </Fragment>
    )
}

export default App
