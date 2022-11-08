import { Link } from 'gatsby'
import React from 'react'
import mohsen from '../assets/img/mohsen.jpg'
import mohsen2 from '../assets/img/mohsen2.jpg'
import Footer from '../components/footer'

const MohsenPage = () => (
  <div id="wrapper2">
    <section id="banner" class="style2">
      <div class="inner">
        <span class="image">
          <img src={mohsen2} alt="" />
        </span>
        <header class="major">
          <h1 class="lineTitle">Mohsen Akl</h1>
        </header>
        <div class="content">
          <p style={{ color: '#dfff24', fontWeight: 'bold' }}>
            nasceu em 1940 no Libano.
          </p>
        </div>
      </div>
    </section>

    <div id="main" style={{ color: '#3d465a' }}>
      <section id="one">
        <div class="inner">
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>Encontrou calma e segurança</h2>
          </header>
          <p>
            Mohsen Alk é do Líbano e chegou ao Brasil no dia 19 de junho de
            1960, no Porto de Santos, com 20 anos. Ele morou em São Paulo até
            1984, quando veio para Foz do Iguaçu, atualmente a cidade com a
            segunda maior comunidade árabe muçulmana do Brasil. Aqui na cidade
            brasileira da Tríplice Fronteira Mohsen Mohsen se estabeleceu e
            conformou sua família.
          </p>
          <p>
            “Saí do Líbano porque eu tinha um irmão aqui no Brasil, e a gente
            sai para viajar, para melhorar a vida. Nós somos gente do interior,
            é difícil, não tem trabalho. Libeia, [sua cidade natal] é uma
            aldeia, tem montanhas, muita rocha, muita pouca terra, não tinha
            água, não tinha luz, não tinha nada e era fria demais. Até no verão
            se tem que cobrir com cobertor para dormir. Muito frio, neve também
            [está a 1.700 metros de altitude sob o nível do mar]. Muito difícil
            plantar, muita pedra, a terra não produz”.
          </p>
          <p>
            Foram essas condições precárias que motivaram Mohsen e seus irmãos a
            virem para o Brasil. Ele se lembra que havia só um quarto para
            todos. A casa era como todas daquela época: de pedra, de rocha. O
            teto era de madeira, mas colocavam terra acima da madeira, e quando
            molhava pegavam uma roda de pedra com dois furos do cada lado e
            passavam acima da casa várias vezes até colar para a água não
            penetrar.
          </p>
          <p>
            “A casa toda aberta, tudo mundo dorme como a ladeira. Muito difícil,
            muito difícil a vida. Agora está melhor. A gente costuma viver aqui
            e volta para lá para visitar a família, mas não costuma, volta para
            cá de novo. Meu pai tinha 9 filhos... Ele e a mãe, nós vivíamos
            todos em um lugar — sete homens e duas irmãs, onze pessoas. Não
            tinha separação. Aquecido por uma madeira, tinha muita madeira
            naquela época. Agora não tem, cortaram todo. É muito difícil”.
          </p>
          <p>
            Um irmão de Mohsen já havia viajado para o Brasil. Ele morava em São
            Paulo, e dizia para a família no Líbano que a vida aqui estava
            melhor para trabalhar e viver. Mandou as passagens para que Mohsen e
            mais dois irmãos viessem. Depois vieram mais dois irmãos, e assim
            eram cinco irmãos no Brasil. Desses, um já faleceu e dois voltaram
            para o Líbano. Então só permaneceram ele e um irmão que também mora
            em Foz do Iguaçu, casou com uma brasileira e tem cinco filhos
            homens. O irmão que morava no Brasil e os trouxe para cá faleceu faz
            dois anos, em São Paulo. “A vida é assim”, conclui.
          </p>
          <p>
            Mohsen veio para trabalhar no comércio. Eles compravam e vendiam
            mercadoria, e ele gostou daquilo.
          </p>
        </div>
      </section>

      <section id="two" class="spotlights">
        <section>
          <img
            src={mohsen2}
            alt=""
            data-position="center center"
            class="image"
          />
          <div class="content">
            <div class="inner">
              <blockquote style={{ fontWeight: 'bold' }}>
                “O comércio é bom, aprendi muita coisa. A gente trabalhava com
                ramo de roupa, comprava roupa feita e vendia, confeccionava,
                muita coisa. Depois vimos para Foz do Iguaçu, abrimos comércio
                aqui no Jardim Jupira. Depois parou, fechamos e vim trabalhar
                aqui na Sociedade Islâmica aqui em Foz do Iguaçu, e estou com
                eles faz 30 anos. Cuido da Sociedade, do pessoal. Depois abrimos
                Colégio. Fiquei com eles trabalhando até me aposentar. Estou
                aposentado, sim”.
              </blockquote>
            </div>
          </div>
        </section>
      </section>

      <section id="one">
        <div class="inner">
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>O Líbano só para visitar</h2>
          </header>
          <p>
            Ficaram no Líbano seus pais e outros irmãos e irmãs. Então Mohsen
            foi várias vezes para lá para visitá-los, mas só. Ele diz que se
            costumou com o Brasil e só gosta de morar aqui; que quando foi ao
            seu país natal sentia falta de sua vida calma no Brasil.
            Infelizmente no Líbano a situação nem sempre é tranquila. “Fui
            várias vezes, para visitar, quando tinha ainda pai e mãe vivos.
            Também voltei depois que eles faleceram, para visitar outros irmãos
            e irmãs. A última vez foi faz três anos”.
          </p>
          <p>
            “Eu fui uma vez em 2005, 2006. Fui para lá, começou a guerra
            Líbano-Israel. Nossa Senhora! Ficamos 55 dias em bombardeio, dia e
            noite, dia e noite, em casa. Não tem refúgio, no Líbano não tem
            refúgio, quem tem refúgio é Israel”. A guerra, a violência e a
            injustiça afastaram Mohsen do Líbano. Com 84 anos de idade, ele não
            se esquece de quando era uma criança com 10 anos, em 1948, e
            presenciou a incursão israelense: “Foram todos armados,
            desembarcaram e mataram todo mundo [...] Não tem direito, a gente
            tem direito de viver em paz [...]Eles sabem que foram para um lugar
            errado, sempre viveu judeu e árabe junto, toda religião, todas as
            religiões, não estamos brigando por causa da religião, estamos
            brigando por causa da ocupação”.
          </p>
          <p>
            Mohsen teve três filhos: duas meninas e um menino. Eles nasceram e
            foram criados aqui no Brasil, então são brasileiros, mas depois de
            trabalharem e ganharem dinheiro se mudaram para o Líbano. Com isso,
            sua família está lá, mas Mohsen decidiu ficar aqui: ele diz gostar
            do Brasil, e que não quer mais guerra.
          </p>
          <blockquote style={{ fontWeight: 'bold' }}>
            “Meu pai e a minha mãe, eles vieram para cá, uns 30, 40 anos atrás
            para visitar nós, lá em São Paulo. Depois voltaram e faleceram lá. O
            grande se costuma lá e não vive aqui, é diferente, a cultura é
            diferente, uma convivência diferente [...] Com povo brasileiro você
            não sente estranho, tem muitas raças no Brasil, todas as raças tem,
            tem muita mistura de raças. O Brasil inteiro é bom”.
          </blockquote>
          <p>
            Ele, que inicialmente morou em São Paulo, preferiu ficar em Foz do
            Iguaçu devido à tranquilidade da cidade: “[...] é mais calmo. Eu
            nunca trabalhei no Paraguai, eu costumei no Brasil, no más, a gente
            ia passear no Paraguai, nada mais. Faz seis anos que a gente não
            passa a Ponte, não tem interesse. A gente prefere Brasil, é mais
            calmo e tem mais segurança”.
          </p>
          <p>
            Desde sua chegada a Foz, aproximadamente em 1984, Mohsen assegura
            ter sido testemunha do crescimento da cidade, de suas melhoras
            econômicas devidas principalmente ao comércio, e passa a descrever a
            itinerância das boas condições para os trabalhadores da região entre
            o Brasil e o Paraguai. “Foz melhorou bastante porque o comércio no
            Paraguai estava bom, e Foz melhorou bastante. Agora o Paraguai está
            ruim. Muita gente está saindo daqui para as cidades mais grandes,
            como São Paulo. Antes tinha muito trabalho no Paraguai, um monte de
            brasileiros trabalhava no Paraguai. O pessoal compra no Paraguai,
            vende no Brasil, agora apertaram demais. Eu sou contra drogas e
            armas, mas sim, eu sou a favor de comprar mais coisas para vender e
            sobreviver, menos drogas e armas, isso aí, eu não sou a favor. Se a
            pessoa vem para comprar alguma coisa e vender no Brasil para
            ganhar-se o pão, a polícia tira, não deixa ninguém trabalhar. Está
            tudo parado, não adianta, sei lá...”
          </p>
          <p>
            Mohsen aceita que morar na fronteira tem suas vantagens: “Tudo bom,
            eu posso ir para o Paraguai, para a Argentina, é fácil. Andando
            direitinho conforme a lei manda, você vive bem, não arruma confusão,
            vive em paz. O brasileiro é muito bom, muito bom fazer amizade com
            ele. O brasileiro é muito bom, não tem queixa, não. Eu me sinto em
            casa, eu vou no Líbano e não costumo mais, me costumei mais aqui.
            Aqui ninguém se mete na vida de ninguém. ‘Oi’, ‘oi’; ‘boa tarde’,
            ‘boa tarde’; ‘tudo bem, vizinho’”.
          </p>
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>
              A língua, os costumes e a religião
            </h2>
          </header>
          <p>
            Apesar do Brasil ter uma outra língua e costumes diferentes, para
            Mohsen não foi difícil se acostumar. “O idioma é fácil. Eu nunca
            entrei na escola, mas eu sei falar, ler e escrever português. Eu
            estudei no Líbano até a quinta série. Tinha 12, 15 anos. Vivendo
            aprende. O povo brasileiro muito bom, o Brasil muito bom, só que tem
            que ter menos corrupção, os políticos são muito corruptos, em toda
            parte tem muita corrupção. O governo tem que proteger o povo, o povo
            pobre não tem muita saída, o povo pobre começa a roubar. Só falta o
            governo nosso cuidar do país melhor”.
          </p>
          <p>
            Em seu lar, no entanto, Mohsen mantém os costumes e as tradições
            árabes- muçulmanas:
          </p>
        </div>
      </section>

      <section id="two" class="spotlights">
        <section>
          <img
            src={mohsen}
            alt=""
            data-position="center center"
            class="image"
          />
          <div class="content">
            <div class="inner">
              <blockquote style={{ fontWeight: 'bold' }}>
                “Nós costumamos fazer nossa comida árabe, [mas também] comemos
                comida brasileira. Se queremos comer comida árabe, comemos, se
                queremos comer comida brasileira, comemos. Fazemos arroz,
                feijão, bife, só não comemos carne suína. A maioria das pessoas
                árabes não comem. A religião nossa, muçulmana, não permite. A
                carne suína faz mal à pessoa. Deus proíbe toda a coisa que faz
                mal à pessoa: beber, fumar droga, comer carne suína. Ensina não
                fazer mal ninguém. É uma religião de paz, viver em paz com tudo
                mundo. Nossa religião não é racista. Temos costume nosso sim,
                mas não tem diferença. Não tem nada contra outro povo, não tem,
                só procuramos viver em paz. ”
              </blockquote>
            </div>
          </div>
        </section>
      </section>

      <section id="one">
        <div class="inner">
          <p>
            A respeito de sua cultura e religião, Mohsen explica: “A gente fala:
            são os países árabes, todos um idioma só, e quase uma religião só,
            mas o problema é que foi dividido. Chama-se país da Síria, do
            Líbano, 10.450 km2, 80% montanha, montanhas não serve para nada, e
            chamam país. Isso não é país, isso é uma delegacia. Tem Palestina,
            tem Jordânia, tem Iraque, Irã... São 22 estados árabes, mas deve ser
            estado, não país. A política muito mal, dividiram. Essa política vem
            de fora, dividiram porque temos muitos recursos, temos petróleo,
            temos gás, muitas riquezas, muita coisa, então enfraqueceram o povo
            árabe. Todo está errado, tudo vem do fora”.
          </p>
          <p>
            Mohsen gosta de falar de política: é um defensor da igualdade e da
            justiça. “Todos filhos, filhas, netos, netas, bisnetos, todos
            cresceram aqui no Brasil, são brasileiros. As meninas casaram com
            árabes, trabalharam aqui, ganharam dinheiro aqui e voltaram para o
            Líbano, levaram as meninas junto. O irmão delas, meu filho, também
            voltou para o Líbano, e eu fiquei. Eu não quero. Muita guerra.”
          </p>
        </div>
      </section>
      <Footer />
    </div>
    <Link
      to="/#mohsen"
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

export default MohsenPage
