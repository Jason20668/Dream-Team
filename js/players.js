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
        Nationality: 'Thai (Thailand)',
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
        firstName: 'Charlie Nash',
        Nationality: 'Irish',
        Style: '"Peek-a-Boo" Boxing',
        Appearance: 'Street Fighter Alpha & 5',
        Photo: '/imgs/Charlie Nash.jpg'
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
        firstName: 'Kage',
        Nationality: 'Japanese',
        Style: 'Ansatsuken Karate',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Kage.jpg'
    },
    {
        firstName: 'Karin',
        Nationality: 'Japanese',
        Style: 'Kanzuki-ryu kakutojutsu',
        Appearance: 'Street Fighter Alpha & 5',
        Photo: '/imgs/Karin.jpg'
    },
    {
        firstName: 'Ken',
        Nationality: 'Japanese',
        Style: 'Ansatsuken Karate',
        Appearance: 'Every Game',
        Photo: '/imgs/Ken.jpg'
    },
    {
        firstName: 'Kimberly',
        Nationality: 'American',
        Style: 'Bushinryu Ninjutsu',
        Appearance: 'Street Fighter 6',
        Photo: '/imgs/Kimberly.jpg'
    },
    {
        firstName: 'Kolin',
        Nationality: 'Unknown',
        Style: 'Systema & Ice Powers',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Kolin.jpg'
    },
    {
        firstName: 'Laura',
        Nationality: 'Brazilian',
        Style: 'Brazilian Jiu-jitsu',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Laura.jpg'
    },
    {
        firstName: 'Lee',
        Nationality: 'Chinese',
        Style: 'Bajiquan & Drunken Fist',
        Appearance: 'Street Fighter 1',
        Photo: '/imgs/Lee.jpg'
    },
    {
        firstName: 'Lily',
        Nationality: 'Mexican',
        Style: 'Dual Pogamoggans',
        Appearance: 'Street Fighter 6',
        Photo: '/imgs/Lily.jpg'
    },
    {
        firstName: 'Lucia',
        Nationality: 'Puerto Rican',
        Style: 'Kenpo & Self-Defense Techniques',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Lucia.jpg'
    },
    {
        firstName: 'Luke',
        Nationality: 'American',
        Style: 'Military Style MMA',
        Appearance: 'Street Fighter 5 & 6',
        Photo: '/imgs/Luke.jpg'
    },
    {
        firstName: 'M. Bison',
        Nationality: 'Unknown',
        Style: 'Lerdrit & Psycho Power',
        Appearance: 'Street Fighter 2, Super 2, Alpha, 4, 5, & 6',
        Photo: '/imgs/M.Bison.jpg'
    },
    {
        firstName: 'Mai',
        Nationality: 'Japanese',
        Style: 'Shiranui-ryuu Ninjutsu',
        Appearance: 'Street Fighter 6',
        Photo: '/imgs/Mai.jpg'
    },
    {
        firstName: 'Maki',
        Nationality: 'Japanese',
        Style: 'Bushin-ryu Ninjutsu',
        Appearance: 'Street Fighter 4',
        Photo: '/imgs/Maki.jpg'
    },
    {
        firstName: 'Makoto',
        Nationality: 'Japanese',
        Style: 'Rindoukan Karate',
        Appearance: 'Street Fighter 4',
        Photo: '/imgs/Makoto.jpg'
    },
    {
        firstName: 'Manon',
        Nationality: 'French',
        Style: 'Judo & Ballet',
        Appearance: 'Street Fighter 6',
        Photo: '/imgs/Manon.jpg'
    },
    {
        firstName: 'Marisa',
        Nationality: 'Italian',
        Style: 'Pankration',
        Appearance: 'Street Fighter 6',
        Photo: '/imgs/Marisa.jpg'
    },
    {
        firstName: 'Menat',
        Nationality: 'Egyptian',
        Style: 'Soul Power',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Menat.jpg'
    },
    {
        firstName: 'Mike',
        Nationality: 'American',
        Style: 'Heavyweight Boxing',
        Appearance: 'Street Fighter 1',
        Photo: '/imgs/Mike.jpg'
    },
    {
        firstName: 'Necalli',
        Nationality: 'Unknown',
        Style: 'Brute Strength',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Necalli.jpg'
    },
    {
        firstName: 'Necro',
        Nationality: 'Russian',
        Style: 'Yoga & Electric Powers',
        Appearance: 'Street Fighter 3',
        Photo: '/imgs/Necro.jpg'
    },
    {
        firstName: 'Oro',
        Nationality: 'Unknown',
        Style: 'Senjutsu',
        Appearance: 'Street Fighter 3',
        Photo: '/imgs/Oro.jpg'
    },
    {
        firstName: 'Poison',
        Nationality: 'American',
        Style: 'Acrobatic Fighting & Kenkasappo',
        Appearance: 'Street Fighter 3, 4, & 5',
        Photo: '/imgs/Poison.jpg'
    },
    {
        firstName: 'Q',
        Nationality: 'Unknown',
        Style: 'Unknown',
        Appearance: 'Street Fighter 3',
        Photo: '/imgs/Q.jpg'
    },
    {
        firstName: 'R. Mika',
        Nationality: 'Japanese',
        Style: 'Professional Wrestling',
        Appearance: 'Street Fighter Alpha & 5',
        Photo: '/imgs/R Mika.jpg'
    },
    {
        firstName: 'Rashid',
        Nationality: 'Unknown',
        Style: 'Parkour and Wind Powers',
        Appearance: 'Street Fighter 5 & 6',
        Photo: '/imgs/Rashid.jpg'
    },
    {
        firstName: 'Remy',
        Nationality: 'French',
        Style: 'Savate & Light Projectiles',
        Appearance: 'Street Fighter 3',
        Photo: '/imgs/Remy.jpg'
    },
    {
        firstName: 'Retsu',
        Nationality: 'Japanese',
        Style: 'Shorinji Kempo',
        Appearance: 'Street Fighter 3',
        Photo: '/imgs/Retsu.jpg'
    },
    {
        firstName: 'Rolento',
        Nationality: 'American',
        Style: 'Bojutsu',
        Appearance: 'Street Fighter Alpha & 4',
        Photo: '/imgs/Rolento.jpg'
    },
    {
        firstName: 'Rose',
        Nationality: 'Italian',
        Style: 'Soul Power',
        Appearance: 'Street Fighter 4 & 5',
        Photo: '/imgs/Rose.jpg'
    },
    {
        firstName: 'Rufus',
        Nationality: 'American',
        Style: 'Breakung-Fu',
        Appearance: 'Street Fighter 4',
        Photo: '/imgs/Rufus.jpg'
    },
    {
        firstName: 'Ryu',
        Nationality: 'Japanese',
        Style: 'Ansatsuken Karate',
        Appearance: 'Every Game',
        Photo: '/imgs/Ryu.jpg'
    },
    {
        firstName: 'Sagat',
        Nationality: 'Thai (Thailand)',
        Style: 'Muay Thai',
        Appearance: 'Street Fighter 1, 2, Alpha, 4, & 5',
        Photo: '/imgs/Sagat.jpg'
    },
    {
        firstName: 'Sakura Kasugano',
        Nationality: 'Japanese',
        Style: 'Medical Ninjutsu & Taijutsu',
        Appearance: 'Street Fighter Alpha, 4, & 5',
        Photo: '/imgs/Sakura.jpg'
    },
    {
        firstName: 'Sean',
        Nationality: 'Brazilian',
        Style: 'Imitation Ansatsuken Karate',
        Appearance: 'Street Fighter 3',
        Photo: '/imgs/Sean.jpg'
    },
    {
        firstName: 'Seth',
        Nationality: 'Unknown',
        Style: 'Move Duplication',
        Appearance: 'Street Fighter 4 & 5',
        Photo: '/imgs/Seth.jpg'
    },
    {
        firstName: 'Sodom',
        Nationality: 'American',
        Style: 'Katana Blades and Jitte',
        Appearance: 'Street Fighter Alpha',
        Photo: '/imgs/Sodom.jpg'
    },
    {
        firstName: 'T. Hawk',
        Nationality: 'Mexican',
        Style: 'Thunderfoot Martial Arts',
        Appearance: 'Street Fighter 2 & 4',
        Photo: '/imgs/Thunder Hawk.jpg'
    },
    {
        firstName: 'Terry Bogard',
        Nationality: 'American',
        Style: 'Boxing, Kickboxing, Kung-Fu, and Hakkyokuseiken',
        Appearance: 'Street Fighter 6',
        Photo: '/imgs/Terry.jpg'
    },
    {
        firstName: 'Twelve',
        Nationality: 'None',
        Style: 'Hyper adaptation',
        Appearance: 'Street Fighter 3',
        Photo: '/imgs/Twelve.jpg'
    },
    {
        firstName: 'Urien',
        Nationality: 'Unknown',
        Style: 'Pankration & Electric Powers',
        Appearance: 'Street Fighter 3 & 5',
        Photo: '/imgs/Urien.jpg'
    },
    {
        firstName: 'Vega',
        Nationality: 'Spanish',
        Style: 'Spanish Bullfighting & Ninjutsu',
        Appearance: 'Street Fighter 2, 4, & 5',
        Photo: '/imgs/Vega.jpg'
    },
    {
        firstName: 'Yang',
        Nationality: 'Chinese',
        Style: 'Bājíquán',
        Appearance: 'Street Fighter 3 & 4',
        Photo: '/imgs/Yang.jpg'
    },
    {
        firstName: 'Yun',
        Nationality: 'Chinese',
        Style: 'Chinese Kung-Fu',
        Appearance: 'Street Fighter Alpha, 3, & 4',
        Photo: '/imgs/Yun.jpg'
    },
    {
        firstName: 'Zangief',
        Nationality: 'Russian',
        Style: 'Wrestling',
        Appearance: 'Street Fighter 2, 4, 5, & 6',
        Photo: '/imgs/Zangief.jpg'
    },
    {
        firstName: 'Zeku',
        Nationality: 'Japanese',
        Style: 'Bushinryu Ninjutsu',
        Appearance: 'Street Fighter 5',
        Photo: '/imgs/Zeku.jpg'
    }
]