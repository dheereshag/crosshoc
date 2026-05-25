export type Game = {
  id: number;
  title: string;
  genre:
    | "Action"
    | "Strategy"
    | "RPG"
    | "Shooter"
    | "Adventure"
    | "Puzzle"
    | "Racing"
    | "Sports";
  rating: number;
  year: number;
  gradient: string;
  image: string;
  badge?: "New" | "Top Rated" | "Trending" | "Editor's Pick";
  description: string;
};

export type SortKey =
  | "relevance"
  | "date-added"
  | "name"
  | "release-date"
  | "popularity"
  | "average-rating";

export const genres = [
  "Action",
  "Strategy",
  "RPG",
  "Shooter",
  "Adventure",
  "Puzzle",
  "Racing",
  "Sports",
] as const;

export const sortOptions: Array<{ label: string; value: SortKey }> = [
  { label: "Relevance", value: "relevance" },
  { label: "Date added", value: "date-added" },
  { label: "Name", value: "name" },
  { label: "Release date", value: "release-date" },
  { label: "Popularity", value: "popularity" },
  { label: "Average rating", value: "average-rating" },
];

export const basePriceByGenre: Record<Game["genre"], number> = {
  Action: 59,
  Strategy: 49,
  RPG: 69,
  Shooter: 59,
  Adventure: 44,
  Puzzle: 29,
  Racing: 54,
  Sports: 59,
};

