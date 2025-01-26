import "../../styles/home.scss"
import {Fragment, useEffect, useState} from "react";
import imageHomeInterior from '/images/home_interior_612x612.jpg'
import demo1 from '/images/portfolio/demo1.png'
import demo2 from '/images/portfolio/demo2.png'
import demo3 from '/images/portfolio/demo3.png'
import anime from "animejs";
import Form from 'react-bootstrap/Form';
import {Button, FloatingLabel} from "react-bootstrap";
import {checkOrderInfo, IOrder} from "../../types/order.ts";
import {
    IPortfolioOffcanvasProps,
    PortfolioOffcanvas
} from "../../components/portfolio-offcanvas/portfolioOffcanvas.tsx";


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
            delay: anime.stagger(300, {start: 600, easing: "easeInOutCubic"})
        })

        anime({
            targets: "#discount",
            opacity: "1",
            delay: 1200
        })
    }, []);

    const [orderInfo, setOrderInfo] = useState<IOrder>({
        fullName: "",
        email: "",
        phoneNumber: "",
        details: "",
    })

    const [portfolioOffcanvasProps, setPortfolioOffcanvasProps] = useState<IPortfolioOffcanvasProps>({
        show: false,
        handleClose: () => onPortfolioOffcanvasClose(),
        title: "",
        description: "",
        image: "",
    })

    const onPortfolioOffcanvasClose = () => {
        setPortfolioOffcanvasProps(prevState => ({
            ...prevState,
            show: false
        }))
    }

    return <Fragment>
        <PortfolioOffcanvas show={portfolioOffcanvasProps.show}
                            handleClose={onPortfolioOffcanvasClose}
                            title={portfolioOffcanvasProps.title}
                            description={portfolioOffcanvasProps.description}
                            image={portfolioOffcanvasProps.image}
        />
        <div id="intro" className="section-container">
            <div id={'about'}>
                <h1 style={{height: '5rem'}}>tendaggio
                    <div id={"discount"}>
                        <h4>-20% на первый заказ</h4>
                    </div>
                </h1>
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
                <div id={"photos-container"}>
                    <img src={demo1}
                         onClick={() => {
                             setPortfolioOffcanvasProps(prevState => ({
                                 ...prevState,
                                 show: true,
                                 image: demo1,
                                 title: "Тест демо 1",
                                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque ex sit amet eros volutpat commodo. Etiam elit mi, ultricies non ipsum et, sagittis lacinia sapien. Quisque tempus libero non mi bibendum, et bibendum sapien scelerisque. In velit dolor, imperdiet non nulla ut, vulputate tincidunt est. Phasellus congue quam sapien, ut tempor elit dignissim et. Nullam luctus malesuada eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ullamcorper augue venenatis nisi ullamcorper luctus.\n" +
                                     "\n" +
                                     "Nam sed lobortis ipsum. In eu pulvinar lacus. Donec consectetur sodales nisi sit amet vehicula. Duis sollicitudin, eros vel molestie porttitor, dolor ex aliquet ipsum, non mattis leo dolor vel sem. Aliquam rhoncus, sem et vehicula auctor, nisi arcu interdum ligula, ut viverra justo nulla at dolor. Fusce facilisis odio leo, in finibus dolor bibendum a. Integer iaculis sit amet lorem sit amet finibus. Nunc accumsan consequat sem vel maximus. Nulla facilisi. Sed tempus purus id nulla consectetur, eget auctor mauris posuere. Etiam consequat est nulla, vitae tincidunt est faucibus id. Ut quis tellus laoreet, finibus lacus aliquet, lobortis orci. Nunc et mauris ac urna interdum interdum. Maecenas suscipit, est hendrerit euismod blandit, nulla eros rutrum ipsum, ut bibendum ante augue sit amet risus. In fermentum massa id est tincidunt, ut tristique turpis lobortis.",
                             }))
                         }}
                         alt="home_interior_612x612"/>

                    <img style={{right: "20vh", top: "20vh"}}
                         onClick={() => {
                             setPortfolioOffcanvasProps(prevState => ({
                                 ...prevState,
                                 show: true,
                                 image: demo2,
                                 title: "Тест демо 2",
                                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque ex sit amet eros volutpat commodo. Etiam elit mi, ultricies non ipsum et, sagittis lacinia sapien. Quisque tempus libero non mi bibendum, et bibendum sapien scelerisque. In velit dolor, imperdiet non nulla ut, vulputate tincidunt est. Phasellus congue quam sapien, ut tempor elit dignissim et. Nullam luctus malesuada eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ullamcorper augue venenatis nisi ullamcorper luctus.\n" +
                                     "\n" +
                                     "Nam sed lobortis ipsum. In eu pulvinar lacus. Donec consectetur sodales nisi sit amet vehicula. Duis sollicitudin, eros vel molestie porttitor, dolor ex aliquet ipsum, non mattis leo dolor vel sem. Aliquam rhoncus, sem et vehicula auctor, nisi arcu interdum ligula, ut viverra justo nulla at dolor. Fusce facilisis odio leo, in finibus dolor bibendum a. Integer iaculis sit amet lorem sit amet finibus. Nunc accumsan consequat sem vel maximus. Nulla facilisi. Sed tempus purus id nulla consectetur, eget auctor mauris posuere. Etiam consequat est nulla, vitae tincidunt est faucibus id. Ut quis tellus laoreet, finibus lacus aliquet, lobortis orci. Nunc et mauris ac urna interdum interdum. Maecenas suscipit, est hendrerit euismod blandit, nulla eros rutrum ipsum, ut bibendum ante augue sit amet risus. In fermentum massa id est tincidunt, ut tristique turpis lobortis.",
                             }))
                         }}
                         src={demo2} alt="home_interior_612x612"/>

                    <img style={{right: "40vh"}}
                         onClick={() => {
                             setPortfolioOffcanvasProps(prevState => ({
                                 ...prevState,
                                 show: true,
                                 image: demo3,
                                 title: "Тест демо 3",
                                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque ex sit amet eros volutpat commodo. Etiam elit mi, ultricies non ipsum et, sagittis lacinia sapien. Quisque tempus libero non mi bibendum, et bibendum sapien scelerisque. In velit dolor, imperdiet non nulla ut, vulputate tincidunt est. Phasellus congue quam sapien, ut tempor elit dignissim et. Nullam luctus malesuada eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ullamcorper augue venenatis nisi ullamcorper luctus.\n" +
                                     "\n" +
                                     "Nam sed lobortis ipsum. In eu pulvinar lacus. Donec consectetur sodales nisi sit amet vehicula. Duis sollicitudin, eros vel molestie porttitor, dolor ex aliquet ipsum, non mattis leo dolor vel sem. Aliquam rhoncus, sem et vehicula auctor, nisi arcu interdum ligula, ut viverra justo nulla at dolor. Fusce facilisis odio leo, in finibus dolor bibendum a. Integer iaculis sit amet lorem sit amet finibus. Nunc accumsan consequat sem vel maximus. Nulla facilisi. Sed tempus purus id nulla consectetur, eget auctor mauris posuere. Etiam consequat est nulla, vitae tincidunt est faucibus id. Ut quis tellus laoreet, finibus lacus aliquet, lobortis orci. Nunc et mauris ac urna interdum interdum. Maecenas suscipit, est hendrerit euismod blandit, nulla eros rutrum ipsum, ut bibendum ante augue sit amet risus. In fermentum massa id est tincidunt, ut tristique turpis lobortis.",
                             }))
                         }}
                         src={demo3}
                         alt="home_interior_612x612"/>
                </div>
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