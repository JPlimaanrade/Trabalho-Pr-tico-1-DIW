//Só inicia o script após o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
    //JSON dos cards
    const dados = [
        //Guia Básico
        {
            id: "guia",
            titulo: "Guia Básico",
            descricao: "Aprenda os primeiros passos em Deepwoken, incluindo controles, combate, exploração e progressão inicial.",
            imagem: "/assets/img/Cards/Guia_Card.jpg"
        },
        //Builds
        {
            id: "builds",
            titulo: "Builds",
            descricao: "Descubra combinações de atributos, armas e talentos para maximizar o desempenho do seu personagem.",
            imagem: "/assets/img/Cards/Builds_Card.png"
        },
        //Attunements
        {
            id: "attunements",
            titulo: "Attunements",
            descricao: "Conheça os diferentes 'elementos' de Deepwoken, suas vantagens, fraquezas e como combiná-los.",
            imagem: "/assets/img/Cards/Attunements_Card.jpg"
        },
        //PvP
        {
            id: "pvp",
            titulo: "PvP",
            descricao: "Tudo sobre o combate entre jogadores: estratégias, locais de luta e como sobreviver nos ganks.",
            imagem: "/assets/img/Cards/Pvp_Card.jpg"
        },
        //Armas
        {
            id: "armas",
            titulo: "Armas",
            descricao: "Veja todos os tipos de armas disponíveis em Deepwoken e descubra qual se encaixa melhor no seu estilo de jogo.",
            imagem: "/assets/img/Cards/Armas_Card.jpg"
        },
        //Etris
        {
            id: "etris",
            titulo: "Etris",
            descricao: "Uma das principais cidades do mundo de Deepwoken, repleta de NPCs, lojas e missões importantes.",
            imagem: "/assets/img/Cards/Etris_card.jpg"
        },
        //Deepths
        {
            id: "deepths",
            titulo: "The Deepths",
            descricao: "O submundo mortal de Deepwoken. Um lugar onde o perigo é constante e a morte é permanente.",
            imagem: "/assets/img/Cards/Deepths_Card.jpg"
        },
        //Bells
        {
            id: "bells",
            titulo: "Bells",
            descricao: "As habilidades especiais conhecidas como Bells, obtidas por jogadores experientes. Descubra como elas funcionam!",
            imagem: "/assets/img/Cards/Bells_Card.jpg"
        },
        //Oaths
        {
            id: "oaths",
            titulo: "Oaths",
            descricao: "Juramentos poderosos que concedem habilidades exclusivas aos jogadores. Saiba como adquiri-los.",
            imagem: "/assets/img/Cards/Oaths_Card.jpg"
        },
        //Mobs
        {
            id: "mobs",
            titulo: "Mobs",
            descricao: "Conheça as criaturas que habitam o mundo de Deepwoken. Algumas são hostis, outras são caçadas por recompensas.",
            imagem: "/assets/img/Cards/Monsters_Card.jpg"
        },
        //Bosses
        {
            id: "bosses",
            titulo: "Bosses",
            descricao: "Os inimigos mais desafiadores do jogo. Prepare-se para batalhas intensas e recompensas únicas!",
            imagem: "/assets/img/Cards/Boses_Card.jpg"
        },
        //Layer 2
        {
            id: "layer2",
            titulo: "Layer 2",
            descricao: "A segunda camada do Deep, uma das áreas mais perigosas do jogo. Explore e descubra seus segredos.",
            imagem: "/assets/img/Cards/Layer2_Card.jpg"
        }
    ];
    //Aonde a Função para criar os cards será inserida
    const cardsContainer = document.querySelector(".Cards_top");
    //Função para criar os cards
    dados.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card", "m-3");
        card.style.width = "18rem";
        card.style.backgroundColor = "rgb(18, 119, 9)";
        card.innerHTML = `
            <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
            <div class="card-body">
                <h4 class="card-title">${item.titulo}</h4>
                <p class="card-text">${item.descricao}</p>
                <a href="/detalhe.html?id=${item.id}" class="btn btn-primary">Detalhes</a>
            </div>
        `;
        cardsContainer.appendChild(card);
    });

});