export type Manga = {
  id: string;
  slug: string;
  title: Record<string, string>;
  synopsis: Record<string, string>;
  coverImage: string;
  featuredImage: string;
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
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "h-goon (현군)",
    "year": 2018,
    "status": "Completed",
    "chapters": 200,
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 9.1,
    "ratingCount": 94583
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
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Sakano Anri",
    "year": 2018,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Isekai"
    ],
    "rating": 8.6,
    "ratingCount": 24249
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
    "featuredImage": "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=2070&auto=format&fit=crop",
    "author": "Fuse",
    "year": 2015,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Isekai"
    ],
    "rating": 9.9,
    "ratingCount": 52092
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
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Yamada Kanehito",
    "year": 2020,
    "status": "Hiatus",
    "chapters": 0,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 9.2,
    "ratingCount": 31772
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
    "featuredImage": "https://images.unsplash.com/photo-1554215161-0cc7b9cf2a5f?q=80&w=2070&auto=format&fit=crop",
    "author": "Fujimoto Tatsuki",
    "year": 2018,
    "status": "Completed",
    "chapters": 232,
    "genres": [
      "Action",
      "Comedy",
      "Horror"
    ],
    "rating": 9.3,
    "ratingCount": 91051
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
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "ONE",
    "year": 2012,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Sci-Fi",
      "Action",
      "Comedy"
    ],
    "rating": 9,
    "ratingCount": 48192
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
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Baba Okina",
    "year": 2015,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 8.3,
    "ratingCount": 41270
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
    "featuredImage": "https://images.unsplash.com/photo-1554215161-0cc7b9cf2a5f?q=80&w=2070&auto=format&fit=crop",
    "author": "Azumi Kei",
    "year": 2015,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 9.1,
    "ratingCount": 11470
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
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Izumi Tomoki",
    "year": 2018,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Psychological",
      "Comedy",
      "Drama"
    ],
    "rating": 9.9,
    "ratingCount": 99406
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
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Akutami Gege",
    "year": 2018,
    "status": "Completed",
    "chapters": 271,
    "genres": [
      "Action",
      "Drama"
    ],
    "rating": 9.6,
    "ratingCount": 42005
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
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Oda Eiichirou",
    "year": 1997,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Sci-Fi",
      "Action",
      "Comedy"
    ],
    "rating": 8.8,
    "ratingCount": 61262
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
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "sing N song (싱숑)",
    "year": 2020,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 9.3,
    "ratingCount": 95752
  },
  {
    "id": "6e156d65-cf65-4d5b-9d04-52f2f8100fbf",
    "slug": "isekai-mokushiroku-mynoghra-hametsu-no-bunmei-de-hajimeru-sekai-seifuku",
    "title": {
      "en": "Isekai Mokushiroku Mynoghra: Hametsu no Bunmei de Hajimeru Sekai Seifuku",
      "fr": "Isekai Mokushiroku Mynoghra: Hametsu no Bunmei de Hajimeru Sekai Seifuku"
    },
    "synopsis": {
      "en": "Bedridden and abandoned, Takuto Ira spent his days in the hospital trying to beat the illness that was slowly killing him. His only solace lay in the nation management strategy game Eternal Nations, where he had built a reputation as the greatest player to ever live. \n\nAfter succumbing to his disease, Takuto awoke within the game next to Atou — the Hero unit for his favorite civilization, Mynoghra. Now they’ll set out to conquer the world together (again), one unit, settlement, and level at a time!",
      "fr": "Bedridden and abandoned, Takuto Ira spent his days in the hospital trying to beat the illness that was slowly killing him. His only solace lay in the nation management strategy game Eternal Nations, where he had built a reputation as the greatest player to ever live. \n\nAfter succumbing to his disease, Takuto awoke within the game next to Atou — the Hero unit for his favorite civilization, Mynoghra. Now they’ll set out to conquer the world together (again), one unit, settlement, and level at a time!"
    },
    "coverImage": "https://uploads.mangadex.org/covers/6e156d65-cf65-4d5b-9d04-52f2f8100fbf/03ff0d8e-8c07-42f8-9db3-49ef13ebf352.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Kazuno Fefu",
    "year": 2020,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Comedy",
      "Adventure",
      "Isekai"
    ],
    "rating": 8.7,
    "ratingCount": 97365
  },
  {
    "id": "d90ea6cb-7bc3-4d80-8af0-28557e6c4e17",
    "slug": "delicious-in-dungeon",
    "title": {
      "en": "Delicious in Dungeon",
      "fr": "Delicious in Dungeon"
    },
    "synopsis": {
      "en": "After his sister is devoured by a dragon and losing all their supplies in a failed dungeon raid, Laios and his party are determined to save his sister before she gets digested. Completely broke and having to resort to eating monsters as food, they meet a dwarf who will introduce them to the world of Dungeon Meshi - delicious cuisine made from ingredients such as the flesh of giant bats, walking mushrooms, or even screaming mandrakes.  \n  \n---\n- **Ranked 1st in the 2016 Kono Manga ga Sugoi! for Male Readers (Shonen/Seinen)**",
      "fr": "After his sister is devoured by a dragon and losing all their supplies in a failed dungeon raid, Laios and his party are determined to save his sister before she gets digested. Completely broke and having to resort to eating monsters as food, they meet a dwarf who will introduce them to the world of Dungeon Meshi - delicious cuisine made from ingredients such as the flesh of giant bats, walking mushrooms, or even screaming mandrakes.  \n  \n---\n- **Ranked 1st in the 2016 Kono Manga ga Sugoi! for Male Readers (Shonen/Seinen)**"
    },
    "coverImage": "https://uploads.mangadex.org/covers/d90ea6cb-7bc3-4d80-8af0-28557e6c4e17/d3430039-ea47-48c3-9b8b-cf80200d7f0b.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Kui Ryouko",
    "year": 2014,
    "status": "Completed",
    "chapters": 97,
    "genres": [
      "Comedy",
      "Adventure",
      "Drama"
    ],
    "rating": 8.9,
    "ratingCount": 70936
  },
  {
    "id": "8352a9ca-22e0-4a1c-bf1f-89f23d95262a",
    "slug": "tondemo-skill-de-isekai-hourou-meshi",
    "title": {
      "en": "Tondemo Skill de Isekai Hourou Meshi",
      "fr": "Tondemo Skill de Isekai Hourou Meshi"
    },
    "synopsis": {
      "en": "Mukouda Tsuyoshi has been summoned from modern Japan to a different world of sword and magic. He eagerly thought of what kind of a huge adventure was waiting for him, but actually, Mukouda is just a civilian who got caught in a Hero Summoning. On top of that, Mukouda's base status is shabby compared to the legitimate heroes. Suspecting the king of foul play, as he's morbidly obese in a kingdom in crisis, apart from being war-happy, Mukouda decides to leave the castle by presenting his lack of martial prowess. The only thing that Mukouda can rely on in this world is his unique skill Net Supermarket, that can only order goods from modern Japan's internet to the new world.",
      "fr": "Mukouda Tsuyoshi has been summoned from modern Japan to a different world of sword and magic. He eagerly thought of what kind of a huge adventure was waiting for him, but actually, Mukouda is just a civilian who got caught in a Hero Summoning. On top of that, Mukouda's base status is shabby compared to the legitimate heroes. Suspecting the king of foul play, as he's morbidly obese in a kingdom in crisis, apart from being war-happy, Mukouda decides to leave the castle by presenting his lack of martial prowess. The only thing that Mukouda can rely on in this world is his unique skill Net Supermarket, that can only order goods from modern Japan's internet to the new world."
    },
    "coverImage": "https://uploads.mangadex.org/covers/8352a9ca-22e0-4a1c-bf1f-89f23d95262a/c8bd6e85-08b3-47fd-bce6-21e8e1ebc62c.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Eguchi Ren",
    "year": 2017,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 9.3,
    "ratingCount": 89334
  },
  {
    "id": "b5b21ca1-bba5-4b9a-8cd1-6248f731650b",
    "slug": "shuumatsu-no-valkyrie",
    "title": {
      "en": "Shuumatsu no Valkyrie",
      "fr": "Shuumatsu no Valkyrie"
    },
    "synopsis": {
      "en": "The story begins when the gods call a convention to decide whether to let humanity live or die, and settle on destroying humanity. But a lone Valkyrie puts forward a suggestion to let the gods and humanity fight one last battle, as a last hope for humanity's continued survival. 13 gods will fight against 13 human champions in one-on-one battles to decide whether humanity lives or dies.\n___\n**Alt Official English:** [Comikey](https://comikey.com/comics/record-of-ragnarok-manga/61/), [MangaHot](https://mangahot.jp/site/works/e_R0002)",
      "fr": "Tous les mille ans, l'ensemble des dieux, tous panthéons réunis, se réunissent au Valhalla, le paradis des âmes, lors d'une assemblée présidée par Zeus, le dieu suprême grec, afin de décider du sort des humains. Or, cette année-là, il est décidé à la quasi-unanimité de détruire l'humanité. Mais la Valkyrie Brunehilde interrompt la conférence et propose aux dieux de se mesurer aux mortels lors du tournoi de Ragnarök, pour déterminer s'ils valent vraiment la peine d'êtres anéantis. Ce tournoi opposera 13 dieux issus de diverses mythologies à 13 puissants humains qui ont fait l'histoire. Si l'humanité remporte au moins sept des 13 duels, alors les dieux épargneront l'humanité."
    },
    "coverImage": "https://uploads.mangadex.org/covers/b5b21ca1-bba5-4b9a-8cd1-6248f731650b/3ad40c78-6f46-4a43-86cd-c13a8c270ca3.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Umemura Shinya",
    "year": 2017,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 9.5,
    "ratingCount": 28196
  },
  {
    "id": "77fd8118-61b0-4b1f-95a6-2b839d754f81",
    "slug": "tensei-shitara-ken-deshita",
    "title": {
      "en": "Tensei Shitara Ken deshita",
      "fr": "Tensei Shitara Ken deshita"
    },
    "synopsis": {
      "en": "When he realized it, the protagonist was in another world and had become a sword that was stabbed on an altar in a great plain, crowded with devil beast. The world he was in had a game like system; HP, MP, Strength, Vitality, Agility, Intelligence, Dexterity, Titles and Equipment. Following his instinct as a living sword, he traveled to find the one who could be his wielder, until he met with a cat girl that was about to be attacked by a bear type devil beast.",
      "fr": "When he realized it, the protagonist was in another world and had become a sword that was stabbed on an altar in a great plain, crowded with devil beast. The world he was in had a game like system; HP, MP, Strength, Vitality, Agility, Intelligence, Dexterity, Titles and Equipment. Following his instinct as a living sword, he traveled to find the one who could be his wielder, until he met with a cat girl that was about to be attacked by a bear type devil beast."
    },
    "coverImage": "https://uploads.mangadex.org/covers/77fd8118-61b0-4b1f-95a6-2b839d754f81/6fa646ad-d971-4579-b1a3-ffa306955b86.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Tanaka Yuu",
    "year": 2016,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 8.3,
    "ratingCount": 65316
  },
  {
    "id": "68112dc1-2b80-4f20-beb8-2f2a8716a430",
    "slug": "dandadan",
    "title": {
      "en": "Dandadan",
      "fr": "Dandadan"
    },
    "synopsis": {
      "en": "After being aggressively rejected, Momo Ayase finds herself sulking when she stumbles across a boy being bullied. Saved by her rash kindness, the occult-obsessed boy attempts to speak to her about supernatural interests he believes they share. Rejecting his claims, Ayase proclaimed that she is instead a believer in ghosts, starting an argument between the two over which is real.\n\nIn a bet to determine who's correct, the two decide to separately visit locations associated with both the occult and the supernatural—Ayase visiting the former and the boy visiting the latter. When the two reach their respective places, it turns out that neither of them was wrong and that both the occult and ghosts do exist.\n\nThis marks the beginning of Ayase and the boy's adventure, who shares a name with Ayase's favorite idol—Ken Takakura, as they attempt to fix the surreal supernatural and sci-fi elements around them to return to a normal life.\n___\n**Official English Volumes:** [VIZ](https://www.viz.com/shonenjump/chapters/dandadan)",
      "fr": "Momo Ayase et Ken Takakura sont tous deux lycéens. Tandis que la première croit aux fantômes, le second est fasciné par les extraterrestres. Évidemment, chacun se moque des croyances de l’autre. Incapables de se convaincre, ils se lancent un défi pour savoir lequel des deux a raison. Momo se retrouve dans un hôpital où des créatures de l’espace sont censées se trouver et Ken dans un tunnel hanté. C’est le début d’une romance survoltée où l’occulte, le paranormal et le surnaturel se bousculent dans un chaos haletant !\r\n\r\n---\r\n\r\nMaison d'édition FR : **Kazé / Crunchyroll**"
    },
    "coverImage": "https://uploads.mangadex.org/covers/68112dc1-2b80-4f20-beb8-2f2a8716a430/666d57e6-0534-469c-ac1e-0876e80986c2.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1554215161-0cc7b9cf2a5f?q=80&w=2070&auto=format&fit=crop",
    "author": "Tatsu Yukinobu",
    "year": 2021,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Thriller",
      "Sci-Fi",
      "Action"
    ],
    "rating": 9.9,
    "ratingCount": 68153
  },
  {
    "id": "6a468761-5bd6-4de0-a0cb-47cb456ac2e0",
    "slug": "a-returner-s-magic-should-be-special",
    "title": {
      "en": "A Returner's Magic Should Be Special",
      "fr": "A Returner's Magic Should Be Special"
    },
    "synopsis": {
      "en": "\"Now that I'm back, I won't allow my loved ones to die again!\"  \r\n  \r\nThe Shadow Labyrinth - the deadliest catastrophe humanity has ever known.  \r\nDesir Arman, one of the six remaining survivors of mankind, is inside the Labyrinth. The six of them attempt to clear the final level of the Labyrinth but ultimately fail, and the world comes to an end.  \r\nHowever, when Desir thought he would meet his demise, what appears before him is the world… thirteen years ago?!  \r\n  \r\nDesir is returned to the past, back to the time when he enrolled at the nation's finest magic academy, Havrion. He is reunited with his precious friends, and he is determined to change the past to save the world and his loved ones…!  \r\n  \r\nThree years remain before the emergence of the Shadow World!  \r\nChange the past and gather powerful comrades to save mankind!\r\n\r\n---\r\n- [1st Trailer](https://www.youtube.com/watch?v=NS6o8phnUKo) | [ENG](https://www.youtube.com/watch?v=C8Z02WbpE8c) | [JP](https://www.youtube.com/watch?v=YdHjqPsN5gQ) | [Renewal](https://www.youtube.com/watch?v=C6GFn5z9ru0)\r\n- [2nd Trailer](https://www.youtube.com/watch?v=7m-7hsTzQb8)\r\n---\r\n- [Original Book <Yes24>](http://www.yes24.com/Product/Goods/96273480)\r\n- [Original Book <Aladin>](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=258728878)\r\n>\r\n- [Book <German Edition>](https://altraverse.de/manga/a-returner-s-magic-should-be-special/)\r\n- [Book <Japanese Edition>](https://www.kadokawa.co.jp/product/322104000234/)\r\n---\r\n- [Official Traditional Chinese Translation](https://tw.kakaowebtoon.com/content/%E9%87%8D%E7%94%9F%E8%80%85%E7%9A%84%E9%AD%94%E6%B3%95%E4%B8%80%E5%AE%9A%E8%A6%81%E7%89%B9%E5%88%A5/125)\r\n\r\n- [Official Simplified Chinese Translation](https://manga.bilibili.com/detail/mc27917)\r\n\r\n- [Official English <Tapas> Translation](https://tapas.io/series/a-returners-magic-should-be-special/info)\r\n\r\n- [Official Indonesian Translation](https://kakaopage.co.id/content/Returners-Special-Magic/3095)\r\n\r\n- [Official Vietnamese Translation](https://www.comico.vn/title/662)\r\n\r\n- [Official Japanese Translation](https://piccoma.com/web/product/8944)\r\n\r\n- [Official German Translation](https://www.tappytoon.com/de/comics/returners-magic-should-be-special-de)\r\n\r\n- [Official French Translation](https://www.tappytoon.com/fr/comics/returners-magic-should-be-special-fr)\r\n\r\n- [Official Thai Translation](https://th.kakaowebtoon.com/content/%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%A7%E0%B8%97%E0%B8%88%E0%B8%B8%E0%B8%95%E0%B8%B4%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/49)",
      "fr": "Le monde est au bord de la destruction après une guerre dévastatrice de dix ans dans le « Labyrinthe des ombres ». Desir Herrman est l'un des derniers magiciens restants, mais il n'est pas assez puissant pour combattre l'ennemi fatal qui menace l'Humanité. Alors qu'il est certain que la fin est proche, il est renvoyé dans le temps, à l'époque où il étudiait la magie à la prestigieuse Académie Hebrion ! Grâce à cette seconde chance, Desir est bien décidé à sauver non seulement sa peau, mais également celle de ses amis et camarades perdus. Sachant déjà ce que le futur leur réserve, ses efforts pourront-ils faire la différence, ou bien seront-ils tous condamnés à revivre le même destin tragique ? Adapté du roman phare.\r\n\r\n---\r\n- [1st Trailer](https://www.youtube.com/watch?v=NS6o8phnUKo) | [ENG](https://www.youtube.com/watch?v=C8Z02WbpE8c) | [JP](https://www.youtube.com/watch?v=YdHjqPsN5gQ) | [Renewal](https://www.youtube.com/watch?v=C6GFn5z9ru0)\r\n- [2nd Trailer](https://www.youtube.com/watch?v=7m-7hsTzQb8)\r\n---\r\n- [Original Book <Yes24>](http://www.yes24.com/Product/Goods/96273480)\r\n- [Original Book <Aladin>](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=258728878)\r\n>\r\n- [Book <German Edition>](https://altraverse.de/manga/a-returner-s-magic-should-be-special/)\r\n- [Book <Japanese Edition>](https://www.kadokawa.co.jp/product/322104000234/)\r\n---\r\n- [Official Traditional Chinese Translation](https://tw.kakaowebtoon.com/content/%E9%87%8D%E7%94%9F%E8%80%85%E7%9A%84%E9%AD%94%E6%B3%95%E4%B8%80%E5%AE%9A%E8%A6%81%E7%89%B9%E5%88%A5/125)\r\n\r\n- [Official Simplified Chinese Translation](https://manga.bilibili.com/detail/mc27917)\r\n\r\n- [Official English <Tapas> Translation](https://tapas.io/series/a-returners-magic-should-be-special/info)\r\n\r\n- [Official Indonesian Translation](https://kakaopage.co.id/content/Returners-Special-Magic/3095)\r\n\r\n- [Official Vietnamese Translation](https://www.comico.vn/title/662)\r\n\r\n- [Official Japanese Translation](https://piccoma.com/web/product/8944)\r\n\r\n- [Official German Translation](https://www.tappytoon.com/de/comics/returners-magic-should-be-special-de)\r\n\r\n- [Official French Translation](https://www.tappytoon.com/fr/comics/returners-magic-should-be-special-fr)\r\n\r\n- [Official Thai Translation](https://th.kakaowebtoon.com/content/%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%A7%E0%B8%97%E0%B8%88%E0%B8%B8%E0%B8%95%E0%B8%B4%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/49)"
    },
    "coverImage": "https://uploads.mangadex.org/covers/6a468761-5bd6-4de0-a0cb-47cb456ac2e0/98162533-1838-4639-8419-2f19f8af651b.png.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Usonan (유소난)",
    "year": 2018,
    "status": "Completed",
    "chapters": 268,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 9.3,
    "ratingCount": 59452
  },
  {
    "id": "89daf9dc-075a-4aa5-873a-cc76bb287108",
    "slug": "gokushufudou",
    "title": {
      "en": "Gokushufudou",
      "fr": "Gokushufudou"
    },
    "synopsis": {
      "en": "Immortal Tatsu is an ex-yakuza who’s given up violence for making an honest man of himself - but is it still possible for a devoted stay-at-home husband to get into a few scrapes?\n\n---\n- Won 3rd place of Tsugi Manga Awards, Category Webmanga (2018).  \n- Winner of the 2020 Eisner Award in the Best Humor Publication category.\n---\n### Links:\n- [English Edition on Amazon](https://www.amazon.com/dp/B07X1PGY7N)\n- [French Edition](https://www.kana.fr/produit/la-voie-du-tablier)\n- [Spanish Edition](https://www.editorialivrea.com/ESP/titulo/gokushufudo/)",
      "fr": "Immortal Tatsu is an ex-yakuza who’s given up violence for making an honest man of himself - but is it still possible for a devoted stay-at-home husband to get into a few scrapes?\n\n---\n- Won 3rd place of Tsugi Manga Awards, Category Webmanga (2018).  \n- Winner of the 2020 Eisner Award in the Best Humor Publication category.\n---\n### Links:\n- [English Edition on Amazon](https://www.amazon.com/dp/B07X1PGY7N)\n- [French Edition](https://www.kana.fr/produit/la-voie-du-tablier)\n- [Spanish Edition](https://www.editorialivrea.com/ESP/titulo/gokushufudo/)"
    },
    "coverImage": "https://uploads.mangadex.org/covers/89daf9dc-075a-4aa5-873a-cc76bb287108/17e3ce23-3d5f-4292-8391-e38db65b5aad.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=2070&auto=format&fit=crop",
    "author": "Oono Kousuke",
    "year": 2018,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Comedy",
      "Slice of Life"
    ],
    "rating": 9,
    "ratingCount": 13882
  },
  {
    "id": "4141c5dc-c525-4df5-afd7-cc7d192a832f",
    "slug": "blue-lock",
    "title": {
      "en": "Blue Lock",
      "fr": "Blue Lock"
    },
    "synopsis": {
      "en": "Yoichi Isagi lost the opportunity to go to the national high school championships because he passed to his teammate who missed instead of shooting himself. Isagi is one of 300 U-18 strikers chosen by Jinpachi Ego, a man who was hired by the Japan Football Association after the 2018 FIFA World Cup, to guide Japan to winning the World Cup by destroying Japanese football. Ego's plan is to isolate the 300 strikers into a prison-like institution called \"Blue Lock\", in order to create the world's biggest \"egotist\"/striker, which has been lacking in Japanese football.\n___\n**Notes:**\n- **Won the 45th Kodansha Manga Award for Shonen in 2021**\n\n**Links:**\n- Alternative Official English - [K Manga](https://kmanga.kodansha.com/title/10008/episode/318774) (U.S. Only), [Kodansha](https://kodansha.us/series/blue-lock/)",
      "fr": "Isagi Yoichi a perdu l'opportunité d'aller aux championnats nationaux des lycées parce qu'il a passé la balle à son coéquipier qui a raté son but. Isagi est l'un des 300 attaquants U-18 choisis par Ego Jinpachi, un homme qui a été embauché par la Fédération Japonaise de Football après la Coupe du Monde de la FIFA 2018, pour guider le Japon vers la victoire de la Coupe du Monde en détruisant le football japonais. Le plan d'Ego est d'isoler les 300 attaquants dans une institution semblable à une prison appelée \"Blue Lock\", afin de créer le plus grand \"égoïste\"/attaquant du monde, ce qui fait défaut dans le football japonais.\n\n---\n\nMaison d'édition FR : **Pika**"
    },
    "coverImage": "https://uploads.mangadex.org/covers/4141c5dc-c525-4df5-afd7-cc7d192a832f/edbe6d3b-fdd1-4fc8-adc0-9ea56610c73c.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Kaneshiro Muneyuki",
    "year": 2018,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Thriller",
      "Psychological",
      "Sports"
    ],
    "rating": 9.5,
    "ratingCount": 28401
  },
  {
    "id": "10e98722-874d-48b2-a715-90bb8af93598",
    "slug": "yondome-wa-iya-na-shizokusei-majutsushi",
    "title": {
      "en": "Yondome wa Iya na Shizokusei Majutsushi",
      "fr": "Yondome wa Iya na Shizokusei Majutsushi"
    },
    "synopsis": {
      "en": "A tragedy wipes out Hiroto Amamiya's whole class. A god suddenly appears and says he will give all of them special protection and skills before reincarnating them in a new world. But when the god makes a mistake, Hiroto goes into his new life without anything at all.\n___\n**Character Designer:** [Ban!](https://mangadex.org/author/ecb0d0e9-d2ac-44fd-b40c-52ee54a2c336)",
      "fr": "A tragedy wipes out Hiroto Amamiya's whole class. A god suddenly appears and says he will give all of them special protection and skills before reincarnating them in a new world. But when the god makes a mistake, Hiroto goes into his new life without anything at all.\n___\n**Character Designer:** [Ban!](https://mangadex.org/author/ecb0d0e9-d2ac-44fd-b40c-52ee54a2c336)"
    },
    "coverImage": "https://uploads.mangadex.org/covers/10e98722-874d-48b2-a715-90bb8af93598/4eb81b52-f142-41d8-b428-7a6c0d41a1f7.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Densuke (デンスケ)",
    "year": 2018,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 9,
    "ratingCount": 33671
  },
  {
    "id": "6e44705b-9f80-42f6-9ebb-1141fbe8320e",
    "slug": "nozomanu-fushi-no-boukensha",
    "title": {
      "en": "Nozomanu Fushi no Boukensha",
      "fr": "Nozomanu Fushi no Boukensha"
    },
    "synopsis": {
      "en": "It's been ten years since Rentt Faina, a down-on-his luck Bronze-class adventurer, set his eyes on becoming Mithril-class. Unfortunately, Rentt finds himself helpless when confronted by a legendary Dragon in the Labyrinth of the Moon's Reflection... and is summarily eaten. But Rentt has miraculously reawakened... as a skeleton?",
      "fr": "It's been ten years since Rentt Faina, a down-on-his luck Bronze-class adventurer, set his eyes on becoming Mithril-class. Unfortunately, Rentt finds himself helpless when confronted by a legendary Dragon in the Labyrinth of the Moon's Reflection... and is summarily eaten. But Rentt has miraculously reawakened... as a skeleton?"
    },
    "coverImage": "https://uploads.mangadex.org/covers/6e44705b-9f80-42f6-9ebb-1141fbe8320e/9f512348-6d98-4cc0-acbd-8dc834f96828.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Okano Yuu",
    "year": 2017,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 9.4,
    "ratingCount": 91391
  },
  {
    "id": "c466ced0-ec48-47c1-a8cf-d5ff1fe9d0d2",
    "slug": "shokei-sareta-kenja-wa-lich-ni-tensei-shite-shinryaku-sensou-o-hajimeru",
    "title": {
      "en": "Shokei Sareta Kenja wa Lich ni Tensei Shite Shinryaku-sensou o Hajimeru",
      "fr": "Shokei Sareta Kenja wa Lich ni Tensei Shite Shinryaku-sensou o Hajimeru"
    },
    "synopsis": {
      "en": "The Sage Dwight, along with the Hero, defeated the Demon Lord who sank the world into darkness. However, they were falsely accused of becoming the next Demon Lords because of his power, and were thrown to The Valley of the Dead to die... But though his flesh has rotten away, he lives on as a skeleton because of his grudge against the world. Dwight has vowed to deny that wrong world, and with a power that surpasses even the Demon King of the past, and also leading countless Skeletons he's going to start an all out war...!",
      "fr": "The Sage Dwight, along with the Hero, defeated the Demon Lord who sank the world into darkness. However, they were falsely accused of becoming the next Demon Lords because of his power, and were thrown to The Valley of the Dead to die... But though his flesh has rotten away, he lives on as a skeleton because of his grudge against the world. Dwight has vowed to deny that wrong world, and with a power that surpasses even the Demon King of the past, and also leading countless Skeletons he's going to start an all out war...!"
    },
    "coverImage": "https://uploads.mangadex.org/covers/c466ced0-ec48-47c1-a8cf-d5ff1fe9d0d2/42a41363-7167-46c8-9974-6578f5769893.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Yuuki Karaku",
    "year": 2020,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 9.4,
    "ratingCount": 73132
  },
  {
    "id": "fef2e4da-36f9-48e9-8317-2516f4b6ab14",
    "slug": "tensei-kizoku-kantei-skill-de-nariagaru-jakushou-ryouchi-wo-uketsuida-node-yuushuu-na-jinzai-wo-fuyashiteitara-saikyou-ryouchi-ni-natteta",
    "title": {
      "en": "Tensei Kizoku, Kantei Skill de Nariagaru ~Jakushou Ryouchi wo Uketsuida node, Yuushuu na Jinzai wo Fuyashiteitara, Saikyou Ryouchi ni Natteta~",
      "fr": "Tensei Kizoku, Kantei Skill de Nariagaru ~Jakushou Ryouchi wo Uketsuida node, Yuushuu na Jinzai wo Fuyashiteitara, Saikyou Ryouchi ni Natteta~"
    },
    "synopsis": {
      "en": "After being reincarnated, Ars Louvent is supposed to live in a different world as a weak aristocrat. Both his physical strength and intelligence were mediocre in both worlds, but here he naturally possessed a skill called \"Appraisal\" that allowed him to see the potential of any person. By gathering talented people by his side, Ars uses this \"Appraisal\" skill to transform his weak territory into the strongest one! But the road ahead of him won't be so simple.",
      "fr": "After being reincarnated, Ars Louvent is supposed to live in a different world as a weak aristocrat. Both his physical strength and intelligence were mediocre in both worlds, but here he naturally possessed a skill called \"Appraisal\" that allowed him to see the potential of any person. By gathering talented people by his side, Ars uses this \"Appraisal\" skill to transform his weak territory into the strongest one! But the road ahead of him won't be so simple."
    },
    "coverImage": "https://uploads.mangadex.org/covers/fef2e4da-36f9-48e9-8317-2516f4b6ab14/bda9dfe2-afa4-4d45-9d80-5f4d0f1833e3.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=2070&auto=format&fit=crop",
    "author": "Miraijin A",
    "year": 2020,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 8.3,
    "ratingCount": 57481
  },
  {
    "id": "5d1fc77e-706a-4fc5-bea8-486c9be0145d",
    "slug": "vinland-saga",
    "title": {
      "en": "Vinland Saga",
      "fr": "Vinland Saga"
    },
    "synopsis": {
      "en": "As a child, Thorfinn sat at the feet of the great Leif Ericson and thrilled to wild tales of a land far to the west. But his youthful fantasies were shattered by a mercenary raid. Raised by the Vikings who murdered his family, Thorfinn became a terrifying warrior, forever seeking to kill the band's leader, Askeladd, and avenge his father. Sustaining Thorfinn through his ordeal are his pride in his family and his dreams of a fertile westward land, a land without war or slavery... the land Leif called Vinland.\n___\n- **Won the Japan Media Arts Award Division Grand Prize in 2009**\n- **Won the 36th Kodansha Manga Award for General Manga in 2012**",
      "fr": "As a child, Thorfinn sat at the feet of the great Leif Ericson and thrilled to wild tales of a land far to the west. But his youthful fantasies were shattered by a mercenary raid. Raised by the Vikings who murdered his family, Thorfinn became a terrifying warrior, forever seeking to kill the band's leader, Askeladd, and avenge his father. Sustaining Thorfinn through his ordeal are his pride in his family and his dreams of a fertile westward land, a land without war or slavery... the land Leif called Vinland.\n___\n- **Won the Japan Media Arts Award Division Grand Prize in 2009**\n- **Won the 36th Kodansha Manga Award for General Manga in 2012**"
    },
    "coverImage": "https://uploads.mangadex.org/covers/5d1fc77e-706a-4fc5-bea8-486c9be0145d/7fa60f5d-285a-40c5-8a1d-9cf375eaf897.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Yukimura Makoto",
    "year": 2005,
    "status": "Completed",
    "chapters": 220,
    "genres": [
      "Historical",
      "Action",
      "Adventure"
    ],
    "rating": 8.3,
    "ratingCount": 73563
  },
  {
    "id": "fa197a3e-6dd6-470d-91e4-c0130a1392d3",
    "slug": "tensei-shitara-dragon-no-tamago-datta-ibara-no-dragon-road",
    "title": {
      "en": "Tensei Shitara Dragon no Tamago datta: Ibara no Dragon Road",
      "fr": "Tensei Shitara Dragon no Tamago datta: Ibara no Dragon Road"
    },
    "synopsis": {
      "en": "**A fantasy isekai adventure about a man who has to restart life…as an egg?!**\n\nIn a world full of dangerous monsters, our unnamed protagonist finds himself reborn at the very bottom of the food chain as an immobile, powerless egg. Even just hatching will require leveling up by fighting monsters–the same monsters who’d love to eat him as a snack. But with the help of the mysterious voice in his head, he’s determined to grow into the most powerful creature in the world!\n\n*Source: Seven Seas Entertainment*\n\n**Note:** When the manga initially began, it used the light novel's “Saikyou Igai Mezasa nee” subtitle, but by the time of Volume 1, it used its own “Ibara no Dragon Road” subtitle.\n___\n**Character Designer:** [NAJI Yanagida](https://mangadex.org/author/741e1007-4b08-4ce7-981c-b72ba391936e)",
      "fr": "**A fantasy isekai adventure about a man who has to restart life…as an egg?!**\n\nIn a world full of dangerous monsters, our unnamed protagonist finds himself reborn at the very bottom of the food chain as an immobile, powerless egg. Even just hatching will require leveling up by fighting monsters–the same monsters who’d love to eat him as a snack. But with the help of the mysterious voice in his head, he’s determined to grow into the most powerful creature in the world!\n\n*Source: Seven Seas Entertainment*\n\n**Note:** When the manga initially began, it used the light novel's “Saikyou Igai Mezasa nee” subtitle, but by the time of Volume 1, it used its own “Ibara no Dragon Road” subtitle.\n___\n**Character Designer:** [NAJI Yanagida](https://mangadex.org/author/741e1007-4b08-4ce7-981c-b72ba391936e)"
    },
    "coverImage": "https://uploads.mangadex.org/covers/fa197a3e-6dd6-470d-91e4-c0130a1392d3/c2f12477-2941-4cca-9d67-212781ae0922.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1554215161-0cc7b9cf2a5f?q=80&w=2070&auto=format&fit=crop",
    "author": "Necoco",
    "year": 2017,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 9.5,
    "ratingCount": 41575
  },
  {
    "id": "1f40b922-6abb-418e-a7e9-cc4d25b21439",
    "slug": "saihate-no-paladin",
    "title": {
      "en": "Saihate no Paladin",
      "fr": "Saihate no Paladin"
    },
    "synopsis": {
      "en": "A man dies alone after living a stagnant and fruitless life — but that's not where his story ends, as a boy named William is born into a land of fantasy and magic.\n\nRaised in a city of the dead by his new family — a mummy, a skeleton, and a ghost — he can remember glimpses of his past life, enough to know his time on Earth was wasted, and he vows not to let that happen again. Schooled in magic and combat, Will sets out on a journey to see the world. Along the way, he'll meet beings of all shapes and sizes. Each of these people has a story to tell and a lesson to teach Will about how to live his life to the fullest.\n___\n**Character Designer:** [Rin Kususaga](https://mangadex.org/author/32478bd0-f73b-4572-b8f6-f0cf5fa6a825)",
      "fr": "A man dies alone after living a stagnant and fruitless life — but that's not where his story ends, as a boy named William is born into a land of fantasy and magic.\n\nRaised in a city of the dead by his new family — a mummy, a skeleton, and a ghost — he can remember glimpses of his past life, enough to know his time on Earth was wasted, and he vows not to let that happen again. Schooled in magic and combat, Will sets out on a journey to see the world. Along the way, he'll meet beings of all shapes and sizes. Each of these people has a story to tell and a lesson to teach Will about how to live his life to the fullest.\n___\n**Character Designer:** [Rin Kususaga](https://mangadex.org/author/32478bd0-f73b-4572-b8f6-f0cf5fa6a825)"
    },
    "coverImage": "https://uploads.mangadex.org/covers/1f40b922-6abb-418e-a7e9-cc4d25b21439/cd6a4c6f-f79b-40b8-a418-9af17864a82d.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=2070&auto=format&fit=crop",
    "author": "Yanagino Kanata",
    "year": 2017,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Adventure",
      "Isekai"
    ],
    "rating": 8,
    "ratingCount": 85449
  },
  {
    "id": "dc332d04-d3b0-413c-a767-70f5e451b031",
    "slug": "kuro-no-shoukanshi",
    "title": {
      "en": "Kuro no Shoukanshi",
      "fr": "Kuro no Shoukanshi"
    },
    "synopsis": {
      "en": "\"If you truly want to get stronger, you have to challenge and defeat those stronger than yourself.\"\n\nWhile being transmigrated to another world, Kelvin bartered away his memories for a collection of powerful new abilities. Setting out on the ultimate adventure as the world’s strongest Summoner — with his first Follower being the very goddess who brought him over! — he soon discovers his true nature as a battle junkie. Someone wants to pick a fight? Sure, bring it on!\n\nFacing off against one formidable foe after another, Kelvin can hardly contain his delight as he revels in the absolute exhilaration of a good fight! The curtain rises on the start of an epic saga as this black-clad warrior and his allies carve their way into the annals of history! \n___\n**Character Designer:** [Kurogin (DIGS)](https://mangadex.org/author/ad469135-32c7-4fcc-b490-d0ebc07eea16)\n\n**Additional Links:**  \n- [Official Raw Web Novel](https://ncode.syosetu.com/n1222ci/)\n- [Official English Light Novel](https://j-novel.club/series/black-summoner)",
      "fr": "\"If you truly want to get stronger, you have to challenge and defeat those stronger than yourself.\"\n\nWhile being transmigrated to another world, Kelvin bartered away his memories for a collection of powerful new abilities. Setting out on the ultimate adventure as the world’s strongest Summoner — with his first Follower being the very goddess who brought him over! — he soon discovers his true nature as a battle junkie. Someone wants to pick a fight? Sure, bring it on!\n\nFacing off against one formidable foe after another, Kelvin can hardly contain his delight as he revels in the absolute exhilaration of a good fight! The curtain rises on the start of an epic saga as this black-clad warrior and his allies carve their way into the annals of history! \n___\n**Character Designer:** [Kurogin (DIGS)](https://mangadex.org/author/ad469135-32c7-4fcc-b490-d0ebc07eea16)\n\n**Additional Links:**  \n- [Official Raw Web Novel](https://ncode.syosetu.com/n1222ci/)\n- [Official English Light Novel](https://j-novel.club/series/black-summoner)"
    },
    "coverImage": "https://uploads.mangadex.org/covers/dc332d04-d3b0-413c-a767-70f5e451b031/93a7ac29-7d1a-45d6-8806-c69750715248.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Mayoi Tofu",
    "year": 2018,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Adventure",
      "Isekai"
    ],
    "rating": 8.4,
    "ratingCount": 89087
  },
  {
    "id": "f81026af-1b41-465c-932b-291ce4760c00",
    "slug": "tensei-kenja-no-isekai-life-dai-ni-no-shokugyou-wo-ete-sekai-saikyou-ni-narimashita",
    "title": {
      "en": "Tensei Kenja no Isekai Life ~Dai ni no Shokugyou wo Ete, Sekai Saikyou ni Narimashita~",
      "fr": "Tensei Kenja no Isekai Life ~Dai ni no Shokugyou wo Ete, Sekai Saikyou ni Narimashita~"
    },
    "synopsis": {
      "en": "Sano Yuji, a black company employee, is summoned to another world while finishing his work at home. His profession in the other world, a Monster Tamer, is considered a job that makes it difficult to become an adventurer. However, thanks to some slimes he met, which read several magical books, he gained magical powers and the second profession, Sage. Yuji acquired overwhelming power, but is he conscious of his strength? Blindly becoming unparalleled and strongest in the world!",
      "fr": "Yuji Sano, employé d'une \"entreprise noire\", est invoqué vers un autre alors qu'il était en train de travailler chez lui.\nDans ce nouveau monde, il obtient la profession de \"dresseur\" de monstre, une profession qui rend le travail d'aventurier difficile. Cependant, grâce aux nombreux Slimes qu'il a dressés, il obtient une seconde profession, celle de \"Sage\", après qu'ils aient lu de nombreux livres magiques pour lui.  \nYuji a alors acquis un immense pouvoir dont il ne semble pas être conscient. Insoucieusement, il est en voie de devenir le plus puissant être de ce monde!"
    },
    "coverImage": "https://uploads.mangadex.org/covers/f81026af-1b41-465c-932b-291ce4760c00/39a3adc3-4d93-4b4c-8459-6238ac9e2b5f.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Shinkou Shotou",
    "year": 2018,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 9,
    "ratingCount": 43318
  },
  {
    "id": "304ceac3-8cdb-4fe7-acf7-2b6ff7a60613",
    "slug": "attack-on-titan",
    "title": {
      "en": "Attack on Titan",
      "fr": "Attack on Titan"
    },
    "synopsis": {
      "en": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for pleasure rather than as a food source.\nA small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of Titans. Flash forward to the present and the southern district of Shinganshina has not seen a Titan in over 100 years.\n\nTeenage boy Eren and his foster sister Mikasa witness something horrific as one of the outer district walls is damaged by a 60 meter (196.85 feet) Titan causing a breach in the wall. As the smaller Titans flood the city, the two kids watch in horror the tragic events that follow, as the Titans devour people unimpeded.\n\nEren vows that he will wipe out every single Titan and take revenge for all of mankind.\n\n---\n- **Won the Kodansha Manga Award for Shonen in 2011**\n- **Won the Noma Publishing Culture Award in 2021**\n\n**Links:**\n- Alternative Official English - [Kodansha US](https://kodansha.us/series/attack-on-titan/), [Azuki](https://www.azuki.co/series/attack-on-titan), [Manga Planet](https://mangaplanet.com/comic/618e30af823f4), [MangaPlaza](https://mangaplaza.com/title/0303001570/?content_id=103030015700001), [Coolmic](https://coolmic.me/titles/524), [K MANGA](https://kmanga.kodansha.com/title/10136/episode/312468) (U.S. Only)",
      "fr": "Eren est un petit garçon rêvant de voyager dans le monde extérieur. Mais cela est impossible car il vit dans une ville fortifiée aux murailles dépassant les cinquante mètres de haut. Ces remparts sont nécessaires à la sécurité des habitants car ils sont les derniers représentants de l'humanité, obligés de se cacher pour échapper aux titans qui ont massacré la majeure partie du genre humain un siècle plus tôt. Eren est têtu: il ne se doute pas de la violence des combats qui ont opposé les hommes aux titans. Il décide de poster sa candidature pour devenir éclaireur, car il s'agit des seuls soldats autorisés à sortir de la ville pour en savoir plus sur les titans. Mais un beau jour, un géant parvient à détruire le mur qui protégeait la ville et ouvre la voie à plusieurs dizaines de ses congénères! Eren assiste impuissant à la mort atroce de sa mère qui finit dévorée. Alors qu'il fuit avec d'autres survivants, il se jure de se venger et de détruire la race des titans jusqu'à ce qu'il n'en reste plus un seul!!"
    },
    "coverImage": "https://uploads.mangadex.org/covers/304ceac3-8cdb-4fe7-acf7-2b6ff7a60613/29f82b1d-b37f-455a-b630-e42bccb1422a.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1607604276583-e1ef390978ce?q=80&w=2070&auto=format&fit=crop",
    "author": "Isayama Hajime",
    "year": 2009,
    "status": "Completed",
    "chapters": 139,
    "genres": [
      "Thriller",
      "Action",
      "Drama"
    ],
    "rating": 8.6,
    "ratingCount": 14466
  },
  {
    "id": "4f3bcae4-2d96-4c9d-932c-90181d9c873e",
    "slug": "boku-no-hero-academia",
    "title": {
      "en": "Boku no Hero Academia",
      "fr": "Boku no Hero Academia"
    },
    "synopsis": {
      "en": "One day, a four-year-old boy came to a sudden realization: the world is not fair. Eighty percent of the world's population wield special abilities, known as \"quirks,\" which have given many the power to make their childhood dreams of becoming a superhero a reality. Unfortunately, Izuku Midoriya was one of the few born without a quirk, suffering from discrimination because of it. Yet, he refuses to give up on his dream of becoming a hero; determined to do the impossible, Izuku sets his sights on the elite hero training academy, UA High.  \n  \nHowever, everything changes after a chance meeting with the number one hero and Izuku's idol, All Might. Discovering that his dream is not a dead end, the powerless boy undergoes special training, working harder than ever before. Eventually, this leads to him inheriting All Might's power, and with his newfound abilities, gets into his school of choice, beginning his grueling journey to become the successor of the best hero on the planet.\n___\n**Note: Because a takedown notice was sent to MangaDex from the owners of this series, fan translations of My Hero Academia are currently unavailable to be uploaded. The series can be read in its entirety at [the official Shonen Jump website](https://www.viz.com/shonenjump/chapters/my-hero-academia), with the first and latest three chapters available at any time and the rest accessible with a Shonen Jump membership (which costs about $2 a month and can be accessed via a VPN if you are outside the US). The three most recent chapters can also be read on MANGA Plus for free at the link below.**",
      "fr": "Dans un monde où 80 % de la population possède un super-pouvoir appelé alter, les héros font partie de la vie quotidienne. Et les super-vilains aussi ! Face à eux se dresse l’invincible All Might, le plus puissant des héros ! Le jeune Izuku Midoriya en est un fan absolu. Il n’a qu’un rêve : entrer à la Hero Academia pour suivre les traces de son idole.\nLe problème, c’est qu’il fait partie des 20 % qui n’ont aucun pouvoir…\n\nSon destin est bouleversé le jour où sa route croise celle d’All Might en personne ! Ce dernier lui offre une chance inespérée de voir son rêve se réaliser. Pour Izuku, le parcours du combattant ne fait que commencer !\n\n---\n\nMaison d'édition FR : **Ki-oon**"
    },
    "coverImage": "https://uploads.mangadex.org/covers/4f3bcae4-2d96-4c9d-932c-90181d9c873e/c7a7101a-8e22-442b-a1db-55ba9ef5b1ab.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Horikoshi Kouhei",
    "year": 2014,
    "status": "Completed",
    "chapters": 431,
    "genres": [
      "Sci-Fi",
      "Action",
      "Superhero"
    ],
    "rating": 9.6,
    "ratingCount": 35989
  },
  {
    "id": "879af0bb-ce30-47e4-a74e-cd1ce874c6e3",
    "slug": "isekai-nonbiri-nouka",
    "title": {
      "en": "Isekai Nonbiri Nouka",
      "fr": "Isekai Nonbiri Nouka"
    },
    "synopsis": {
      "en": "Having died of sickness at the age of 39, Machio Hiraku is given the opportunity to go to another world. When asked what his wish is by God intending to give him strength, he requests to have a healthy body, offered a second wish, he chooses to live peacefully, a third wish to be able to know the local language, and for a final wish, to be able to be a farmer.",
      "fr": "Après être mort de maladie à l'âge de 39 ans, Machio Hiraku se voit offrir la possibilité d'aller dans un autre monde. Lorsque Dieu lui demande quel est son souhait afin de lui donner plus de force, il réclame un corps en bonne santé. Pour son deuxième souhait, il choisit de vivre paisiblement, pour son troisième, de pouvoir connaître la langue locale, et pour son dernier souhait, de pouvoir devenir agriculteur."
    },
    "coverImage": "https://uploads.mangadex.org/covers/879af0bb-ce30-47e4-a74e-cd1ce874c6e3/c596ddc7-f1bb-469b-8c78-bec5d71d0346.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2070&auto=format&fit=crop",
    "author": "Naitou Kinosuke",
    "year": 2017,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Comedy",
      "Adventure",
      "Isekai"
    ],
    "rating": 8.6,
    "ratingCount": 81568
  },
  {
    "id": "4ada20eb-085a-491a-8c49-477ab42014d7",
    "slug": "the-beginning-after-the-end",
    "title": {
      "en": "The Beginning After the End",
      "fr": "The Beginning After the End"
    },
    "synopsis": {
      "en": "King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous exterior of a powerful king lurks the shell of man, devoid of purpose and will.\n\nReincarnated into a new world filled with magic and monsters, the king has a second chance to relive his life. Correcting the mistakes of his past will not be his only challenge, however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy everything he has worked for, questioning his role and reason for being born again.\n\n---\n\n**Original Webcomic:**  \n- [Digital](https://tapas.io/series/tbate-comic/info)\n- [Volumes](https://yenpress.com/series/the-beginning-after-the-end-comic)\n\n**Official Translations:**  \n- [Japanese](https://jp.piccoma.com/web/product/19682)\n- [Spanish](https://tapas.io/series/el-comienzo-despues-del-fin/info)\n- [T.Chinese](https://tw.kakaowebtoon.com/content/%E7%B5%82%E6%9C%AB%E8%B5%B7%E9%BB%9E/575)\n- [French](https://www.delitoon.com/detail/daf_0000303)  \n- **Korean**: \n  - [Daum](https://webtoon.kakao.com/content/%EB%81%9D%EC%9D%B4-%EC%95%84%EB%8B%8C-%EC%8B%9C%EC%9E%91/3162)\n  - [KakaoPage](https://page.kakao.com/content/53142176)  \n- **Thai**:   \n  - [Kakao Webtoon](https://th.kakaowebtoon.com/content/The_Beginning_After_The_End/468)\n  - [Lezhin](https://www.lezhinth.com/titles/1171)      \n- **S.Chinese**: \n  - [KuaiKan](https://www.kuaikanmanhua.com/web/topic/6884/)\n  - [AC.QQ](https://ac.qq.com/Comic/comicInfo/id/656549)\n  - [BiliBili](https://manga.bilibili.com/detail/mc37565)",
      "fr": "Le Roi Grey a une force, une richesse et un prestige inégalés dans un monde gouverné par l'aptitude martiale. Cependant, la solitude s'approche de près derrière ceux ayant de grands pouvoirs. Sous l'apparence glamour d'un Roi puissant se cache la carapace de l'homme, dépourvue de volonté et de but.\n\nRéincarné dans un nouveau monde rempli de monstres et de magie, le Roi a une seconde chance de revivre sa vie. Cependant, corriger les erreurs de sa précédente vie ne sera pas sa seule tâche. Sous la paix et la prospérité de ce nouveau monde se cache une menace sous-jacente remettant en question tout ce pour quoi il a travaillé, son rôle, et sa raison de renaître."
    },
    "coverImage": "https://uploads.mangadex.org/covers/4ada20eb-085a-491a-8c49-477ab42014d7/e12dda4b-3f8b-4df4-94de-56278ff83b97.jpg.512.jpg",
    "featuredImage": "https://images.unsplash.com/photo-1554215161-0cc7b9cf2a5f?q=80&w=2070&auto=format&fit=crop",
    "author": "TurtleMe",
    "year": 2018,
    "status": "Ongoing",
    "chapters": 0,
    "genres": [
      "Action",
      "Adventure",
      "Isekai"
    ],
    "rating": 9.6,
    "ratingCount": 14067
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
