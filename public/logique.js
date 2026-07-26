// --- VARIABLES GLOBALES ET CONFIGURATION DU JEU ---

// Tableau contenant toutes les cartes du jeu avec leurs statistiques et évolutions
const allCards = [
    {
        name: "Romolo", atk: 700, def: 1800, cost: 2, stage: 1, image: "cartes/33590.png", desc: "Peut transformer une carte de l'adversaire en lui attribuant l'attribut Femme (1 fois par tour). +500 d'ATK pour chaque femme sur le terrain. Peut enlever un attribut Femme sur une carte adverse et invoquer André Jawad sur le terrain. Coût énergie : 1 si il y a 2 femme sur le terrain. Évolue en Balayeur de femmes.",
        evolutions: [
            { name: "Balayeur de Femmes", desc: "Invoque la carte terrain Sol glissant. Immunisé contre les effets des cartes terrains. +500 ATK et +1500 Def par carte attribut Femme sur le terrain. -500 ATK pour les cartes avec attribut femmes. Perd la possibilité d'attaquer pendant le nombre de tour égale au nombre de cartes auxquelles il a attribué l'attribut femme en 1 tour (max 3 par tour). Évolue en Le Balayeur final lorsque son attaque dépasse 4000.", image: "cartes/33592.png", atk: 2000, def: 2000 },
            { name: "Balayeur Ultime", desc: "Balaye toutes les cartes attribut Femmes sur le terrain, cet effet ne peux pas être contrasté (1 fois par tour). Il invoque Mohamed Suicmez en balayant 1 femme. Une fois par tour, attribu un attribut femme à toutes les cartes sur le terrain. Si une carte est déjà femme, elle se transforme en la carte Terrain : Sol.", image: "cartes/33597.png", atk: 4000, def: 3000 }
        ]
    },
    {name: "Tails", atk: 2 , def: 1 , cost: 1 , stage : 1, image: "cartes/Tails.jpg", desc: " C'est deja une femme", attributes: ["femme"]},
    {name: "Moez", atk: 1700 , def: 2000 , cost: 3 , stage : 1, image: "cartes/Moez.png", desc: "Une fois par tour il peux balayer une femme sur le terrain "},
    {name: "André Jawad", atk: 1500, def: 1500, cost: 2, stage: 1, image: "cartes/Jawad.png", desc: "Invoqué par l'effet de Romolo."},
    {name: "Mohamed Suicmez TP", atk: 1500, def: 2500, cost: 4, stage: 1, image: "cartes/Mohamed.png", desc: "Invoqué par le Balayeur Ultime."},
    {
        name: "Carlos Alcaraz", atk: 1500, def: 1600, cost: 3, stage: 1, image: "cartes/Carlos 1.png", desc: "Une fois par tour peux sauver une carte de la destruction en opérant un ace. Au bout de 2 ace Evolue en la carte : Omar Hachicha",
        evolutions: [{name: "Omar Hachicha", atk: 4000, def: 3800, stage : 2, image: "cartes/Carlos 2.png", desc: "Cette carte perd 500 d'attaque par tour, mais active la carte terrain Sfax, tant que le terrain est actif Omar est invincible"}]
    },
    {
        name: "Balayeur de Femmes", atk: 2000, def: 2000, cost: 4, stage: 2, image: "cartes/33592.png", desc: "Balaye les faiblesses adverses avec une efficacité redoutable.",
        evolutions: [
            { name: "Balayeur Ultime", desc: "Puissance maximale atteinte sur le terrain.", image: "cartes/33597.png", atk: 4000, def: 3000 }
        ]
    },
    {
        name: "Balayeur Ultime", atk: 4000, def: 3000, cost: 6, stage: 3, image: "cartes/33597.png", desc: "Puissance maximale atteinte sur le terrain. Inarrêtable.",
        evolutions: []
    },
    {
        name: "Pablo Rubiolo", atk: 5000, def: 5000, cost: 10, stage: 1, image: "cartes/33588.png", desc: "Annule l'effet de toutes les cartes sur le terrain le tour où il est invoqué, impossible de le cibler avec les effets de cartes. Cette carte perd -500 ATK à chaque tour qui passe. On peut invoquer cette carte pour la moitié de son coût d'énergie (5) mais vous devez gagner en moins de 2 tours sinon on perd le jeu.",
        evolutions: [{ name: "Aura Pablet", desc: "L'attaque de cette carte est l'attaque la plus haute des cartes de l'adversaire, + 3000. Immunisé contre tout", image: "cartes/33589.png", atk: 4500, def: 9999 }]
    },
    {
        name: "Aura Pablet", atk: 4500, def: 9999, cost: 8, stage: 2, image: "cartes/33589.png", desc: "L'attaque de cette carte est l'attaque la plus haute des cartes de l'adversaire, + 3000. Immunisé contre tout",
        evolutions: []
    },
    {
        name: "Homme Castagnet", atk: 2000, def: 500, cost: 3, stage: 1, image: "cartes/33586.png", desc: "La première fois qu'une carte active son effet, invoque la carte Mysoginie. Rajoute +1 au compteur Mysoginie à chaque activation de carte. Si le compteur Mysoginie a atteint +5, invoque un De Minaur sur le terrain.",
        evolutions: []
    },
    {
        name: "Hom Hugo", atk: 1500, def: 1000, cost: 2, stage: 1, image: "cartes/33631.png", desc: "Si 2 cartes sont sur le terrain, active le terrain : Châtelet-les-Halles. Si un effet terrain est activé, réduit le coût d'une des cartes dans la main de 2. Si cette carte active son effet pour la 2ème fois, évolue la carte en : Hom chasseur de nains.",
        evolutions: [{ name: "Hom Chasseur de Nain", desc: "Permet d'attaquer chaque carte adverse une fois par tour. Si un effet terrain est activé, empêche une carte adverse d'attaquer pendant 1 tour. Cette carte ne peut pas être détruite par une attaque normale. Si cette carte a été attaquée 2 fois, évolue en Hom Géant Kombucha Steven Seagal", image: "cartes/33634.png", atk: 2300, def: 2000 }]
    },
    {
        name: "Hom Chasseur de Nain", atk: 2300, def: 2000, cost: 2, stage: 2, image: "cartes/33634.png", desc: "Spécialisé dans la traque rapide de petites unités.",
        evolutions: []
    },
    {
        name: "Hom Bus Île de France", atk: 0, def: 0, cost: 1, stage: 1, image: "cartes/33636.png", desc: "Invoque un bus et se détruit. À partir de 2 tours après sa mort, invoque son évolution: Hom Moustache Commune Îles-de-France.",
        evolutions: [{ name: "Hom Moustache Commune Îles de France", desc: "Active le terrain : moyen de locomotion, annule les effet de toutes les cartes pendant 1 tour le tour où il est invoqué. Si un terrain active son effet invoque un bus. Au bout de 3 bus sur le terrain, détruit tout les bus et inflige 1500 de degat pour chaque bus détruit.", image: "cartes/33637.png", atk: 100, def: 2400 }]
    },
    {
        name: "Hom Moustache Commune Îles de France", atk: 100, def: 2400, cost: 2, stage: 2, image: "cartes/33637.png", desc: "Évolution moustache conférant une excellente protection.",
        evolutions: []
    }
];

