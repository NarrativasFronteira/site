import { Link } from 'gatsby'
import React from 'react'
import felicia from '../assets/img/felicia.jpg'
import nelida from '../assets/img/nelida.jpg'
import mohsen from '../assets/img/mohsen3.jpg'
import reinilda from '../assets/img/reinilda3.jpg'
import tereza from '../assets/img/tereza1.jpg'
import osmar from '../assets/img/osmar.jpg'
import yulliam from '../assets/img/yulliam.jpg'
import revista from '../assets/img/revista.png'
import otilde from '../assets/img/otilde.jpg'
import capa from '../assets/img/yo.jpg'
import smc from '../assets/img/smc.png'
import pfmi from '../assets/img/pfmi.png'
import fc from '../assets/img/fc.png'
import fmic from '../assets/img/fmic.png'
import cmpc from '../assets/img/cmpc.png'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section className="intro">
      <header>
        <h1>HISTÓRIAS DE VIDA NA FRONTEIRA</h1>
        <p>Memórias e narrativas dos habitantes de Foz do Iguaçu</p>
        <ul className="actions">
          <li>
            <a href="#first" className="arrow scrolly">
              <span className="label">Next</span>
            </a>
          </li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill" data-position="center">
          <img src={capa} alt="" />
        </span>
      </div>
    </section>

    <section className="first" id="first">
      <header>
        <h2>DA PESQUISA</h2>
      </header>
      <div className="content">
        <p style={{ color: '#3d465a' }}>
          Histórias de vida na fronteira é uma pesquisa que tem como foco as
          narrativas dos habitantes da cidade de Foz do Iguaçu acerca de suas
          experiências vivenciais num espaço fronteiriço, e a partir destas traz
          um estudo da cultura, da identidade e da memória local. O objetivo do
          estudo foi colher histórias, ou Histórias de Vida, de seis dos seus
          habitantes com ênfase na relação que estes estabelecem com a zona de
          fronteira.
        </p>
        <Link to="/pesquisa" className="button primary large">
          Conhecer mais da pesquisa
        </Link>
      </div>
    </section>

    <section id="tereza">
      <header>
        <h2>Tereza Donat Bresolin</h2>
        <p>
          <strong style={{ color: '#dfff24' }}>Tereza Donat Bresolin</strong>, é
          uma dessas pessoas pouco comuns em{' '}
          <strong style={{ color: '#dfff24' }}>Foz do Iguaçu</strong>, às que
          nasceram aqui. A cidade das Cataratas é caracterizada pela diversidade
          cultural consequência da chegada de migrantes de diferentes partes do
          mundo e outras regiões do Brasil. Foram os pais da Tereza que vieram
          do Rio Grande do Sul e se estabeleceram para conformar sua família.
          Ela não só nasceu, se criou e morou sempre aqui, até hoje.
        </p>
      </header>
      <div className="content">
        <span className="image main">
          <img src={tereza} alt="" />
        </span>
        <Link to="/tereza" className="button primary large">
          Conhecer sua história
        </Link>
      </div>
    </section>

    <section id="felicia">
      <header>
        <h2>Felícia</h2>
        <p>
          <strong style={{ color: '#dfff24' }}>Felícia</strong> nasceu em 6 de
          julho de 1945 em{' '}
          <strong style={{ color: '#dfff24' }}>Assunção, Paraguai</strong>.
          Quando terminou o ensino médio, casou-se e veio com o marido para Foz
          do Iguaçu. O ano era 1964, e ela tinha 18 anos. Seu sogro comprou um
          terreno e construiu uma loja, quatro de seus seis filhos vieram
          trabalhar, incluindo Mohamed Canán, marido da Felícia. Todos moravam e
          trabalhavam juntos na loja La Paz, uma das primeiras grandes lojas de
          roupas finas da cidade, enquanto testemunhavam o crescimento de Foz do
          Iguaçu e as transformações de uma de suas principais avenidas: a
          Brasil. Felícia relembra sua chegada a esta terra e suas experiências
          nas últimas seis décadas.
        </p>
      </header>
      <div className="content">
        <span className="image main">
          <img src={felicia} alt="" />
        </span>
        <Link to="/felicia_nelida" className="button primary large">
          Conhecer sua história
        </Link>
      </div>
    </section>

    <section id="nelida">
      <header>
        <h2>Nélida Canán</h2>
        <p>
          <strong style={{ color: '#dfff24' }}>Nélida Canán</strong> , é cunhada
          da Felícia, irmã de Mohamed. Ela nasceu em 20 de julho de 1934 em{' '}
          <strong style={{ color: '#dfff24' }}>Buenos Aires, Argentina</strong>.
          Filha de mãe argentina e pai árabe, chegou em Foz do Iguaçu em 1960,
          quatro anos antes da Felícia e do marido. Seu pai chegou do Líbano e
          se estabeleceu na Argentina, onde conheceu sua mãe, e já com três
          filhos, entre eles Nélida, decidiram ir para Assunção, no Paraguai,
          onde montaram um negócio de confecções. Ela não se lembra exatamente
          quantos anos tinha, mas estima que tenha entre 8 e 10 anos. Mas a sua
          chegada em Foz e as experiências dos primeiros anos recorda-se bem.
        </p>
      </header>
      <div className="content">
        <span className="image main">
          <img src={nelida} alt="" />
        </span>
        <Link to="/felicia_nelida" className="button primary large">
          Conhecer sua história
        </Link>
      </div>
    </section>

    <section id="osmar">
      <header>
        <h2>Osmar Pumi</h2>
        <p>
          <strong style={{ color: '#dfff24' }}>Osmar Pumi</strong> nasceu em{' '}
          <strong style={{ color: '#dfff24' }}>
            Sobradinho, no Rio Grande do Sul
          </strong>
          , e morou em Barra Grande, no município de Tenente Portela no mesmo
          estado, até os vinte anos de idade. Partiu de lá em busca de melhores
          condições de vida e chegou a Foz do Iguaçu em 1960. Aqui achou terra
          boa e sol durante todo o dia: isso foi o suficiente para que ficasse,
          trouxesse os seus pais e irmãos, mais tarde sua namorada, e
          estabelecesse sua família. Osmar tem sido testemunha da história de
          Foz do Iguaçu, principalmente das mudanças na cidade a partir da
          construção da usina de Itaipu, no cotidiano de sua vida.
        </p>
      </header>
      <div className="content">
        <span className="image main">
          <img src={osmar} alt="" />
        </span>
        <Link to="/osmar" className="button primary large">
          Conhecer sua história
        </Link>
      </div>
    </section>

    <section id="otilde">
      <header>
        <h2>Otilde Borba</h2>
        <p>
          <strong style={{ color: '#dfff24' }}>Otilde Borba</strong> nasceu no{' '}
          <strong style={{ color: '#dfff24' }}>Rio Grande do Sul</strong> e veio
          para Foz do Iguaçu com seu marido, Osmar Pumi, para começarem uma vida
          como casal. Ela explica que a mudança foi difícil, pois antes morava
          na cidade, e aqui veio para uma colônia. Tudo era bem distante, tudo
          era mato, as casas eram bem precárias, então foi bem difícil se
          habituar à nova vida. Além disso, em Foz as pessoas tinham outros
          costumes, mas aos poucos ela foi se adaptando. Otilde se lembra dos
          primeiros anos aqui como muito sofridos e com muito trabalho,
          inclusive estando grávida.
        </p>
      </header>
      <div className="content">
        <span className="image main">
          <img src={otilde} alt="" />
        </span>
        <Link to="/otilde" className="button primary large">
          Conhecer sua história
        </Link>
      </div>
    </section>

    <section id="mohsen">
      <header>
        <h2>Mohsen Alk</h2>
        <p>
          <strong style={{ color: '#dfff24' }}>Mohsen Alk</strong> é do{' '}
          <strong style={{ color: '#dfff24' }}>Líbano</strong>, chegou no Brasil
          o dia 19 de junho de 1960, no Porto dos Santos, com 20 anos, e morou
          em São Paulo até 1984, quando veio para Foz do Iguaçu, atualmente a
          cidade com a segunda maior comunidade árabe-muçulmana do Brasil. Aqui,
          na cidade brasileira da Tríplice Fronteira, se estabeleceu e conformou
          sua família.
        </p>
      </header>
      <div className="content">
        <span className="image main">
          <img src={mohsen} alt="" />
        </span>
        <Link to="/mohsen" className="button primary large">
          Conhecer sua história
        </Link>
      </div>
    </section>

    <section id="reinilda">
      <header>
        <h2>Reinilda Spies da Silva</h2>
        <p>
          <strong style={{ color: '#dfff24' }}>Reinilda Spies da Silva</strong>,
          nasceu em{' '}
          <strong style={{ color: '#dfff24' }}>
            Santa Rosa, Rio Grande do Sul
          </strong>
          , em 30 de outubro de 1958, e veio para o Paraná em 1959, quando ainda
          tinha dez meses de idade, junto com seus pais: Olivia Katarina
          Brisners e Alfonso Leopoldo Spies, ambos dois de ascendência alemã, em
          busca de terras planas, boas, para a agricultura. Ela morou em São
          Miguel de Iguaçu até os 18 anos, depois veio para Foz do Iguaçu e fez
          sua vida adulta.
        </p>
      </header>
      <div className="content">
        <span className="image main">
          <img src={reinilda} alt="" />
        </span>
        <Link to="/reinilda" className="button primary large">
          Conhecer sua história
        </Link>
      </div>
    </section>

    <section id="revista">
      <header>
        <h2>Revista</h2>
        <p>
          Para facilitar o acesso à pesquisa, ela foi diagramada em formato de
          revista digital e pode ser baixada em arquivo PDF, para que os
          interessados ​​possam ter as informações consigo sem a necessidade de
          acesso à internet.
        </p>
      </header>
      <div className="content">
        <span
          className="image main"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <img src={revista} alt="revista" style={{ width: '40%' }} />
        </span>
        <Link to="https://drive.google.com/file/d/1p3xcwpYAHngoAvR-9J6X4oPJ3kY3pNYm/view"  className="button primary large" target="_blanck">
          Baixar a revista
        </Link>
      </div>
    </section>

    <section id="yulliam">
      <header>
        <h2>Pesquisadora</h2>
        <p>
          <strong style={{ color: '#dfff24' }}>Yulliam Moncada</strong> possui
          mestrado Interdisciplinar em Estudos Latinoamericanos pela
          Universidade Federal da Integração Latino-americana UNILA (2021) em
          Brasil e graduação em Comunicação Social com menção em Desenvolvimento
          Humanístico pela Universidad de Los Andes, Táchira, Venezuela (2006).
        </p>
      </header>
      <div className="content">
        <span className="image main">
          <img src={yulliam} alt="" />
        </span>
        <Link to="/yulliam" className="button primary large">
          Conhecer mais da pesquisadora
        </Link>
      </div>
    </section>

    <section>
      <header>
        <h2>Agradecimentos</h2>
      </header>
      <div className="content">
        <p>
          <strong style={{ color: '#3d465a' }}>
            Tereza Donat de Brezolin, Iracema Donat de Wandscheer, Jean
            Brezolin, Osmar Pumi, Otilde Borda, Felicia Raniolo de Canán, Nélida
            Canán, Mohsen Alk, Yaldez Taouz, Ali Fayed, Reinilda Spies da Silva,
            José Ramón Castillo, Estela Rocha, Andrés Rodríguez, Fundação
            Cultural de Foz do Iguaçu, Centro de Convivência do Idosso Afra
            Roth, Fundação Nosso Lar
          </strong>
        </p>
        <p
          style={{
            padding: '100px 40px 10px 40px',
            fontWeight: 'bold',
            color: '#3d465a',
          }}
        >
          Esta iniciativa é realizada pela sociedade civil e recebeu recursos do
          Fundo Municipal de Incentivo Cultural por meio de edital realizado
          pela Prefeitura de Foz do Iguaçu e Fundação Cultural de Foz do Iguaçu
        </p>
        <ul className="items">
          <li>
            <ul
              className="icons"
              style={{
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
              }}
            >
              <li
                style={{
                  backgroundImage: `url(${smc})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  marginRight: '16px',
                }}
              >
                <div href="#" className="icon brands"></div>
              </li>
              <li
                style={{
                  backgroundImage: `url(${pfmi})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  width: '130px',
                  marginRight: '16px',
                }}
              >
                <a href="#" className="icon brands"></a>
              </li>
              <li
                style={{
                  backgroundImage: `url(${fc})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  width: '130px',
                  marginRight: '16px',
                }}
              >
                <a href="#" className="icon brands"></a>
              </li>
              <li
                style={{
                  backgroundImage: `url(${fmic})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  width: '130px',
                  marginRight: '16px',
                }}
              >
                <a href="#" className="icon brands"></a>
              </li>
              <li
                style={{
                  backgroundImage: `url(${cmpc})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  width: '130px',
                }}
              >
                <div href="#" className="icon brands"></div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <footer style={{ marginTop: '100px' }}>
        <h2>Incentivo</h2>
      </footer>
    </section>

    <div className="copyright">
      &copy; Historias de vida 2025. All rights reserved. Design:{' '}
      <a href="https://html5up.net">HTML5 UP</a>.
    </div>
  </Layout>
)

export default IndexPage
