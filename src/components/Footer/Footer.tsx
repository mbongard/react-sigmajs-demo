import React from 'react';
import './Footer.scss';

const Footer = (): JSX.Element => {
  return (
    <div className="Footer">
      <div className="Footer-Developer">
        Developed by{' '}
        <a
          rel="noopener noreferrer"
          href="https://www.michelbongard.ch/"
          target="_blank"
        >
          Michel Bongard
        </a>
        .
      </div>
    </div>
  );
};

export default Footer;
