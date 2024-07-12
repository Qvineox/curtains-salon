import whatsappIcon from '/icons/whatsapp_256.png'
import instagramIcon from '/icons/instagram_256.png'
import telegramIcon from '/icons/telegram_256.png'

export default function Header() {
    return <header>
        <div id="contact-icon-container">
            <img className={'contact-icon'} src={whatsappIcon} alt="whatsapp_icon"/>
            <img className={'contact-icon'} src={instagramIcon} alt="instagram_icon"/>
            <img className={'contact-icon'} src={telegramIcon} alt="telegram_icon"/>
        </div>
    </header>
}