let isAI = false; // Indique si le joueur affronte l'IA
let selectedDeckIndices = []; // Indices des cartes sélectionnées pour le deck
let playerDecks = { 1: [], 2: [] }; // Decks des joueurs 1 et 2

// État global de la partie (tours, points de vie, énergie, mains, terrain, etc.)
let state = {
    turn: 1,
    hp: { 1: 10000, 2: 10000 },
    energy: { 1: 3, 2: 3 },
    maxEnergy: { 1: 3, 2: 3 },
    hand: { 1: [], 2: [] },
    field: { 1: [], 2: [] },
    ground: [],
    activeTerrain: null,
    locomotionTarget: null
};

// Variables pour le mode multijoueur en P2P (PeerJS)
let peer = null, conn = null, myPlayerNum = null;
let selectedAttackerIndex = null; // Index de la carte choisie pour attaquer


// --- GESTION DES TERRAINS ET DE L'AUDIO ---

// Active une carte terrain sur le plateau et déclenche les effets associés
function activateTerrain(terrainName, terrainImage, terrainDesc) {
    state.activeTerrain = { name: terrainName, image: terrainImage, desc: terrainDesc };

    const music = document.getElementById('bg-music');
    if (terrainName === "Moyen de Locomotion") {
        music.src = "sncf.mp3";
    } else {
        music.src = "terrainglissant.mp4";
    }
    music.play().catch(e => console.log("Erreur lecture audio terrain :", e));

    logMessage(`🌍 TERRAIN ACTIVÉ : ${terrainName} !`);

    // Vérifie les interactions des cartes sur le terrain avec le nouveau décor
    [1, 2].forEach(p => {
        if (Array.isArray(state.field[p])) {
            state.field[p].forEach(c => {
                if (c.name === "Hom Moustache Commune Îles de France") {
                    let busCard = { name: "Bus 2000", atk: 2000, def: 2000, cost: 0, image: "cartes/bus3.jpg", desc: "Bus supplémentaire invoqué par l'effet terrain." };
                    state.field[p].push(busCard);
                    logMessage(`🚌 L'effet terrain active le pouvoir de l'Hom Moustache : un bus est invoqué sur le terrain du Joueur ${p} ![cite: 1]`);

                    let busCount = state.field[p].filter(cardItem => cardItem.name.includes("Bus")).length;
                    if (busCount >= 3) {
                        state.field[p] = state.field[p].filter(cardItem => !cardItem.name.includes("Bus"));
                        let totalDamage = busCount * 1500;
                        let opponentNum = p === 1 ? 2 : 1;
                        state.hp[opponentNum] -= totalDamage;
                        logMessage(`💥 3 bus ou plus sur le terrain ! Destruction de tous les bus et ${totalDamage} points de dégâts infligés au Joueur ${opponentNum} ![cite: 1]`);
                    }
                }
            });
        }
    });

    updateTerrainDisplay();
}

