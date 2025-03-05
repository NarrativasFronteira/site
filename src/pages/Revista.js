import { Link } from 'gatsby'
import React from 'react'
import Footer from '../components/footer'

const YulliamPage = () => (
  <div id="wrapper2">
    <section id="banner" class="style2">
      <div class="inner">
        <header class="major">
          <h1 class="lineTitle">Yulliam Moncada</h1>
        </header>
        <div class="content">
          <p style={{ color: '#dfff24', fontWeight: 'bold' }}>
            nasceu em 28 de março de 1983 em San Cristobal, Venezuela.
          </p>
        </div>
      </div>
    </section>

    <div id="main" style={{ color: '#3d465a' }}>
      <section id="one">
        <div class="inner">
          <header class="major">
             <h2 style={{ color: '#3d465a' }}>A pesquisadora</h2>
          </header>
          <p>
            Possui mestrado Interdisciplinar em Estudos Latinoamericanos pela
            Universidade Federal da Integração Latino-americana UNILA (2021) em
            Brasil e graduação em Comunicação Social com menção em
            Desenvolvimento Humanístico pela Universidad de Los Andes, Táchira,
            Venezuela (2006).
          </p>
          <p>
            Tem experiência em mídia impressa: revistas, jornais e semanários.
            Desde antes de obter seu diploma universitário, já escrevia para
            revistas locais em San Cristóbal, sua cidade natal, dedicando-se à
            construção de perfis e reportagens urbanas juvenis.
          </p>
          <p>
            No Diario de Los Andes-Táchira, meio de comunicação impresso de
            circulação regional, conseguiu acumular sua maior experiência
            profissional. Trabalhou por 10 anos, primeiro como repórter,
            cobrindo diversas fontes de informação, com ênfase em Economia e
            Cultura; participando ativamente da realização de reportagens
            aprofundadas e trabalhos investigativos que lhe permitiram
            conquistar reconhecimento e prêmios na entidade. Durante seu último
            ano nesta editora, assumiu a coordenação e direção do Diario de Los
            Andes e do Semanário de los Andes, liderando ambas as equipes em
            meio às adversidades da crise política, econômica e social que
            atravessa o país caribenho.
          </p>
          <p>
            Atualmente mora em Foz do Iguaçu, Paraná, Brasil, onde fez o
            Mestrado Interdisciplinar em Estudos Latino-Americanos -IELA- na
            Universidade Federal da Integração Latino-Americana -UNILA- com a
            pesquisa: Narrativas e práticas transfronteiriças: a mobilidade como
            forma de habitar a fronteira Foz do Iguaçu (Brasil) - Cidade do
            Leste (Paraguai) Sua linha de pesquisa é definida pelas construções
            socioculturais da fronteira Foz do Iguaçu-Ciudad del Este, com
            ênfase nas histórias de vida de seus habitantes
          </p>
        </div>
      </section>
      <Footer />
    </div>
    <Link
      to="/#yulliam"
      className="arrow"
      style={{
        position: 'fixed',
        top: '40px',
        transform: 'rotate(90deg)',
        zIndex: '3',
      }}
    />
  </div>
)

export default YulliamPage
