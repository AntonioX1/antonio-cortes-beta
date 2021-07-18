import React from 'react';
import { SocialMedia } from '../social_media/SocialMedia';
import './footer.css';

export const Footer = () => {
  return (
    <footer>
      <h1 className="footer__developer"> Antonio Cortés </h1>
      <SocialMedia />
      <p className="footer__info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ultrices ex. Mauris mattis diam arcu, ultrices tincidunt
        metus accumsan in. Vivamus ultricies massa id erat rhoncus.
      </p>
      <p className="footer__copyright">
        © Antonio Cortes 2020 - Development by <a className="footer__creator" href=""> Pedro Ismael </a>
      </p>
    </footer>
  )
};