// Met à jour l'affichage visuel du terrain dans l'interface utilisateur
function updateTerrainDisplay() {
    const nameEl = document.getElementById('active-terrain-name');
    const descEl = document.getElementById('active-terrain-desc');
    const bgEl = document.getElementById('game-bg');

    if (state.activeTerrain) {
        nameEl.innerText = state.activeTerrain.name;
        descEl.innerText = state.activeTerrain.desc;
        bgEl.style.backgroundImage = `url('${state.activeTerrain.image}')`;
        bgEl.style.opacity = '0.85';
    } else {
        nameEl.innerText = "Aucun terrain actif";
        descEl.innerText = "Le fond du jeu s'adaptera selon le terrain en jeu.";
        bgEl.style.backgroundImage = `url('concert-death.jpg')`;
        bgEl.style.opacity = '0.25';
    }
}


// --- CALCULS DES STATISTIQUES ET CONDITIONS ---

// Compte le nombre total de cartes possédant l'attribut "femme" sur l'ensemble du terrain
function countFemmeOnField() {
    let count = 0;
    [1, 2].forEach(p => {
        if (Array.isArray(state.field[p])) {
            state.field[p].forEach(c => {
                if (c.attributes && c.attributes.includes("femme")) count++;
            });
        }
    });
    return count;
}

// Calcule l'attaque effective d'une carte en tenant compte des bonus et du terrain
function getCardEffectiveAtk(card, playerNum) {
    let baseAtk = card.atk || 0;
    if (card.name === "Romolo") baseAtk += countFemmeOnField() * 500;
    if (card.name === "Balayeur de Femmes") baseAtk += (countFemmeOnField() * 500);
    if (card.attributes && card.attributes.includes("femme") && card.name !== "Balayeur de Femmes") baseAtk -= 500;

    if (card.name === "Aura Pablet") {
        let opponentNum = playerNum === 1 ? 2 : 1;
        let maxOpponentAtk = 0;
        if (state.field[opponentNum] && state.field[opponentNum].length > 0) {
            maxOpponentAtk = Math.max(...state.field[opponentNum].map(c => getCardEffectiveAtk(c, opponentNum)));
        }
        baseAtk = maxOpponentAtk + 3000;
    }
    return Math.max(0, baseAtk);
}

// Calcule la défense effective d'une carte
function getCardEffectiveDef(card, playerNum) {
    let baseDef = card.def || 0;
    if (card.name === "Balayeur de Femmes") baseDef += (countFemmeOnField() * 1000);
    if (card.defLossBySlip) baseDef -= card.defLossBySlip;
    return Math.max(0, baseDef);
}

// Vérifie si une carte remplit les conditions pour pouvoir évoluer
function canCardEvolve(card, playerNum) {
    let currentAtk = getCardEffectiveAtk(card, playerNum);
    if (card.name === "Romolo" && countFemmeOnField() >= 2) return true;
    if (card.name === "Balayeur de Femmes" && currentAtk > 4000) return true;
    if (card.name === "Carlos Alcaraz" && (card.aceCount || 0) >= 2) return true;
    if (card.name === "Hom Hugo" && (card.effectActivationCount || 0) >= 2) return true;
    if (card.name === "Hom Chasseur de Nain" && (card.attackedCount || 0) >= 2) return true;
    return false;
}


// --- ACTIONS DE JEU : ÉVOLUTION ET EFFETS DE CARTES ---

// Déclenche manuellement l'évolution d'une carte sur le terrain
function triggerManualEvolution(playerNum, cardIndex) {
    let card = state.field[playerNum][cardIndex];
    if (!card || !card.evolutions || card.evolutions.length === 0) return;

    let nextEvo = card.evolutions[0];
    card.name = nextEvo.name;
    card.atk = nextEvo.atk;
    card.def = nextEvo.def;
    if (nextEvo.desc) card.desc = nextEvo.desc;
    if (nextEvo.image) card.image = nextEvo.image;

    card.evolutions = card.evolutions.slice(1);

    if (card.name === "Hom Moustache Commune Îles de France") {
        activateTerrain("Moyen de Locomotion", card.image, "Annule les effets de toutes les cartes pendant 1 tour le tour où il est invoqué.");
        card.effectCancelledTurns = 1;
        logMessage("🚌 L'évolution active le terrain : Moyen de Locomotion ![cite: 1]");
    }

    logMessage(`✨ ÉVOLUTION MANUELLE ! La carte devient : ${card.name} !`);
    sendState();
    render();
}

