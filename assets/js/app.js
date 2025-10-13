// Executa quando a página terminar de carregar
document.addEventListener("DOMContentLoaded", async () => {
    // Pega o ID da URL (ex: detalhes.html?id=guia)
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // Dados com todas as seções
    const dados = [
        {
            id: "guia",
            titulo: "Guia Básico",
            descricao: "Aprenda os primeiros passos em Deepwoken, incluindo controles, combate, exploração e progressão inicial.",
            imagem: "/assets/img/Cards/Deepwoken_img2rework.jpg"
        },
        {
            id: "builds",
            titulo: "Builds",
            descricao: "Descubra combinações de atributos, armas e talentos para maximizar o desempenho do seu personagem.",
            imagem: "/assets/img/Cards/Jogue_Deepwoken.png"
        },
        {
            id: "attunements",
            titulo: "Attunements",
            descricao: "Conheça os diferentes 'elementos' de Deepwoken, suas vantagens, fraquezas e como combiná-los.",
            imagem: "/assets/img/Cards/Vale_a_pena.jpg"
        },
        {
            id: "pvp",
            titulo: "PvP",
            descricao: "Tudo sobre o combate entre jogadores: estratégias, locais de luta e como sobreviver nos ganks.",
            imagem: "/assets/img/Cards/Confia.jpg"
        },
        {
            id: "armas",
            titulo: "Armas",
            descricao: "Veja todos os tipos de armas disponíveis em Deepwoken e descubra qual se encaixa melhor no seu estilo de jogo.",
            imagem: "/assets/img/Cards/Weapons_deepwoken.jpg"
        },
        {
            id: "etris",
            titulo: "Etris",
            descricao: "Uma das principais cidades do mundo de Deepwoken, repleta de NPCs, lojas e missões importantes.",
            imagem: "/assets/img/Cards/Etris_card.jpg"
        },
        {
            id: "deepths",
            titulo: "The Deepths",
            descricao: "O submundo mortal de Deepwoken. Um lugar onde o perigo é constante e a morte é permanente.",
            imagem: "/assets/img/Cards/Deepths_card.jpg"
        },
        {
            id: "bells",
            titulo: "Bells",
            descricao: "As habilidades especiais conhecidas como Bells, obtidas por jogadores experientes. Descubra como elas funcionam!",
            imagem: "/assets/img/Cards/Bells_Card.jpg"
        },
        {
            id: "oaths",
            titulo: "Oaths",
            descricao: "Juramentos poderosos que concedem habilidades exclusivas aos jogadores. Saiba como adquiri-los.",
            imagem: "/assets/img/Cards/Oaths_CARD.jpg"
        },
        {
            id: "mobs",
            titulo: "Mobs",
            descricao: "Conheça as criaturas que habitam o mundo de Deepwoken. Algumas são hostis, outras são caçadas por recompensas.",
            imagem: "/assets/img/Cards/monsters_card.jpg"
        },
        {
            id: "bosses",
            titulo: "Bosses",
            descricao: "Os inimigos mais desafiadores do jogo. Prepare-se para batalhas intensas e recompensas únicas!",
            imagem: "/assets/img/Cards/boses_card.jpg"
        },
        {
            id: "layer2",
            titulo: "Layer 2",
            descricao: "A segunda camada do Deep, uma das áreas mais perigosas do jogo. Explore e descubra seus segredos.",
            imagem: "/assets/img/Cards/deepwoken-layer2img.jpg"
        }
    ];

    // Procura o item com o ID correspondente
    const item = dados.find(d => d.id === id);

    // Exibe o conteúdo na página detalhes
    const main = document.querySelector("main");
    if (item) {
        main.innerHTML = `
            <div class="container text-center text-white bg-dark py-5">
                <h1>${item.titulo}</h1>
                <img src="${item.imagem}" class="img-fluid my-3 rounded" alt="${item.titulo}">
                <p class="fs-5">${item.descricao}</p>
                <a href="/index.html" class="btn btn-secondary mt-3">Voltar</a>
            </div>
        `;
    } else {
        main.innerHTML = `
            <div class="container text-center text-white bg-dark py-5">
                <h1>Conteúdo não encontrado</h1>
                <p>Volte para a página inicial e selecione um item válido.</p>
                <a href="/index.html" class="btn btn-secondary mt-3">Voltar</a>
            </div>
        `;
    }
});
