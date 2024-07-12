import interiorDesign from '/images/interior_design_256.png'
import curtainCloth from '/images/curtain_cloth_256.png'
import curtainInstallation from '/images/curtain_installation_256.png'
import curtainDemoImage1 from '/images/demo_image.jpg'
import {Carousel} from "react-bootstrap";

export default function Content() {
    return <div id={'content-container'}>
        <div id={'info'} className={'content'}>
            <h1>
                САЛОН
                ШТОР
                .РУ
            </h1>
            <br/>
            <h2>
                карнизы, шторы, жалюзи в Москве
            </h2>
            <br/>
            <h3>
                <img src={interiorDesign} alt=""/>дизайн проектов
            </h3>
            <h3 style={{textAlign: 'end'}}>
                подбор ткани<img src={curtainCloth} alt=""/>
            </h3>
            <h3>
                <img src={curtainInstallation} alt=""/>установка
            </h3>
        </div>
        <div id={'photos'} className={'content'}>
            <h2>наши работы</h2>
            <Carousel>
                <Carousel.Item>
                    <img src={curtainDemoImage1} alt=""/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={curtainDemoImage1} alt=""/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={curtainDemoImage1} alt=""/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div id={'ratings'} className={'content'}>
            <h2>отзывы</h2>
        </div>
    </div>
}