// Gère l'activation des capacités spéciales des cartes en jeu
function triggerCardEffectAction(playerNum, cardIndex) {
    let card = state.field[playerNum][cardIndex];
    if (!card) return;

    if (state.turn !== playerNum) return logMessage("Ce n'est pas ton tour d'activer un effet !");

    // Gestion du terrain spécial "Moyen de Locomotion" qui restreint l'activation des effets
    if (state.activeTerrain && state.activeTerrain.name === "Moyen de Locomotion" && card.name !== "Hom Moustache Commune Îles de France") {
        if (!state.locomotionTarget) {
            let chooseTarget = confirm(`Le terrain Moyen de Locomotion est actif. Veux-tu cibler ${card.name} pour que ses effets s'activent ?`);
            if (chooseTarget) {
                state.locomotionTarget = { player: playerNum, index: cardIndex };
                logMessage(`🎯 ${card.name} est la carte désignée pour s'activer sous le terrain de locomotion.[cite: 1]`);
            } else {
                return logMessage("🚫 Action annulée.");
            }
        } else if (state.locomotionTarget.player !== playerNum || state.locomotionTarget.index !== cardIndex) {
            return logMessage("🚫 Les effets de cette carte sont annulés par le terrain de locomotion ![cite: 1]");
        }
    }

    logMessage(`Activation de l'effet de : ${card.name}`);

    // Effet spécifique de l'Hom Moustache
    if (card.name === "Hom Moustache Commune Îles de France") {
        if (card.effectUsedThisTurn) return logMessage("L'Hom Moustache a déjà activé son effet ce tour-ci ![cite: 1]");
        let busCard = { name: "Bus 2000", atk: 0, def: 2000, cost: 0, image: "cartes/bus3.jpg", desc: "Bus supplémentaire." };
        state.field[playerNum].push(busCard);
        logMessage("🚌 Un bus supplémentaire a été invoqué par l'Hom Moustache ![cite: 1]");

        let busCount = state.field[playerNum].filter(c => c.name.includes("Bus")).length;
        if (busCount >= 3) {
            state.field[playerNum] = state.field[playerNum].filter(c => !c.name.includes("Bus"));
            let totalDamage = busCount * 750;
            let opponentNum = playerNum === 1 ? 2 : 1;
            state.hp[opponentNum] -= totalDamage;
            logMessage(`💥 3 bus ou plus ! ${totalDamage} dégâts infligés à l'adversaire ![cite: 1]`);
        }
        card.effectUsedThisTurn = true;
    }
    // Effet spécifique de Romolo
    else if (card.name === "Romolo") {
        if (state.romoloEffectUsedThisTurn) return logMessage("Romolo a déjà utilisé son effet ce tour-ci !");
        let choice = prompt("Action de Romolo :\n1. Transformer une carte ennemie en 'Femme'\n2. Invoquer André Jawad");
        if (choice === "1") {
            let opponentNum = playerNum === 1 ? 2 : 1;
            let targetIdx = parseInt(prompt("Index de la carte adverse à cibler :")) || 0;
            if (state.field[opponentNum][targetIdx]) {
                if (!state.field[opponentNum][targetIdx].attributes) state.field[opponentNum][targetIdx].attributes = [];
                state.field[opponentNum][targetIdx].attributes.push("femme");
                logMessage(`Romolo attribue l'attribut 'Femme' à ${state.field[opponentNum][targetIdx].name} !`);
                state.romoloEffectUsedThisTurn = true;
            }
        } else if (choice === "2") {
            state.field[playerNum].push({ name: "André Jawad", atk: 1500, def: 1500, cost: 2, desc: "Invoqué par Romolo." });
            logMessage("Romolo invoque André Jawad !");
            state.romoloEffectUsedThisTurn = true;
        }
    }
    sendState();
    render();
}


// --- INITIALISATION ET MODES DE JEU (SOLO / MULTI) ---

function playMusicAndShowMode(mode) {
    document.getElementById('bg-music').play().catch(e => console.log(e));
    showMode(mode);
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) music.play(); else music.pause();
}

// Sélectionne le mode de jeu (IA ou Multijoueur P2P)
function showMode(mode) {
    if (mode === 'ai') {
        isAI = true;
        document.getElementById('home-screen').classList.add('hidden');
        document.getElementById('deck-builder').classList.remove('hidden');
        myPlayerNum = 1;
        document.getElementById('label-p2').innerText = "Terrain - IA";
        document.getElementById('label-hand-p2').innerText = "Main - IA";
        initDeckBuilder();
    } else {
        document.getElementById('multi-panel').classList.remove('hidden');
        initPeer();
    }
}

