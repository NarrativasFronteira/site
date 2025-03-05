import { Link } from 'gatsby'
import React, { useState } from 'react'
import felicia2 from '../assets/img/felicia2.jpg'
import nelida from '../assets/img/nelida2.jpg'
import Footer from '../components/footer'

const FeliciaPage = () => {
  const [content, setContent] = useState(FeliciaEspanhol)
  const [language, setLanguage] = useState('PT')

  const languages = () => {
    if (language === 'PT') {
      setContent(FeliciaPortugues)
      setLanguage('ES')
    } else {
      setContent(FeliciaEspanhol)
      setLanguage('PT')
    }
  }
  return (
    <>
      {
        <div
          onClick={() => languages()}
          className="button primary"
          style={{
            position: 'fixed',
            top: '20px',
            left: '100px',
            zIndex: '3',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {language}
        </div>
      }
      {content}
    </>
  )
}

const FeliciaPortugues = () => (
  <div id="wrapper2">
    <section id="banner" class="style2">
      <div class="inner">
        <span class="image">
          <img src={felicia2} alt="" />
        </span>
        <header class="major">
          <h1 class="lineTitle">Felicia Raniolo</h1>
        </header>
        <div class="content">
          <p style={{ color: '#dfff24', fontWeight: 'bold' }}>
            nasceu em 6 de julio de 1945 em Asunción, Paraguay.
          </p>
        </div>
        <header class="major">
          <h1 class="lineTitle">Nélida Canán</h1>
        </header>
        <div class="content">
          <p style={{ color: '#dfff24', fontWeight: 'bold' }}>
            nasceu em 20 de julio de 1934 em Buenos Aires, Argentina.
          </p>
        </div>
      </div>
    </section>

    <div id="main" style={{ color: '#3d465a' }}>
      <section id="one">
        <div class="inner">
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>Da poeira ao trânsito</h2>
          </header>
          <p>
            Felícia nasceu em 6 de julho de 1945 em Assunção, no Paraguai.
            Quando terminou o ensino médio, casou-se e veio com o marido para
            Foz do Iguaçu. O ano era 1964, e ela tinha 18 anos. Seu sogro
            comprou um terreno e construiu uma loja: quatro de seus seis filhos
            vieram trabalhar com ele, incluindo Mohamed Canán, marido de
            Felícia. Todos moravam e trabalhavam juntos na loja La Paz, uma das
            primeiras grandes lojas de roupas finas da cidade, enquanto
            testemunharam o crescimento de Foz do Iguaçu e as transformações de
            uma de suas principais avenidas: a avenida Brasil. Felícia e sua
            cunhada, Nélida Canán, se lembram da sua chegada a esta terra e suas
            experiências nas últimas seis décadas.
          </p>
          <p>
            Sessenta anos atrás, a cidade era muito diferente. Em 1960, a Ponte
            da Amizade, que liga o Brasil e o Paraguai, ainda não havia sido
            inaugurada, nem havia sido iniciada a construção da hidrelétrica da
            Itaipu Binacional. Essas duas obras de grande porte foram decisivas
            na transformação das cidades fronteiriças de Foz do Iguaçu e Ciudad
            del Este, e as histórias da Felícia e Nélida nos levam a percorrer
            tal processo.
          </p>
          <p>
            Felícia viveu sua infância e adolescência em Assunção, no Paraguai:
            “Morávamos na casa do meu avô, que era muito grande, e era dividida
            também por um quintal grande. E eu estudei no ensino fundamental em
            uma escola de freiras. Depois, para cursar o ensino médio, mudei
            para outra escola, pois não havia continuação. Mudei para outro
            colégio de freiras até fazer o ensino médio, né? Então, em vez de ir
            para a faculdade, eu me casei. Tinha dezoito anos. Era uma mocinha.
            Isso foi em 64."
          </p>
          <p>
            Ela se casou com Mohamed Said Canán, cujo pai, de origem árabe
            libanesa, havia comprado um terreno em Foz do Iguaçu, onde construiu
            um imóvel para morar em cima de uma loja embaixo. A ideia era que
            todos os seus filhos viessem trabalhar aqui juntos. Primeiro veio o
            filho mais velho e sua filha Nélida. Mohamed ainda estava em
            Assunção com sua mãe e os outros irmãos que ainda não haviam
            terminado a escola, mas assim que terminou seus estudos e se casou,
            veio com sua esposa. Logo, foi por isso que Felícia veio para Foz do
            Iguaçu.
          </p>
          <p>
            “Meu sogro construiu essa casa inteira e moramos todos juntos, cada
            um com seu quarto. Mais tarde, um mudou-se para Ciudad del Este,
            outro para Assunção, nós ficamos aqui. Esta, a minha cunhada, tinha
            as lojas grandes, lá onde estava esse microcentro, as Lojas La Paz,
            e depois alugou esse pedaço, e ficou com esse outro, menor, onde
            abriu outra loja. E foi assim, até que cada um casou-se, seguiu seu
            curso. E eu fiquei aqui com ela, porque eu me separei do meu marido,
            ele foi para Assunção, e eu fiquei aqui com ela, até hoje”.
          </p>
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>
              Um começo difícil, empoeirado...
            </h2>
          </header>
          <p>
            A propriedade foi construída na Avenida Brasil, esquina com a Rua
            Barão do Rio Branco, que naquela época, quando a cidade começava a
            crescer, era mais um lugar cercado de arbustos e coberto de poeira.
            “Era um campo, parecia um campo”, diz Felícia, que complementa que
            não era a primeira vez que vinha para cá, pois já tinha vindo antes
            em uma excursão da escola onde estudava no Paraguai, mas desta vez
            ela veio com o marido, e para ficar. “Gostei, porque vim atrás do
            meu marido. Tinha que gostar, estava tudo bem. E isso foi
            aumentando, foi aumentando, isso era praticamente um campo, né?
            Nélida.” (Felicia procura reforçar seu testemunho, perguntando a sua
            cunhada, quem responde:)
          </p>
          <blockquote style={{ fontWeight: 'bold' }}>
            <p>
              Nélida: Um campo, ao que parece, de batalha. A rua estava
              totalmente empoeirada.
            </p>
            <p>Felícia: Terra, tudo era terra.</p>
            <p>
              Nélida: Quando chovia, ficava até os joelhos na lama, e quando não
              tinha chuva, a poeira, tinha que esperar uma hora para tudo se
              espalhar.
            </p>
            <p>
              Felícia: Teve um dia que não tinha luz, outro dia que não tinha
              água.
            </p>
            <p>
              Nélida: Faltou mais luz do que água, quando vínhamos, muito tempo
              com velas acesas. Nós éramos meu pai, eu, uma menina, um
              funcionário, porque a mãe ficou em Assunção... O marido dela
              (Felícia) ainda estava na escola, e duas meninas, sabe? E Deus!
            </p>
          </blockquote>
          <p>
            Nélida Canán é cunhada de Felícia e irmã de Mohamed. Ela nasceu em
            20 de julho de 1934 em Buenos Aires, na Argentina. Filha de mãe
            argentina e pai árabe, chegou a Foz do Iguaçu em 1960, quatro anos
            antes de Felícia e do marido. Seu pai saiu do Líbano e se
            estabeleceu na Argentina, onde conheceu sua mãe. Já com três filhos,
            entre eles Nélida, o casal decidiu ir para Assunção, no Paraguai,
            onde montaram um negócio de confecções. Ela não se lembra exatamente
            quantos anos tinha, mas estima que era entre 8 e 10 anos. De sua
            chegada a Foz e das experiências dos primeiros anos, no entanto, ela
            recorda-se bem.
          </p>
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>
              Agora não quer ir embora de Foz
            </h2>
          </header>
          <p>
            “Vim aqui com meu pai e meu irmão mais velho. Viemos comprar o
            terreno e construímos esse prédio, esse prédio que temos agora. Eles
            estavam envolvidos no comércio, principalmente. Já tínhamos em
            Assunção, negócios. Depois a gente veio pra cá e a gente sofreu
            muito, demais, isso foi feio. Hoje poderíamos ser as pessoas mais
            ricas, porque meu pai tinha condição de comprar terras. Aqui, um
            pedaço de terra em Foz do Iguaçu era de graça, porque era um matagal
            de árvores, mato, pedra, tudo”, conta Nélida, enquanto Felícia
            acrescenta que a cada quilômetro havia uma casa.
          </p>
          <p>
            A Ponte da Amizade foi inaugurada em 1965. Quando elas chegaram a
            Foz, vieram de barco, atravessaram o Rio Paraná, perto da Marinha.
            “Foi de barco, quem chegava fazia fila e subia. E com a Argentina
            também, era de jangada, que a gente passava quando queríamos ir à
            Argentina fazer umas compras, essas coisas. Era tudo com jangada,
            levávamos o carro até lá e descíamos para o outro lado”, conta
            Felícia.
          </p>
          <blockquote style={{ fontWeight: 'bold' }}>
            <p>
              Nélida: Tudo era difícil. Se queria carne sem pó do chão tinha que
              ir ao mercado muito cedo. Fizemos amizade com um rapaz.
            </p>
            <p>Felícia: Mas naquela época não tinha mercado, supermercado</p>
            <p>Nélida: ¡Nada!</p>
            <p>
              Felícia: Só tinha um açougue, onde nós comprávamos, e quitanda,
              que era um mercadinho. Só depois chegaram os supermercados.
            </p>
            <p>
              Nélida: Tinha dois japoneses que tinham duas casinhas de madeira,
              vendendo aquelas hortaliças, além de salsinha, cebolinha...
            </p>
            <p>
              Felícia: Lá, por exemplo, onde fica a Casas Bahia, os japoneses
              tinham aquela quitanda, com aquele verdureiro ali. Em frente era
              um açougue, com esse menino que também morreu agora, César Cabral.
              E lá nós comprávamos. Mais tarde, outro senhor japonês abriu um
              pequeno mercado na esquina, passando pelo Salvatti, mercado de Rio
              Branco.
            </p>
          </blockquote>
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>As mudanças começaram...</h2>
          </header>
          <p>
            Com o tempo, Felícia e Nélida se tornaram protagonistas e
            testemunhas das muitas transformações da importante Avenida Brasil,
            hoje o centro comercial da cidade, lotado de muitas lojas e imóveis
            comerciais, além de alguns residenciais. Felícia lembra as diversas
            mudanças que ocorreram na avenida.
          </p>
        </div>
      </section>

      <section id="two" class="spotlights">
        <section>
          <a href="generic.html" class="image">
            <img
              src={felicia2}
              alt=""
              data-position="center center"
              class="image"
            />
          </a>
          <div class="content">
            <div class="inner">
              <blockquote style={{ fontWeight: 'bold' }}>
                “A Avenida Brasil foi mudada três vezes. Era primeiro uma rua
                inteira, que subia e descia. Em seguida, mudou para duas faixas,
                uma subindo e outra descendo, e depois mudou para esta, uma
                única faixa. Eles mudaram a ligação elétrica, fizeram tudo no
                subsolo, plantaram essas árvores”.
              </blockquote>
            </div>
          </div>
        </section>
      </section>

      <section id="one">
        <div class="inner">
          <p>
            Sem dúvida, a construção e a abertura da Ponte Internacional da
            Amizade, em 1965, e a construção da hidrelétrica binacional de
            Itaipu, entre as décadas de 70 e 80, seguidas do estabelecimento da
            zona franca internacional de Ciudad del Este na década de 1990,
            trouxeram mudanças notáveis em ambas cidades fronteiriças — Ciudad
            del Este, no Paraguai, e Foz do Iguaçu, no Brasil.
          </p>
          <blockquote style={{ fontWeight: 'bold' }}>
            “Depois que abriram a ponte, a mudança começou. Foi um ótimo tempo.
            Por exemplo, as pessoas que trabalhavam assim nos lugares, nas
            fazendas, fora, todas se tornaram comerciantes, principalmente em
            Ciudad del Este. Gente pobre que nunca teve um negócio. E abriu uma
            porta, e os contêineres chegaram de fora. Eles vendiam com um preço
            bom e os turistas começaram a descobrir isso aqui, e então começamos
            a trabalhar”.
          </blockquote>
          <p>
            "Nós lutamos, isso é nosso com orgulho, porque tudo foi trazido, o
            dinheiro do meu pai, trazido de Assunção. E aqui na esquina tivemos
            até a volta de Salvatti, e vendemos uma parte para o Banco
            Bamerindus, e daí se seguiram quatro construções, uma após a outra.
            Eles estavam construindo o banco, a nossa casa, a casa aqui, a
            joalheria ao lado, um árabe que estava no meio dos dois, e mais
            adiante tinha uma casa também”, discorre Nélida sobre aqueles que
            iam compondo a Avenida Brasil, que na década de 1960 mal tinha
            taxista na esquina. “Um táxi, só um táxi em Foz do Iguaçu!”
          </p>
          <p>
            As duas lembram que quando chovia tudo era mais caótico, e
            praticamente não podiam sair de casa, no entanto, tinham que sair,
            ir trabalhar, voltar para casa para almoçar e depois voltar ao
            trabalho.
          </p>
        </div>
      </section>

      <section id="two" class="spotlights">
        <section>
          <a href="generic.html" class="image">
            <img
              src={nelida}
              alt=""
              data-position="center center"
              class="image"
            />
          </a>
          <div class="content">
            <div class="inner">
              <blockquote style={{ fontWeight: 'bold' }}>
                “A gente caminhava daqui, mais ou menos três quarteirões, quatro
                quarteirões, até a casa que alugamos, e vínhamos chorando pra
                casa comer. Tem hora que a gente não comia, porque chegávamos
                tão sujas. Entre tomar banho, trocar de roupa, era hora de
                virmos para o negócio. E todos nós irmãos trabalhávamos juntos,
                por isso fomos logo em frente”.
              </blockquote>
            </div>
          </div>
        </section>
      </section>

      <section id="one">
        <div class="inner">
          <p>
            Além disso, se os poucos carros que existiam na época precisassem
            sair era necessário colocar correntes nas rodas para não ficarem
            presos na lama.
          </p>
          <p>
            Com a fluidez alcançada pelo comércio, as mudanças ocorreram mais
            rapidamente e a situação começou a se tornar menos complicada. Os
            avanços incluíram a pavimentação da Avenida Brasil, e assim ficou
            mais fácil de se locomover.
          </p>
          <p>
            Evidentemente, a construção da barragem foi o que trouxe maior
            impacto para a expansão da cidade: a chegada de tantas pessoas que
            vieram trabalhar de diferentes cidades do interior dos dois países
            fez com que as demandas cresceram exponencialmente. “Muita venda. O
            adiantamento veio aqui também e em Ciudad del Este, então eles
            atravessaram daqui, atravessaram de lá, depois venda daqui e venda
            de lá, e assim por diante. Chegaram muitos ônibus, chegou muita
            gente, começou o turismo”, conta Nélida, enquanto Felícia afirma:
            “Isso aqui depois da Itaipu, a quantidade de carros foi dobrando,
            triplicando, e agora tem mais carros do que gente”.
          </p>
          <p>
            “Naquela época, os preços dos terrenos eram muito baixos, e quem
            fazia todas aquelas compras ganhava […] Aqui era tudo mato, essa
            avenida JK era só mato, depois com o tempo que a gente morava aqui
            que se abriu. Muitas pessoas se mudaram. A Jauguense, por exemplo,
            ficava muito mais pra cima. Depois que abriu a JK, foi construída
            mais para baixo. Tudo aquilo era mato, mato, mato [...] A Polícia
            Civil ficava aqui, onde hoje é a Praça da Paz. E a igreja ficou
            sempre lá [...] Quando eu vim com a excursão do Colégio de la
            Providencia, ficamos no Hotel das Cataratas. Nós fomos lá, era todo
            caminho de pedra, não tinha asfalto ali, era um caminho estreito,
            para ir nas Cataratas. Isso também foi aberto mais tarde e eles
            construíram o parque e tudo […] Tinha lugares para fazer piquenique,
            a gente ia muitas vezes...” Felícia e Nélida lembram da cidade de
            antes, aquela que parecia um campo, onde elas chegaram e tanto
            sofreram com as inconveniências da época, mas da qual agora sentem
            saudade.
          </p>
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>Saudades daquela época</h2>
          </header>
          <p>
            “Aqui éramos como uma família, todos se conheciam, todos se
            visitavam. Era mais aconchegante, sabe? Todo mundo se conhecia —
            médicos, amigos, todo mundo — , e depois, com o tempo, muitos amigos
            morreram por aqui. Vendiam aquelas casas, construíam bancos, e
            muitas coisas, muitas lojas, muitas coisas", conta Felícia, enquanto
            Nélida comenta: "Do campo para a cidade, e agora não queremos sair
            daqui por nada. Nós nos acostumamos, e para Assunção apenas para uma
            visita”.
          </p>
          <p>
            A família de Felícia nunca veio morar com ela, e só vinha a passeio
            — principalmente suas duas irmãs, que gostavam das festas da cidade,
            dos carnavais, dos bailes... "Antes tinha muita festa, a Prefeitura,
            no Clube Oeste Paraná, onde hoje está o mercado Ítalo, também foi o
            Gresfi, ao lado do antigo aeroporto. E vieram aquelas orquestras
            famosas de São Paulo. Sempre no dia 10 de junho a Prefeitura
            comemorava. Lembra daquelas orquestras que vinham? Por favor!”,
            exclama Felícia, que em seguida é complementada por Nélida quando
            esta lembra como eram as festas do padroeiro da cidade, São João
            Batista, nos dias 22, 23 e 24 de junho. “Foram dias maravilhosos,
            muito bonitos”, conclui, com evidente nostalgia, Felícia.
          </p>
          <p>
            Felícia e Nélida continuam morando juntas no mesmo prédio da Avenida
            Brasil de onde testemunharam as mudanças de uma cidade em constante
            transformação e crescimento. A loja La Paz, na parte inferior do
            imóvel, não existe mais — as instalações foram alugadas e outros
            negócios estão funcionando no local. Ambas sentem muito orgulho
            daquele lugar de que se lembram hoje: “Vendíamos as melhores roupas.
            Foi uma das primeiras grandes lojas. As melhores roupas, muito
            finas. A loja da Paz… Alguém da época pode contar”, comentam.
          </p>
          <p>
            Foz do Iguaçu sempre se caracterizou pela diversidade cultural
            resultante da chegada de migrantes de outros países ou de outras
            cidades do Brasil. Sobre isso, elas se lembram de seus vizinhos
            árabes, japoneses e brasileiros de ascendência alemã e italiana:
            “Fizemos bastante amizade com os daqui e com os que vieram também.
            Tudo normal, entendia-se desse jeito. Começamos a falar português;
            eles, espanhol, então misturamos tudo”, explica Felícia.
          </p>
          <p>
            “Guarani, a língua do Paraguai, quando veio o povo paraguaio que
            falava guarani, a gente entendia tudo, porque aprendíamos na escola.
            Vínhamos pequenos e nos ensinavam a falar guarani na escola. Meu
            irmão que mora em Assunção, minha irmã e eu falávamos guarani
            corretamente. Meu pai dizia que nós precisávamos saber falar todas
            as línguas. Eu falo guarani. A menina que cuida de mim é paraguaia e
            eu falo guarani com ela”, completa Nélida.
          </p>
          <p>
            A própria família de Nélida é marcada por uma notável mistura
            cultural. Sua mãe era argentina com ascendência italiana, e seu pai,
            libanês. Três de seus filhos nasceram na Argentina e três no
            Paraguai. Quatro deles vieram morar no Brasil. "Uma salada russa,
            meu pai costumava dizer", diz Nélida entre risos.
          </p>
          <p>
            Felícia teve quatro filhos: duas meninas e dois meninos. Um morreu
            quando tinha 10 dias de idade. Os outros três nasceram e foram
            criados em Foz. Ela se separou do marido, mas continuou morando com
            a cunhada. Eles cresceram e se casaram. As filhas se casaram e
            saíram de casa. Uma mora em Londrina e teve dois filhos — a filha já
            tem um filho, o único bisneto de Felícia. Sua outra filha continua
            em Foz, sem filhos. Seu filho mora com elas, Nélida e Felícia, e tem
            uma filha — todos moram juntos.
          </p>
          <p>
            O irmão de Nélida e ex-marido de Felícia já faleceu e está enterrado
            em Ciudad del Este. Em Foz do Iguaçu repousam os restos mortais de
            sua mãe e uma irmã. Ela tem outra irmã que mora em Foz do Iguaçu, e
            seu irmão mais velho, que vai completar 90 anos, mora em Assunção,
            casado com uma brasileira. Eles continuam juntos, na já lotada
            Avenida Brasil de Foz do Iguaçu. “Estamos bem aqui, graças a Deus.
            Não batem na nossa porta para cobrar aluguel, porque não pagamos
            aluguel”, diz Nélida.
          </p>
        </div>
      </section>
      <Footer />
    </div>
    <Link
      to="/#felicia"
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

const FeliciaEspanhol = () => (
  <div id="wrapper2">
    <section id="banner" class="style2">
      <div class="inner">
        <span class="image">
          <img src={felicia2} alt="" />
        </span>
        <header class="major">
          <h1 class="lineTitle">Felicia Raniolo</h1>
        </header>
        <div class="content">
          <p style={{ color: '#dfff24', fontWeight: 'bold' }}>
            nació el 6 de julio de 1945 en Asunción, Paraguay.
          </p>
        </div>
        <header class="major">
          <h1 class="lineTitle">Nélida Canán</h1>
        </header>
        <div class="content">
          <p style={{ color: '#dfff24', fontWeight: 'bold' }}>
            nació el 20 de julio de 1934 en Buenos Aires, Argentina.
          </p>
        </div>
      </div>
    </section>

    <div id="main" style={{ color: '#3d465a' }}>
      <section id="one">
        <div class="inner">
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>De la polvareda al tráfico</h2>
          </header>
          <p>
            Felicia nació el 6 de julio de 1945 en Asunción, Paraguay. Al
            terminar sus estudios de bachillerato se casó y vino con su esposo a
            Foz do Iguaçu. Era el año 1964, y ella tenía 18 años. Su suegro
            había comprado unas tierras y construido una loja, cuatro de sus
            seis hijos vinieron a trabajar, entre ellos Mohamed Canán, el marido
            de Felicia. Todos moraron y trabajaron juntos en La Paz, una de las
            primeras grandes lojas de ropa fina en la ciudad, al tiempo que
            fueron testigos del crecimiento de Foz do Iguaçu y las
            transformaciones de una de sus principales avenidas: la Brasil.
            Felicia, y su cuñada, Nélida Canán, recuerdan su llegada a esta
            tierra y sus vivencias en las últimas seis décadas.
          </p>
          <p>
            Sesenta años atrás, la ciudad era muy distinta. En 1960, aún no
            habían inaugurado el puente de la Amistad, que une a Brasil y a
            Paraguay, y tampoco había comenzado la construcción de la
            hidroeléctrica Binacional de Itaipú. Estas dos obras de gran
            envergadura, fueron determinantes en la transformación de las
            ciudades fronterizas de Foz do Iguaçu y Ciudad del Este. De allí que
            los relatos de Felicia y Nélida nos lleven a recorrer el proceso.
          </p>
          <p>
            Felicia vivió su infancia y adolescencia en Asunción, Paraguay.
            “Morávamos na casa do meu avô, que era bem grande, era dividido
            assim, por um pátio, grande, e estudei até o primário em um colégio
            de freiras. Depois, para fazer a secundaria, mudei para outro
            colégio, porque aí não tinha continuação. Mudei para outro colégio
            de freiras até me formar de bachiller, né? Aí em vez de seguir la
            facultad, me casé. Tinha dezoito anos. Era uma mocinha. Eso fue em
            el 64”.
          </p>
          <p>
            Se casó con Mohamed Said Canán, cuyo padre, de origen árabe,
            libanés, había comprado unas tierras en Foz do Iguaçu y mandado a
            construir un predio para vivir y una loja en la parte de abajo. La
            idea era que todos sus hijos vinieran a trabajar aquí juntos.
            Primero vino el hijo mayor y su hija Nélida. Mohamed, seguía en
            Asunción junto a su madre y los otros hermanos que aún no habían
            terminado el colegio. Pero una vez éste culminó sus estudios y se
            casó, vino junto a su esposa. Por eso Felicia llegó a Foz do Iguaçu
          </p>
          <p>
            “Mi suegro construyó toda esta casa y moramos todos juntos, cada uno
            con su cuarto. Después fue mudándose uno para Ciudad del Este, otro
            para Assunção, nós ficamos aquí. Esta, minha cunhada, tenía as lojas
            grandes ahí onde estaba este microcentro, Lojas La Paz, e depois
            alugou esse pedaço, se quedó com este outro, más chico, donde abrió
            outra loja, y así fue, hasta que cada uno se casó, tomó su rumbo. E
            eu fiquei aquí com ela, porque me separei do meu marido, ele foi
            para Assunção, e eu fiquei com ela até hoje”.
          </p>
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>
              Un comienzo difícil, empolvorado...
            </h2>
          </header>
          <p>
            El predio fue construido en la Avenida Brasil, esquina con la rua
            Barão do Rio Branco, en aquella época, cuando apenas la ciudad
            comenzaba a crecer, un lugar más, rodeado de mato y cubierto por la
            polvareda. “Era un campo, parecía un campo”, dice Felicia, quien no
            era la primera vez que venía, ya había venido antes, en una
            excursión del colegio donde estudiaba en Paraguay. Pero esta vez
            venía junto a su esposo, y para quedarse. “Me gustó, porque vine
            atrás de mi marido, tenía que gustarme, estaba todo bien. Y esto fue
            aumentando, fue aumentando, esto era prácticamente un campo, ¿né?
            Nélida” (Felicia busca reforzar su testimonio, preguntando a su
            cuñada, quien responde:)
          </p>
          <blockquote style={{ fontWeight: 'bold' }}>
            <p>
              Nélida: Un campo, parece, de batalla. Era la calle totalmente con
              polvareda.
            </p>
            <p>Felicia: Tierra, todo era tierra.</p>
            <p>
              Nélida: Cuando llovía, era un barro hasta las rodillas, y cuando
              no había lluvia, la polvareda, usted tenía que esperar una hora
              que se esparza todo.
            </p>
            <p>Felicia: Hay día que faltaba luz, otro día faltaba agua.</p>
            <p>
              Nélida: Faltaba más luz que agua, cuando vinimos mucho tiempo con
              velas prendidas. Estábamos mi papá, yo, una chica, una empleada,
              porque mamá quedó en Asunción, que estaba todavía el marido de
              ella (de Felicia) en el Colegio y dos nenas, ¿sabe? ¡Y Dios!
            </p>
          </blockquote>
          <p>
            Nélida Canán, es cuñada de Felicia, la hermana de Mohamed. Nació el
            20 de julio de 1934 en Buenos Aires, Argentina. De madre argentina y
            padre árabe, llegó a Foz do Iguaçu en 1960, cuatro años antes que
            Felicia y su marido. Su padre llegó del Líbano y se estableció en la
            Argentina, ahí conoció a su madre, y ya con tres hijos, entre ellos
            Nélida, decidieron irse a Asunción, Paraguay, donde establecieron un
            negocio de venta de ropa. Ella no recuerda con exactitud cuántos
            años tenía, pero calcula que serían entre 8 y 10 años de edad. Pero
            su llegada a Foz y las vivencias de los primeros años las recuerda
            bien.
          </p>
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>Ahora no se quiere ir de Foz</h2>
          </header>
          <p>
            “Yo me vine aquí con mi papá y mi hermano mayor, nos vinimos a
            comprar la tierra y mandamos a construir esto, este edificio que
            nosotros tenemos ahora. Ellos se dedicaban al comercio,
            principalmente. Nosotros teníamos ya en Asunción, comercio. Después
            vinimos aquí y sufrimos mucho, demasiado, era feo esto. Hoy podíamos
            ser la gente más rica, porque mi papá tenía condición de comprar
            terrenos. Aquí era de gracia un terreno en Foz do Iguaçu en una
            época, porque era un matorral de árboles, de yuyos, de piedra, de
            todo”, cuenta Nélida, mientras Felicia agrega que a cada kilómetro
            era que había una casa.
          </p>
          <p>
            La inauguración del Puente de la Amistad fue en 1965, así que ellos
            llegaron en bote, atravesando el rio Paraná a la altura de la
            Marina. “Era por barquito, quien llegaba hacía fila y subía, y con
            la Argentina también, era con balsa, que pasábamos cuando queríamos
            ir a la Argentina a hacer compras, esas cosas. Era todo con balsa,
            subíamos el carro ahí y bajábamos al otro lado”, dice Felicia.
          </p>
          <blockquote style={{ fontWeight: 'bold' }}>
            <p>
              Nélida: Todo era difícil, si usted quería una carne sin polvo del
              suelo tenía que ir tempranito al mercado, hicimos amistad con un
              muchacho.
            </p>
            <p>
              Felicia: Pero en aquel tiempo no había mercado, mercado,
              supermercado
            </p>
            <p>Nélida: ¡Nada!</p>
            <p>
              Felicia: Era açougue, que nosotros comprábamos, y quitanda, que
              era un mercadito chico. Después es que fueron formando los
              supermercados.
            </p>
            <p>
              Nélida: había dos japoneses que tenían dos casitas de madera,
              vendiendo esas verduritas, así como salsinha, cebolinha...
            </p>
            <p>
              Felicia: ahí, por ejemplo, donde es Casas Bahía, tenían los
              japoneses esos, esa quitanda, con esa verdulería ahí, enfrente
              estaba un açougue, con este muchacho que también ahora murió,
              César Cabral. Y ahí hacíamos compras. Después otro señor japonés
              abrió un mercadito acá a la vuelta, pasando El Salvatti, mercado
              Río Branco.
            </p>
          </blockquote>
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>Comenzaron los cambios...</h2>
          </header>
          <p>
            A lo largo del tiempo, Felicia y Nélida se hicieron protagonistas y
            testigos de las tantas transformaciones de la importante Avenida
            Brasil, hoy, centro del comercio en la ciudad, lotado de lojas y
            predios comerciales, junto a algunos pocos residenciales. Felicia
            recuerda que la pista y los sentidos de dirección de la avenida
            sufrió varios cambios.
          </p>
        </div>
      </section>

      <section id="two" class="spotlights">
        <section>
          <img
            src={felicia2}
            alt=""
            data-position="center center"
            class="image"
          />

          <div class="content">
            <div class="inner">
              <blockquote style={{ fontWeight: 'bold' }}>
                “La Av. Brasil se cambió tres veces. Era primero una calle todo,
                que subía y bajaba. Después mudó para dos pistas, una que subía
                y otra que bajaba, y después se mudó para esta, una sola pista.
                Mudaron la conexión de la luz, hicieron todo subterráneo,
                plantaron estas árvores”.
              </blockquote>
            </div>
          </div>
        </section>
      </section>

      <section id="one">
        <div class="inner">
          <p>
            Sin duda, la construcción y apertura del Puente Internacional de la
            Amistad en 1965, y la construcción de la central hidroeléctrica
            Itaipú binacional, entre los años 70 y 80, seguido de la
            instauración de la zona franca de comercio internacional en Ciudad
            del Este en la década de los 90, propició cambios notables en ambas
            ciudades fronterizas, tanto Ciudad del Este, en Paraguay, como Foz
            do Iguaçu, en Brasil.
          </p>
          <blockquote style={{ fontWeight: 'bold' }}>
            “Después que abrieron el puente, comenzó el cambio. Fue una época
            buenísima. Gente que trabajaba por ejemplo así en los sitios, en las
            chácaras, afuera, se hicieron todos comerciantes, especialmente en
            Ciudad del Este, gente pobre que nunca tuvo comercio y abrían una
            puertica y llegaban los containers de afuera, les vendía a ellos con
            precio bueno y los turistas comenzaron a descubrir esto aquí, y así
            fuimos trabajando”.
          </blockquote>
          <p>
            "Luchamos, esto es nuestro con orgullo, porque todo fue traído,
            dinero de mi papá, traído de Asunción, y aquí en la esquina nosotros
            teníamos hasta la vuelta de Salvatti, y vendimos un pedazo para el
            Banco Bamerindus, y de ahí siguieron cuatro construcciones, una
            atrás de la otra. Estaban construyendo el banco, nuestra casa, la
            casa de aquí, la joyería del al lado, un señor árabe que estaba en
            el medio de los dos, y más para allá estaba una casa también”,
            describe Nélida, el poblamiento de la avenida Brasil, que en los
            años 60 apenas tenía un taximetrista en la esquina. “¡Un taxi, solo
            un taxi en Foz do Iguaçu!”.
          </p>
          <p>
            Ambas recuerdan que cuando llovía, todo era más caótico,
            prácticamente no se podía salir de la casa, pero ellas debían
            hacerlo, tenían que ir a trabajar y regresar a su casa a almorzar y
            después volver al negocio.
          </p>
        </div>
      </section>

      <section id="two" class="spotlights">
        <section>
          <img
            src={nelida}
            alt=""
            data-position="center center"
            class="image"
          />
          <div class="content">
            <div class="inner">
              <blockquote style={{ fontWeight: 'bold' }}>
                “Nosotras íbamos caminando de aquí, más o menos unas tres
                cuadras, cuatro cuadras, hasta la casa donde alquilamos, y
                llegábamos llorando allá en la casa a comer, hay veces no
                comíamos, porque llegábamos tan sucias, entre bañarnos,
                cambiarnos la ropa, ya llegaba la hora de venirnos al negocio, y
                todos los hermanos trabajábamos juntos, por eso que en seguida
                fuimos adelante”.
              </blockquote>
            </div>
          </div>
        </section>
      </section>

      <section id="one">
        <div class="inner">
          <p>
            Y si los pocos carros que había, querían salir, tenían que pasar
            cadenas por las ruedas para no quedarse atollados en el barro.
          </p>
          <p>
            Con la fluidez alcanzada en el comercio los cambios se sucedieron
            con mayor rapidez y la situación comenzó a tornarse menos
            complicada. Los adelantos incluyeron el asfaltado de la avenida
            Brasil y fue más fácil trasladarse.
          </p>
          <p>
            Evidentemente la construcción de la represa fue el detonante más
            fuerte en la expansión de la ciudad. La llegada de tantas personas
            desde diferentes ciudades del interior de ambos países que vinieron
            a trabajar, hizo que la demanda creciera exponencialmente. “Mucha
            venta. Vino el adelanto aquí también y en Ciudad del Este, entonces
            cruzaban de aquí, cruzaban de allá, entonces venta de aquí y venta
            de allá y así. Llegaban muchos autobuses, llegaba mucha gente,
            empezó el turismo”, según Nélida., mientras Felicia sentencia: “Esto
            después de la Itaipú fue duplicando, triplicando los carros, ahora
            hay más carros, que gente”.
          </p>
          <p>
            “En aquel tiempo los precios de la tierra eran bien bajos, y quien
            hizo todas esas compras se favoreció […] Aquí era todo monte, esta
            avenida JK era todo monte, después con el tiempo que nosotros
            estábamos viviendo aquí se abrió eso. Muchas personas se mudaron. La
            Jauguense, por ejemplo, estaba bien más arriba, después que abrieron
            la JK construyeron más abajo. Todo aquello era monte, monte, monte
            […] La Policía Civil estaba aquí, donde es ahora la plaza de la Paz.
            Y la iglesia siempre estuvo ahí […] Yo cuando vine con la excursión
            del Colegio de la Providencia, nos hospedamos en el hotel de las
            Cataratas. Fuimos hasta allá, era todo empedrado, ahí no había
            asfalto, era un caminito estrecho, donde iba por las Cataratas. Eso
            también fue abierto después y fueron construyendo el parque y todo
            […] Había lugares para hacer pic nic, fuimos muchas veces…”
            recuerdan Felicia y Nélida la ciudad de antes, la que parecía un
            campo, la ciudad a la que llegaron y donde tanto sufrieron por las
            incomodidades de la época, pero de la que ahora sienten saudades.
          </p>
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>Saudades daquela época</h2>
          </header>
          <p>
            “Aquí éramos como una familia, todos se conocían, todos se
            visitaban. Era más aconchegante, ¿sabés? Todos se conocían, los
            médicos, los amigos, todos, y después, con el tiempo, por aquí
            murieron muchas personas amigas. Esas casas las fueron vendiendo, y
            fueron construyendo bancos, y muchas cosas, muchos comercios, muchas
            cosas”, expresa Felicia, a la vez que Nélida comenta: “Del campo a
            la ciudad, y ahora no queremos salir de aquí por nada, nos
            acostumbramos. Para Asunción solo de visita”.
          </p>
          <p>
            La familia de Felicia nunca vino a vivir con ella, solo venían de
            paseo, en especial sus dos hermanas, quienes gustaban de las fiestas
            en la ciudad, los carnavales, los bailes… “Antes había mucha fiesta,
            la de la Prefeitura, en el Oeste Paraná Club que es donde está ahora
            el mercado Ítalo, también estaba el Gresfi, al lado del aeropuerto
            viejo. Y venían aquellas orquestas famosas de São Paulo. Siempre el
            10 de junio hacía fiesta la Prefeitura. ¿Te acordás de esas
            orquestazas que venían?, ¡por favor!”, exclama Felicia, y es
            secundada por Nélida, que recuerda cómo las fiestas del patrono, São
            João Batista, eran 22, 23 y 24 de junio. “Fueron días maravillosos,
            muy lindos”, concluye con evidente nostalgia, Felicia.
          </p>
          <p>
            Felicia y Nélida continúan viviendo juntas en ese mismo predio de la
            Avenida Brasil desde donde han sido testigo de las transformaciones
            de una ciudad en constante transformación y crecimiento. La loja La
            Paz, en la parte inferior del predio, ya no existe, el local fue
            alquilado y funcionan otros negocios. Ambas, se sienten muy
            orgullosas de aquel lugar que hoy rememoran. “Vendíamos las mejores
            ropas. Fue una de las primeras lojas grandes, la mejor ropa,
            finísima. La loja La Paz…cualquiera de aquella época te puede hablar
            de ella”, comentan.
          </p>
          <p>
            Foz do Iguaçu siempre ha estado caracterizada por la diversidad
            cultural como consecuencia de la llegada de migrantes de otros
            países u otras ciudades de Brasil. Ellas recuerdan a sus vecinos
            árabes, japoneses y brasileños descendientes de alemanes e
            italianos. “Hicimos bastante amistad con los de aquí y los que
            vinieron también. Todo normal, uno se entendía desse jeito. Nosotros
            empezamos a hablar el portugués, ellos el castellano y así, íbamos
            misturando todo”, explica Felicia.
          </p>
          <p>
            “Guaraní, el idioma del Paraguay, cuando venía gente paraguaya que
            hablaba guaraní, entendíamos todo, porque nosotros aprendimos en la
            escuela, veníamos pequeñitos y nos enseñaban en la escuela a hablar
            guaraní. Mi hermano que vive en Asunción, mi hermana y yo hablábamos
            correcto el guaraní. Mi papá quería porque hay que saber hablar
            todas las lenguas. Yo hablo guaraní. La chica que me cuida es
            paraguaya y yo hablo con ella el guaraní”, agrega Nélida.
          </p>
          <p>
            La propia familia de Nélida está marcada por una notable mezcla
            cultural. Su mamá era argentina con ascendencia italiana, y su papá,
            libanés. Tres de sus hijos nacieron en Argentina y tres en Paraguay,
            y cuatro de ellos se vinieron a vivir en Brasil. “Una ensalada rusa,
            decía mi papá”, comenta Nélida en medio de risas.
          </p>
          <p>
            Felicia tuvo cuatro hijos, dos niñas y dos niños, uno falleció a los
            10 días de nacido. Los otros tres nacieron y se criaron en Foz. Ella
            se separó de su marido, pero siguió viviendo junto a su cuñada.
            Crecieron, y se fueron casando. Las hijas se casaron y se fueron de
            la casa. Una vive en Londrina, tuvo dos hijos, la hija ya tiene un
            hijo, el único bisnieto de ella. La otra hija continúa en Foz, sin
            hijos. El hijo, vive con ellas en la casa y tiene una hija, todos
            viven juntos.
          </p>
          <p>
            El hermano de Nélida y ex esposo de Felicia ya falleció y está
            enterrado en Ciudad del Este. En Foz do Iguaçu reposan los restos de
            su madre y una hermana. Tiene otra hermana viva en Foz do Iguaçu, y
            su hermano mayor, que cumplirá 90 años, vive en Asunción, casado con
            una brasileña. Ellas, continúan juntas, en la ahora concurrida, Av.
            Brasil de Foz do Iguaçu. “Aquí estamos bien, gracias a Dios. No nos
            golpean la puerta para cobrar alquiler, porque no pagamos alquiler”,
            sentencia Nélida.
          </p>
        </div>
      </section>
      <Footer />
    </div>
    <Link
      to="/#felicia"
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

export default FeliciaPage
