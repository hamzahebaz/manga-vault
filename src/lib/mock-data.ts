export type Manga = {
  id: string;
  slug: string;
  title: Record<string, string>;
  synopsis: Record<string, string>;
  coverImage: string;
  author: string;
  year: number;
  status: 'Ongoing' | 'Completed' | 'Hiatus';
  chapters: number;
  genres: string[];
  rating: number;
  ratingCount: number;
};

export const mockMangaDB: Manga[] = [
  {
    "id": "32d76d19-8a05-4db0-9fc2-e0b0648fe9d0",
    "slug": "na-honjaman-level-up",
    "title": {
      "en": "Na Honjaman Level-Up",
      "fr": "Na Honjaman Level-Up"
    },
    "synopsis": {
      "en": "10 years ago, after “the Gate” that connected the real world with the monster world opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate. They are known as “Hunters”. However, not all Hunters are powerful. My name is Sung Jin-Woo, an E-rank Hunter. I’m someone who has to risk his life in the lowliest of dungeons, the “World’s Weakest”. Having no skills whatsoever to display, I barely earned the required money by fighting in low-leveled dungeons… at least until I found a hidden dungeon with the hardest difficulty within the D-rank dungeons! In the end, as I was accepting death, I suddenly received a strange power, a quest log that only I could see, a secret to leveling up that only I know about! If I trained in accordance with my quests and hunted monsters, my level would rise. Changing from the weakest Hunter to the strongest S-rank Hunter!\n\n---\n**Links:**\n\n- Official English Translation [<Pocket Comics>](https://www.pocketcomics.com/comic/320) | [<WebNovel>](https://www.webnovel.com/comic/only-i-level-up-(solo-leveling)_15227640605485101) | [<Tapas>](https://tapas.io/series/solo-leveling-comic/info)\n- Alternate Official Raw - [Kakao Webtoon](https://webtoon.kakao.com/content/나-혼자만-레벨업/2320)",
      "fr": "Lorsque d’étranges portails sont apparus aux quatre coins du monde, l’humanité a dû trouver parade pour ne pas finir massacrée entre les griffes des monstres qu’ils ont apportés avec eux. La solution ? Les chasseurs ! Ces combattants intrépides n’hésitent pas à foncer au cœur des donjons dimensionnels pour combattre les créatures qu’ils abritent, et y collecter des trésors.\n\n---\n\n- [1st Trailer](https://www.youtube.com/watch?v=hLwQUZgFiM4) | [ENG](https://www.youtube.com/watch?v=SP5TdrbsePE) | [JP](https://www.youtube.com/watch?v=lY82MjIM99o)\n\n- [2nd Trailer](https://www.youtube.com/watch?v=JRXcbcEnqEs) | [ENG](https://www.youtube.com/watch?v=whx0WCtc9DQ) | [JP](https://www.youtube.com/watch?v=ZPxjjbRaIwk)\n\n- [S2 <Return> PV](https://www.youtube.com/watch?v=Hd_zT6I5K6c)\n\n- [Original Webtoon <Webtoon kakao>](https://webtoon.kakao.com/content/%EB%82%98-%ED%98%BC%EC%9E%90%EB%A7%8C-%EB%A0%88%EB%B2%A8%EC%97%85/2320)\n\n---\n\n- [Original Book <Yes24>](http://www.yes24.com/Product/Goods/78527123)\n- [Original Book <Aladin>](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=206124229)\n>\n- [Book <Japanese Edition>](https://www.kadokawa.co.jp/product/321906000298/)\n\n- [Book <German Edition>](https://altraverse.de/manga/solo-leveling/)\n\n- [Book <English Edition>](https://yenpress.com/search-list/?keyword=SOLO%2BLEVELING%2BComic)\n\n- [Book <Italian Edition>](https://www.starcomics.com/titoli-fumetti/solo-leveling)\n\n---\n\n- Official English Translation [<Pocket Comics>](https://www.pocketcomics.com/comic/320) | [<WebNovel>](https://www.webnovel.com/comic/only-i-level-up-(solo-leveling)_15227640605485101) | [<Tapas>](https://tapas.io/series/solo-leveling-comic/info)\n\n- [Official Traditional Chinese Translation](https://tw.kakaowebtoon.com/content/%E6%88%91%E7%8D%A8%E8%87%AA%E5%8D%87%E7%B4%9A/53)\n\n- [Official Simplified Chinese Translation](https://www.kuaikanmanhua.com/web/topic/4319/)\n\n- [Official Indonesian Translation](https://kakaopage.co.id/content/Solo-Leveling/3375)\n\n- [Official Japanese Translation](https://piccoma.com/web/product/5523)\n\n- [Official French Translation](https://www.verytoon.com/serie/solo-leveling)\n\n- [Official Thai Translation](https://th.kakaowebtoon.com/content/solo_leveling/48)\n\n---\n\n- [Original LNovel Book <Aladin>](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=204209839)\n- [Original LNovel Book <Yes24>](http://www.yes24.com/Product/Goods/78213344) \n>\n- <Japanese Edition> [Web](https://piccoma.com/web/product/18836) | [Book](https://www.kadokawa.co.jp/product/322009000190/)\n\n- <English Edition> [Web](https://www.webnovel.com/book/only-i-level-up-(solo-leveling)_12507348206677105) | [Book](https://yenpress.com/series-search/?series=solo+leveling+novel)\n\n- [<German Edition>](https://altraverse.de/manga/solo-leveling/)"
    },
    "coverImage": "https://uploads.mangadex.org/covers/32d76d19-8a05-4db0-9fc2-e0b0648fe9d0/e90bdc47-c8b9-4df7-b2c0-17641b645ee1.jpg.512.jpg",
    "author": "h-goon (현군)",
    "year": 2018,
    "status": "Completed",
    "chapters": 200,
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.1,
    "ratingCount": 97249
  },
  {
    "id": "77bee52c-d2d6-44ad-a33a-1734c1fe696a",
    "slug": "kage-no-jitsuryokusha-ni-naritakute",
    "title": {
      "en": "Kage no Jitsuryokusha ni Naritakute!",
      "fr": "Kage no Jitsuryokusha ni Naritakute!"
    },
    "synopsis": {
      "en": "Just like how everyone adored heroes in their childhood, a certain young man adored those powers hidden in shadows. Ninjas, rogues, shadowy mentor types, that sort of deal.  \r\nAfter hiding his strength and living the mediocre life of a NPC by day while undergoing frenzied training by night, he finally reincarnates into a different world and gains ultimate power.  \r\nThe young man who is only pretending to be a power in the shadows… his subordinates who took him more seriously than he expected… and a giant organization in the shadows that gets accidentally trampled…  \r\nThis is the story of a young boy who had adored powers in shadows possibly eventually reigning over the world of shadows in another world.",
      "fr": "Just like how everyone adored heroes in their childhood, a certain young man adored those powers hidden in shadows. Ninjas, rogues, shadowy mentor types, that sort of deal.  \r\nAfter hiding his strength and living the mediocre life of a NPC by day while undergoing frenzied training by night, he finally reincarnates into a different world and gains ultimate power.  \r\nThe young man who is only pretending to be a power in the shadows… his subordinates who took him more seriously than he expected… and a giant organization in the shadows that gets accidentally trampled…  \r\nThis is the story of a young boy who had adored powers in shadows possibly eventually reigning over the world of shadows in another world."
    },
    "coverImage": "https://uploads.mangadex.org/covers/77bee52c-d2d6-44ad-a33a-1734c1fe696a/3994ae2b-37b5-4f5c-8ebe-35e3d7c6c959.jpg.512.jpg",
    "author": "Sakano Anri",
    "year": 2018,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Isekai"
    ],
    "rating": 9.2,
    "ratingCount": 19662
  },
  {
    "id": "e78a489b-6632-4d61-b00b-5206f5b8b22b",
    "slug": "tensei-shitara-slime-datta-ken",
    "title": {
      "en": "Tensei Shitara Slime datta Ken",
      "fr": "Tensei Shitara Slime datta Ken"
    },
    "synopsis": {
      "en": "The ordinary Mikami Satoru found himself dying after being stabbed by a slasher. It should have been the end of his meager 37 years, but he found himself deaf and blind after hearing a mysterious voice.  \nHe had been reincarnated into a slime!  \n  \nWhile complaining about becoming the weak but famous slime and enjoying the life of a slime at the same time, Mikami Satoru met with the Catastrophe-level monster “Storm Dragon Veldora”, and his fate began to move.\n\n---\n**Links:**\n- Alternative Official English - [K MANGA](https://kmanga.kodansha.com/title/10044/episode/317350) (U.S. Only), [INKR](https://comics.inkr.com/title/233-that-time-i-got-reincarnated-as-a-slime), [Azuki](https://www.azuki.co/series/that-time-i-got-reincarnated-as-a-slime), [Coolmic](https://coolmic.me/titles/587), [Manga Planet](https://mangaplanet.com/comic/618e32db10673)",
      "fr": "The ordinary Mikami Satoru found himself dying after being stabbed by a slasher. It should have been the end of his meager 37 years, but he found himself deaf and blind after hearing a mysterious voice.  \nHe had been reincarnated into a slime!  \n  \nWhile complaining about becoming the weak but famous slime and enjoying the life of a slime at the same time, Mikami Satoru met with the Catastrophe-level monster “Storm Dragon Veldora”, and his fate began to move.\n\n---\n**Links:**\n- Alternative Official English - [K MANGA](https://kmanga.kodansha.com/title/10044/episode/317350) (U.S. Only), [INKR](https://comics.inkr.com/title/233-that-time-i-got-reincarnated-as-a-slime), [Azuki](https://www.azuki.co/series/that-time-i-got-reincarnated-as-a-slime), [Coolmic](https://coolmic.me/titles/587), [Manga Planet](https://mangaplanet.com/comic/618e32db10673)"
    },
    "coverImage": "https://uploads.mangadex.org/covers/e78a489b-6632-4d61-b00b-5206f5b8b22b/b5b93450-d3c0-407c-9efb-074eed4b4d7e.jpg.512.jpg",
    "author": "Fuse",
    "year": 2015,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Isekai"
    ],
    "rating": 8,
    "ratingCount": 59216
  },
  {
    "id": "b0b721ff-c388-4486-aa0f-c2b0bb321512",
    "slug": "sousou-no-frieren",
    "title": {
      "en": "Sousou no Frieren",
      "fr": "Sousou no Frieren"
    },
    "synopsis": {
      "en": "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. With the great struggle over, they all go their separate ways to live a quiet life. But as an elf, Frieren, nearly immortal, will long outlive the rest of her former party. How will she come to terms with the mortality of her friends? How can she find fulfillment in her own life, and can she learn to understand what life means to the humans around her? Frieren begins a new journey to find the answer.",
      "fr": "Que deviennent les héros une fois le mal vaincu ?\nDans ce coffret collector : un jeu de 54 cartes entièrement personnalisé aux couleurs de la série et le manga avec une jaquette alternative réversible !\n\nAlors que Frieren et ses compagnons font halte dans la citadelle de Heiß, Stark propose à Fern d'aller en rendez-vous, sur le ton de la plaisanterie... et contre toute attente, la jeune fille accepte ! Sur les conseils de l'elfe, qui n'y connaît pas grand-chose, le guerrier emmène donc son amie faire le tour de la ville, ce qui leur permet de se rapprocher un peu.\n\nAprès cette pause bienvenue, les trois aventuriers repartent sur les routes et arrivent au haut-plateau du Nord, une zone extrêmement dangereuse où pullulent aussi bien des monstres coriaces que des démons retors... Parviendront-ils à survivre dans cette région hostile ?"
    },
    "coverImage": "https://uploads.mangadex.org/covers/b0b721ff-c388-4486-aa0f-c2b0bb321512/b9a049b0-186b-4714-a83e-bb965458914a.jpg.512.jpg",
    "author": "Yamada Kanehito",
    "year": 2020,
    "status": "Hiatus",
    "chapters": 0,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 8.8,
    "ratingCount": 31413
  },
  {
    "id": "a77742b1-befd-49a4-bff5-1ad4e6b0ef7b",
    "slug": "chainsaw-man",
    "title": {
      "en": "Chainsaw Man",
      "fr": "Chainsaw Man"
    },
    "synopsis": {
      "en": "Broke young man + chainsaw dog demon = Chainsaw Man!  \n  \nThe name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!",
      "fr": "Pour rembourser ses dettes, Denji, jeune homme dans la dèche la plus totale, est exploité en tant que Devil Hunter avec son chien-démon-tronçonneuse, “Pochita”. Mais suite à une cruelle trahison, il voit enfin une possibilité de se tirer des bas-fonds où il croupit ! Devenu surpuissant après sa fusion avec Pochita, Denji est recruté par une organisation et part à la chasse aux démons…\n\n---\n\nMaison d'édition FR : **Kazé / Crunchyroll**"
    },
    "coverImage": "https://uploads.mangadex.org/covers/a77742b1-befd-49a4-bff5-1ad4e6b0ef7b/6e518bd1-5f60-446b-8832-bfe6bf74834b.jpg.512.jpg",
    "author": "Fujimoto Tatsuki",
    "year": 2018,
    "status": "Completed",
    "chapters": 232,
    "genres": [
      "Action",
      "Comedy",
      "Horror"
    ],
    "rating": 8.6,
    "ratingCount": 10538
  },
  {
    "id": "d8a959f7-648e-4c8d-8f23-f1f3f8e129f3",
    "slug": "one-punch-man",
    "title": {
      "en": "One Punch-Man",
      "fr": "One Punch-Man"
    },
    "synopsis": {
      "en": "After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero. However, he quickly becomes bored with easily defeating monsters, and wants someone to give him a challenge to bring back the spark of being a hero.  \n  \nUpon bearing witness to Saitama's amazing power, Genos, a cyborg, is determined to become Saitama's apprentice. During this time, Saitama realizes he is neither getting the recognition that he deserves nor known by the people due to him not being a part of the Hero Association. Wanting to boost his reputation, Saitama decides to have Genos register with him, in exchange for taking him in as a pupil. Together, the two begin working their way up toward becoming true heroes, hoping to find strong enemies and earn respect in the process.  \n  \n\n\n\n---\n\n**Notes:**  \n- Because some groups use the web version of the manga while others use the magazine version, the numbering won't match between different languages.  \n- **Because a takedown notice was sent to MangaDex from the owners of this series, fan translations of One Punch Man are currently unavailable to be uploaded. The series can be read in its entirety at [the official Shonen Jump website,](https://www.viz.com/shonenjump/chapters/one-punch-man) with the first and latest three chapters available at any time and the rest accessible with a Shonen Jump membership (which costs about $2 a month and can be accessed via a VPN if you are outside the US).**",
      "fr": "After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero. However, he quickly becomes bored with easily defeating monsters, and wants someone to give him a challenge to bring back the spark of being a hero.  \n  \nUpon bearing witness to Saitama's amazing power, Genos, a cyborg, is determined to become Saitama's apprentice. During this time, Saitama realizes he is neither getting the recognition that he deserves nor known by the people due to him not being a part of the Hero Association. Wanting to boost his reputation, Saitama decides to have Genos register with him, in exchange for taking him in as a pupil. Together, the two begin working their way up toward becoming true heroes, hoping to find strong enemies and earn respect in the process.  \n  \n\n\n\n---\n\n**Notes:**  \n- Because some groups use the web version of the manga while others use the magazine version, the numbering won't match between different languages.  \n- **Because a takedown notice was sent to MangaDex from the owners of this series, fan translations of One Punch Man are currently unavailable to be uploaded. The series can be read in its entirety at [the official Shonen Jump website,](https://www.viz.com/shonenjump/chapters/one-punch-man) with the first and latest three chapters available at any time and the rest accessible with a Shonen Jump membership (which costs about $2 a month and can be accessed via a VPN if you are outside the US).**"
    },
    "coverImage": "https://uploads.mangadex.org/covers/d8a959f7-648e-4c8d-8f23-f1f3f8e129f3/c46d56c9-f577-42cc-bc61-3fcbb19f8ab7.jpg.512.jpg",
    "author": "ONE",
    "year": 2012,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Sci-Fi",
      "Action",
      "Comedy"
    ],
    "rating": 8.8,
    "ratingCount": 37719
  },
  {
    "id": "eb2d1a45-d4e7-4e32-a171-b5b029c5b0cb",
    "slug": "kumo-desuga-nani-ka",
    "title": {
      "en": "Kumo desuga, Nani ka?",
      "fr": "Kumo desuga, Nani ka?"
    },
    "synopsis": {
      "en": "When a mysterious explosion killed an entire class full of high school students, the souls of everyone in class were transported into a fantasy world and reincarnated. While some students were reincarnated as princes or prodigies, others were not as blessed.  \nOur heroine, who was the lowest in the class, discovered that she was reincarnated as a spider! Now at the bottom of the food chain, she needs to adapt to the current situation with willpower in order to live. Stuck in a dangerous labyrinth filled with monsters, it's eat or be eaten!  \nThis is the story of a spider doing whatever she can in order to survive!",
      "fr": "When a mysterious explosion killed an entire class full of high school students, the souls of everyone in class were transported into a fantasy world and reincarnated. While some students were reincarnated as princes or prodigies, others were not as blessed.  \nOur heroine, who was the lowest in the class, discovered that she was reincarnated as a spider! Now at the bottom of the food chain, she needs to adapt to the current situation with willpower in order to live. Stuck in a dangerous labyrinth filled with monsters, it's eat or be eaten!  \nThis is the story of a spider doing whatever she can in order to survive!"
    },
    "coverImage": "https://uploads.mangadex.org/covers/eb2d1a45-d4e7-4e32-a171-b5b029c5b0cb/4ac61d4b-77d6-4946-b24f-0935eafa0305.jpg.512.jpg",
    "author": "Baba Okina",
    "year": 2015,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 8.2,
    "ratingCount": 57683
  },
  {
    "id": "7643e9f6-8455-4a58-b7e8-bf6cd00f5251",
    "slug": "tsuki-ga-michibiku-isekai-douchuu",
    "title": {
      "en": "Tsuki ga Michibiku Isekai Douchuu",
      "fr": "Tsuki ga Michibiku Isekai Douchuu"
    },
    "synopsis": {
      "en": "High school student Misumi Makoto is called into a fantasy world by the god Tsukuyomi, in order to be a hero. However, powerful others in this world aren't as thrilled to have him there, and they kick him to the edge of the world just as Tsukuyomi declares that he must leave Makoto to find his own way. Now it's up to Makoto to find his own way!\n___\n[Official English Light Novel](https://hanashi.media/tsukimichi-moonlit-fantasy/)",
      "fr": "Makoto Misumi, lycéen japonais de 17 ans de petite taille et vice président du club de kyūdō de son école, se fait envoyer soudainement dans un autre monde par le dieu Tsukuyomi, qui lui apprend que ses parents sont originaires de celui-ci et qu'ils ont conclu un pacte avec la déesse locale pour être envoyé au Japon.\n\nMais la dite déesse le trouve trop laid pour être un héros dans la guerre entre humains et démons qui déchire son monde et le lâche littéralement dans les confins de celui-ci avec seulement la capacité de comprendre les langues des êtres non-humains. Tsukuyomi intervient et lui donne une partie de sa force.\n\nMakoto rencontrera Ema une orc qui sera sa première amie et fera de Shin, une dragonne qui se métamorphosera en jolie femme, son premier serviteur. Celle-ci voit avec le pouvoir de Makoto un de ses pouvoirs devenir un \"autre espace\" qui accueillera au fil des rencontres dans ce monde de magie et d'épée de nombreuses personnes."
    },
    "coverImage": "https://uploads.mangadex.org/covers/7643e9f6-8455-4a58-b7e8-bf6cd00f5251/79b51099-ce55-4d19-b755-f94b93375696.jpg.512.jpg",
    "author": "Azumi Kei",
    "year": 2015,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 8.2,
    "ratingCount": 65628
  },
  {
    "id": "6670ee28-f26d-4b61-b49c-d71149cd5a6e",
    "slug": "mieruko-chan",
    "title": {
      "en": "Mieruko-chan",
      "fr": "Mieruko-chan"
    },
    "synopsis": {
      "en": "All of a sudden, Miko is able to see grotesque monsters all around her; but no one else can. Rather than trying to run away or face them, she instead musters all of her courage and... ignores them. Join in on her day-to-day life as she keeps up her best poker face despite the supernatural goings-on.\n___\n**Alt Official Raw:** [niconico Manga](http://manga.nicovideo.jp/comic/37662)",
      "fr": "**Officially Published:**  \n- In French by [Ototo Manga](http://www.ototo.fr/Serie-94-Mieruko-chanSliceofHorror)"
    },
    "coverImage": "https://uploads.mangadex.org/covers/6670ee28-f26d-4b61-b49c-d71149cd5a6e/13d41432-d7ec-41cd-a265-5af700989aa6.jpg.512.jpg",
    "author": "Izumi Tomoki",
    "year": 2018,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Psychological",
      "Comedy",
      "Drama"
    ],
    "rating": 8.4,
    "ratingCount": 56536
  },
  {
    "id": "c52b2ce3-7f95-469c-96b0-479524fb7a1a",
    "slug": "jujutsu-kaisen",
    "title": {
      "en": "Jujutsu Kaisen",
      "fr": "Jujutsu Kaisen"
    },
    "synopsis": {
      "en": "For some strange reason, Itadori Yuuji, despite his insane athleticism, would rather just hang out with the Occult Club. However, he soon finds out that the occult is as real as it gets when his fellow club members are attacked!\n\nMeanwhile, the mysterious Fushiguro Megumi is tracking down a special-grade cursed object, and his search leads him to Itadori…\n___\n**Official English Volumes:** [VIZ](https://www.viz.com/shonenjump/chapters/jujutsu-kaisen)",
      "fr": "Yuuji est un jeune étudiant qui excelle dans le sport, notamment dans l'athlétisme, mais qui a un immense poil dans la main. Du coup, au lieu de parfaire ses capacités physiques qui pourraient lui permettre de devenir le meilleur de l'établissement, il s'est inscrit au club de recherches occultes du lycée. Son petit train-train va changer du tout au tout lorsqu'un véritable esprit malfaiteur vient menacer son école…\n\n---\n\nMaison d'édition FR : **Ki-oon**"
    },
    "coverImage": "https://uploads.mangadex.org/covers/c52b2ce3-7f95-469c-96b0-479524fb7a1a/7dc752c3-8c90-468e-8c75-6903e38d7c7f.jpg.512.jpg",
    "author": "Akutami Gege",
    "year": 2018,
    "status": "Completed",
    "chapters": 271,
    "genres": [
      "Action",
      "Drama"
    ],
    "rating": 8.5,
    "ratingCount": 35783
  },
  {
    "id": "a1c7c817-4e59-43b7-9365-09675a149a6f",
    "slug": "one-piece",
    "title": {
      "en": "One Piece",
      "fr": "One Piece"
    },
    "synopsis": {
      "en": "Gol D. Roger, a man referred to as the \"Pirate King,\" is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the Pirate King is executed and the Great Age of Pirates begins.  \n  \nTwenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new Pirate King. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas.\n\n---\n\n**Note:**  \n**Because a takedown notice was sent to MangaDex from the owners of this series, English fan translations of One Piece are unable to be posted at this time. The series can be read in its entirety at [the official Shonen Jump website,](https://www.viz.com/shonenjump/chapters/one-piece) with the first and latest three chapters available at any time and the rest accessible with a Shonen Jump membership (which costs about $2 a month and can be accessed via a VPN if you are outside the US). The three most recent chapters can also be read on MangaPlus for free by clicking the chapter links below.**\n\n---\n- **The Best-Selling Manga in History**\n- **Won the 41st Japan Cartoonists Association Award Grand Prize alongside Neko Darake in 2012** \n- **Received the Kumamoto Prefecture Honorary Prize in 2018**",
      "fr": "Gol D. Roger, a man referred to as the \"Pirate King,\" is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the Pirate King is executed and the Great Age of Pirates begins.  \n  \nTwenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new Pirate King. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas.\n\n---\n\n**Note:**  \n**Because a takedown notice was sent to MangaDex from the owners of this series, English fan translations of One Piece are unable to be posted at this time. The series can be read in its entirety at [the official Shonen Jump website,](https://www.viz.com/shonenjump/chapters/one-piece) with the first and latest three chapters available at any time and the rest accessible with a Shonen Jump membership (which costs about $2 a month and can be accessed via a VPN if you are outside the US). The three most recent chapters can also be read on MangaPlus for free by clicking the chapter links below.**\n\n---\n- **The Best-Selling Manga in History**\n- **Won the 41st Japan Cartoonists Association Award Grand Prize alongside Neko Darake in 2012** \n- **Received the Kumamoto Prefecture Honorary Prize in 2018**"
    },
    "coverImage": "https://uploads.mangadex.org/covers/a1c7c817-4e59-43b7-9365-09675a149a6f/2f4aca53-64c7-46ac-ae85-3bc9b3169890.png.512.jpg",
    "author": "Oda Eiichirou",
    "year": 1997,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Sci-Fi",
      "Action",
      "Comedy"
    ],
    "rating": 9.5,
    "ratingCount": 93865
  },
  {
    "id": "9a414441-bbad-43f1-a3a7-dc262ca790a3",
    "slug": "jeonjijeok-dokja-sijeom",
    "title": {
      "en": "Jeonjijeok Dokja Sijeom",
      "fr": "Jeonjijeok Dokja Sijeom"
    },
    "synopsis": {
      "en": "Dokja was an average office worker whose sole interest was reading his favorite web novel 'Three Ways to Survive the Apocalypse.' But when the novel suddenly becomes reality, he is the only person who knows how the world will end. Armed with this realization, Dokja uses his understanding to change the course of the story, and the world, as he knows it.",
      "fr": "« Je suis le seul lecteur à connaître la fin du monde. » [Les trois façons de survivre dans un monde en ruine], ce roman fantastique de 3 149 chapitres, est devenu la réalité. Et il n'existe qu'une seule personne qui a lu l'intégralité de l'ouvrage.\r\n\r\n---\r\n- [Webtoon Trailer](https://www.youtube.com/watch?v=cB9fwJAnQFk) | [ENG](https://www.youtube.com/watch?v=8OHzcTtoLo4)\r\n---\r\n- [Original Book <Aladin>](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=258422833)\r\n- [Original Book <Yes24>](http://www.yes24.com/Product/Goods/96195415)\r\n>\r\n- [Taiwan Official Website](https://www.starwatcher.com.tw/edm/orv/)\r\n---\r\n- [Official Traditional Chinese Translation](https://www.webtoons.com/zh-hant/fantasy/duzhe/list?title_no=2089)\r\n\r\n- [Official Simplified Chinese Translation](https://www.podoteng.com/)\r\n\r\n- [Official Spanish <Es> Translation](https://www.webtoons.com/es/fantasy/omniscient-reader/list?title_no=2208)\r\n\r\n- [Official Indonesian Translation](https://www.webtoons.com/id/fantasy/omniscient-reader/list?title_no=2109)\r\n\r\n- [Official Japanese Translation](https://manga.line.me/product/periodic?id=Z0000822)\r\n\r\n- [Official German Translation](https://www.webtoons.com/de/fantasy/omniscient-reader/list?title_no=2582)\r\n\r\n- [Official French Translation](https://www.webtoons.com/fr/fantasy/omniscient-reader/list?title_no=2175)\r\n\r\n- [Official Thai Translation](https://www.webtoons.com/th/fantasy/omniscient-reader/list?title_no=2106)\r\n---\r\n- [Web Novel Trailer](https://www.youtube.com/watch?v=5hHGZKgzEXo)\r\n>\r\n- Original Web Novel <Naver> [Web](https://series.naver.com/novel/detail.series?productNo=3400123)/[Book](https://series.naver.com/novel/detail.series?productNo=6020546)\r\n- Original Web Novel <Munpia> [Web](https://novel.munpia.com/104753)/[Book](https://novel.munpia.com/256726)\r\n---\r\n- [3B2S Website](http://3b2s.co.kr/?page_id=1477)"
    },
    "coverImage": "https://uploads.mangadex.org/covers/9a414441-bbad-43f1-a3a7-dc262ca790a3/be18dc9a-7f1c-4ca5-b318-ffff2d7d58c3.jpg.512.jpg",
    "author": "sing N song (싱숑)",
    "year": 2020,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 9.6,
    "ratingCount": 91413
  }
];

export function getTrendingManga() {
   return mockMangaDB.slice(0, 10);
}

export function searchManga(query: string, locale: string = 'en') {
   return mockMangaDB.filter(m => {
     const t = m.title[locale] || m.title.en || '';
     return t.toLowerCase().includes(query.toLowerCase()) || m.author.toLowerCase().includes(query.toLowerCase());
   });
}

export function getMangaBySlug(slug: string) {
   return mockMangaDB.find(m => m.slug === slug);
}