// Initialise la connexion P2P via PeerJS pour le multijoueur
function initPeer() {
    if (!peer) {
        peer = new Peer();
        peer.on('open', (id) => { document.getElementById('my-id').innerText = id; });
        peer.on('connection', (connection) => {
            conn = connection;
            myPlayerNum = 1;
            document.getElementById('my-role').innerText = "Joueur 1 (Hôte)";
            setupConnection();
            document.getElementById('home-screen').classList.add('hidden');
            document.getElementById('deck-builder').classList.remove('hidden');
            initDeckBuilder();
        });
    }
}

// Permet de se connecter à un autre joueur via son ID réseau
function connectToPeer() {
    const destId = document.getElementById('peer-id-input').value;
    conn = peer.connect(destId);
    myPlayerNum = 2;
    document.getElementById('my-role').innerText = "Joueur 2 (Invité)";
    setupConnection();
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('deck-builder').classList.remove('hidden');
    initDeckBuilder();
}

// Configure les écouteurs d'événements pour la synchronisation réseau des joueurs
function setupConnection() {
    conn.on('data', (data) => {
        if (data.type === 'DECK_SELECTION') {
            playerDecks[data.player] = data.deck;
            checkGameStart();
        } else {
            state = data;
            selectedAttackerIndex = null;
            render();
            checkGameOver();
        }
    });
}


// --- CONCEPTION DU DECK (DECKBUILDER) ---

// Initialise l'interface de sélection des cartes pour composer son deck
function initDeckBuilder() {
    const grid = document.getElementById('builder-grid');
    grid.innerHTML = '';
    allCards.forEach((card, index) => {
        if (card.stage !== 1) return;
        const div = document.createElement('div');
        div.className = 'card';
        div.onclick = () => { toggleSelectCard(index, div, card); };
        div.onmouseenter = () => { showEvolutionPreview(card); };
        let isFemme = card.attributes && card.attributes.includes("femme");
        div.innerHTML = `
            <div class="card-img-container"><img src="${card.image}" alt="${card.name}"></div>
            <div class="card-title">${card.name}${isFemme ? ' <span class="female-symbol">♀</span>' : ''}</div>
            <div class="card-stats">⚡ ${card.cost} | ⚔️ ${card.atk}</div>
        `;
        grid.appendChild(div);
    });
}

// Affiche un aperçu des étapes d'évolution d'une carte au survol
function showEvolutionPreview(card) {
    const container = document.getElementById('evolution-stages-content');
    container.innerHTML = `
        <strong style="color:#ffd700;">${card.name} (Stage ${card.stage})</strong>
        <p style="margin: 5px 0 10px 0; font-size: 0.85em; color: #ddd;">Effet : ${card.desc || 'Aucun.'}</p>
        <div style="font-size:0.9em; font-weight:bold; color:#ffaa44; margin-bottom:5px;">Évolutions :</div>
    `;
    if (card.evolutions && card.evolutions.length > 0) {
        card.evolutions.forEach((evo, i) => {
            container.innerHTML += `
                <div class="evo-step">
                    <img src="${evo.image}" alt="${evo.name}">
                    <div>
                        ⬇️ <strong>Évol. ${i + 1} : ${evo.name}</strong><br>
                        <small style="color:#ffaa44;">⚔️ ${evo.atk} | 🛡️ ${evo.def}</small>
                    </div>
                </div>
            `;
        });
    } else {
        container.innerHTML += `<p style="color:#aaa; font-style:italic;">Aucune évolution.</p>`;
    }
}

// Inspecte une carte en jeu pour afficher ses détails
function inspectCardInGame(card, playerNum) {
    document.getElementById('inspect-img').src = card.image;
    let effectiveAtk = playerNum ? getCardEffectiveAtk(card, playerNum) : (card.atk || 0);
    let effectiveDef = playerNum ? getCardEffectiveDef(card, playerNum) : (card.def || 0);
    document.getElementById('inspect-title').innerHTML = `${card.name} (ATK: ${effectiveAtk}, DEF: ${effectiveDef})`;
    document.getElementById('inspect-desc').innerText = `Effet : ${card.desc || 'Aucun.'}`;
}

