import {Fragment, useEffect} from 'react'
import "./styles/styles.scss"
import anime from 'animejs';

function App() {
    document.title = 'Салон штор'

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
            <header>

            </header>
            <div id={'info'} className={'content'}>

            </div>
            <div id={'photos'} className={'content'}>

            </div>
            <div id={'ratings'} className={'content'}>

            </div>
            <footer>

            </footer>
        </Fragment>
    )
}

export default App
