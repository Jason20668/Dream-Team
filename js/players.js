const players = [
    {
        firstName: 'Abel',
        Nationality: 'French',
        Style: 'Mixed Martial Arts',
        Appearance: 'Street Fighter 4',
        Photo: '/imgs/Abel.jpg'
    },
    {
        firstName: 'Abigail',
        Nationality: 'Canadian',
        Style: 'Brute Strength',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Abigail.jpg'
    },
    {
        firstName: 'Adon',
        Nationality: 'Thai',
        Style: 'Muay Thai',
        Appearance: 'Street Fighter 1, Alpha, & 4',
        Photo: '/imgs/Adon.jpg'
    },
    {
        firstName: 'Akira',
        Nationality: 'Japanese',
        Style: 'Bajiquan',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Akira.jpg'
    },
    {
        firstName: 'Akuma',
        Nationality: 'Japanese',
        Style: 'Ansatsuken Karate',
        Appearance: 'Street Fighter Super 2, Alpha, 3, 4, 5, & 6',
        Photo: '/imgs/Akuma.jpg'
    },
    {
        firstName: 'Aki',
        Nationality: 'Chinese',
        Style: 'Fanged Snake & Poison Hand Kung Fu',
        Appearance: 'Street Fighter 6',
        Photo: '/imgs/AKI.jpg'
    },
    {
        firstName: 'Alex',
        Nationality: 'American',
        Style: 'Wrestling & Kickboxing',
        Appearance: 'Street Fighter 3 & 5',
        Photo: '/imgs/Alex.jpg'
    },
    {
        firstName: 'Balrog',
        Nationality: 'American',
        Style: 'Boxing',
        Appearance: 'Street Fighter 2, Super 2, Alpha, 4, & 5',
        Photo: '/imgs/Balrog.jpg'
    },
    {
        firstName: 'Birdie',
        Nationality: 'British',
        Style: 'Brawling & Wrestling',
        Appearance: 'Street Fighter 1, Alpha, & 5',
        Photo: '/imgs/Birdie.jpg'
    },
    {
        firstName: 'Blanka',
        Nationality: 'Brazilian',
        Style: 'Animalistic Style',
        Appearance: 'Street Fighter 2, Super 2, Alpha, 4, 5, & 6',
        Photo: '/imgs/Blanka.jpg'
    },
    {
        firstName: 'C. Viper',
        Nationality: 'American',
        Style: 'CIA Training',
        Appearance: 'Street Fighter 4',
        Photo: '/imgs/C Viper.jpg'
    },
    {
        firstName: 'Cammy',
        Nationality: 'British',
        Style: 'Shadaloo Assassination & Special Forces',
        Appearance: 'Street Fighter Super 2, Alpha, 4, 5, & 6',
        Photo: '/imgs/Cammy.jpg'
    },
    {
        firstName: 'Chun-Li',
        Nationality: 'Chinese',
        Style: 'Kung Fu',
        Appearance: 'Street Fighter 2, Alpha, 3, 4, 5, & 6',
        Photo: '/imgs/Chun-Li.jpg'
    },
    {
        firstName: 'Cody',
        Nationality: 'American',
        Style: 'Street Brawling',
        Appearance: 'Street Fighter Alpha, 4, & 5',
        Photo: '/imgs/Cody.jpg'
    },
    {
        firstName: 'Dan Hibiki',
        Nationality: 'Chinese',
        Style: 'Saikyo Karate',
        Appearance: 'Street Fighter Alpha, 4, & 5',
        Photo: '/imgs/Dan.jpg'
    },
    {
        firstName: 'Decapre',
        Nationality: 'Russian',
        Style: 'Shadaloo & Psycho Powers',
        Appearance: 'Street Fighter Alpha, 4, & 5',
        Photo: '/imgs/Decapre.jpg'
    },
    {
        firstName: 'Dee Jay',
        Nationality: 'Jamaican',
        Style: 'Kickboxing Karateka',
        Appearance: 'Street Fighter Super 2, Alpha 4 & 6',
        Photo: '/imgs/Dee Jay.jpg'
    },
    {
        firstName: 'Dhalsim',
        Nationality: 'Indian',
        Style: 'Combat Yoga',
        Appearance: 'Street Fighter 2, Super 2, Alpha, 4, 5, & 6',
        Photo: '/imgs/Dhalsim.jpg'
    },
    {
        firstName: 'Dudley',
        Nationality: 'British',
        Style: 'Traditional Boxing',
        Appearance: 'Street Fighter 3 & 4',
        Photo: '/imgs/Dudley.jpg'
    },
    {
        firstName: 'E. Honda',
        Nationality: 'Japanese',
        Style: 'Sumo Wrestling',
        Appearance: 'Street Fighter 2, Super 2, Alpha 4, 5, & 6',
        Photo: '/imgs/E Honda.jpg'
    },
    {
        firstName: 'Eagle',
        Nationality: 'British',
        Style: 'Bōjutsu (2 Tonfas)',
        Appearance: 'Street Fighter 1 & Alpha',
        Photo: '/imgs/Eagle.jpg'
    },
    {
        firstName: 'Ed',
        Nationality: 'German',
        Style: 'Psycho Boxing',
        Appearance: 'Street Fighter 5 & 6',
        Photo: '/imgs/Ed.jpg'
    },
    {
        firstName: 'El Fuerte',
        Nationality: 'Mexican',
        Style: 'Lucha Libre',
        Appearance: 'Street Fighter 5 & 6',
        Photo: '/imgs/El Fuerte.jpg'
    },
    {
        firstName: 'Elena',
        Nationality: 'Kenyan',
        Style: 'Capoiera',
        Appearance: 'Street Fighter 3, 4, & 6',
        Photo: '/imgs/Elena.jpg'
    },
    {
        firstName: 'Eleven',
        Nationality: 'None',
        Style: 'Fighting Mimicry',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Eleven.jpg'
    },
    {
        firstName: 'F.A.N.G.',
        Nationality: 'Chinese',
        Style: 'Kenpo & Poison Techniques',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/FANG.jpg'
    },
    {
        firstName: 'Falke',
        Nationality: 'German',
        Style: 'Bōjutsu (Staff)',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Falke.jpg'
    },
    {
        firstName: 'Fei Long',
        Nationality: 'Chinese',
        Style: 'Jeet Kune Do',
        Appearance: 'Street Fighter Super 2, Alpha, & 4',
        Photo: '/imgs/Fei Long.jpg'
    },
    {
        firstName: 'G',
        Nationality: 'Unknown',
        Style: 'All of them',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/G.jpg'
    },
    {
        firstName: 'Geki',
        Nationality: 'Japanese',
        Style: 'Ninjutsu Assassination',
        Appearance: 'Street Fighter 1',
        Photo: '/imgs/Geki.jpg'
    },
    {
        firstName: 'Gen',
        Nationality: 'Chinese',
        Style: 'Mantis Fist and Crane Fist',
        Appearance: 'Street Fighter 1, Alpha, & 4',
        Photo: '/imgs/Gen.jpg'
    },
    {
        firstName: 'Gill',
        Nationality: 'Mediterranian',
        Style: 'Pankration & Elemental Powers',
        Appearance: 'Street Fighter 3 & 5',
        Photo: '/imgs/Gill.jpg'
    },
    {
        firstName: 'Gouken',
        Nationality: 'Japanese',
        Style: ' Ansatsuken Karate',
        Appearance: 'Street Fighter 4',
        Photo: '/imgs/Gouken.jpg'
    },
    {
        firstName: 'Guile',
        Nationality: 'America',
        Style: 'Freedom Fu',
        Appearance: 'Street Fighter 2, Super 2, 4, 5, & 6',
        Photo: '/imgs/Guile.jpg'
    },
    {
        firstName: 'Guy',
        Nationality: 'American',
        Style: 'Brawling & Ninjutsu',
        Appearance: 'Street Fighter Alpha & 4',
        Photo: '/imgs/Guy.jpg'
    },
    {
        firstName: 'Hakan',
        Nationality: 'Turkish',
        Style: 'Yağlı güreş (Turkish Oil Wrestling)',
        Appearance: 'Street Fighter 3 & 4',
        Photo: '/imgs/Hakan.jpg'
    },
    {
        firstName: 'Hugo',
        Nationality: 'German',
        Style: 'Pro Wrestling',
        Appearance: 'Street Fighter 4',
        Photo: '/imgs/Hugo.jpg'
    },
    {
        firstName: 'Ibuki',
        Nationality: 'Japanese',
        Style: 'Ninjutsu',
        Appearance: 'Street Fighter 3, 4, & 5',
        Photo: '/imgs/Ibuki.jpg'
    },
    {
        firstName: 'Ingrid',
        Nationality: 'Unknown',
        Style: 'Ballet & Psychic Powers',
        Appearance: 'Street Fighter Alpha',
        Photo: '/imgs/Ingrid.jpg'
    },
    {
        firstName: 'Jamie',
        Nationality: 'Chinese',
        Style: 'Zui Quan (Drunken Boxing)',
        Appearance: 'Street Fighter 6',
        Photo: '/imgs/Jamie.jpg'
    },
    {
        firstName: 'Joe',
        Nationality: 'American',
        Style: 'Kickboxing',
        Appearance: 'Street Fighter 1',
        Photo: '/imgs/Joe.jpg'
    },
    {
        firstName: 'JP',
        Nationality: 'Russian',
        Style: 'Bartitsu & Psycho Power',
        Appearance: 'Street Fighter 6',
        Photo: '/imgs/JP.jpg'
    },
    {
        firstName: 'Juli',
        Nationality: 'German',
        Style: 'Shadaloo Elite Forces',
        Appearance: 'Street Fighter Alpha & 5',
        Photo: '/imgs/Juli.jpg'
    },
    {
        firstName: 'Juni',
        Nationality: 'German',
        Style: 'Shadaloo Elite Forces',
        Appearance: 'Street Fighter Alpha',
        Photo: '/imgs/Juni.jpg'
    },
    {
        firstName: 'Juri',
        Nationality: 'South Korean',
        Style: 'Taekwondo',
        Appearance: 'Street Fighter 4, 5, & 6',
        Photo: '/imgs/Juri.jpg'
    },
    {
        firstName: 'Ryu',
        Nationality: 'Japanese',
        Style: 'Ansatsuken Karate',
        Appearance: 'Every Game',
        Photo: '/imgs/Ryu.jpg'
    },
    {
        firstName: 'Ken',
        Nationality: 'Japanese',
        Style: 'Ansatsuken Karate',
        Appearance: 'Every Game',
        Photo: '/imgs/Ken.jpg'
    },
    {
        firstName: 'Zangief',
        Nationality: 'Russian',
        Style: 'Wrestling',
        Appearance: 'Street Fighter 2, 4, 5, & 6',
        Photo: '/imgs/Zangief.jpg'
    },

    {
        firstName: 'Vega',
        Nationality: 'Spanish',
        Style: 'Spanish Bullfighting & Ninjutsu',
        Appearance: 'Street Fighter 2, 4, & 5',
        Photo: '/imgs/Vega.jpg'
    },
    {
        firstName: 'Sagat',
        Nationality: 'Thai',
        Style: 'Muay Thai',
        Appearance: 'Street Fighter 1, 2, Alpha, 4, & 5',
        Photo: '/imgs/Sagat.jpg'
    },
    {
        firstName: 'M. Bison',
        Nationality: 'Unknown',
        Style: 'Lerdrit & Psycho Power',
        Appearance: 'Street Fighter 2, Super 2, Alpha, 4, 5, & 6',
        Photo: '/imgs/M.Bison.jpg'
    },

    {
        firstName: 'T. Hawk',
        Nationality: 'Mexican',
        Style: 'Thunderfoot Martial Arts',
        Appearance: 'Street Fighter 2 & 4',
        Photo: '/imgs/Thunder Hawk.jpg'
    },
    {
        firstName: 'Charlie Nash',
        Nationality: 'Irish',
        Style: '"Peek-a-Boo" Boxing',
        Appearance: 'Street Fighter Alpha & 5',
        Photo: '/imgs/Charlie Nash.jpg'
    },
    {
        firstName: 'Rose',
        Nationality: 'Italian',
        Style: 'Soul Power',
        Appearance: 'Street Fighter 4 & 5',
        Photo: '/imgs/Rose.jpg'
    },

    {
        firstName: 'Sodom',
        Nationality: 'American',
        Style: 'Katana Blades and Jitte',
        Appearance: 'Street Fighter Alpha',
        Photo: '/imgs/Sodom.jpg'
    },

    {
        firstName: 'Sakura Kasugano',
        Nationality: 'Japanese',
        Style: 'Medical Ninjutsu & Taijutsu',
        Appearance: 'Street Fighter Alpha, 4, & 5',
        Photo: '/imgs/Sakura.jpg'
    },
]