// Ajoute ou retire une carte du deck en cours de création (limité à 6 cartes)
function toggleSelectCard(index, element, card) {
    showEvolutionPreview(card);
    const pos = selectedDeckIndices.indexOf(index);
    if (pos > -1) {
        selectedDeckIndices.splice(pos, 1);
        element.classList.remove('selected');
    } else {
        if (selectedDeckIndices.length >= 6) return logMessage("Maximum 6 cartes !");
        selectedDeckIndices.push(index);
        element.classList.add('selected');
    }
    document.getElementById('selected-count').innerText = selectedDeckIndices.length;
    const btn = document.getElementById('validate-deck-btn');
    if (selectedDeckIndices.length === 6) { btn.disabled = false; btn.style.opacity = '1'; }
    else { btn.disabled = true; btn.style.opacity = '0.5'; }
}

// Valide le deck choisi et lance la partie (génère un deck aléatoire pour l'IA si besoin)
function validateDeck() {
    const myDeck = selectedDeckIndices.map(i => {
        let c = JSON.parse(JSON.stringify(allCards[i]));
        c.hasAttacked = false;
        return c;
    });
    playerDecks[myPlayerNum] = myDeck;

    if (isAI) {
        let aiDeck = [];
        let stage1Cards = allCards.filter(c => c.stage === 1);
        let shuffled = [...stage1Cards].sort(() => 0.5 - Math.random());
        for (let i = 0; i < 6; i++) {
            let c = JSON.parse(JSON.stringify(shuffled[i % shuffled.length]));
            c.hasAttacked = false;
            aiDeck.push(c);
        }
        playerDecks[2] = aiDeck;
        document.getElementById('deck-builder').classList.add('hidden');
        document.getElementById('game-container').classList.remove('hidden');
        state.hand[1] = playerDecks[1];
        state.hand[2] = playerDecks[2];
        logMessage("Duel contre l'IA lancé !");
        render();
    } else {
        if (conn && conn.open) conn.send({ type: 'DECK_SELECTION', deck: myDeck, player: myPlayerNum });
        document.getElementById('deck-builder').classList.add('hidden');
        logMessage("En attente de l'adversaire...");
        checkGameStart();
    }
}

// Vérifie si les deux joueurs ont validé leur deck pour lancer le duel
function checkGameStart() {
    if (playerDecks[1].length > 0 && playerDecks[2].length > 0) {
        state.hand[1] = playerDecks[1];
        state.hand[2] = playerDecks[2];
        document.getElementById('game-container').classList.remove('hidden');
        logMessage("Le duel commence !");
        render();
    }
}

// Envoie l'état actuel du jeu à l'adversaire distant
function sendState() {
    if (!isAI && conn && conn.open) conn.send(state);
}

// Ajoute un message textuel dans l'historique des actions (logs)
function logMessage(msg) {
    const logEl = document.getElementById('log');
    logEl.innerHTML += `<div>> ${msg}</div>`;
    logEl.scrollTop = logEl.scrollHeight;
}

// Vérifie si la partie est terminée (PV d'un joueur <= 0)
function checkGameOver() {
    if (state.hp[1] <= 0) triggerGameOver(2);
    else if (state.hp[2] <= 0) triggerGameOver(1);
}

// Affiche l'écran de fin de partie avec le gagnant
function triggerGameOver(winner) {
    const overlay = document.getElementById('game-over-overlay');
    document.getElementById('game-over-text').innerText = isAI ? (winner === 1 ? "Victoire !" : "Défaite !") : `Joueur ${winner} gagne !`;
    overlay.classList.remove('hidden');
}


// --- RENDU GRAPHIQUE ET INTERFACE DE JEU ---

// Met à jour l'affichage global de l'interface du jeu
function render() {
    document.getElementById('current-player').innerText = `Joueur ${state.turn}`;
    document.getElementById('hp-p1').innerText = state.hp[1];
    document.getElementById('hp-p2').innerText = state.hp[2];
    document.getElementById('energy-p1').innerText = state.energy[1];
    document.getElementById('energy-p2').innerText = state.energy[2];

    updateTerrainDisplay();
    renderHand(1);
    renderField(1);
    renderHand(2, !isAI && myPlayerNum !== 2);
    renderField(2);
    renderGround();
    checkGameOver();
}

// Affiche les cartes détruites dans la zone du cimetière (ground)
function renderGround() {
    const groundEl = document.getElementById('ground-cards');
    if (!groundEl) return;
    groundEl.innerHTML = '';
    if (!state.ground) state.ground = [];
    state.ground.forEach((card) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.style.opacity = '0.6';
        div.innerHTML = `
            <div class="card-img-container"><img src="${card.image}" alt="${card.name}"></div>
            <div class="card-title">${card.name}</div>
            <div class="card-stats" style="color: #ff4444;">RIP</div>
        `;
        groundEl.appendChild(div);
    });
}

