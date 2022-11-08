import React from 'react'
import smc from '../assets/img/smc.png'
import pfmi from '../assets/img/pfmi.png'
import fc from '../assets/img/fc.png'
import fmic from '../assets/img/fmic.png'
import cmpc from '../assets/img/cmpc.png'

const Footer = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <footer
      style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
    >
      <h2 style={{color: '#3d465a' }}>Incentivo</h2>
      <ul className="items">
        <li>
          <ul className="icons">
            <li
              style={{
                backgroundImage: `url(${smc})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                marginRight: '50px',
              }}
            >
              <div href="#" className="icon brands"></div>
            </li>
            <li
              style={{
                backgroundImage: `url(${pfmi})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                marginRight: '50px',
                width: '130px',
              }}
            >
              <a href="#" className="icon brands"></a>
            </li>
            <li
              style={{
                backgroundImage: `url(${fc})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                marginRight: '50px',
                width: '130px',
              }}
            >
              <a href="#" className="icon brands"></a>
            </li>
            <li
              style={{
                backgroundImage: `url(${fmic})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                marginRight: '50px',
                width: '130px',
              }}
            >
              <a href="#" className="icon brands"></a>
            </li>
            <li
              style={{
                backgroundImage: `url(${cmpc})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                marginRight: '50px',
                width: '130px',
              }}
            >
              <div href="#" className="icon brands"></div>
            </li>
          </ul>
        </li>
      </ul>
      <p style={{ padding: '10px 40px 10px 40px', fontWeight: 'bold', color: '#3d465a' }}>
        Esta iniciativa é realizada pela sociedade civil e recebeu recursos do
        Fundo Municipal de Incentivo Cultural por meio de edital realizado pela
        Prefeitura de Foz do Iguaçu e Fundação Cultural de Foz do Iguaçu
      </p>
    </footer>
    <div
      style={{
        color: 'rgba(0, 0, 0, 0.25)',
        textAlign: 'center',
        padding: '0 0 6rem 0',
      }}
    >
      &copy; Historias de vida 2022. All rights reserved. Design:{' '}
      <a style={{ color: 'rgba(0, 0, 0, 0.25)' }} href="https://html5up.net">
        HTML5 UP
      </a>
      .
    </div>
  </div>
)

export default Footer
