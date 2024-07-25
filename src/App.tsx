import {Fragment} from 'react'
import "./styles/styles.scss"
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import {Content, MobileContent} from "./components/content.tsx";

function App() {
    document.title = 'Салон штор.ру'

    return (
        <Fragment>
            <Header/>
            {
                window.innerWidth <= 600 ? <div className={'mobile-content-container'}>
                    <MobileContent/>
                </div> : <div className={'desktop-content-container'}>
                    <Content/>
                </div>
            }
            <Footer/>
        </Fragment>
    )
}

export default App
