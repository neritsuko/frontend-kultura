import React from 'react';
import './footer.css';
import logo from '../products/logo2.png';
import inst from '../products/inst.png';
import telega from '../products/telega.png';
import whatsapp from '../products/whatsapp.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-sections'>
                <div className='footer-about'>
                    <h3>Культура - Магазин книг, винила, настольных игр и канцтоваров</h3>
                    <p>Адрес: ул. Панфилова, 123, г. Алматы</p>
                    <p>Время работы: Пн-Вс 10:00-20:00</p>
                </div>
                <div className='footer-links'>
                    <h3>Помощь и поддержка</h3>
                    <p>Часто задаваемые вопросы</p>
                    <p>Политика возврата и обмена</p>
                    <p>Условия доставки и оплаты</p>
                    <p>Поддержка клиентов</p>
                </div>
                <div className='footer-social'>
                    <h3>Мы в социальных сетях</h3>
                    <div className='footer-social-icons'>
                        <a href="https://www.instagram.com/neritsuko/" target="_blank" rel="noopener noreferrer">
                            <img src={inst} alt="Instagram" className='img-socials' style={{ cursor: 'pointer' }}/>
                        </a>
                        <a href="https://t.me/l0lcringe" target="_blank" rel="noopener noreferrer">
                            <img src={telega} alt="Telegram" className='img-socials' style={{ cursor: 'pointer' }}/>
                        </a>
                        <a href="https://wa.me/77075500121" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="WhatsApp" className='img-socials' style={{ cursor: 'pointer' }}/>
                        </a>
                    </div>
                </div>
                <div className='footer-subscribe'>
                    <h3>Подписка на новости</h3>
                    <form>
                        <input type='email' placeholder='Ваш email' />
                        <button type='submit'>Подписаться</button>
                    </form>
                </div>
            </div>
            <div className="footer-rights">
                <hr />
                <p>Все права защищены, Культура 2024</p>
            </div>
        </div>
    );
}

export default Footer;
