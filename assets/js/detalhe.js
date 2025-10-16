
// Array de dados (pode ser importado de outro arquivo ou mantido igual ao app.js)
const dados = [
        {
            id: "guia",
            titulo: "Guia Básico",
            descricao: "Deepwoken é um RPG de aventura e sobrevivência disponível no Roblox, conhecido por sua dificuldade elevada e sistema de progressão profunda. O jogo se passa em um mundo misterioso, onde os jogadores exploram ilhas, enfrentam inimigos perigosos e buscam poder por meio de atributos, mantras (magias) e talentos. A morte em Deepwoken é uma parte essencial da experiência — ao morrer, o jogador perde progresso e precisa renascer, o que torna cada decisão importante. O jogo valoriza habilidade, estratégia e conhecimento, oferecendo uma experiência desafiadora e recompensadora para quem se dedica a entender suas mecânicas.",
            imagem: "/assets/img/Cards/Deepwoken_img2rework.jpg"
        },
        {
            id: "builds",
            titulo: "Builds",
            descricao: "No Deepwoken, uma build é o conjunto de escolhas que definem  o estilo de jogo do seu personagem — como ele luta, quais poderes usa e quais atributos prioriza. Cada build combina armas, talentos, atributos e magias (Mantras) de formas diferentes para criar experiências únicas, existem builds voltadas para força bruta, com espadas grandes e alto dano físico; outras focadas em agilidade e velocidade, usando armas leves e movimentos rápidos; e também builds místicas, que se concentram em Mantras e poder elemental.  Montar uma boa build envolve equilibrar os atributos principais (como Power, Strength, Agility, Charisma, Intelligence e Willpower) e escolher talentos sinérgicos, que se complementam e reforçam o estilo de combate escolhido. Em resumo, as builds são o coração do progresso no Deepwoken — elas determinam como você enfrenta inimigos, explora o mundo e se destaca nos combates PvE e PvP.",
            imagem: "/assets/img/Cards/Jogue_Deepwoken.png"
        },
        {
            id: "attunements",
            titulo: "Attunements",
            descricao: "Os Attunements em Deepwoken são os tipos de afinidades elementais que definem o estilo mágico do seu personagem. Eles determinam quais Mantras (feitiços) você pode aprender e moldam completamente sua forma de combate. Cada attunement tem um tema e estilo de jogo próprio: Flamecharm: controla o fogo — ótimo para dano contínuo e ataques agressivos. Frostdraw: manipula o gelo — foca em controle de área e lentidão do inimigo. Thundercall: domina a eletricidade — causa alto dano e possui ótimo alcance. Galebreath: usa o vento — favorece mobilidade e empurrões estratégicos. Shadowcast: manipula sombras — drena energia dos oponentes e causa efeitos únicos. Ironsing: canaliza metal — combina poder físico com ataques mágicos pesados.",
            imagem: "/assets/img/Cards/Vale_a_pena.jpg"
        },
        {
            id: "pvp",
            titulo: "PvP",
            descricao: "O PvP (Player vs Player) em Deepwoken é o sistema de combate entre jogadores — um dos aspectos mais desafiadores e empolgantes do jogo. Ele exige reflexos rápidos, domínio das mecânicas e conhecimento das builds. Diferente de muitos jogos, o PvP em Deepwoken é totalmente baseado em habilidade: bloquear, aparar (parry), esquivar e punir no momento certo são muito mais importantes do que apenas ter alto nível. Cada jogador pode adotar um estilo diferente — alguns preferem combates diretos com armas pesadas, outros se especializam em magia à distância ou estratégias de controle. O PvP acontece em várias situações: duelos amistosos, eventos ou encontros no mundo aberto, onde qualquer erro custa caro.",
            imagem: "/assets/img/Cards/Confia.jpg"
        },
        {
            id: "armas",
            titulo: "Armas",
            descricao: "Os Weapons (armas) em Deepwoken são o principal meio de combate físico do jogo, e um dos elementos mais importantes na construção da sua build. Cada tipo de arma oferece alcance, velocidade e estilo de ataque diferentes, influenciando totalmente a forma como você luta. As armas são divididas em categorias principais: Medium Weapons: equilíbrio entre velocidade e dano — inclui espadas, sabres e machados leves. Heavy Weapons: lentas, mas extremamente poderosas — como martelos e machados grandes, ideais para causar alto dano por golpe. Light Weapons: rápidas e precisas — como adagas e punhais, focadas em agilidade e combos curtos.",
            imagem: "/assets/img/Imagens_detalhes/Deepwoken_Detalhesimg_Weapons.jpg"
        },
        {
            id: "etris",
            titulo: "Etris",
            descricao: "Etris é uma das cidades mais conhecidas do mundo de Deepwoken, servindo como centro de comércio, quests e encontros entre jogadores. É um local estratégico para quem busca recursos, equipamentos e oportunidades de evolução. Na cidade, você pode: Comprar e vender armas, itens e suprimentos; Receber quests que ajudam a ganhar experiência e recompensas; Interagir com NPCs e outros jogadores, essencial para estratégias de PvP e guildas; Explorar mercados, tavernas e áreas secretas que escondem itens raros ou informações valiosas. Etris também funciona como um ponto seguro dentro do mundo perigoso de Deepwoken, oferecendo proteção contra inimigos e monstros enquanto você planeja suas próximas aventuras. Em resumo, Etris é um hub central para comércio, progressão e interação social, essencial para qualquer jogador que deseja se fortalecer e explorar o mundo com segurança.",
            imagem: "/assets/img/Imagens_detalhes/Deepwoken_Detalhesimg_Etris.jpg"
        },
        {
            id: "deepths",
            titulo: "The Deepths",
            descricao: "The Depths é uma das áreas mais perigosas e desafiadoras de Deepwoken. Trata-se de regiões submersas, cheias de inimigos poderosos, armadilhas e segredos escondidos. Explorar as The Depths exige muito preparo, estratégia e builds equilibradas, já que a morte é comum e as penalidades são severas. No entanto, as recompensas são grandes: Loot raro e valioso, incluindo armas e itens únicos; Recursos para crafts e melhorias de equipamentos e habilidades; Oportunidade de enfrentar bosses desafiadores que testam suas habilidades de combate e estratégia; Em resumo, The Depths é o lugar para jogadores experientes que buscam desafio máximo, loot poderoso e progresso avançado dentro do mundo de Deepwoken.",
            imagem: "/assets/img/Imagens_detalhes/Deepwoken_Detalhesimg_Deepths.jpg"
        },
        {
            id: "bells",
            titulo: "Bells",
            descricao: "Bells (ou Ressonâncias) são habilidades únicas e poderosas que o personagem adquirem em Deepwoken por meio de uma experiência de quase-morte. Na prática, ao alcançar determinado progresso de combate (especialmente vencendo chefes, monstros ou em PVP) o jogador “desperta” sua Ressonância. Após obtê-la, o sino é representado no modelo do personagem, e pode ser ativado a qualquer momento pressionando a tecla 'C' Receber uma nova Ressonância concede +5 pontos de Conhecimento e também libera portas especiais (Resonance Doors) que abrem atalhos na superfície e nas Profundezas, além disso, há meios raros de obter bells específicas, um encontro raro na superfície que pode dar uma Ressonância aleatória ao derrotar um Star Knight, ou sorteios ao criar personagem usando o Relic Ancient Soul Regalia.",
            imagem: "/assets/img/Imagens_detalhes/Deepwoken_Detalhesimg_Bells.jpg"
        },
        {
            id: "oaths",
            titulo: "Oaths",
            descricao: "Os Oaths são juramentos que os jogadores podem fazer para obter habilidades e benefícios especiais no Deepwoken. Cada Oath representa uma promessa ou compromisso do personagem, e cumpri-lo concede poderes únicos, bônus de atributos e acesso a conteúdos exclusivos. Alguns pontos importantes sobre Oaths: Escolha do Oath: No início do jogo ou durante quests específicas, você pode escolher um Oath que combine com seu estilo de jogo; Benefícios: Dependendo do Oath, você pode ganhar atributos aumentados, habilidades exclusivas, ou melhorias em armas e Mantras;  Cumprimento do Oath: Para manter os benefícios, é necessário seguir as regras ou metas do juramento. Quebrar o Oath pode resultar em penalidades ou perda de habilidades; Variedade: Existem Oaths focados em combate físico, magia, suporte ou exploração, permitindo personalização profunda do personagem; Em resumo, os Oaths são uma forma de personalizar seu personagem e direcionar seu progresso em Deepwoken, adicionando uma camada estratégica ao jogo e incentivando estilos de jogo consistentes.",
            imagem: "/assets/img/Imagens_detalhes/Deepwoken_Detalhesimg_Oaths.jpg"
        },
        {
            id: "mobs",
            titulo: "Mobs",
            descricao: "Os monstros são inimigos espalhados pelo mundo de Deepwoken, representando os principais desafios do PvE. Eles variam de criaturas comuns a bosses poderosos, exigindo estratégias diferentes e builds adaptadas para serem derrotados. Principais pontos sobre monstros: Variedade: Existem monstros terrestres, voadores, aquáticos e até criaturas mágicas, cada um com ataques, padrões de movimento e fraquezas próprios; Dificuldade escalável: Alguns monstros são ideais para iniciantes, enquanto outros, como bosses ou elites, exigem grupos ou builds muito bem planejadas; Recompensas: Derrotar monstros concede loot, mantras, bells, materiais raros e pontos de experiência, sendo essenciais para evoluir no jogo; Estratégia: Para vencer, é preciso observar padrões de ataque, usar esquiva, bloqueio e talentos adequados. Muitos monstros possuem habilidades que podem atordoar, envenenar ou causar debuffs; Eventos especiais: Alguns monstros aparecem apenas em eventos temporários ou regiões específicas, oferecendo itens raros e desafios únicos. Em resumo, os monstros são o coração do desafio em Deepwoken, incentivando exploração, aprendizado de combate e criação de builds eficientes. Eles transformam o mundo do jogo em um lugar imprevisível e emocionante, onde cada encontro pode testar suas habilidades.",
            imagem: "/assets/img/Imagens_detalhes/Deepwoken_Detalhesimg_Monsters.jpg"
        },
        {
            id: "bosses",
            titulo: "Bosses",
            descricao: "Os bosses são os inimigos mais poderosos de Deepwoken, representando grandes desafios que testam builds, habilidades e estratégias dos jogadores. Eles geralmente possuem padrões de ataque complexos e habilidades únicas que exigem atenção e preparo para serem derrotados. Principais pontos sobre bosses: Dificuldade elevada: Diferente dos monstros comuns, os bosses podem causar grande dano rapidamente e muitas vezes atacam em combos que obrigam o jogador a bloquear, esquivar ou usar Mantras de forma estratégica; Loot valioso: Derrotar um boss concede itens raros, armas poderosas, bells (Ressonâncias) e materiais essenciais para evolução de builds e progressão no jogo; Eventos e localização: Alguns bosses aparecem em áreas específicas ou durante eventos temporários, sendo oportunidades únicas de adquirir recompensas exclusivas; Estratégia de grupo: Muitos bosses podem ser desafiadores demais para um jogador solo, incentivando formação de grupos e coordenação em combate; Desafio contínuo: Cada boss possui padrões e habilidades únicas, e aprender a derrotá-los requer observação, prática e conhecimento do jogo. Em resumo, os bosses são os principais marcos de dificuldade em Deepwoken, oferecendo recompensas valiosas e experiências desafiadoras que impulsionam o progresso do jogador.",
            imagem: "/assets/img/Imagens_detalhes/Deepwoken_Detalhesimg_Boses.jpg"
        },
        {
            id: "layer2",
            titulo: "Layer 2",
            descricao: "A Layer 2 é uma das camadas do mundo de Deepwoken, representando regiões mais perigosas e desafiadoras do que a Layer 1. Nessa camada, os jogadores enfrentam monstros mais fortes, bosses poderosos e desafios ambientais que exigem builds bem planejadas e estratégias avançadas. Principais características da Layer 2: Dificuldade elevada: Inimigos possuem mais vida, causam maior dano e muitas vezes possuem habilidades especiais que exigem atenção redobrada; Loot avançado: Os itens encontrados na Layer 2 são geralmente mais raros e valiosos, incluindo armas poderosas, Bells (Ressonâncias) e materiais de crafting exclusivos; Exploração estratégica: Diferente da Layer 1, a Layer 2 exige planejamento de rotas, uso de buffs e conhecimento do terreno para sobreviver; Eventos especiais: Algumas quests e eventos ocorrem apenas na Layer 2, oferecendo recompensas únicas e desafios inéditos. Em resumo, a Layer 2 é destinada a jogadores que já possuem certa experiência, builds fortalecidas e buscam desafios maiores e recompensas melhores em Deepwoken.",
            imagem: "/assets/img/Imagens_detalhes/Deepwoken_Detalhesimg_Layer2.jpg"
        }
    ];

// Função para pegar o parâmetro da URL
    function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getIdFromUrl();
  const item = dados.find(d => d.id === id);

  if (item) {
    // Exemplo de como preencher a página
    document.getElementById('titulo').textContent = item.titulo;
    document.getElementById('descricao').textContent = item.descricao;
    document.getElementById('imagem').src = item.imagem;
  } else {
    // Caso não encontre o item
    document.getElementById('titulo').textContent = "Detalhe não encontrado";
  }
});
