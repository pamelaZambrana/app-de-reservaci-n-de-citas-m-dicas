import React from 'react';
import { socialMediaList } from './socialMediaList';
import { Link } from 'react-router-dom';
import { contactsList } from './contacts';

const Footer = () => {
    return (
        <footer className='footer'>
            <section >
                {
                    socialMediaList.map((item, index) => (
                        <div key={index} className='footer-items'>
                            <i className={`${item.icon}`}></i>
                            <Link to={ item.path }>{ item.name }</Link>
                        </div>
                    )

                )}
            </section>
            <section>
            {
                    contactsList.map((item, index) => (
                        <div key={index} className='footer-items'>
                            <i className={`${item.icon}`}></i>
                            <p>{ item.description }</p>
                        </div>
                    )

                )}
            </section>
        </footer>
    );
}

export default Footer;
