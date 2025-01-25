import "../../styles/home.scss"
import {Fragment, useEffect, useState} from "react";
import imageHomeInterior from '/images/home_interior_612x612.jpg'
import anime from "animejs";
import Form from 'react-bootstrap/Form';
import {Button, FloatingLabel} from "react-bootstrap";
import {checkOrderInfo, IOrder} from "../../types/order.ts";

export default function HomePage() {
    useEffect(() => {
        anime({
            targets: ['#about-image'],
            opacity: "1",
            clipPath: "polygon(75% 0, 100% 0%, 100% 100%, 50% 100%)",
            duration: 1200,
            easing: 'easeOutInCubic'
        });

        anime({
            targets: ['#intro-triangle'],
            opacity: "1",
            duration: 2000,
            easing: 'easeOutInCubic'
        });

        anime({
            targets: ['#about ul li'],
            opacity: "1",
            delay: anime.stagger(200, {start: 600, easing: "easeInOutCubic"})
        })

        anime({
            targets: ['#order-button', "#info-button", "#catalog-button"],
            opacity: "1",
            delay: anime.stagger(200, {start: 600, easing: "easeInOutCubic"})
        })
    }, []);

    const [orderInfo, setOrderInfo] = useState<IOrder>({
        fullName: "",
        email: "",
        phoneNumber: "",
        details: "",
    })

    return <Fragment>
        <div id="intro" className="section-container">
            <div id={'about'}>
                <h1>tendaggio</h1>
                <p className={"hint"}>салон дизайнерских штор</p>
                <ul>
                    <li>римские</li>
                    <li>рулонные</li>
                    <li>blackout</li>
                </ul>
                <div className="buttons">
                    <button onClick={() => {
                        const section = document.querySelector('#order');
                        section?.scrollIntoView({behavior: 'smooth', block: 'start'});
                    }} id={"order-button"}>
                        <p>сделать заказ</p>
                    </button>
                    <button id={"info-button"}>
                        <p>звонок</p>
                    </button>
                    <button onClick={() => {
                        const section = document.querySelector('#portfolio');
                        section?.scrollIntoView({behavior: 'smooth', block: 'start'});
                    }} id={"catalog-button"}>
                        <p>каталог</p>
                    </button>
                </div>

            </div>
            <div className={"decal decal_triangle"} id={"intro-triangle"}/>
            <img id={"about-image"} src={imageHomeInterior} alt="home_interior_612x612"/>
            {/*<img id={"blue-curtains"} src={imageBlueCurtains} alt="blue_curtains"/>*/}
        </div>
        <div id="portfolio" className="section-container">
            <div className={"decal decal_triangle"} id={"portfolio-triangle"}/>
            <div id={"works"}>
                <header>
                    <h2>портфолио проектов</h2>
                </header>
            </div>
        </div>
        <div id="options" className="section-container">

        </div>
        <div id="team" className="section-container">
            <header>
                <h2>наша команда</h2>
                <p className={"hint"}>профессионалы, которые будут работать над Вашим проектом</p>
            </header>
        </div>
        <div id="studio" className="section-container">
            <header>
                <h2>студия</h2>
            </header>
            <div id={"studio-info"}>
                <div id={"studio-photos"}>

                </div>
                <iframe id="studio-ratings" src="https://yandex.ru/maps-reviews-widget/112800848555?comments"/>
                <iframe id="studio-map"
                        src="https://yandex.ru/map-widget/v1/?ll=37.434601%2C55.699769&mode=search&oid=112800848555&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJZVJDG4CN%2Fz8RWhDK%2Bzia4z8iBgABAgMEBSgKOABAipIHSAFiHnJlbGV2X3NlcnZpY2VfYXJlYV9wZXJjZW50PTEwMGoCcnWdAc3MTD2gAQCoAQC9ATNNIgHCAQartdGbpAOCAhPRgdCw0LvQvtC9INGI0YLQvtGAigIJMTg0MTA4MDA3kgIAmgIMZGVza3RvcC1tYXBzqgIpMzU1NDgyNTg4MCwxMzI4MzQ4NDQwNiw1ODM5MjY0ODI4LDYwMDIzOTA%3D&sll=37.434601%2C55.699769&sspn=0.020344%2C0.008639&text=%D1%81%D0%B0%D0%BB%D0%BE%D0%BD%20%D1%88%D1%82%D0%BE%D1%80&z=10.15"/>
            </div>

        </div>
        <div id="order" className="section-container">
            <header>
                <h2>сделать заказ</h2>
            </header>
            <Form id={"order-form"}>
                <div id="customer-info">
                    <FloatingLabel controlId="floating-input-fullname"
                                   label="Как к Вам обращаться">
                        <Form.Control required
                                      type="name"
                                      value={orderInfo.fullName}
                                      onChange={(evt) => setOrderInfo({...orderInfo, fullName: evt.target.value})}
                                      placeholder="Иван Иванович"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floating-input-email"
                                   label="Ваш почтовый адрес">
                        <Form.Control type="email"
                                      value={orderInfo.email}
                                      onChange={(evt) => setOrderInfo({...orderInfo, email: evt.target.value})}
                                      placeholder="name@example.com"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floating-input-phone"
                                   label="Ваш номер телефона">
                        <Form.Control required type="tel"
                                      value={orderInfo.phoneNumber}
                                      onChange={(evt) => setOrderInfo({...orderInfo, phoneNumber: evt.target.value})}
                                      placeholder="+79161234567"/>
                    </FloatingLabel>
                    <Button disabled={!checkOrderInfo(orderInfo)}
                            variant={"outline-success"}>
                        Оставить заявку
                    </Button>
                </div>
                <div id="order-details">
                    <FloatingLabel controlId="floating-input-details"
                                   label="Ваши предпочтения">
                        <Form.Control style={{height: '35vh'}}
                                      value={orderInfo.details}
                                      onChange={(evt) => setOrderInfo({...orderInfo, details: evt.target.value})}
                                      as="textarea"
                                      rows={4}/>
                    </FloatingLabel>
                </div>
            </Form>
        </div>
        <div id="ratings" className="section-container">

        </div>
    </Fragment>
}