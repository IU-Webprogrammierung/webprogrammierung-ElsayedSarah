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

        /* External media page (used by the detail view) */
        externalLink: { 
            url: "https://www.goodreads.com/book/show/194746.No_Longer_Human",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum. 
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
        
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`
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

         externalLink: {
            url: "https://www.goodreads.com/book/show/6294.Howl_s_Moving_Castle",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: "Add comment here"
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
        
         externalLink: {
            url: "https://www.goodreads.com/book/show/59693959-lapvona",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://www.goodreads.com/book/show/61884779-the-salt-grows-heavy",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://www.goodreads.com/book/show/53153332-heaven-s-official-blessing",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://www.goodreads.com/book/show/200776812-butter",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://www.goodreads.com/book/show/29044.The_Secret_History",
            color: "#e9e3d7",
            textColor: "#000000",
            icon: "assets/icons/goodreads_icon.webp",
            label: "Goodreads"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://myanimelist.net/manga/105084/Jibaku_Shounen_Hanako-kun",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://myanimelist.net/manga/56529/Bungou_Stray_Dogs",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://myanimelist.net/manga/123006/Bungou_Stray_Dogs__Beast",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://myanimelist.net/manga/3866/Kuroshitsuji",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://myanimelist.net/manga/13/One_Piece",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://myanimelist.net/manga/21/Death_Note",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },


        comment: "Add comment here"
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

        externalLink: {
            url: "https://myanimelist.net/manga/30/Ouran_Koukou_Host_Club",
            color: "#2e51a3",
            textColor: "#ffffff",
            icon: "assets/icons/myanimelist_icon.webp",
            label: "MyAnimeList"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://store.steampowered.com/app/1313140/Cult_of_the_Lamb",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://store.steampowered.com/app/1150690/OMORI",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://store.steampowered.com/app/391540/Undertale",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },
        
        comment: "Add comment here"
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

        externalLink: {
            url: "https://store.steampowered.com/app/1687950/Persona_5_Royal",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://store.steampowered.com/app/413150/Stardew_Valley",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://store.steampowered.com/app/47890/The_Sims_3",
            color: "#041533",
            textColor: "#ffffff",
            icon: "assets/icons/steam_icon.webp",
            label: "Steam"
        },

        comment: "Add comment here"
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

        externalLink: {
            url: "https://www.nintendo.com/de-de/Spiele/Nintendo-Switch-Spiele/The-Legend-of-Zelda-Breath-of-the-Wild-1173609.html",
            color: "#e60012",
            textColor: "#ffffff",
            icon: "assets/icons/nintendoswitch_icon.webp",
            label: "Nintendo"
        },

        comment: "Add comment here"
    }

];