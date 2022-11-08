import { Link } from 'gatsby'
import React from 'react'
import reinilda from '../assets/img/reinilda.jpg'
import reinilda2 from '../assets/img/reinilda2.jpg'
import Footer from '../components/footer'

const ReinildaPage = () => (
  <div id="wrapper2">
    <section id="banner" class="style2">
      <div class="inner">
        <span class="image">
          <img src={reinilda} alt="" />
        </span>
        <header class="major">
          <h1 class="lineTitle">Renilda Spies</h1>
        </header>
        <div class="content">
          <p style={{ color: '#dfff24', fontWeight: 'bold' }}>
            nasceu em 30 de outubro de 1958 Santa Rosa, no Rio Grande do Sul,
            Brasil.
          </p>
        </div>
      </div>
    </section>

    <div id="main" style={{ color: '#3d465a' }}>
      <section id="one">
        <div class="inner">
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>
              Reconstruiu sua vida na fronteira
            </h2>
          </header>
          <p>
            Reinilda nasceu em Santa Rosa, no Rio Grande do Sul, em 30 de
            outubro de 1958, e veio para o Paraná em 1959, quando ainda tinha 10
            meses de idade, junto de seus pais: Olivia Katarina Brisners e
            Alfonso Leopoldo Spies, ambos de ascendência alemã. Eles vieram em
            busca de terras planas, boas para a agricultura. Reinilda morou em
            São Miguel do Iguaçu até os 18 anos e depois veio para Foz do
            Iguaçu, onde ficou por toda a sua vida adulta.
          </p>
          <blockquote style={{ fontWeight: 'bold' }}>
            “Meu pai se chamava Alfonso Leopoldo Spies, e a minha mãe, Olivia
            Katarina Brisners. Os dois de origem alemã, e vieram para o Paraná
            para comprar terra, porque aqui no Paraná era terra plana, planície;
            no Rio Grande do Sul era morro. Aí vieram, compraram a terra a um
            conhecido do meu pai. [...] Eles nasceram aqui no Brasil. Quem
            nasceu na Alemanha foi meu trisavô. Ele chamava Simón Spies. Meu
            bisavô chamava Nicolau Spies, e o meu avô chamava Pedro Spies, e meu
            pai Alfonso Spies. Então essa origem dos Spies aqui do Brasil vem
            todo desse tronco, que é o Simón. Do meu trisavô foi que brotou todo
            esse sobrenome Spies que tem no Paraná”, explica Reinilda sobre a
            origem alemã de sua família e o motivo da vinda ao Paraná.
          </blockquote>
          <p>
            Quanto à saída da Alemanha, Reinilda confessa não ter se aprofundado
            nisso, mas acredita ter sido devido à guerra e por estarem em busca
            de melhores oportunidades. Sua família antiga é numerosa, como
            muitas outras famílias estrangeiras. Existe um livro que explica a
            origem de sua família, incluindo seus membros, e também trata do
            brasão, seus costumes e festas.
          </p>
          <p>
            “Meu pai tinha nove filhos. Tinha quatro filhos com a primeira
            esposa, dali ela faleceu e ele casou com a minha mãe. Minha mãe
            tinha 31 anos, quando foram a cavalo para procurar uma esposa para
            meu pai, e daí disseram que a minha mãe estava solteira, mas a minha
            mãe não queria se casar. Disse a minha mãe para mim, contava, né?
            Que a minha avó diz que ele veio um domingo e conversou só com meus
            avós, aí disse que ela viu aquele homem lá e não sabia. Depois
            falaram para ela: ‘Esse homem veio aqui porque ele quer casar com
            você.’ Ela ficou revoltada e tudo. No sábado ele vai vir para
            conversar contigo, então. Aí no sábado ele veio, diz que ele estava
            mais barbeado, mais bonito, em um cavalo melhor, e a minha mãe se
            animou. Ficou sabendo que ele era viúvo de quatro crianças pequenas,
            e a minha mãe disse que ficou com dor dos filhos e aceitou casar com
            ele. Ele era 5 anos mais velho que ela. A minha mãe demorou em se
            casar, então ela contava assim que daí... eles fizeram casamento,
            depois foram para casa de carroça com as crianças dele, e ela
            gostava daqueles filhos dele. Eu admiro a minha mãe porque ela
            conseguiu dar muito amor para os filhos que ela adotou como se
            fossem dela. Ela sempre defendia, ela sempre, até eles casarem
            sempre soube amar aquelas crianças, que são os meus meios irmãos,
            meus irmãos, né? Ela teve muito amor para dar.”
          </p>
          <p>
            A infância da Reinilda foi marcada pelo sofrimento de sua mãe, que
            ela descreve como uma pessoa muito sofrida: “Eu me lembro, de uma
            época em que a gente veio morar no Paraná, eu era bem pequena, mas
            conforme eu fui crescendo, a idade de três anos, eu lembro, o filho
            mais novo da minha mãe faleceu. Minha mãe teve 5 filhos, 4 meninas e
            um menino. Só o último era menino, da minha mãe com o meu pai. Os
            filhos do meu pai com a primeira esposa eram todos meninos. E aí eu
            lembro que quando morreu aquele meu irmãozinho, o único filho homem
            dela, ela ficou assim tão abalada psicologicamente que perdeu o
            juízo. Não sei se era uma depressão, mas ela ficou fora de si. Saía
            de manhã, a gente não sabia onde ela estava. Ela fugia, sabe? Então
            isso tem muita lembrança da minha infância. Antigamente isso para
            mim era muito duro lembrar. Hoje eu consigo falar disso todo,
            antigamente não.”
          </p>
        </div>
      </section>

      <section id="two" class="spotlights">
        <section>
          <img
            src={reinilda}
            alt=""
            data-position="center center"
            class="image"
          />
          <div class="content">
            <div class="inner">
              <blockquote style={{ fontWeight: 'bold' }}>
                "Eu me lembro, da época em que a gente veio morar no Paraná, eu
                era bem pequena, mas conforme eu fui crescendo, a idade de três
                anos, eu lembro, o filho mais novo da minha mãe faleceu".
              </blockquote>
            </div>
          </div>
        </section>
      </section>

      <section id="one">
        <div class="inner">
          <p>
            “Meu pai teve que prender ela num quarto. Eu me lembro até hoje, eu
            era pequenininha e meu pai alcançando um prato de comida para ela.
            Era doloroso, sabe? E quando a gente veio morar no Paraná era tudo
            mato, mato, mato. Eu acredito que era época do machismo, que os
            homens valorizavam muito o filho homem, a filha era menos
            valorizada. E a minha mãe, como meu pai tinha com ela só um filho
            homem e ela perdeu ele, eu acho que isso foi muito. E hoje eu digo
            que isso na verdade é uma bobagem, no pensar de hoje, né? Mas
            naquele tempo como era, a gente consegue entender. Ela ficou muito
            tempo assim, até que o pai conseguiu internar ela um mês em Curitiba
            em um hospital psiquiátrico. Nós ficamos com um irmão, eu me lembro
            que ele lavava roupa, ele fazia serviço, ele era mais velho que nós,
            meninas. Meu irmão grande namorava num galpão que meu pai fez. Me
            lembro que era de tabuinha, todo a mão. Meu pai era um escultor, e
            eu nunca tive a sabedoria de elogiar ele. Meu pai fazia tantas
            coisas, sabia fazer tantas coisas, era um artista em madeira. Ele
            fazia engenho de cana, fazia carroça, fazia cadeira, ele fazia casa,
            sem emprego, era incrível. Ele fazia para outros, por encomenda e
            para a casa. Ele plantava vime, fazia cestos de vime. Lá no Sul,
            parece que trouxeram um saco de mantimento, uma vaca dentro do
            caminhão, para ter de sobrevivência os primeiros anos. Daí plantaram
            cana, daí eu me lembro que quando eu tinha acho que uns três anos de
            idade foi que fizeram o primeiro melado, eu era bem pequenininha,
            mas eu me lembro até hoje. E meu irmãozinho era vivo, ele morreu com
            um ano e meio, e ele era um ano e meio de diferença de mim, então
            ele tinha ano e meio, eu tinha três anos, isso eu lembro, que eu
            brincava com ele, isso eu lembro, eu me lembro dele, me lembro
            quando ele morreu.”
          </p>
          <p>
            O começo da vida no Paraná não foi fácil — os pais da Reinilda
            vieram e sabiam disso. Ela era uma criança, mas se lembra daquela
            época tão difícil que deixou memórias difíceis de serem apagadas.
            Seu pai vendeu terras no Rio Grande do Sul e comprou outras em São
            Miguel do Iguaçu, onde eles chegaram para morar num sítio. Seus
            irmãos mais velhos, junto de seu pai, tiraram todo o mato com
            machado. “Eu tenho muito trauma disso, porque muitas cobras, não
            posso ver nem na TV, as cobras entravam dentro de casa”, se lembra
            Reinilda, que também ficou traumatizada com as enchentes daquela
            época. “O rio ficava perto de casa, e eu tenho medo da água até
            hoje, daquelas águas vermelhas que vinham. E quando tinha muito
            frio, nós tínhamos um fogão com lenha, e a gente não tinha agasalho
            quase, então a gente tinha o fogão de lenha para a gente se
            esquentar de manhã. Daí a gente, para sair para fora, tinha muito
            mato, não tinha quase sol, construíram um burrajo: era uma casinha
            de madeira e de chão batido, no meio fazia um fogo e ficava tudo nós
            em volta se esquentando cada um com uma galinha no colo, para se
            esquentar.”
          </p>
          <p>
            Conseguir ter uma plantação foi muito difícil para a família:
            “Primeiro plantaram cana. Meu pai era muito criativo, inteligente,
            plantava cana, plantava amendoim, batata doce, todas aquelas coisas
            de comida. Tinha vaquinha de leite, até fazer uma plantação para
            fazer dinheiro demorou muito. Aí plantava feijão, derrubar todo
            aquele mato, roçar tudo. Meus irmãos que foram o braço forte, e meu
            pai. Tudo a mão, a machado. Eu às vezes ia levar lanche aos meus
            irmãos no mato, gritava de longe para não cair uma árvore em cima de
            mim. Era eles quem traziam aquelas cobras que eles matavam, ali as
            cobras se enrolavam, jogava a água quente em elas, ai, nossa! Que eu
            lembro disso. Tem muita coisa que marcou na minha vida. Uma vez meu
            irmãozinho, ele caiu em um poço, mas o poço era raso, e a minha mãe
            estava indo perto, aí eu gritei e veio correndo. Não foi aí que
            morreu, ele morreu de tétano, algum bicho no pé, tinha muito bicho.
            E uma irmã minha, mais velha que eu, morreu no Rio Grande do Sul.
            Agora só tem duas irmãs minhas, que uma mora aqui em Foz e a outra
            mora em Capanema. A gente morou ali até o meu pai falecer. Meu pai
            faleceu quando eu tinha 18 anos. Eu estudei só primário, até a
            quarta série, não tinha para mais.”
          </p>
          <p>
            As memórias de Reinilda se relacionam com a construção do sítio e
            todo o trabalho que tiveram seu pai e seus irmãos mais velhos.
            Naquela época ela quase não brincava, e só se lembra de ter brincado
            com seu irmãozinho falecido. “Eu brincava sozinha porque meus irmãos
            eram mais velhos. Só brincava com meu irmãozinho, mas ele faleceu.
            Eu brincava sozinha com casquinha de coqueiro, fazia uma casinha,
            fazia tudo.”
          </p>
          <p>
            Ela morou no sítio até a morte de seu pai, e depois veio para Foz.
            “É bem pertinho, eu vou sempre. Já não tem sítio, foi vendido, a
            casa foi derrubada. Nós moramos primeiro no galpão, perto do rio.
            Depois ele foi desmatando, desmatando e construiu uma casa nova,
            muito bonita, toda torneada, muito desenhada, muito bonita nossa
            casa. Tinha dois pés de sombra na frente. Eu ficava feliz quando o
            pai e a minha mãe não estavam brigando, daí estavam tomando
            chimarrão juntos. De cenas assim eu ficava feliz, e toda noite eu
            rezava para que eles não brigassem. Isso era torturante para mim.”
          </p>
          <p>
            A doença da mãe da Reinilda causou muita dor na família, e ela se
            lembra disso o tempo todo. Apesar das dificuldades, seu pai
            conseguiu levar a esposa para fazer um tratamento em Curitiba, em um
            hospital psiquiátrico. “A minha mãe ficou só um mês em Curitiba. Os
            militares trouxeram ela e ficou boa dez anos. Depois voltou de novo
            à depressão. O povo dizia que era uma louca. Na infância eu tinha
            vergonha da minha mãe. Eu já falei isso com psicólogos, a gente peca
            sem saber. Os coleguinhas falavam que ela era louca. Hoje não teria,
            porque hoje a gente já compreende mais as coisas. Todo mundo
            compreende, né? Ela faleceu aqui em Foz. Tinha já 90 anos, aqui na
            chácara, ela faleceu. Ela ficava um tempo bom, outro não. Até ela
            ficar em cama. Quando ficou bem de cama, ficou mais fácil para
            cuidar dela. ”
          </p>
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>O recomeço da vida em Foz</h2>
          </header>
          <p>
            “Eu vim para cá porque eu me separei. Quando meu pai faleceu, eu já
            estava meio paqueleando o pai dos filhos. Eu casei com 18 anos, não
            tinha juízo, casei para cuidar da minha mãe. Naquele tempo você
            precisava ter marido para ter uma casa. Eu casei por casar, foi uma
            infelicidade total, não estava preparada para me casar. Ele era
            cinco anos mais velho que eu, e ele era aventureiro, tocador de
            gaitas. Vivi oito anos, aí eu peguei e vim para Foz do Iguaçu,
            sozinha. Tinha três filhos.”
          </p>
          <p>
            Reinilda chegou a Foz do Iguaçu em 1985, e trabalhou três anos como
            doméstica. Juntou dinheiro e comprou a máquina de costura. Esse foi
            o seu sustento durante toda a vida. Assim conseguiu se estabelecer e
            trazer os seus três filhos, que havia deixado em São Miguel, e
            terminar de criá-los aqui. “Eu já costurava um pouco, gostava da
            costura, e daí comecei a costurar, costurei 25 anos,
            profissionalmente, mesmo, né? Depois me aposentei, conheci o meu
            marido e vim para a chácara, esse de agora, no ano 2005, acho que
            foi.”
          </p>
          <p>
            As primeiras lembranças de Reinilda com a cidade de Foz têm a ver
            com a quantidade de pessoas que haviam chegado devido à construção
            da Itaipu. A década de 90 foi muito movimentada na região
            fronteiriça, vieram muitas pessoas de outras cidades para trabalhar.
          </p>
          <blockquote style={{ fontWeight: 'bold' }}>
            “[...] Naquele tempo era muito bom, qualquer um tinha emprego, tanto
            de doméstica como de qualquer um, tinha emprego. Um vendedor na rua
            vendia água. Chegou muita gente, esse povo da Itaipu, de tudo quanto
            é lugar. Hoje Foz está bem, tá crescendo mais assim, agora é uma
            metrópole, é grande. Agora eu vou num lugar que ia antes e quando
            chego está tudo mudado.”
          </blockquote>
          <p>
            Reinilda sempre trabalhou como autônoma, nunca como empregada de uma
            empresa. “Eu trabalhava como mão de obra, a pessoa trazia o tecido e
            eu confeccionava, costurava, geralmente para mulher. Gostava de
            costurar para mulheres, para homens só fazia concertos. Eu amava meu
            trabalho. Saudades das minhas clientes, eu amava, amava. Eu só
            consegui largar de costurar quando vim para a chácara. A minha mãe
            ficou de cama, eu cuidei dela três anos na cama. Meu acabamento da
            roupa era muito bom, e as minhas clientes gostavam muito. Agora não
            costuro mais, porque meu corpo não aguenta mais costurar como eu
            costurava, 12 horas por dia, as costas e as mãos já estão todas
            doloridas, então eu faço para mim.”
          </p>
          <p>
            A criatividade é uma característica muito forte da personalidade de
            Reinilda, que atualmente pertence ao grupo de dança e teatro da Casa
            do Idoso, onde ela tem a possibilidade de se expressar
            artisticamente. “Eu gosto muito da arte. Eu acho que quem puxou mais
            para meu pai fui eu, eu gosto muito de estar criando alguma coisa,
            sempre inventado algo, e não gosto muito da rotina, por isso nunca
            fui trabalhar numa empresa, não gosto de fazer dez blusas iguais.”
          </p>
          <p>
            Embora não tenha precisado comprar tecidos para a confecção de
            roupas, pois eram suas clientes que os levavam, Reinilda diz que
            morar na fronteira e ter a possibilidade de atravessar a Ponte da
            Amizade para chegar ao Paraguai, em Ciudad del Este, e comprar
            tecidos mais baratos e de boa qualidade foi um recurso que sempre
            aproveitou. As relações tão estreitas com outros países e as
            diferenças econômicas fazem parte do cotidiano dos moradores da
            cidade.
          </p>
        </div>
      </section>

      <section id="two" class="spotlights">
        <section>
          <img
            src={reinilda2}
            alt=""
            data-position="center center"
            class="image"
          />
          <div class="content">
            <div class="inner">
              <blockquote style={{ fontWeight: 'bold' }}>
                “Quando eu comprava tecidos, eu comprava no Paraguai. Bom preço
                e boa qualidade. Aqui é vice-versa com o Paraguai, a fronteira,
                a gente participa muito do lado de lá e eles aqui. Uma maior
                relação com o Paraguai que com a Argentina. Às vezes faço sopa
                paraguaia e chipa, que gosto muito. Tomo chimarrão, não tereré.
                Com a Argentina muito pouco, mas o povo daqui sempre foi comprar
                lá.”
              </blockquote>
            </div>
          </div>
        </section>
      </section>

      <section id="one">
        <div class="inner">
          <header class="major">
            <h2 style={{ color: '#3d465a' }}>Origem alemã</h2>
          </header>
          <p>
            Reinilda tem uma importante influência alemã em sua vida: ainda tem
            costumes alemães e fala alemão até hoje. “A minha mãe só falava
            alemão, nunca aprendeu a falar português. Minha mãe era uma
            brasileira que só falava em alemão. Antigamente os alemães que
            vinham de lá se juntavam nas glebas e morava aquele povo ali,
            sozinho, e só falavam alemão. Lá, na Santa Catarina, até hoje as
            pessoas só falam alemão. Na época da guerra até foi proibido. Aqui
            em Foz do Iguaçu eu sinto que tem muito pouco alemão, para a gente
            conversar, eu quase não converso em alemão, a gente vai perdendo.
            Quando a minha mãe era viva, eu conversava direito com ela. Foi a
            primeira língua que a gente falou, quando eu fui na escola comecei
            falar português, mas em casa só alemão. [...] Eu não ensinei para os
            meus filhos, o pai deles não falava então eu não tinha esse direito
            de falar [...] Eu já fui muito bailera. Eu gosto muito da comida, de
            cozinhar, eu gosto de reunir pessoas, eu gosto de fazer a cuca,
            bolachas alemãs, bolo, sobremesa de nossa infância.”
          </p>
          <p>
            No fim da vida, sua mãe teve tempo de recuperar o que foi perdido na
            infância da filha, e estando de cama, contou a ela suas vivências no
            Sul junto de seus pais. Então Reinilda, através das memórias de sua
            mãe, pôde conhecê-la melhor, bem como seus avós. Assim como sua
            própria vida, a vida de sua mãe não foi fácil; ao contrário, foi bem
            sofrida. “Eu gostava muito de escutar as histórias da minha mãe.
            Quando ela estava de cama, eu tinha muito tempo para ela e ela para
            mim, e ela contava muitas coisas, até versinhos alemães. Eu aprendi
            com ela. Ela contava que a mãe dela, quando eles se mudavam, eles
            iam longe, longe. Uma vez tomou quase um mês a mudança, porque as
            estradas eram ruins, em meio da mata. A minha avó se mudou de
            Montenegro para outra cidade, Santa Rosa, e tiveram que dormir uma
            noite no mato. Dormiram do lado do fogo para os tigres, as onças,
            não chegar perto e comer eles, lá no Rio Grande do Sul. [...] Ela
            contava quando era criança, quando ela era criança. [...] Hoje eu
            não reclamo de nada, eu nunca deixei de ser econômica, a gente já
            passou por muitas coisas, eu valorizo tudo. A época da minha mãe e
            da minha avó foi muito sofrida também.”
          </p>
          <p>
            Reinilda teve três filhos: uma menina e dois meninos. Hoje tem sete
            netos: duas meninas e cinco meninos. Ela tem uma vida calma na
            chácara. Não gosta muito de sair, mas gosta de convidar seus amigos
            para se reunirem em casa e festejarem a vida com tradições
            brasileiras e alemãs. Gosta de ter convidados em casa, de cozinhar
            para eles e compartilhar vivências. Reinilda reconstruiu sua vida na
            fronteira.
          </p>
        </div>
      </section>
      <Footer />
    </div>
    <Link
      to="/#renilda"
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

export default ReinildaPage
