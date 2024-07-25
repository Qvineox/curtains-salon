import whatsappIcon from '/icons/whatsapp_256.png'
import instagramIcon from '/icons/instagram_256.png'
import telegramIcon from '/icons/telegram_256.png'

export default function Header() {
    return <header>
        <div id="contact-icon-container">
            <a href="https://api.whatsapp.com/send/?phone=79953006183">
                <img className={'contact-icon'} src={whatsappIcon} alt="whatsapp_icon"/>
            </a>
            <a href="https://t.me/salonshtor_ru">
                <img className={'contact-icon'} src={telegramIcon} alt="telegram_icon"/>
            </a>
            <a href="https://www.instagram.com/salonshtor.ru">
                <img className={'contact-icon'} src={instagramIcon} alt="instagram_icon"/>
            </a>
        </div>
    </header>
}