// Affiche les cartes présentes dans la main d'un joueur
function renderHand(player, hidden = false) {
    const handEl = document.getElementById(`hand-p${player}`);
    if (!handEl) return;
    handEl.innerHTML = '';
    if (!state.hand[player]) state.hand[player] = [];

    state.hand[player].forEach((card, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        if (hidden && !isAI && myPlayerNum !== player) {
            div.innerHTML = `<div class="card-title" style="text-align:center; margin-top:50px; color:#aaa;">SECRET</div>`;
        } else if (isAI && player === 2) {
            div.innerHTML = `<div class="card-title" style="text-align:center; margin-top:50px; color:#aaa;">IA</div>`;
        } else {
            div.innerHTML = `
                <div class="card-img-container"><img src="${card.image}" alt="${card.name}"></div>
                <div class="card-title">${card.name}</div>
                <div class="card-stats">⚡ ${card.cost} | ⚔️ ${card.atk}</div>
            `;
            div.onclick = () => { playCard(player, index); };
        }
        handEl.appendChild(div);
    });
}

// Affiche les cartes posées sur le terrain de combat d'un joueur
function renderField(player) {
    const fieldEl = document.getElementById(`field-p${player}`);
    if (!fieldEl) return;
    fieldEl.innerHTML = '';
    if (!Array.isArray(state.field[player])) state.field[player] = [];

    const activePlayer = state.turn;
    const canControl = isAI ? (activePlayer === 1) : (activePlayer === myPlayerNum);

    state.field[player].forEach((card, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        if (card.hasAttacked) div.classList.add('has-attacked');
        if (player === activePlayer && canControl && selectedAttackerIndex === index) div.classList.add('attacker-selected');

        let effectiveAtk = getCardEffectiveAtk(card, player);
        let effectiveDef = getCardEffectiveDef(card, player);
        let showEvolveBtn = canCardEvolve(card, player) && card.evolutions && card.evolutions.length > 0;

        div.innerHTML = `
            <div class="card-img-container"><img src="${card.image}" alt="${card.name}"></div>
            <div class="card-title">${card.name}</div>
            <div class="card-stats">⚔️ ${effectiveAtk} | 🛡️ ${effectiveDef}</div>
            <button class="effect-btn" onclick="event.stopPropagation(); triggerCardEffectAction(${player}, ${index})">Effet</button>
            ${showEvolveBtn ? `<button class="effect-btn" style="background: #27ae60;" onclick="event.stopPropagation(); triggerManualEvolution(${player}, ${index})">Évoluer</button>` : ''}
        `;

        div.onclick = (e) => {
            e.stopPropagation();
            if (!canControl) return;
            if (player === activePlayer) {
                if (card.hasAttacked) return logMessage("Déjà attaqué ce tour !");
                selectedAttackerIndex = index;
                render();
            } else {
                if (selectedAttackerIndex !== null) resolveCombat(selectedAttackerIndex, index);
            }
        };
        fieldEl.appendChild(div);
    });
}

function handleFieldClick(targetPlayerZone) {
    const activePlayer = state.turn;
    const canControl = isAI ? (activePlayer === 1) : (activePlayer === myPlayerNum);
    if (!canControl) return;
    if (targetPlayerZone !== activePlayer && state.field[targetPlayerZone].length === 0) {
        if (selectedAttackerIndex !== null) resolveDirectAttack(selectedAttackerIndex);
    }
}


// --- MÉCANIQUES DE COMBAT ET GESTION DES TOURS ---

// Exécute une attaque directe sur les points de vie de l'adversaire (si son terrain est vide)
function resolveDirectAttack(attackerIdx) {
    const activePlayer = state.turn;
    const defendingPlayer = activePlayer === 1 ? 2 : 1;
    const attacker = state.field[activePlayer][attackerIdx];
    if (!attacker || attacker.hasAttacked) return;

    let directDamage = getCardEffectiveAtk(attacker, activePlayer);
    state.hp[defendingPlayer] -= directDamage;
    logMessage(`💥 ATTAQUE DIRECTE ! ${directDamage} dégâts infligés au Joueur ${defendingPlayer} !`);
    attacker.hasAttacked = true;
    selectedAttackerIndex = null;
    sendState();
    render();
}

// Permet à un joueur de jouer une carte depuis sa main vers son terrain en dépensant de l'énergie
function playCard(player, index) {
    if (player !== state.turn) return logMessage("Ce n'est pas ton tour !");
    const card = state.hand[player][index];
    if (state.energy[player] < card.cost) return logMessage("Énergie insuffisante !");

    state.energy[player] -= card.cost;
    state.hand[player].splice(index, 1);
    if (!Array.isArray(state.field[player])) state.field[player] = [];

    // Cas particulier de l'Homme Bus qui va directement au cimetière à l'invocation
    if (card.name === "Homme Bus Île de France") {
        state.field[player].push({ name: "Bus 2000", atk: 0, def: 2000, cost: 0, image: "cartes/bus3.jpg", desc: "Bus." });
        card.turnsInGroundDead = 0;
        card.owner = player;
        if (!state.ground) state.ground = [];
        state.ground.push(card);
        logMessage("🚌 L'Homme Bus invoque un Bus et va au cimetière[cite: 1].");
        sendState();
        render();
        return;
    }

    card.hasAttacked = true;
    state.field[player].push(card);
    logMessage(`Joueur ${player} déploie ${card.name}.`);
    sendState();
    render();
}