export const games: Game[] = [
  {
    id: 1,
    title: "No Case Should Remain Unsolved",
    genre: "Adventure",
    rating: 9.7,
    year: 2024,
    gradient: "from-teal-600 via-cyan-500 to-sky-400",
    image:
      "https://media.rawg.io/media/screenshots/766/76669775675948b1eb3f3eb1c1dfc7dc.jpg",
    badge: "Top Rated",
    description:
      "Reconstruct fragmented testimonies to solve chilling cold-case mysteries.",
  },
  {
    id: 2,
    title: "Sonic Triple Trouble 16-Bit (NoahNCopeland)",
    genre: "Action",
    rating: 9.4,
    year: 2022,
    gradient: "from-red-600 via-orange-500 to-yellow-400",
    image:
      "https://media.rawg.io/media/screenshots/a9c/a9c0a6fb4def5538d39544934bded4b3.jpg",
    badge: "Top Rated",
    description:
      "A fan-crafted 16-bit remake of the classic Sonic handheld adventure.",
  },
  {
    id: 3,
    title: "Cyberpunk 2077: Phantom Liberty",
    genre: "Shooter",
    rating: 9.4,
    year: 2023,
    gradient: "from-emerald-700 via-teal-600 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/062/06285b425e61623530c5430f20e5d222.jpg",
    badge: "Top Rated",
    description:
      "A gripping spy-thriller expansion set in Dogtown, the most dangerous district of Night City.",
  },
  {
    id: 4,
    title: "Red Matter 2",
    genre: "Adventure",
    rating: 9.3,
    year: 2022,
    gradient: "from-green-600 to-teal-400",
    image:
      "https://media.rawg.io/media/screenshots/9ec/9ec21d4df840d70c1621372f2450e3ca.jpg",
    badge: "Trending",
    description:
      "Unravel Cold War secrets aboard an abandoned Soviet lunar base.",
  },
  {
    id: 5,
    title: "The Last of Us Part I",
    genre: "Shooter",
    rating: 9.3,
    year: 2022,
    gradient: "from-gray-700 to-green-600",
    image:
      "https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg",
    badge: "Trending",
    description:
      "Experience Joel and Ellie's harrowing cross-country journey in stunning rebuilt detail.",
  },
  {
    id: 6,
    title: "Quake II: Enhanced Edition",
    genre: "Shooter",
    rating: 9.3,
    year: 2023,
    gradient: "from-teal-800 to-emerald-500",
    image:
      "https://media.rawg.io/media/screenshots/df8/df8f7f1b8ddf5f4021cda1254d82ab29.jpg",
    badge: "Trending",
    description:
      "The legendary arena shooter returns with remastered visuals and an all-new expansion.",
  },
  {
    id: 7,
    title: "System Shock 2: 25th Anniversary Remaster",
    genre: "Adventure",
    rating: 9.2,
    year: 2025,
    gradient: "from-sky-700 to-cyan-500",
    image:
      "https://media.rawg.io/media/screenshots/95d/95df624f84b7bca99b56da01aeea4789.jpg",
    badge: "Trending",
    description:
      "Survive the nightmarish corridors of a colony starship overrun by a rogue AI.",
  },
  {
    id: 8,
    title: "Esoteric Ebb",
    genre: "Adventure",
    rating: 9.2,
    year: 2026,
    gradient: "from-cyan-700 to-sky-500",
    image:
      "https://media.rawg.io/media/games/412/41289ad8950a417a0aa9a6860152ac22.jpg",
    badge: "New",
    description: "A dreamlike adventure through surreal, hand-crafted worlds.",
  },
  {
    id: 9,
    title: "HYPER DEMON",
    genre: "Shooter",
    rating: 9.2,
    year: 2022,
    gradient: "from-green-800 to-teal-600",
    image:
      "https://media.rawg.io/media/games/bc3/bc38deccf8bfab8b588d29817c68c1ff.jpg",
    badge: "Trending",
    description:
      "Blink-fast first-person combat in a hallucinogenic nightmare dimension.",
  },
  {
    id: 10,
    title: "Resident Evil 4",
    genre: "Adventure",
    rating: 9.2,
    year: 2023,
    gradient: "from-teal-700 to-green-500",
    image:
      "https://media.rawg.io/media/games/51a/51a404b9918a0b19fc704a3ca248c69f.jpg",
    badge: "Trending",
    description:
      "The seminal survival horror masterpiece rebuilt from the ground up.",
  },
  {
    id: 11,
    title: "Athanasy",
    genre: "Puzzle",
    rating: 9.1,
    year: 2022,
    gradient: "from-yellow-500 via-amber-400 to-orange-400",
    image:
      "https://media.rawg.io/media/games/1ec/1ec196fc63bc5ea94a8b7da52daa9f5f.jpg",
    badge: "Trending",
    description: "A compelling puzzle game released in 2022.",
  },
  {
    id: 12,
    title: "Resident Evil 9: Requiem",
    genre: "Action",
    rating: 9.1,
    year: 2026,
    gradient: "from-rose-700 to-red-400",
    image:
      "https://media.rawg.io/media/games/ed6/ed613937e113a4d43fa0db771e527a2f.jpg",
    badge: "New",
    description:
      "Face terrifying new horrors in the latest chapter of the iconic horror franchise.",
  },
  {
    id: 13,
    title: "Dungeons of Dreadrock",
    genre: "Adventure",
    rating: 9.1,
    year: 2022,
    gradient: "from-sky-600 to-teal-500",
    image:
      "https://media.rawg.io/media/screenshots/efa/efa54dd8d3e1a8efebfd7dcb4c77e0eb.jpg",
    badge: "Trending",
    description:
      "Outsmart enemies in 100 handcrafted dungeon floors of deadly puzzles.",
  },
  {
    id: 14,
    title: "Lil' Guardsman",
    genre: "Puzzle",
    rating: 9.1,
    year: 2024,
    gradient: "from-amber-600 to-yellow-400",
    image:
      "https://media.rawg.io/media/screenshots/bd2/bd2269675a8e09060677c6583ae5012a.jpg",
    badge: "Trending",
    description:
      "Interrogate suspicious visitors at the kingdom gate in this charming strategy adventure.",
  },
  {
    id: 15,
    title: "Mewgenics",
    genre: "Strategy",
    rating: 9.1,
    year: 2026,
    gradient: "from-blue-700 via-indigo-600 to-violet-500",
    image:
      "https://media.rawg.io/media/games/43a/43a9694f5ffe22302bbf1cc93bca4ea1.jpg",
    badge: "New",
    description:
      "Breed, battle, and manage an ever-evolving colony of quirky cats.",
  },
  {
    id: 16,
    title: "STRAFTAT",
    genre: "Action",
    rating: 9.1,
    year: 2024,
    gradient: "from-orange-700 to-amber-400",
    image:
      "https://media.rawg.io/media/screenshots/193/1930910695d1adc6716d88163cb4c088.jpg",
    badge: "Trending",
    description:
      "Lightning-fast melee brawling stripped down to its most brutal essentials.",
  },
  {
    id: 17,
    title: "Dispatch",
    genre: "Adventure",
    rating: 9.1,
    year: 2025,
    gradient: "from-emerald-600 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/2f6/2f6c45362818859574ac0e37edf3d3c4.jpg",
    badge: "Trending",
    description: "A compelling adventure game released in 2025.",
  },
  {
    id: 18,
    title: "The Last of Us Part II Remastered",
    genre: "Adventure",
    rating: 9.1,
    year: 2024,
    gradient: "from-teal-600 via-cyan-500 to-sky-400",
    image:
      "https://media.rawg.io/media/games/d09/d099b508a1cfb5bd2f2928b50e0784a5.jpg",
    badge: "Trending",
    description:
      "Ellie's brutal revenge odyssey remastered with cutting-edge visuals.",
  },
  {
    id: 19,
    title: "Pragmata",
    genre: "Action",
    rating: 9,
    year: 2026,
    gradient: "from-red-800 to-orange-600",
    image:
      "https://media.rawg.io/media/games/9b2/9b20adbf00491d56ad6793654067f2fd.jpg",
    badge: "New",
    description:
      "A father and an astronaut child traverse a crumbling Earth on a desperate mission.",
  },
  {
    id: 20,
    title: "MyVoiceZoo",
    genre: "Puzzle",
    rating: 9,
    year: 2025,
    gradient: "from-yellow-700 to-amber-400",
    image:
      "https://media.rawg.io/media/screenshots/df3/df373c179cd08f0a549ef1f1635b8864.jpg",
    badge: "Trending",
    description: "A compelling puzzle game released in 2025.",
  },
  {
    id: 21,
    title: "Trails in the Sky 1st Chapter",
    genre: "Adventure",
    rating: 9,
    year: 2025,
    gradient: "from-green-600 to-teal-400",
    image:
      "https://media.rawg.io/media/screenshots/aae/aaee2d143052bfafe7cae5806587485d.jpg",
    badge: "Trending",
    description:
      "The beloved JRPG that started the Trails saga, lovingly remade in full 3D.",
  },
  {
    id: 22,
    title: "Beyond Good & Evil - 20th Anniversary Edition",
    genre: "Adventure",
    rating: 9,
    year: 2024,
    gradient: "from-sky-700 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/9f5/9f537017b13d32459fa129185648a858.jpg",
    badge: "Trending",
    description:
      "Investigate a government conspiracy across a vibrant alien world in this cult classic.",
  },
  {
    id: 23,
    title: "Heroes of Might & Magic: Olden Era",
    genre: "Strategy",
    rating: 9,
    year: 2026,
    gradient: "from-slate-700 to-blue-600",
    image:
      "https://media.rawg.io/media/screenshots/69e/69ece38d22dcc1c44de7ddb7901a1a41.jpg",
    badge: "New",
    description:
      "A brand-new chapter of the legendary hex-based fantasy strategy series.",
  },
  {
    id: 24,
    title: "Snakebird Complete",
    genre: "Adventure",
    rating: 9,
    year: 2023,
    gradient: "from-cyan-700 to-sky-500",
    image:
      "https://media.rawg.io/media/screenshots/8db/8db51a9a93c825439443c3252947e7d3.jpg",
    badge: "Trending",
    description:
      "Bend snake-birds through fiendishly clever puzzles in this adorable puzzler.",
  },
  {
    id: 25,
    title: "Corrupting The Universe",
    genre: "Adventure",
    rating: 9,
    year: 2023,
    gradient: "from-teal-700 to-green-500",
    image:
      "https://media.rawg.io/media/games/460/460c3df0b652c4fa8ca3f015c1e8a2d7.jpg",
    badge: "Trending",
    description: "A compelling adventure game released in 2023.",
  },
  {
    id: 26,
    title: "Cuphead: The Delicious Last Course",
    genre: "Action",
    rating: 9,
    year: 2022,
    gradient: "from-rose-600 via-red-500 to-orange-400",
    image:
      "https://media.rawg.io/media/games/01b/01b85423bbfb5f8bc6bcf29dc0cfd6d9.jpg",
    badge: "Trending",
    description:
      "Chef Saltbaker serves up brutal new bosses, a new playable character, and an island of delights.",
  },
  {
    id: 27,
    title: "GeoGuessr",
    genre: "Puzzle",
    rating: 9,
    year: 2025,
    gradient: "from-orange-600 to-yellow-500",
    image:
      "https://media.rawg.io/media/screenshots/252/252fea2a340c8f398ca56ddb7649a20e.jpg",
    badge: "Trending",
    description:
      "Pinpoint your location from a street-view panorama anywhere on Earth.",
  },
  {
    id: 28,
    title: "Elden Ring: Shadow of the Erdtree",
    genre: "Action",
    rating: 9,
    year: 2024,
    gradient: "from-orange-600 to-red-500",
    image:
      "https://media.rawg.io/media/screenshots/0ba/0bae7160eedc1f7d85a8d2db70cf1ec9.jpg",
    badge: "Trending",
    description:
      "Journey through the Land of Shadow in this sweeping expansion to the award-winning RPG.",
  },
  {
    id: 29,
    title: "Silent Hill 2",
    genre: "Adventure",
    rating: 9,
    year: 2024,
    gradient: "from-sky-600 to-teal-500",
    image:
      "https://media.rawg.io/media/games/09b/09b41c1a2c5761c5b1772a4ae238bb0e.jpg",
    badge: "Trending",
    description:
      "James Sunderland returns to the fog-shrouded town in this faithful psychological horror remake.",
  },
  {
    id: 30,
    title: "Clair Obscur: Expedition 33",
    genre: "RPG",
    rating: 9,
    year: 2025,
    gradient: "from-purple-700 via-fuchsia-600 to-pink-500",
    image:
      "https://media.rawg.io/media/games/466/4667f17fdee9ebbcea2049e54f8e2b96.jpg",
    badge: "Editor's Pick",
    description:
      "A French-made JRPG where you paint the world to survive a painter's deadly curse.",
  },
  {
    id: 31,
    title: "Uncharted: Legacy of Thieves Collection",
    genre: "Adventure",
    rating: 8.9,
    year: 2022,
    gradient: "from-emerald-600 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg",
    description:
      "Nate's globe-trotting finale and Chloe's golden goddess adventure, remastered for PC and PS5.",
  },
  {
    id: 32,
    title: "Hatsune Miku: Project DIVA Mega Mix+",
    genre: "Action",
    rating: 8.9,
    year: 2022,
    gradient: "from-red-600 via-orange-500 to-yellow-400",
    image:
      "https://media.rawg.io/media/screenshots/801/801b23ccc4ffac44e91a05990199e686.jpg",
    description:
      "Tap along to over 170 iconic vocaloid tracks in razor-sharp HD.",
  },
  {
    id: 33,
    title: "Minishoot' Adventures",
    genre: "Puzzle",
    rating: 8.9,
    year: 2024,
    gradient: "from-amber-500 via-yellow-400 to-lime-400",
    image:
      "https://media.rawg.io/media/screenshots/f9e/f9e56960654865428323477c3b03712e.jpg",
    description:
      "Twin-stick shooting meets Zelda-like exploration in a tiny ship's grand adventure.",
  },
  {
    id: 34,
    title: "Mixtape",
    genre: "Adventure",
    rating: 8.9,
    year: 2026,
    gradient: "from-teal-600 via-cyan-500 to-sky-400",
    image:
      "https://media.rawg.io/media/games/a57/a571fcbc2b2ef30fb3e13a4272ef3a93.jpeg",
    badge: "New",
    description:
      "A coming-of-age adventure set in the 90s, told through music and memory.",
  },
  {
    id: 35,
    title: "Split Fiction",
    genre: "Adventure",
    rating: 8.9,
    year: 2025,
    gradient: "from-green-600 to-teal-400",
    image:
      "https://media.rawg.io/media/games/02a/02ac22b3b90717dabaa535640c38534c.jpg",
    description:
      "Two writers trapped inside their own stories must cooperate to escape a publisher's dystopia.",
  },
  {
    id: 36,
    title: "Baldur's Gate III",
    genre: "Strategy",
    rating: 8.9,
    year: 2023,
    gradient: "from-indigo-800 to-blue-500",
    image:
      "https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg",
    badge: "Editor's Pick",
    description:
      "Roll the dice on an epic co-op RPG packed with consequence-heavy choices and D&D depth.",
  },
  {
    id: 37,
    title: "Another Code: Recollection",
    genre: "Adventure",
    rating: 8.9,
    year: 2024,
    gradient: "from-sky-700 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/896/896854355c6516444323c9e085d562d7.jpg",
    description:
      "A young girl unravels family mysteries across two haunting island adventures.",
  },
  {
    id: 38,
    title: "Emi - New Beginning",
    genre: "Adventure",
    rating: 8.9,
    year: 2022,
    gradient: "from-cyan-700 to-sky-500",
    image:
      "https://media.rawg.io/media/screenshots/eec/eec1d91768080988c5f768d9b0d2291c.jpg",
    description: "A compelling adventure game released in 2022.",
  },
  {
    id: 39,
    title: "Bionic Bay",
    genre: "Racing",
    rating: 8.9,
    year: 2025,
    gradient: "from-orange-600 via-red-500 to-rose-400",
    image:
      "https://media.rawg.io/media/games/66d/66d6665c96dde6a76bc869f3828013b8.jpg",
    description:
      "A sleek sci-fi platformer where you swap bodies with enemies to solve physics puzzles.",
  },
  {
    id: 40,
    title: "Hauntii",
    genre: "Adventure",
    rating: 8.9,
    year: 2024,
    gradient: "from-teal-700 to-green-500",
    image:
      "https://media.rawg.io/media/screenshots/21c/21cb898a6eb030e8b930a6c55b803ebb.jpg",
    description:
      "A ghost inhabits the world around it to unravel the mysteries of eternity.",
  },
  {
    id: 41,
    title: "Resident Evil 4 - Separate Ways",
    genre: "Shooter",
    rating: 8.9,
    year: 2023,
    gradient: "from-cyan-700 to-emerald-600",
    image:
      "https://media.rawg.io/media/games/235/23507cdd4268752b10f4dfc9cba52e9c.jpg",
    description:
      "Play Ada Wong's parallel spy mission through the events of Resident Evil 4.",
  },
  {
    id: 42,
    title: "God of War: Ragnarök",
    genre: "Action",
    rating: 8.9,
    year: 2022,
    gradient: "from-rose-700 to-red-400",
    image:
      "https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg",
    description:
      "Kratos and Atreus race to prevent Ragnarök across the nine Norse realms.",
  },
  {
    id: 43,
    title: "Until Then",
    genre: "Puzzle",
    rating: 8.8,
    year: 2024,
    gradient: "from-yellow-500 via-amber-400 to-orange-400",
    image:
      "https://media.rawg.io/media/screenshots/59e/59ef0d956e5aabf5b43af2fc271a93b9.jpg",
    description:
      "A heartfelt Filipino slice-of-life visual novel set amid everyday teenage drama.",
  },
  {
    id: 44,
    title: "A Space for the Unbound",
    genre: "Adventure",
    rating: 8.8,
    year: 2023,
    gradient: "from-sky-600 to-teal-500",
    image:
      "https://media.rawg.io/media/games/c18/c180a02a53ce8c8cf23f11f182184103.jpg",
    description:
      "An Indonesian high-school adventure exploring mental health through magical realism.",
  },
  {
    id: 45,
    title: "Donkey Kong Bananza",
    genre: "Adventure",
    rating: 8.8,
    year: 2025,
    gradient: "from-emerald-600 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/db4/db4348b029d2cdaf826d7536bd75b71c.jpg",
    description:
      "Kong smashes through destructible terrain in a vibrant underground open-world adventure.",
  },
  {
    id: 46,
    title: "World of Goo 2",
    genre: "Puzzle",
    rating: 8.8,
    year: 2024,
    gradient: "from-amber-600 to-yellow-400",
    image:
      "https://media.rawg.io/media/screenshots/f7a/f7af9c3c70d7acf49430e525e5d3825f.jpg",
    description:
      "Stack wobbly goo balls across mind-bending physics puzzles in a beautifully crafted sequel.",
  },
  {
    id: 47,
    title: "Horizon Zero Dawn Remastered",
    genre: "Shooter",
    rating: 8.8,
    year: 2024,
    gradient: "from-emerald-700 via-teal-600 to-cyan-500",
    image:
      "https://media.rawg.io/media/screenshots/e9c/e9cfcfafdf44b339edf6a9a07b8faed9.jpg",
    description:
      "Hunt colossal machine creatures across a lush post-apocalyptic landscape, rebuilt for PS5.",
  },
  {
    id: 48,
    title: "1000xResist",
    genre: "Adventure",
    rating: 8.8,
    year: 2024,
    gradient: "from-teal-600 via-cyan-500 to-sky-400",
    image:
      "https://media.rawg.io/media/games/7c7/7c7fc7ac07c17fad71095cca1c78bc65.jpg",
    description:
      "Uncover the truth about a cultish society that survived an alien plague.",
  },
  {
    id: 49,
    title: "I Am Your Beast",
    genre: "Action",
    rating: 8.8,
    year: 2024,
    gradient: "from-orange-700 to-amber-400",
    image:
      "https://media.rawg.io/media/games/077/07790746d9caa0542203febd069ac764.jpg",
    description:
      "Chain together ruthless executions in this hyper-stylised stealth action game.",
  },
  {
    id: 50,
    title: "Super Mario Party Jamboree",
    genre: "Adventure",
    rating: 8.8,
    year: 2024,
    gradient: "from-green-600 to-teal-400",
    image:
      "https://media.rawg.io/media/games/66f/66fcdc18586ac8c0aa17b2c83fee558d.jpg",
    description:
      "The biggest Mario Party boards yet, packed with mini-games for the whole family.",
  },
  {
    id: 51,
    title: "Hollow Knight: Silksong",
    genre: "Action",
    rating: 8.8,
    year: 2025,
    gradient: "from-red-800 to-orange-600",
    image:
      "https://media.rawg.io/media/games/27c/27cd8b7dead05a870f8a514a9a1915ad.jpg",
    description:
      "Hornet battles her way through a new kingdom teeming with enemies, hunters, and ancient secrets.",
  },
  {
    id: 52,
    title: "Kingdom Come: Deliverance II",
    genre: "Adventure",
    rating: 8.8,
    year: 2025,
    gradient: "from-sky-700 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/d84/d842fec4ae7bbd782d330f678c980f7f.jpg",
    description:
      "Continue Henry's medieval Bohemian odyssey in this sprawling open-world RPG sequel.",
  },
  {
    id: 53,
    title: "Elden Ring",
    genre: "Action",
    rating: 8.8,
    year: 2022,
    gradient: "from-rose-600 via-red-500 to-orange-400",
    image:
      "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
    badge: "Editor's Pick",
    description:
      "Traverse the Lands Between and unravel the mystery of the shattered Elden Ring.",
  },
  {
    id: 54,
    title: "UCN for mac and windows",
    genre: "Adventure",
    rating: 8.8,
    year: 2022,
    gradient: "from-cyan-700 to-sky-500",
    image:
      "https://media.rawg.io/media/screenshots/116/1165a0a83237dfc6e393d466c2124cae.jpg",
    description: "A compelling adventure game released in 2022.",
  },
  {
    id: 55,
    title: "Winter Memories",
    genre: "Puzzle",
    rating: 8.8,
    year: 2024,
    gradient: "from-yellow-700 to-amber-400",
    image:
      "https://media.rawg.io/media/screenshots/326/326267a294202a9d93e55879a6f61d48.jpg",
    description: "A compelling puzzle game released in 2024.",
  },
  {
    id: 56,
    title: "Leaf it Alone",
    genre: "Puzzle",
    rating: 8.8,
    year: 2025,
    gradient: "from-orange-600 to-yellow-500",
    image:
      "https://media.rawg.io/media/games/e8a/e8a79474fcbcd0d1bc595ec25dd7536f.jpg",
    description: "A compelling puzzle game released in 2025.",
  },
  {
    id: 57,
    title: "The Rise of the Golden Idol",
    genre: "Adventure",
    rating: 8.8,
    year: 2024,
    gradient: "from-teal-700 to-green-500",
    image:
      "https://media.rawg.io/media/screenshots/bc8/bc8e49daf53d39b599f5fdb012177569.jpg",
    description:
      "Piece together a centuries-spanning cult conspiracy through crime scene analysis.",
  },
  {
    id: 58,
    title: "The WereCleaner",
    genre: "Puzzle",
    rating: 8.8,
    year: 2024,
    gradient: "from-amber-500 via-yellow-400 to-lime-400",
    image:
      "https://media.rawg.io/media/screenshots/d09/d091eb9147f87728c0e6f0bacbbcd2b6.jpg",
    description: "A compelling puzzle game released in 2024.",
  },
  {
    id: 59,
    title: "Slay the Princess",
    genre: "Adventure",
    rating: 8.8,
    year: 2023,
    gradient: "from-sky-600 to-teal-500",
    image:
      "https://media.rawg.io/media/games/1fa/1fa542171e580af49fabd094bd232659.jpg",
    description:
      "Choose your response to a captive princess — and discover nothing is what it seems.",
  },
  {
    id: 60,
    title: "Frog Detective 3: Corruption at Cowboy County",
    genre: "Puzzle",
    rating: 8.8,
    year: 2022,
    gradient: "from-yellow-500 via-amber-400 to-orange-400",
    image:
      "https://media.rawg.io/media/screenshots/a92/a92d76ba93b22b7add9b9502fa52d0ce.jpg",
    description:
      "The world's greatest detective investigates a mysterious fog and a sabotaged party.",
  },
  {
    id: 61,
    title: '"Voices Of The Void" Demo',
    genre: "Strategy",
    rating: 8.8,
    year: 2022,
    gradient: "from-blue-900 to-indigo-500",
    image:
      "https://media.rawg.io/media/screenshots/5ad/5ade5501c6e154c24af4b257128e1c13.jpg",
    description: "A compelling strategy game released in 2022.",
  },
  {
    id: 62,
    title: "Monster Prom 3: Monster Roadtrip",
    genre: "Puzzle",
    rating: 8.8,
    year: 2022,
    gradient: "from-amber-600 to-yellow-400",
    image:
      "https://media.rawg.io/media/screenshots/461/461540af873745450cdd3d39dfcc695d.jpg",
    description: "A compelling puzzle game released in 2022.",
  },
  {
    id: 63,
    title: "Lost in Play",
    genre: "Puzzle",
    rating: 8.8,
    year: 2022,
    gradient: "from-yellow-700 to-amber-400",
    image:
      "https://media.rawg.io/media/games/465/465d819b711ed1251bdaed0759ef185e.jpg",
    description:
      "Two siblings' imagination runs wild in a wordless animated adventure.",
  },
  {
    id: 64,
    title: "Cabernet",
    genre: "Adventure",
    rating: 8.8,
    year: 2025,
    gradient: "from-emerald-600 to-cyan-500",
    image:
      "https://media.rawg.io/media/screenshots/624/624f7fc033c4afbdff09df3aa10866ac.jpg",
    description:
      "Navigate vampire society and moral dilemmas in a gothic narrative RPG.",
  },
  {
    id: 65,
    title: "Fire Emblem Warriors: Three Hopes",
    genre: "Action",
    rating: 8.8,
    year: 2022,
    gradient: "from-orange-600 to-red-500",
    image:
      "https://media.rawg.io/media/games/073/073b560fa5ab283c03e4a9a698d001af.jpg",
    description:
      "Command Three Houses characters in fast-paced musou battles across a branching war.",
  },
  {
    id: 66,
    title: "The Legend of Zelda: Tears of the Kingdom",
    genre: "Adventure",
    rating: 8.7,
    year: 2023,
    gradient: "from-teal-600 via-cyan-500 to-sky-400",
    image:
      "https://media.rawg.io/media/games/556/55684bfd048706f4266d331d70050b37.jpg",
    description: "A compelling adventure game released in 2023.",
  },
  {
    id: 67,
    title: "Cocoon",
    genre: "Adventure",
    rating: 8.7,
    year: 2023,
    gradient: "from-green-600 to-teal-400",
    image:
      "https://media.rawg.io/media/games/153/153e8d78ac19e959214dadefb8c27310.jpg",
    description: "A compelling adventure game released in 2023.",
  },
  {
    id: 68,
    title: "Persona 3 Reload",
    genre: "Strategy",
    rating: 8.7,
    year: 2024,
    gradient: "from-violet-700 to-blue-600",
    image:
      "https://media.rawg.io/media/games/29a/29a78d7b6be61673c910d588bf188e2c.jpg",
    description:
      "Command the Specialized Extracurricular Execution Squad in a fully remade Persona classic.",
  },
  {
    id: 69,
    title: "The Stanley Parable: Ultra Deluxe",
    genre: "Puzzle",
    rating: 8.7,
    year: 2022,
    gradient: "from-orange-600 to-yellow-500",
    image:
      "https://media.rawg.io/media/games/c4e/c4e3ad247e93d3a5dc40aa215a778a9c.jpg",
    description: "A compelling puzzle game released in 2022.",
  },
  {
    id: 70,
    title: "Warhammer 40,000: Rogue Trader",
    genre: "Strategy",
    rating: 8.7,
    year: 2023,
    gradient: "from-blue-700 via-indigo-600 to-violet-500",
    image:
      "https://media.rawg.io/media/games/edf/edf3bd3ffa486f5d6a84bda020765839.jpg",
    description:
      "Command a mighty rogue trader dynasty across the grim darkness of the far future.",
  },
  {
    id: 71,
    title: "Astro Bot",
    genre: "Action",
    rating: 8.7,
    year: 2024,
    gradient: "from-red-600 via-orange-500 to-yellow-400",
    image:
      "https://media.rawg.io/media/games/b19/b19cdd6be95ffffd63fdd2d1fbac057a.jpg",
    description:
      "A joyful 3D platformer celebrating PlayStation history through inspired worlds and characters.",
  },
  {
    id: 72,
    title: "Metroid Prime Remastered",
    genre: "Action",
    rating: 8.7,
    year: 2023,
    gradient: "from-rose-700 to-red-400",
    image:
      "https://media.rawg.io/media/games/f2f/f2f9f11997ee841550ba2b8ccf3c51e9.jpg",
    description:
      "Samus Aran's iconic first-person adventure through an alien planet, gorgeously rebuilt.",
  },
  {
    id: 73,
    title: "Chants of Sennaar",
    genre: "Adventure",
    rating: 8.7,
    year: 2023,
    gradient: "from-sky-700 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/5e9/5e9ce1121cbc4f30cb54cec20820df04.jpg",
    description:
      "Decipher ancient languages to bridge civilisations in a Tower of Babel mystery.",
  },
  {
    id: 74,
    title: "Shogun Showdown",
    genre: "Strategy",
    rating: 8.7,
    year: 2023,
    gradient: "from-slate-700 to-blue-600",
    image:
      "https://media.rawg.io/media/screenshots/7a2/7a23a81875145336576e24b682d3ede7.jpg",
    description: "A compelling strategy game released in 2023.",
  },
  {
    id: 75,
    title: "Marvel's Spider-Man 2",
    genre: "Adventure",
    rating: 8.7,
    year: 2023,
    gradient: "from-cyan-700 to-sky-500",
    image:
      "https://media.rawg.io/media/games/7ae/7ae5a14cdb4ab222a134c15f4629e430.jpg",
    description:
      "Peter and Miles face Venom in a breathtaking dual-protagonist New York adventure.",
  },
  {
    id: 76,
    title: "Signalis",
    genre: "Adventure",
    rating: 8.7,
    year: 2022,
    gradient: "from-teal-700 to-green-500",
    image:
      "https://media.rawg.io/media/games/480/480295ba922318bb052d169174ec88aa.jpg",
    description:
      "A haunting sci-fi survival horror told through fragmented dreams and encrypted signals.",
  },
  {
    id: 77,
    title: "Ghost Trick : Detective Phantom (remastered)",
    genre: "Adventure",
    rating: 8.7,
    year: 2023,
    gradient: "from-sky-600 to-teal-500",
    image:
      "https://media.rawg.io/media/games/d00/d0088d5ffce4e167241b65eb18a28cb4.jpg",
    description:
      "A dead detective manipulates objects to prevent murders in this witty puzzle adventure.",
  },
  {
    id: 78,
    title: "Hades II",
    genre: "Adventure",
    rating: 8.7,
    year: 2025,
    gradient: "from-emerald-600 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/8fd/8fd2e8317849fd265ad8781c324d4ec2.jpg",
    badge: "Editor's Pick",
    description:
      "The witch Melinoë wages war on Chronos in a bigger, deeper roguelike sequel.",
  },
  {
    id: 79,
    title: "Nine Sols",
    genre: "Action",
    rating: 8.7,
    year: 2024,
    gradient: "from-orange-700 to-amber-400",
    image:
      "https://media.rawg.io/media/games/cee/cee02d983e2e1e457caa562420f532fb.jpg",
    description:
      "A Taoistic sci-fi Metroidvania where precision parries define every encounter.",
  },
  {
    id: 80,
    title: "Super Mario Bros. Wonder",
    genre: "Adventure",
    rating: 8.7,
    year: 2023,
    gradient: "from-teal-600 via-cyan-500 to-sky-400",
    image:
      "https://media.rawg.io/media/games/1fd/1fd3f030bee73452d46a0678084a7ed9.jpg",
    description:
      "Side-scrolling madness unleashed through Wonder Flowers that warp reality mid-level.",
  },
  {
    id: 81,
    title: "Splatoon 3",
    genre: "Shooter",
    rating: 8.7,
    year: 2022,
    gradient: "from-gray-700 to-green-600",
    image:
      "https://media.rawg.io/media/games/360/360ac0a839ab0f0d9a70b35d38264cb0.jpg",
    description:
      "Ink the turf, splat opponents, and customise your squid kid in the latest Splatoon.",
  },
  {
    id: 82,
    title: "The Legend of Heroes: Trails from Zero",
    genre: "RPG",
    rating: 8.7,
    year: 2022,
    gradient: "from-violet-800 to-purple-500",
    image:
      "https://media.rawg.io/media/games/f0a/f0ac99c638c25a5975cd74919564bda5.jpg",
    description:
      "The crossbell detective arc begins in this beloved JRPG now playable in English.",
  },
  {
    id: 83,
    title: "We Were Here Forever",
    genre: "Puzzle",
    rating: 8.7,
    year: 2022,
    gradient: "from-amber-500 via-yellow-400 to-lime-400",
    image:
      "https://media.rawg.io/media/games/b2d/b2d4e1f3fc468c104efb7c5a576b4206.jpg",
    description:
      "Solve elaborate puzzles across a gothic castle through pure co-op communication.",
  },
  {
    id: 84,
    title: "The Alters",
    genre: "Adventure",
    rating: 8.7,
    year: 2025,
    gradient: "from-green-600 to-teal-400",
    image:
      "https://media.rawg.io/media/games/18f/18fba094d4ba0dda019131ea9b585446.jpg",
    description:
      "Manage alternate versions of yourself to survive a dying alien world.",
  },
  {
    id: 85,
    title: "Neon White",
    genre: "Shooter",
    rating: 8.7,
    year: 2022,
    gradient: "from-teal-800 to-emerald-500",
    image:
      "https://media.rawg.io/media/games/a12/a120fc7faed7666f8c320a755137e316.jpg",
    description:
      "Sprint, slay demons, and shave milliseconds off your best time in this card-shooter hybrid.",
  },
  {
    id: 86,
    title: "Unicorn Overlord",
    genre: "Strategy",
    rating: 8.7,
    year: 2024,
    gradient: "from-indigo-800 to-blue-500",
    image:
      "https://media.rawg.io/media/screenshots/e4d/e4d2d9720f0962ca4f6a6dd02cef331e.jpeg",
    description:
      "Lead a liberation army across a beautifully illustrated fantasy world.",
  },
  {
    id: 87,
    title: "Doom: The Dark Ages",
    genre: "Action",
    rating: 8.7,
    year: 2025,
    gradient: "from-red-800 to-orange-600",
    image:
      "https://media.rawg.io/media/games/018/01897340a06b9ed8e92ed1cc1b1eecb9.jpg",
    description:
      "Rip and tear through medieval citadels as a primal armoured Doom Slayer.",
  },
  {
    id: 88,
    title: "Death Stranding 2: On The Beach",
    genre: "Adventure",
    rating: 8.7,
    year: 2025,
    gradient: "from-sky-700 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/b85/b85bc300d42588af66fb516b7563f74f.jpg",
    description: "A compelling adventure game released in 2025.",
  },
  {
    id: 89,
    title: "The Talos Principle 2",
    genre: "Adventure",
    rating: 8.7,
    year: 2023,
    gradient: "from-cyan-700 to-sky-500",
    image:
      "https://media.rawg.io/media/games/4e4/4e42fc297c028630262a4abcc7769576.jpg",
    description: "A compelling adventure game released in 2023.",
  },
  {
    id: 90,
    title: "Dead Space",
    genre: "Adventure",
    rating: 8.7,
    year: 2023,
    gradient: "from-teal-700 to-green-500",
    image:
      "https://media.rawg.io/media/games/ea6/ea6a1382b15d749e15fdfbf0aece7689.jpg",
    description: "A compelling adventure game released in 2023.",
  },
  {
    id: 91,
    title: "Neva",
    genre: "Adventure",
    rating: 8.7,
    year: 2024,
    gradient: "from-sky-600 to-teal-500",
    image:
      "https://media.rawg.io/media/games/5eb/5eb783656623aa13d6fc65e470dd5dba.jpg",
    description: "A compelling adventure game released in 2024.",
  },
  {
    id: 92,
    title: "Alan Wake 2",
    genre: "Action",
    rating: 8.7,
    year: 2023,
    gradient: "from-rose-600 via-red-500 to-orange-400",
    image:
      "https://media.rawg.io/media/games/5b9/5b963d7633cd640fa2dbc4069d1c6377.jpg",
    description:
      "A writer trapped in a dark story must rewrite reality to escape a nightmare.",
  },
  {
    id: 93,
    title: "Sister! Seikatsu -Fantasy-",
    genre: "Puzzle",
    rating: 8.7,
    year: 2022,
    gradient: "from-yellow-500 via-amber-400 to-orange-400",
    image:
      "https://media.rawg.io/media/screenshots/5cc/5cc0fe59150a7d40b476c16115fc30e1.jpg",
    description: "A compelling puzzle game released in 2022.",
  },
  {
    id: 94,
    title: "Monster Hunter Stories 3: Twisted Reflection",
    genre: "Action",
    rating: 8.7,
    year: 2026,
    gradient: "from-orange-600 to-red-500",
    image:
      "https://media.rawg.io/media/screenshots/880/880bec24bf308de14746c9966e09d719.jpg",
    badge: "New",
    description:
      "Bond with monstie companions and unravel a mystery reshaping the monster world.",
  },
  {
    id: 95,
    title: "Ball x Pit",
    genre: "Action",
    rating: 8.7,
    year: 2025,
    gradient: "from-red-600 via-orange-500 to-yellow-400",
    image:
      "https://media.rawg.io/media/games/798/798705b4f25e958e4ab8edf570e215f8.jpg",
    description: "A compelling action game released in 2025.",
  },
  {
    id: 96,
    title: "The Last Clockwinder",
    genre: "Adventure",
    rating: 8.7,
    year: 2022,
    gradient: "from-emerald-600 to-cyan-500",
    image:
      "https://media.rawg.io/media/screenshots/840/84070ec840c2209ebbed054efd82eb13.jpg",
    description:
      "Solve puzzles by recording your own hands as looping robot helpers.",
  },
  {
    id: 97,
    title: "TELEFORUM",
    genre: "Adventure",
    rating: 8.7,
    year: 2023,
    gradient: "from-teal-600 via-cyan-500 to-sky-400",
    image:
      "https://media.rawg.io/media/screenshots/55b/55bda84104dd31bcd7477f234b573594.jpg",
    description: "A compelling adventure game released in 2023.",
  },
  {
    id: 98,
    title: "The Legend of Zelda: Echoes of Wisdom",
    genre: "Adventure",
    rating: 8.7,
    year: 2024,
    gradient: "from-green-600 to-teal-400",
    image:
      "https://media.rawg.io/media/games/ef0/ef095574ebf35dbe30cbb85f3798b4e5.jpg",
    description:
      "Zelda copies objects and enemies as Echoes to puzzle her way through a rift-torn Hyrule.",
  },
  {
    id: 99,
    title: "Prince of Persia The Lost Crown",
    genre: "Adventure",
    rating: 8.7,
    year: 2024,
    gradient: "from-sky-700 to-cyan-500",
    image:
      "https://media.rawg.io/media/screenshots/159/159ef6e50522aaf27650cc418a1bf411.jpg",
    description: "A compelling adventure game released in 2024.",
  },
  {
    id: 100,
    title: "Poppy Playtime 2D (CHAPTER 1)",
    genre: "Adventure",
    rating: 8.7,
    year: 2022,
    gradient: "from-cyan-700 to-sky-500",
    image:
      "https://media.rawg.io/media/screenshots/7ab/7ab4d3a9c687a4245b37343e381777b5.jpg",
    description:
      "Escape the toy factory and survive Huggy Wuggy in this creepy 2D horror.",
  },
  {
    id: 101,
    title: "Arco",
    genre: "Strategy",
    rating: 8.7,
    year: 2024,
    gradient: "from-blue-900 to-indigo-500",
    image:
      "https://media.rawg.io/media/screenshots/2dc/2dca6588235a31df977f69b273848641.jpg",
    description: "A compelling strategy game released in 2024.",
  },
  {
    id: 102,
    title: "Sonic X Shadow Generations",
    genre: "Adventure",
    rating: 8.7,
    year: 2024,
    gradient: "from-teal-700 to-green-500",
    image:
      "https://media.rawg.io/media/screenshots/797/797fc5d525fd1ec461268f43aad06dfd.jpg",
    description:
      "Sonic's greatest hits remixed, plus Shadow's gripping standalone origin campaign.",
  },
  {
    id: 103,
    title: "PARANORMASIGHT: The Seven Mysteries of Honjo",
    genre: "Puzzle",
    rating: 8.7,
    year: 2023,
    gradient: "from-amber-600 to-yellow-400",
    image:
      "https://media.rawg.io/media/games/72d/72d5532d7533c105b9900cca2e23f773.jpg",
    description: "A compelling puzzle game released in 2023.",
  },
  {
    id: 104,
    title: "Donkey Kong Country Returns HD",
    genre: "Action",
    rating: 8.7,
    year: 2025,
    gradient: "from-rose-700 to-red-400",
    image:
      "https://media.rawg.io/media/games/3f4/3f47e8c4e97f884f032b686021530478.jpg",
    description:
      "Kong's legendary platformer adventure returns in crisp high-definition.",
  },
  {
    id: 105,
    title: "Sanabi",
    genre: "Action",
    rating: 8.7,
    year: 2023,
    gradient: "from-orange-700 to-amber-400",
    image:
      "https://media.rawg.io/media/games/8fd/8fddf3eec9b26d7d40965d57da53cce0.jpg",
    description:
      "A retired soldier grapples across a neon megacity to unravel a corporate conspiracy.",
  },
  {
    id: 106,
    title: "Bomb Rush Cyberfunk",
    genre: "Adventure",
    rating: 8.7,
    year: 2023,
    gradient: "from-sky-600 to-teal-500",
    image:
      "https://media.rawg.io/media/games/ca7/ca7ca88681ad87eccd12e2acc65a2f6d.jpg",
    description:
      "Ride, skate, and paint your crew's tag across a vibrant futuristic city.",
  },
  {
    id: 107,
    title: "One in space",
    genre: "Shooter",
    rating: 8.7,
    year: 2022,
    gradient: "from-green-800 to-teal-600",
    image:
      "https://media.rawg.io/media/screenshots/b7f/b7ffcaad681e81cc93a885054588af94.jpg",
    description: "A compelling shooter game released in 2022.",
  },
  {
    id: 108,
    title: "One Night At Shrek's Hotel",
    genre: "Adventure",
    rating: 8.7,
    year: 2022,
    gradient: "from-emerald-600 to-cyan-500",
    image:
      "https://media.rawg.io/media/screenshots/b4a/b4a2f7a51a91f2298586afab99b3b164.jpg",
    description:
      "Survive the night shift at the Swamp's most peculiar establishment.",
  },
  {
    id: 109,
    title: "Burnhouse Lane",
    genre: "Adventure",
    rating: 8.7,
    year: 2022,
    gradient: "from-teal-600 via-cyan-500 to-sky-400",
    image:
      "https://media.rawg.io/media/games/c28/c28f9a27ef017d2086fef7ed2ab984b3.jpg",
    description:
      "A disturbing horror adventure about sacrifice, grief, and uneasy bargains.",
  },
  {
    id: 110,
    title: "Escape From Mystwood Mansion",
    genre: "Puzzle",
    rating: 8.7,
    year: 2023,
    gradient: "from-yellow-700 to-amber-400",
    image:
      "https://media.rawg.io/media/screenshots/2ce/2ce6d3cd3017ff5fb0d0ad1ff880d6a8.jpg",
    description: "A compelling puzzle game released in 2023.",
  },
  {
    id: 111,
    title: "Xenoblade Chronicles 3",
    genre: "RPG",
    rating: 8.6,
    year: 2022,
    gradient: "from-purple-900 to-fuchsia-600",
    image:
      "https://media.rawg.io/media/games/ae7/ae7cfc9a66232839112663899d2c8d8d.jpg",
    description:
      "Two nations locked in endless war discover a truth that will change everything.",
  },
  {
    id: 112,
    title: "Black Myth: Wukong",
    genre: "Adventure",
    rating: 8.6,
    year: 2024,
    gradient: "from-green-600 to-teal-400",
    image:
      "https://media.rawg.io/media/games/779/77988e89f7862afeede524420aa251b0.jpg",
    description: "A compelling adventure game released in 2024.",
  },
  {
    id: 113,
    title: "Like a Dragon Gaiden: The Man Who Erased His Name",
    genre: "Adventure",
    rating: 8.6,
    year: 2023,
    gradient: "from-sky-700 to-cyan-500",
    image:
      "https://media.rawg.io/media/games/0c1/0c10aa5a41d64c0bb6ca9fe30173488d.jpg",
    description:
      "Kazuma Kiryu takes on deadly criminal organisations in a globe-spanning spy action thriller.",
  },
];
