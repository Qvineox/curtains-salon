import interiorDesign from '/images/interior_design_256.png'
import curtainCloth from '/images/curtain_cloth_256.png'
import curtainInstallation from '/images/curtain_installation_256.png'
import curtainDemoImage1 from '/images/demo_image.jpg'
import curtainDemoImage2 from '/images/demo_image_big_dining_room.jpg'
import curtainDemoImage3 from '/images/demo_image_good_view.png'
import curtainDemoImage4 from '/images/demo_image_yellow.jpg'
import curtainDemoImage5 from '/images/demo_image_cloth.jpg'
import {Carousel} from "react-bootstrap";
import {Fragment, useEffect} from "react";
import anime from "animejs";

export function Content() {
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
            targets: ["#info-container", "#photos", "#advertisement-container"],
            translateX: [250, 0],
            opacity: [0, 1],
            autoplay: true,
            duration: 2000,
            delay: 200 ,
            easing: 'easeInOutExpo'
        });

        anime({
            targets: ["#about-container", "#ratings-container"],
            translateX: [-250, 0],
            opacity: [0, 1],
            autoplay: true,
            duration: 2000,
            delay: 400,
            easing: 'easeInOutExpo'
        });
    }, []);

    return <Fragment>
        <div id={'info-container'}>
            <div id={'main-info'} className={'content'}>
                <h1>
                    САЛОН
                    ШТОР
                    .РУ
                </h1>
                <br/>
                <h2>
                    карнизы, шторы, жалюзи в Москве
                </h2>
            </div>
            <div id={'services-info'} className={'content'}>
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
        </div>
        <div id={'about-container'}>
            <div id={'introduction'} className={'content'}>
                <h4>
                    <b>Хотите преобразить свой дом или офис?</b><br/><br/>
                    Наша студия дизайна и интерьера поможет вам создать уникальное
                    пространство, в котором будет комфортно и уютно. Мы предлагаем полный спектр услуг по созданию
                    дизайн-проектов, продаже и установке различных видов штор.<br/>
                </h4>
            </div>
            <div id={'about-us'} className={'content'}>
                <h5>
                    Мы разрабатываем индивидуальные проекты, учитывая все ваши пожелания и особенности
                    помещения.<br/><br/>
                    В нашей студии вы найдёте широкий выбор штор для любого стиля и бюджета. Затем мы профессионально
                    установим их в вашем доме или офисе.
                </h5>
            </div>
        </div>
        <div id={'photos'} className={'content'}>
            <h2>наши работы</h2>
            <div id={'photos-container'}>
                <img style={{gridColumnStart: 1, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 2}}
                     src={curtainDemoImage1} alt=""/>
                <img style={{gridColumnStart: 5, gridColumnEnd: 12, gridRowStart: 1, gridRowEnd: 2}}
                     src={curtainDemoImage2} alt=""/>
                <img style={{gridColumnStart: 1, gridColumnEnd: 8, gridRowStart: 2, gridRowEnd: 4}}
                     src={curtainDemoImage3} alt=""/>
                <img style={{gridColumnStart: 8, gridColumnEnd: 12, gridRowStart: 2, gridRowEnd: 2}}
                     src={curtainDemoImage4} alt=""/>
                <img style={{gridColumnStart: 8, gridColumnEnd: 12, gridRowStart: 3, gridRowEnd: 4}}
                     src={curtainDemoImage5} alt=""/>
            </div>
        </div>
        <div id={'ratings-container'}>
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
        </div>
        <div id={'advertisement-container'}>
            <div className={'content'}>
                <h4>
                    Не упустите возможность создать уникальный интерьер с помощью нашей студии дизайна и интерьера!
                    <br/>
                    <br/>
                    Свяжитесь с нами сегодня, чтобы узнать больше о наших услугах и получить консультацию от наших
                    специалистов.
                </h4>
            </div>
        </div>
    </Fragment>
}

export function MobileContent() {
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