// Résout un combat entre une carte attaquante et une carte défenseur adverse
function resolveCombat(attackerIdx, defenderIdx) {
    const activePlayer = state.turn;
    const defendingPlayer = activePlayer === 1 ? 2 : 1;
    const attacker = state.field[activePlayer][attackerIdx];
    const defender = state.field[defendingPlayer][defenderIdx];
    if (!attacker || !defender || attacker.hasAttacked) return;

    let attackerAtk = getCardEffectiveAtk(attacker, activePlayer);
    let defenderDef = getCardEffectiveDef(defender, defendingPlayer);

    logMessage(`${attacker.name} attaque ${defender.name} !`);
    if (attackerAtk >= defenderDef) {
        let destroyedCard = state.field[defendingPlayer].splice(defenderIdx, 1)[0];
        if (!state.ground) state.ground = [];
        state.ground.push(destroyedCard);
        state.hp[defendingPlayer] -= attackerAtk;
        logMessage(`${defender.name} est détruite !`);
    } else {
        state.hp[defendingPlayer] -= Math.max(100, attackerAtk - defenderDef);
        logMessage(`${defender.name} résiste.`);
    }
    attacker.hasAttacked = true;
    selectedAttackerIndex = null;
    sendState();
    render();
}

// Termine le tour du joueur actif
function endTurn() {
    if ((isAI && state.turn !== 1) || (!isAI && state.turn !== myPlayerNum)) return;
    selectedAttackerIndex = null;
    switchTurn();
    if (isAI && state.turn === 2) setTimeout(aiTurn, 800);
}

// Alterne les tours entre les joueurs, met à jour l'énergie et gère les délais de cartes au cimetière
function switchTurn() {
    state.turn = state.turn === 1 ? 2 : 1;
    state.maxEnergy[state.turn] = Math.min(state.maxEnergy[state.turn] + 1, 10);
    state.energy[state.turn] = state.maxEnergy[state.turn];
    state.romoloEffectUsedThisTurn = false;
    state.locomotionTarget = null;

    // Gestion du compte à rebours des cartes dans le cimetière (ex: l'Homme Bus)
    if (Array.isArray(state.ground)) {
        for (let idx = state.ground.length - 1; idx >= 0; idx--) {
            let card = state.ground[idx];
            if (card.name === "Homme Bus Île de France") {
                card.turnsInGroundDead = (card.turnsInGroundDead || 0) + 1;
                if (card.turnsInGroundDead >= 2 && !card.evolutionTriggered) {
                    card.evolutionTriggered = true;
                    card.name = "Hom Moustache Commune Îles de France";
                    card.atk = 100;
                    card.def = 2400;
                    card.image = "cartes/33637.png";
                    card.hasAttacked = false;
                    state.ground.splice(idx, 1);
                    let owner = card.owner || state.turn;
                    if (!Array.isArray(state.field[owner])) state.field[owner] = [];
                    state.field[owner].push(card);
                    activateTerrain("Moyen de Locomotion", card.image, "Annule les effets de toutes les cartes[cite: 1].");
                    logMessage(`🚌 Hom Moustache invoqué automatiquement pour le Joueur ${owner}[cite: 1] !`);
                }
            }
        }
    }

    // Réinitialise les actions disponibles pour les cartes du joueur dont c'est le tour
    if (Array.isArray(state.field[state.turn])) {
        state.field[state.turn].forEach(c => {
            c.balayeurEffectUsedThisTurn = false;
            c.effectUsedThisTurn = false;
            c.hasAttacked = false;
        });
    }

    logMessage(`--- Tour du Joueur ${state.turn} ---`);
    sendState();
    render();
}


// --- INTELLIGENCE ARTIFICIELLE (IA) ---

// Gère le tour de l'intelligence artificielle en mode solo
function aiTurn() {
    logMessage("L'IA réfléchit...");
    setTimeout(() => {
        for (let i = 0; i < state.hand[2].length; i++) {
            let card = state.hand[2][i];
            if (state.energy[2] >= card.cost) {
                state.energy[2] -= card.cost;
                state.hand[2].splice(i, 1);
                if (!Array.isArray(state.field[2])) state.field[2] = [];
                card.hasAttacked = true;
                state.field[2].push(card);
                logMessage(`L'IA déploie ${card.name} !`);
                break;
            }
        }
        render();
        setTimeout(() => switchTurn(), 800);
    }, 800);
}