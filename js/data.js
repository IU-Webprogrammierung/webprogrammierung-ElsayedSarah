/* Data structure for shelf items (books) */
const books = [
    {   
        id:"no-longer-human",

        title: "No Longer Human",
        category: "novel",
        author: "Dazai Osamu",

        genre: [
            "dark",
            "psychological"
        ],

        cover: "assets/covers/nolongerhuman.avif",
        spine: "#DC477B",
        ticketColor: "#e085a6",

        /* External media page (used by the detail view) */
        externalLink: { 
            url: "https://www.goodreads.com/book/show/194746.No_Longer_Human",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: `This is a short book that can easily be read in a day, but its impact lasts far longer.

        The story follows the main character through different stages of his life, presented through diary-like entries that give insight into his thoughts and struggles What stood out to me most is the contrast between how the main character sees himself and how others perceive him. His own view of himself is deeply negative, and the story explores the painful gap between feeling disconnected from humanity and still wanting to be understood.

        Even though I read this book quite some time ago, it is still one of those stories that stays in my mind. The final lines especially left a lasting impression and captured the feeling of the entire story in a way that I still remember.`
    },
    {
        id:"howls-moving-castle",
        
        title: "Howl's Moving Castle",
        category: "novel",
        author: "Diana Wynne Jones",

        genre: [
            "fantasy",
            "romance"
        ],

        cover: "assets/covers/howlsmovingcastle.avif",
        spine: "#72ACAE",
        ticketColor: "#a4c2c3",

         externalLink: {
            url: "https://www.goodreads.com/book/show/6294.Howl_s_Moving_Castle",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: `The Ghibli adaptation is still one of my favourite Studio Ghibli films, which made me curious about the original book it was based on.

        The story is quite different from the movie, but in a way that makes both versions feel special. While the film has a more whimsical and romantic atmosphere, the book focuses more on the characters personalities and their often chaotic interactions.

        Sophie and Howl’s relationship is especially interesting because it develops much more slowly. At the beginning, they mostly argue and constantly get on each other’s nerves, but their dynamic feels surprisingly natural and funny. Their relationship grows through these small moments rather than through typical romantic scenes, which made it very enjoyable to follow.

        Even with the differences between the two versions, both capture the same sense of magic and charm that makes the story so memorable.`
    },
    {
        id:"lapvona",
        
        title: "Lapvona",
        category: "novel",
        author: "Ottessa Moshfegh",

        genre: [
            "dark",
            "psychological"
        ],

        cover: "assets/covers/lapvona.avif",
        spine: "#141213",
        ticketColor: "#bdc7d4",
        
         externalLink: {
            url: "https://www.goodreads.com/book/show/59693959-lapvona",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: `I’m usually not very affected by darker themes, but this was one of the few books that genuinely made me uncomfortable while reading it.

        What makes Lapvona so memorable is how it slowly reveals more and more of its disturbing world. What initially feels like a strange rural setting becomes increasingly grotesque, with scenes that are difficult to forget. The story never feels like it is using its darker elements just for shock value.

        The combination of brutality, strange humor, and almost fairy-tale-like elements creates a very unique reading experience. It is both fascinating and unpleasant at the same time, making it hard to stop reading even when some moments feel genuinely disturbing.

        It’s one of those books that I struggled with while reading, but the fact that it affected me so strongly is also the reason it became one of my favourites.`
    },
    {
        id:"the-salt-grows-heavy",
        
        title: "The Salt Grows Heavy",
        category: "novel",
        author: "Cassandra Khaw",

        genre: [
            "dark",
            "fantasy"
        ],
        
        cover: "assets/covers/thesaltgrowsheavy.avif",
        spine: "#BC1714",
        ticketColor: "#d6b6b6",

        externalLink: {
            url: "https://www.goodreads.com/book/show/61884779-the-salt-grows-heavy",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: `This is a story that is much more about its atmosphere and imagery than a traditional narrative. While reading it, every scene felt almost like a painting, combining beautiful fairy-tale elements with disturbing and violent imagery.

        The contrast between the grotesque and the whimsical is what makes this story so memorable. It manages to be both unsettling and strangely beautiful at the same time, creating a very unique reading experience.

        I especially enjoyed the creative interpretation of mermaids. Instead of portraying them as purely magical or enchanting creatures, the story gives them a much darker and more unsettling presence, which fits perfectly with its overall tone.`
    },
    {
        id:"heaven-officials-blessing",
        
        title: "Heaven Official's Blessing",
        category: "novel",
        author: "Moxiangtongxiu",

        genre: [
            "fantasy",
            "romance"
        ],
        
        cover: "assets/covers/heavenofficialsblessing.avif",
        spine: "#2B4844",
        ticketColor: "#a0b2b1",

        externalLink: {
            url: "https://www.goodreads.com/book/show/53153332-heaven-s-official-blessing",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: `A surprisingly fluffy series with a slow-burn romance that stays subtle for a long time, but still feels genuinely sweet and rewarding to follow.

        The story takes place in a world inspired by ancient China, with gods, ghosts, and a rich mythology that gives the series a much larger scope beyond the romance. What I enjoy most is how it combines interesting mysteries and cases with a lot of humor. Despite the serious themes, the characters often bring a lot of comedy through their personalities, interactions, and sarcastic remarks.

        The writing style also makes the story feel very approachable. Even with its complex world and many Chinese names that can sometimes be difficult to remember, it never feels too heavy to read.

        The novel also includes beautiful illustrations, which add another layer of charm to the experience.`
    },
    {
        id:"butter",
        
        title: "Butter",
        category: "novel",
        author: "Asako Yuzuki",

        genre: [
            "psychological",
            "mystery"
        ],
        
        cover: "assets/covers/butter.avif",
        spine: "#FFCA0A",
        ticketColor: "#ddcfb5",

        externalLink: {
            url: "https://www.goodreads.com/book/show/200776812-butter",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: `This is probably not a book for everyone. It is a very slow-paced story that focuses more on characters and themes than on a fast-moving plot.

        The initial hook was what caught my attention: a journalist investigating a woman connected to a series of murders. However, the story quickly becomes less about the crime itself and more about exploring loneliness, relationships, social expectations and the role food plays in people’s lives.

        One of my favorite parts was how cooking and recipes were woven into the story. The descriptions of food created a very specific atmosphere and made the reading experience feel different from other books I’ve read.

        While the pacing can be slow at times, I found the character interactions and the themes interesting enough to keep me invested. It is not a thriller but more of a character-focused story about people and their desires.`
    },
    {
        id:"the-secret-history",
        
        title: "The Secret History",
        category: "novel",
        author: "Donna Tartt",

        genre: [
            "dark",
            "psychological",
            "mystery"
        ],
        
        cover: "assets/covers/thesecrethistory.avif",
        spine: "#F3F2ED",
        ticketColor: "#d5cfc3",

        externalLink: {
            url: "https://www.goodreads.com/book/show/29044.The_Secret_History",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: `One of those books that appears on almost every recommendation list and for good reason.

        The beginning is slow, focusing on the protagonist becoming part of a very closed-off group of students. While the pacing might not be for everyone, I enjoyed getting to know the characters and their strange little world before the story starts to shift.

        The characters are definitely pretentious and obsessed with their own image, but I never found that annoying. Instead, it became one of the most interesting parts of the book. Their fascination with beauty, knowledge, and classical studies creates a very unique atmosphere.

        After the story reaches its major turning point, the focus becomes much more psychological, exploring guilt, paranoia, and the consequences of the characters choices.

        It’s been a while since I read it, but the atmosphere and the feeling it left behind are still very memorable.`
    },
       {
        id:"jibaku-shounen-hanako-kun",
        
        title: "Jibaku Shounen Hanako-kun",
        category: "manga",
        author: "AidaIro",

        genre: [
            "supernatural",
            "mystery",
            "romance"
        ],
        
        cover: "assets/covers/jibakushounenhanakokun.avif",
        spine: "#F8984E",
        ticketColor: "#efb1bb",

        externalLink: {
            url: "https://myanimelist.net/manga/105084/Jibaku_Shounen_Hanako-kun",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: `This is another manga that first caught my attention because of its art style, but kept me invested because of its characters and story.

        The art style is definitely one of its biggest strengths. The unique character designs, expressive faces, and soft but colorful visuals create a very distinct atmosphere that makes the manga instantly recognizable.

        The romance is slow-burn and subtle, with the main focus being the school mysteries and the relationships between the characters. What I enjoy most is how well the manga balances different tones. It can be incredibly cute and funny one moment, then suddenly shift into much darker and more emotional territory.

        The story arcs often explore surprisingly deep themes, and the contrast between the lighthearted moments and heavier scenes is what makes the manga so memorable to me.`
    },
    {
        id:"bungo-stray-dogs",
        
        title: "Bungo Stray Dogs",
        category: "manga",
        author: "Kafka Asagiri",

        genre: [
            "supernatural",
            "mystery",
            "action"
        ],
        
        cover: "assets/covers/bungostraydogs.avif",
        spine: "#4D4C5C",
        ticketColor: "#d2cece",

        externalLink: {
            url: "https://myanimelist.net/manga/56529/Bungou_Stray_Dogs",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: `What makes this series stand out to me is its unique concept. The characters are based on real-life authors, while their abilities are inspired by the authors literary works. The story starts with a stronger focus on Japanese writers before gradually introducing more international authors as well.

        One of my favorite parts is recognizing familiar names as they appear, whether it’s Edgar Allan Poe, Fyodor Dostoevsky, or someone I’ve only vaguely heard of before. It turns every new character into a little surprise and makes me curious about the inspiration behind them.

        I also love that the literary references don’t just feel like a gimmick. They actually encouraged me to look up some of the original authors and read about their books to better understand the abilities and references hidden throughout the series.`
    },
    {
        id:"bungo-stray-dogs-beast",
        
        title: "Bungo Stray Dogs: Beast",
        category: "manga",
        author: "Kafka Asagiri",

        genre: [
            "supernatural",
            "psychological",
            "dark"
        ],
        
        cover: "assets/covers/bungostraydogsbeast.avif",
        spine: "#4086C4",
        ticketColor: "#bed6e2",

        externalLink: {
            url: "https://myanimelist.net/manga/123006/Bungou_Stray_Dogs__Beast",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: `Even though I already included Bungo Stray Dogs in my list, I felt Beast deserved its own entry. It takes familiar characters and puts them into a completely different scenario, allowing you to see sides of them that the original story doesn’t always focus on.

        One of the things I enjoyed most was the different atmosphere. The art style, created by another artist, feels more detailed and expressive, which fits perfectly with the darker tone of this version. Many moments feel heavier because the characters are placed into situations that highlight their struggles and emotions in a different way.

        What makes Beast special to me is that it doesn’t just feel like a simple alternate universe story. It offers a new perspective on characters I already knew and made me appreciate certain aspects of them even more. It’s a shorter story, but it leaves a strong impression.`
    },
    {
        id:"black-butler",
        
        title: "Black Butler",
        category: "manga",
        author: "Yana Toboso",

        genre: [
            "dark",
            "mystery",
            "supernatural"
        ],
        
        cover: "assets/covers/blackbutler.avif",
        spine: "#0000",
        ticketColor: "#cdd0d2",

        externalLink: {
            url: "https://myanimelist.net/manga/3866/Kuroshitsuji",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: `This has only recently become one of my favourites. I first watched and read parts of it back in 7th grade, and while I already enjoyed it back then, the newer story arcs completely changed my perspective on the series.

        What I love about Black Butler is how much stronger the overall story feels when looking back at earlier chapters. Certain reveals recontextualize many previous events and make you realize that there was much more planned beneath the surface than it initially seemed. It was one of those moments where many things suddenly clicked for me and made the story much more interesting.

        Beyond the plot, the atmosphere is one of its biggest strengths. The Victorian setting, the beautiful artwork, and the supernatural elements create a unique combination of mystery, elegance and darker themes.

        Even though the manga is still ongoing, it has become a series I’m always excited to return to.`
    },
    {
        id:"one-piece",
        
        title: "One Piece",
        category: "manga",
        author: "Eiichirō Oda",

        genre: [
            "fantasy",
            "adventure",
            "action"
        ],
        
        cover: "assets/covers/onepiece.avif",
        spine: "#293991",
        ticketColor: "#a4bed4",

        externalLink: {
            url: "https://myanimelist.net/manga/13/One_Piece",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: `I’m currently around the middle of the series, at the Dressrosa arc. One Piece is a very long journey, but that is also part of its charm. It’s the kind of series that works perfectly as a casual watch or read, something I can come back to and simply enjoy spending time with.

        For me, what makes One Piece special are the characters. Getting to know them, seeing their experiences, and following their journeys over such a long period of time creates a strong attachment. I also enjoy how each arc builds upon the previous ones, introducing new characters and places that slowly become part of the bigger adventure.

        It’s not a series I approach by analyzing every detail. Instead, it feels more like a comfort series with many memorable and emotional moments that make the long journey worth experiencing.`
    },
    {
        id:"death-note",
        
        title: "Death Note",
        category: "manga",
        author: "Tsugumi Ōba",

        genre: [
            "dark",
            "mystery",
            "psychological",
            "supernatural"
        ],
        
        cover: "assets/covers/deathnote.avif",
        spine: "#0000",
        ticketColor: "#cdd0d2",

        externalLink: {
            url: "https://myanimelist.net/manga/21/Death_Note",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },


        comment: `A classic for a reason and one of the most engaging cat-and-mouse games between two characters.

        What I enjoy most is how Death Note combines supernatural elements with a grounded and strategic narrative. Even though the story involves Shinigami and a supernatural notebook, the rules are clearly established and consistently followed. This makes the characters plans, deductions, and attempts to find loopholes feel clever rather than unrealistic or convenient.

        The constant battle of strategy between the characters is what keeps the story engaging. Both sides have to work with limited information and carefully consider how their actions might be interpreted, making even smaller decisions feel important.

        I also really like the series interpretation of Shinigami. They are not simply portrayed as traditional gods of death, but as strange and distinctive beings that fit naturally into the world.

        Even years later, it remains one of the first manga I would recommend.`
    },
    {
        id:"ouran-highschool-host-club",
        
        title: "Ouran Highschool Host Club",
        category: "manga",
        author: "Bisco Hatori",

        genre: [
            "romance",
            "slice of life"
        ],

        cover: "assets/covers/ouranhighschoolhostclub.avif",
        spine: "#FBDED6",
        ticketColor: "#e4cbc3",

        externalLink: {
            url: "https://myanimelist.net/manga/30/Ouran_Koukou_Host_Club",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: `One of my favorite shoujo manga of all time. It was also my first one, so I’m definitely biased, but I still think it deserves that special place.

        What I love most about Ouran is the balance between comedy and romance. The humor is what makes the series so memorable, but it also knows when to slow down and give its characters more depth.

        Every member of the Host Club has their own charm, even though I wouldn’t personally consider all of them traditional love interests. They each bring something different to the story and make the group dynamic one of the strongest parts of the manga.

        Especially in the second half, the character development becomes one of the highlights. Seeing the characters grow and getting such a satisfying ending made the series feel complete and is one of the reasons I still remember it so fondly.`
    }

];

const games = [
    {
        id:"cult-of-the-lamb",
        
        title: "Cult of the Lamb",
        developer: "Massive Monster",

        genre: [
            "rpg",
            "fantasy",
            "dark"
        ],

        cover: "assets/covers/cultofthelamb.avif",
        spine: "#3B3058",
        ticketColor: "#b0a5cb",

        externalLink: {
            url: "https://store.steampowered.com/app/1313140/Cult_of_the_Lamb",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },

        comment: `A very enjoyable game overall. While I do enjoy combat-focused games, I found the mechanics in Cult of the Lamb more challenging than I initially expected. However, learning the mechanics and improving over time made the combat feel rewarding and added to the fun of playing.

        One of the biggest strengths is its unique mix of cute and dark elements. From the art style and color palette to the sound design and story, the game creates a very distinct atmosphere that is both charming and unsettling at the same time.

        I also enjoyed the balance between managing the cult and going on combat runs, since both sides of the gameplay complement each other well.

        The multiplayer mode added another layer of fun, even though the shared-screen format could sometimes feel inconvenient during certain interactions. The combat still felt smooth and enjoyable when playing together.`
    },
    {
        id:"omori",
        
        title: "Omori",
        developer: "OMOCAT",

        genre: [
            "rpg",
            "dark",
            "story-driven"
        ],

        cover: "assets/covers/omori.avif",
        spine: "#FFFF",
        ticketColor: "#cdd0d2",

        externalLink: {
            url: "https://store.steampowered.com/app/1150690/OMORI",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },

        comment: `At first glance, OMORI looks like a cute and colorful game with a charming dream world, but it quickly becomes clear that there is much more beneath the surface.

        One of my favorite aspects is how well the game builds its dream world. The bright visuals, fun characters, and amazing soundtrack create a comforting atmosphere, which makes the moments when reality breaks through feel even more unsettling. Some parts genuinely managed to create a feeling of unease because the game constantly challenges what you think you understand.

        The storytelling is definitely the biggest strength, with major reveals changing the way you look at earlier events. The combat system is also surprisingly enjoyable and fits well alongside the story.

        The multiple endings make replaying the game rewarding, since different routes reveal more about the characters and their experiences.`
    },
    {
        id:"undertale",
        
        title: "Undertale",
        developer: "Toby Fox",

        genre: [
            "rpg",
            "story-driven",
            "fantasy"
        ],

        cover: "assets/covers/undertale.avif",
        spine: "#0000",
        ticketColor: "#bebfc0",

        externalLink: {
            url: "https://store.steampowered.com/app/391540/Undertale",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },
        
        comment: `It’s been years since I last played it, but the characters and their personalities are still incredibly memorable.

        What makes Undertale special to me is how much thought is put into player choices. Even small decisions can have consequences, with hidden interactions and details that make the world feel reactive. The game constantly encourages you to think about your actions rather than simply moving forward.

        The balance between comedy, emotional moments, and darker themes is also one of its biggest strengths. The characters make the experience memorable because even simple encounters feel personal and unique.

        The combat system adds to this by making each encounter feel different, often reflecting the personality of the character you are facing.

        With its different routes and endings, Undertale is a game that rewards replaying and exploring different choices, which makes it easy to understand why it has stayed so beloved for so many years.`
    },
    {
        id:"persona-5-royal",
        
        title: "Persona 5 Royal",
        developer: "Atlus",

        genre: [
            "rpg",
            "mystery",
            "story-driven"
        ],
        
        cover: "assets/covers/persona5.avif",
        spine: "#0A0002",
        ticketColor: "#ded7d7",

        externalLink: {
            url: "https://store.steampowered.com/app/1687950/Persona_5_Royal",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },

        comment: `My first Persona game, and one that immediately made me interested in exploring the rest of the series.

        What stood out to me the most is how unique the entire game feels. From the stylish UI, fixed camera angles, and animated story sequences to the overall presentation, every part of the design feels carefully created and gives the game its own identity. The soundtrack is also a huge highlight and adds a lot to the atmosphere.

        The storytelling is another strength, with the game switching between different points in time and slowly revealing more context. Combined with the long runtime of over 100 hours, it feels less like just a game and more like a journey you spend a lot of time with.`

    },
    {
        id:"stardew-valley",
        
        title: "Stardew Valley",
        developer: "ConcernedApe",

        genre: [
            "simulation",
            "adventure",
            "romance"
        ],
        
        cover: "assets/covers/stardewvalley.avif",
        spine: "#034283",
        ticketColor: "#b1d4c7",

        externalLink: {
            url: "https://store.steampowered.com/app/413150/Stardew_Valley",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },

        comment: `I usually don’t enjoy farming games, but Stardew Valley is one of the few exceptions. It feels like much more than just a farming simulator, combining farming with RPG elements, exploration, combat and relationship-building mechanics.

        For me, the NPCs are one of the strongest parts of the game. Each character has their own personality, and discovering their stories through heart events makes the world feel much more alive. The small daily interactions are what make the game feel personal rather than just being about managing a farm.

        Playing in multiplayer adds another layer of enjoyment, especially when building up the farm together and sharing progress with others.

        Another big strength is the modding community. The amount of creativity from players keeps the game fresh even after many hours, adding new content, improvements and completely new ways to experience the game.`
    },
    {
        id:"the-sims-3",
        
        title: "The Sims 3",
        developer: "Maxis Studio",

        genre: [
            "simulation",
            "romance"
        ],
        
        cover: "assets/covers/thesims3.avif",
        spine: "#FFFF",
        ticketColor: "#bddec7",

        externalLink: {
            url: "https://store.steampowered.com/app/47890/The_Sims_3",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },

        comment: `One of my first PC games and still one of my all-time favourites. Even though the graphics have aged, it still has a charm that newer simulation games haven’t fully replaced for me.

        What makes The Sims 3 so special is the amount of freedom it gives the player. The open worlds, countless customization options, and different lifestyles allow every save file to feel like its own little story. Whether creating ordinary families, exploring supernatural elements, or simply spending hours building houses, the game always gives you something to do.

        The expansions also added a lot of variety over time, introducing new mechanics and worlds that made the experience feel fresh again and again.

        I have also spent countless hours just in build mode without even starting a proper save. The Sims 3 is one of those games where creating your own stories is the main appeal, and that is what keeps me coming back to it.`
    },
    {
        id:"the-legend-of-zelda-breath-of-the-wild",
        
        title: "The Legend of Zelda: Breath of the Wild",
        developer: "Nintendo",

        genre: [
            "adventure",
            "fantasy",
            "action"
        ],
        
        cover: "assets/covers/thelegendofzeldabreathofthewild.avif",
        spine: "#415E7E",
        ticketColor: "#d1d7de",

        externalLink: {
            url: "https://www.nintendo.com/de-de/Spiele/Nintendo-Switch-Spiele/The-Legend-of-Zelda-Breath-of-the-Wild-1173609.html",
            color: "#e60012",
            textColor: "#ffffff",
            icon: "assets/icons/nintendoswitch_icon.webp",
            label: "Nintendo"
        },

        comment: `My first Zelda game that I actually played myself. I was already somewhat familiar with the series through Let’s Plays but experiencing the world on my own made it feel completely different.

        One of my favorite parts was discovering the different characters, locations, and details throughout the journey. Whenever something caught my interest, looking into the lore and background only made me appreciate the world even more. It also made me want to explore more of the Zelda series in the future.

        The combination of combat and puzzle-solving was another highlight for me. The puzzles never felt too simple and solving them through experimentation made exploration feel rewarding.

        The art style also adds a lot to the experience. Its unique visual direction creates a beautiful atmosphere that makes the world feel peaceful, mysterious, and memorable.

        Breath of the Wild was a great introduction to the series and definitely made me curious about playing more Zelda games.`
    }
];