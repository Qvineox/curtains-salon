import interiorDesign from '/images/interior_design_256.png'
import curtainCloth from '/images/curtain_cloth_256.png'
import curtainInstallation from '/images/curtain_installation_256.png'
import curtainDemoImage1 from '/images/demo_image.jpg'
import {Carousel} from "react-bootstrap";
import {Fragment} from "react";

export default function Content() {
    return <Fragment>
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
        <div id={'yandex-maps-ratings'}>
            <iframe src="https://yandex.ru/maps-reviews-widget/112800848555?comments"></iframe>
            <a href={"https://yandex.ru/maps/org/salon_shtor/112800848555/"}
               target={"_blank"}>Салон
                штор на карте Москвы — Яндекс Карты</a>
        </div>
        <div id={'yandex-maps-place'}>
            <a id={'yandex-maps-place_name'}
               href="https://yandex.ru/maps/org/salon_shtor/112800848555/?utm_medium=mapframe&utm_source=maps">
                Салон штор</a>
            <a id={'yandex-maps-place_map'}
               href="https://yandex.ru/maps/213/moscow/category/curtains_curtain_rods/184108007/?utm_medium=mapframe&utm_source=maps">Шторы,
                карнизы в Москве</a>
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.434601%2C55.699769&mode=search&oid=112800848555&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJZVJDG4CN%2Fz8RWhDK%2Bzia4z8iBgABAgMEBSgKOABAipIHSAFiHnJlbGV2X3NlcnZpY2VfYXJlYV9wZXJjZW50PTEwMGoCcnWdAc3MTD2gAQCoAQC9ATNNIgHCAQartdGbpAOCAhPRgdCw0LvQvtC9INGI0YLQvtGAigIJMTg0MTA4MDA3kgIAmgIMZGVza3RvcC1tYXBzqgIpMzU1NDgyNTg4MCwxMzI4MzQ4NDQwNiw1ODM5MjY0ODI4LDYwMDIzOTA%3D&sll=37.434601%2C55.699769&sspn=0.020344%2C0.008639&text=%D1%81%D0%B0%D0%BB%D0%BE%D0%BD%20%D1%88%D1%82%D0%BE%D1%80&z=10.15"
            ></iframe>
        </div>
    </Fragment>
}