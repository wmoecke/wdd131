export const games = [
    {
        title: "Tekken 6",
        genre: "Fighting",
        sizeMb: 815,
        difficulty: "Accessible",
        description: "A deep fighting game with a large character roster and quick matches that work well for portable play."
    },
    {
        title: "Street Fighter Alpha 3 MAX",
        genre: "Fighting",
        sizeMb: 195,
        difficulty: "Intermediate",
        description: "A compact but feature-rich fighting game with classic arcade mechanics and many characters."
    },
    {
        title: "Soulcalibur: Broken Destiny",
        genre: "Fighting",
        sizeMb: 855,
        difficulty: "Accessible",
        description: "Weapon-based battles with polished presentation and modes suited to short sessions."
    },
    {
        title: "Burnout Legends",
        genre: "Racing",
        sizeMb: 435,
        difficulty: "Accessible",
        description: "Fast arcade racing focused on aggressive driving, crashes, and rewarding short events."
    },
    {
        title: "Gran Turismo",
        genre: "Racing",
        sizeMb: 945,
        difficulty: "Intermediate",
        description: "A simulation-oriented portable racing experience with a broad vehicle selection."
    },
    {
        title: "Ridge Racer",
        genre: "Racing",
        sizeMb: 880,
        difficulty: "Accessible",
        description: "Drift-heavy arcade racing with an energetic soundtrack and a strong pick-up-and-play feel."
    },
    {
        title: "Silent Hill: Origins",
        genre: "Horror",
        sizeMb: 735,
        difficulty: "Intermediate",
        description: "A survival horror adventure built around exploration, unsettling atmosphere, and puzzle solving."
    },
    {
        title: "Silent Hill: Shattered Memories",
        genre: "Horror",
        sizeMb: 970,
        difficulty: "Intermediate",
        description: "A psychological reinterpretation of Silent Hill with exploration, choices, and chase sequences."
    },
    {
        title: "Resistance: Retribution",
        genre: "Action",
        sizeMb: 1310,
        difficulty: "Intermediate",
        description: "A third-person action game designed around missions, responsive controls, and a science-fiction setting."
    },
    {
        title: "Metal Gear Solid: Peace Walker",
        genre: "Action",
        sizeMb: 1450,
        difficulty: "Intermediate",
        description: "A mission-based stealth action game with a substantial campaign and management elements."
    },
    {
        title: "God of War: Chains of Olympus",
        genre: "Action",
        sizeMb: 1340,
        difficulty: "Accessible",
        description: "A cinematic action adventure with satisfying combat and a concise portable-friendly campaign."
    },
    {
        title: "Star Wars Battlefront II",
        genre: "Action",
        sizeMb: 620,
        difficulty: "Accessible",
        description: "Portable battles across familiar Star Wars locations with multiple classes and game modes."
    },
    {
        title: "Ace Combat X: Skies of Deception",
        genre: "Simulation",
        sizeMb: 780,
        difficulty: "Intermediate",
        description: "A streamlined combat flight game with branching missions and aircraft customization."
    },
    {
        title: "Test Drive Unlimited",
        genre: "Simulation",
        sizeMb: 975,
        difficulty: "Accessible",
        description: "An open-road driving game for players who enjoy exploration as much as racing."
    },
    {
        title: "Lumines",
        genre: "Puzzle",
        sizeMb: 185,
        difficulty: "Accessible",
        description: "A stylish puzzle game that combines music, visual rhythm, and compact sessions."
    },
    {
        title: "Jeanne d'Arc",
        genre: "RPG",
        sizeMb: 680,
        difficulty: "Intermediate",
        description: "A tactical role-playing game with a clear progression system and an approachable campaign."
    }
];

export const genres = [...new Set(games.map((game) => game.genre))].sort();
