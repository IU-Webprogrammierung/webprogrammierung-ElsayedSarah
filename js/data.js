/* Data structure for shelf items (books) */
const books = [
    {   
        id:"nolongerhuman",

        title: "No Longer Human",
        category: "novel",
        author: "Dazai Osamu",

        genre: [
            "dark",
            "psychological"
        ],

        cover: "assets/covers/nolongerhuman.webp",
        spine: "#DC477B",

        comment: "Add comment here"
    },
    {
        id:"howlsmovingcastle",
        
        title: "Howl's Moving Castle",
        category: "novel",
        author: "Diana Wynne Jones",

        genre: [
            "fantasy",
            "romance"
        ],

        cover: "assets/covers/howlsmovingcastle.webp",
        spine: "#72ACAE",

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

        cover: "assets/covers/lapvona.webp",
        spine: "#141213",
        
        comment: "Add comment here"
    },
    {
        id:"thesaltgrowsheavy",
        
        title: "The Salt Grows Heavy",
        category: "novel",
        author: "Cassandra Khaw",

        genre: [
            "dark",
            "fantasy"
        ],
        
        cover: "assets/covers/thesaltgrowsheavy.webp",
        spine: "#BC1714",

        comment: "Add comment here"
    },
    {
        id:"heavenofficialsblessing",
        
        title: "Heaven Official's Blessing",
        category: "novel",
        author: "Moxiangtongxiu",

        genre: [
            "fantasy",
            "romance"
        ],
        
        cover: "assets/covers/heavenofficalsblessing.webp",
        spine: "#2B4844",

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
        
        cover: "assets/covers/butter.webp",
        spine: "#FFCA0A",

        comment: "Add comment here"
    },
    {
        id:"thesecrethistory",
        
        title: "The Secret History",
        category: "novel",
        author: "Donna Tartt",

        genre: [
            "dark",
            "psychological",
            "mystery"
        ],
        
        cover: "assets/covers/thesecrethistory.webp",
        spine: "#F3F2ED",

        comment: "Add comment here"
    },
       {
        id:"jibakushounenhanakokun",
        
        title: "Jibaku Shounen Hanako-kun",
        category: "manga",
        author: "AidaIro",

        genre: [
            "supernatural",
            "mystery",
            "romance"
        ],
        
        cover: "assets/covers/tbhk.webp",
        spine: "#F8984E",

        comment: "Add comment here"
    },
    {
        id:"bungostraydogs",
        
        title: "Bungo Stray Dogs",
        category: "manga",
        author: "Kafka Asagiri",

        genre: [
            "supernatural",
            "mystery",
            "action"
        ],
        
        cover: "assets/covers/bungostraydogs.webp",
        spine: "#4D4C5C",

        comment: "Add comment here"
    },
    {
        id:"bungostraydogsbeast",
        
        title: "Bungo Stray Dogs: Beast",
        category: "manga",
        author: "Kafka Asagiri",

        genre: [
            "supernatural",
            "psychological",
            "dark"
        ],
        
        cover: "assets/covers/bungostraydogsbeast.webp",
        spine: "#4086C4",

        comment: "Add comment here"
    },
    {
        id:"blackbutler",
        
        title: "Black Butler",
        category: "manga",
        author: "Yana Toboso",

        genre: [
            "dark",
            "mystery",
            "supernatural"
        ],
        
        cover: "assets/covers/blackbutler.webp",
        spine: "#0000",

        comment: "Add comment here"
    },
    {
        id:"onepiece",
        
        title: "One Piece",
        category: "manga",
        author: "Eiichirō Oda",

        genre: [
            "fantasy",
            "adventure",
            "action"
        ],
        
        cover: "assets/covers/onepiece.webp",
        spine: "#293991",

        comment: "Add comment here"
    },
    {
        id:"deathnote",
        
        title: "Death Note",
        category: "manga",
        author: "Tsugumi Ōba",

        genre: [
            "dark",
            "mystery",
            "psychological",
            "supernatural"
        ],
        
        cover: "assets/covers/deathnote.webp",
        spine: "#0000",

        comment: "Add comment here"
    },
    {
        id:"ohshc",
        
        title: "Ouran Highschool Host Club",
        category: "manga",
        author: "Bisco Hatori",

        genre: [
            "romance",
            "slice of life"
        ],

        cover: "assets/covers/ohshc.webp",
        spine: "#FBDED6",

        comment: "Add comment here"
    }

];

const games = [
    {
        id:"cultofthelamb",
        
        title: "Cult of the Lamb",
        developer: "Massive Monster",

        genre: [
            "rpg",
            "fantasy",
            "dark"
        ],

        cover: "assets/covers/cultofthelamb.webp",
        spine: "#3B3058",

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

        cover: "assets/covers/omori.webp",
        spine: "#FFFF",

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

        cover: "assets/covers/undertale.webp",
        spine: "#0000",
        
        comment: "Add comment here"
    },
    {
        id:"persona5r",
        
        title: "Persona 5 Royal",
        developer: "Atlus",

        genre: [
            "rpg",
            "mystery",
            "story-driven"
        ],
        
        cover: "assets/covers/persona5.webp",
        spine: "#0A0002",

        comment: "Add comment here"
    },
    {
        id:"stardewvalley",
        
        title: "Stardew Valley",
        developer: "ConcernedApe",

        genre: [
            "simulation",
            "adventure",
            "romance"
        ],
        
        cover: "assets/covers/stardewvalley.webp",
        spine: "#034283",

        comment: "Add comment here"
    },
    {
        id:"sims3",
        
        title: "Sims 3",
        developer: "Maxis Studio",

        genre: [
            "simulation",
            "romance"
        ],
        
        cover: "assets/covers/sims3.webp",
        spine: "#FFFF",

        comment: "Add comment here"
    },
    {
        id:"tlozbotw",
        
        title: "The Legend of Zelda: Breath of the Wild",
        developer: "Nintendo",

        genre: [
            "adventure",
            "fantasy",
            "action"
        ],
        
        cover: "assets/covers/tlozb.webp",
        spine: "#415E7E",

        comment: "Add comment here"
    }

];