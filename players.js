const players = [
    {
        firstName: 'Abel',
        Nationality: 'French',
        Style: 'Mixed Martial Arts',
        Appearance: 'Street Fighter 4',
        Photo: 'imgs/Abel.jpg',
        FF: 'Grappler'
    },
    {
        firstName: 'Abigail',
        Nationality: 'Canadian',
        Style: 'Brute Strength',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Abigail.jpg',
        FF: 'Brawler'
    },
    {
        firstName: 'Adon',
        Nationality: 'Thai (Thailand)',
        Style: 'Muay Thai',
        Appearance: 'Street Fighter 1, Alpha, & 4',
        Photo: 'imgs/Adon.jpg',
        FF: 'Rushdown'
    },
    {
        firstName: 'Akira',
        Nationality: 'Japanese',
        Style: 'Bajiquan',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Akira.jpg',
        FF: 'Rushdown'
    },
    {
        firstName: 'Akuma',
        Nationality: 'Japanese',
        Style: 'Ansatsuken Karate',
        Appearance: 'Street Fighter Super 2, Alpha, 3, 4, 5, & 6',
        Photo: 'imgs/Akuma.jpg',
        FF: 'Shoto'
    },
    {
        firstName: 'Aki',
        Nationality: 'Chinese',
        Style: 'Fanged Snake & Poison Hand Kung Fu',
        Appearance: 'Street Fighter 6',
        Photo: 'imgs/AKI.jpg',
        FF: 'Zoner'
    },
    {
        firstName: 'Alex',
        Nationality: 'American',
        Style: 'Wrestling & Kickboxing',
        Appearance: 'Street Fighter 3 & 5',
        Photo: 'imgs/Alex.jpg',
        FF: 'Grappler'
    },
    {
        firstName: 'Balrog',
        Nationality: 'American',
        Style: 'Boxing',
        Appearance: 'Street Fighter 2, Super 2, Alpha, 4, & 5',
        Photo: 'imgs/Balrog.jpg',
        FF: 'Rushdown'
    },
    {
        firstName: 'Birdie',
        Nationality: 'British',
        Style: 'Brawling & Wrestling',
        Appearance: 'Street Fighter 1, Alpha, & 5',
        Photo: 'imgs/Birdie.jpg',
        FF: 'Brawler'
    },
    {
        firstName: 'Blanka',
        Nationality: 'Brazilian',
        Style: 'Animalistic Style',
        Appearance: 'Street Fighter 2, Super 2, Alpha, 4, 5, & 6',
        Photo: 'imgs/Blanka.jpg',
        FF: 'Defensive'
    },
    {
        firstName: 'C. Viper',
        Nationality: 'American',
        Style: 'CIA Training',
        Appearance: 'Street Fighter 4',
        Photo: 'imgs/C Viper.jpg',
        FF: 'Mix-up'
    },
    {
        firstName: 'Cammy',
        Nationality: 'British',
        Style: 'Shadaloo Assassination & Special Forces',
        Appearance: 'Street Fighter Super 2, Alpha, 4, 5, & 6',
        Photo: 'imgs/Cammy.jpg',
        FF: 'Rushdown'
    },
    {
        firstName: 'Charlie Nash',
        Nationality: 'Irish',
        Style: '"Peek-a-Boo" Boxing',
        Appearance: 'Street Fighter Alpha & 5',
        Photo: 'imgs/Charlie Nash.jpg',
        FF: 'Charge'
    },
    {
        firstName: 'Chun-Li',
        Nationality: 'Chinese',
        Style: 'Kung Fu',
        Appearance: 'Street Fighter 2, Alpha, 3, 4, 5, & 6',
        Photo: 'imgs/Chun-Li.jpg',
                FF: 'Mid-range Zoner'
    },
    {
        firstName: 'Cody',
        Nationality: 'American',
        Style: 'Street Brawling',
        Appearance: 'Street Fighter Alpha, 4, & 5',
        Photo: 'imgs/Cody.jpg',
                FF: 'Brawler'
    },
    {
        firstName: 'Dan Hibiki',
        Nationality: 'Chinese',
        Style: 'Saikyo Karate',
        Appearance: 'Street Fighter Alpha, 4, & 5',
        Photo: 'imgs/Dan.jpg',
                FF: 'Shoto'
    },
    {
        firstName: 'Decapre',
        Nationality: 'Russian',
        Style: 'Shadaloo & Psycho Powers',
        Appearance: 'Street Fighter Alpha, 4, & 5',
        Photo: 'imgs/Decapre.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Dee Jay',
        Nationality: 'Jamaican',
        Style: 'Kickboxing Karateka',
        Appearance: 'Street Fighter Super 2, Alpha 4 & 6',
        Photo: 'imgs/Dee Jay.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Dhalsim',
        Nationality: 'Indian',
        Style: 'Combat Yoga',
        Appearance: 'Street Fighter 2, Super 2, Alpha, 4, 5, & 6',
        Photo: 'imgs/Dhalsim.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Dudley',
        Nationality: 'British',
        Style: 'Traditional Boxing',
        Appearance: 'Street Fighter 3 & 4',
        Photo: 'imgs/Dudley.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'E. Honda',
        Nationality: 'Japanese',
        Style: 'Sumo Wrestling',
        Appearance: 'Street Fighter 2, Super 2, Alpha 4, 5, & 6',
        Photo: 'imgs/E Honda.jpg',
                FF: 'Defensive'
    },
    {
        firstName: 'Eagle',
        Nationality: 'British',
        Style: 'Bōjutsu (2 Tonfas)',
        Appearance: 'Street Fighter 1 & Alpha',
        Photo: 'imgs/Eagle.jpg',
                FF: 'Brawler'
    },
    {
        firstName: 'Ed',
        Nationality: 'German',
        Style: 'Psycho Boxing',
        Appearance: 'Street Fighter 5 & 6',
        Photo: 'imgs/Ed.jpg',
                FF: 'Mid-range Zoner'
    },
    {
        firstName: 'El Fuerte',
        Nationality: 'Mexican',
        Style: 'Lucha Libre',
        Appearance: 'Street Fighter 5 & 6',
        Photo: 'imgs/El Fuerte.jpg',
                FF: 'Grappler'
    },
    {
        firstName: 'Elena',
        Nationality: 'Kenyan',
        Style: 'Capoiera',
        Appearance: 'Street Fighter 3, 4, & 6',
        Photo: 'imgs/Elena.jpg',
                FF: 'Footsies'
    },
    {
        firstName: 'Eleven',
        Nationality: 'None',
        Style: 'Fighting Mimicry',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Eleven.jpg',
                FF: 'All (Depends on who he mimics)'
    },
    {
        firstName: 'F.A.N.G.',
        Nationality: 'Chinese',
        Style: 'Kenpo & Poison Techniques',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/FANG.jpg',
                FF: 'Trap Zoner'
    },
    {
        firstName: 'Falke',
        Nationality: 'German',
        Style: 'Bōjutsu (Staff)',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Falke.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Fei Long',
        Nationality: 'Chinese',
        Style: 'Jeet Kune Do',
        Appearance: 'Street Fighter Super 2, Alpha, & 4',
        Photo: 'imgs/Fei Long.jpg',
                FF: 'Balance'
    },
    {
        firstName: 'G',
        Nationality: 'Unknown',
        Style: 'All of them',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/G.jpg',
                FF: 'Brawler'
    },
    {
        firstName: 'Geki',
        Nationality: 'Japanese',
        Style: 'Ninjutsu Assassination',
        Appearance: 'Street Fighter 1',
        Photo: 'imgs/Geki.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Gen',
        Nationality: 'Chinese',
        Style: 'Mantis Fist and Crane Fist',
        Appearance: 'Street Fighter 1, Alpha, & 4',
        Photo: 'imgs/Gen.jpg',
                FF: 'Balance'
    },
    {
        firstName: 'Gill',
        Nationality: 'Mediterranian',
        Style: 'Pankration & Elemental Powers',
        Appearance: 'Street Fighter 3 & 5',
        Photo: 'imgs/Gill.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Gouken',
        Nationality: 'Japanese',
        Style: ' Ansatsuken Karate',
        Appearance: 'Street Fighter 4',
        Photo: 'imgs/Gouken.jpg',
                FF: 'Shoto'
    },
    {
        firstName: 'Guile',
        Nationality: 'America',
        Style: 'Freedom Fu',
        Appearance: 'Street Fighter 2, Super 2, 4, 5, & 6',
        Photo: 'imgs/Guile.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Guy',
        Nationality: 'American',
        Style: 'Brawling & Ninjutsu',
        Appearance: 'Street Fighter Alpha & 4',
        Photo: 'imgs/Guy.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Hakan',
        Nationality: 'Turkish',
        Style: 'Yağlı güreş (Turkish Oil Wrestling)',
        Appearance: 'Street Fighter 3 & 4',
        Photo: 'imgs/Hakan.jpg',
                FF: 'Grappler'
    },
    {
        firstName: 'Hugo',
        Nationality: 'German',
        Style: 'Pro Wrestling',
        Appearance: 'Street Fighter 4',
        Photo: 'imgs/Hugo.jpg',
                FF: 'Grappler'
    },
    {
        firstName: 'Ibuki',
        Nationality: 'Japanese',
        Style: 'Ninjutsu',
        Appearance: 'Street Fighter 3, 4, & 5',
        Photo: 'imgs/Ibuki.jpg',
                FF: 'Mix-up'

    },
    {
        firstName: 'Ingrid',
        Nationality: 'Unknown',
        Style: 'Ballet & Psychic Powers',
        Appearance: 'Street Fighter Alpha',
        Photo: 'imgs/Ingrid.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Jamie',
        Nationality: 'Chinese',
        Style: 'Zui Quan (Drunken Boxing)',
        Appearance: 'Street Fighter 6',
        Photo: 'imgs/Jamie.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Joe',
        Nationality: 'American',
        Style: 'Kickboxing',
        Appearance: 'Street Fighter 1',
        Photo: 'imgs/Joe.jpg',
                FF: 'Balance'
    },
    {
        firstName: 'JP',
        Nationality: 'Russian',
        Style: 'Bartitsu & Psycho Power',
        Appearance: 'Street Fighter 6',
        Photo: 'imgs/JP.jpg',
                FF: 'Trap Zoner'
    },
    {
        firstName: 'Juli',
        Nationality: 'German',
        Style: 'Shadaloo Elite Forces',
        Appearance: 'Street Fighter Alpha & 5',
        Photo: 'imgs/Juli.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Juni',
        Nationality: 'German',
        Style: 'Shadaloo Elite Forces',
        Appearance: 'Street Fighter Alpha',
        Photo: 'imgs/Juni.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Juri',
        Nationality: 'South Korean',
        Style: 'Taekwondo',
        Appearance: 'Street Fighter 4, 5, & 6',
        Photo: 'imgs/Juri.jpg',
                FF: 'Footsies'
    },
    {
        firstName: 'Kage',
        Nationality: 'Japanese',
        Style: 'Ansatsuken Karate',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Kage.jpg',
                FF: 'Shoto'
    },
    {
        firstName: 'Karin',
        Nationality: 'Japanese',
        Style: 'Kanzuki-ryu kakutojutsu',
        Appearance: 'Street Fighter Alpha & 5',
        Photo: 'imgs/Karin.jpg',
                FF: 'Balanced'
    },
    {
        firstName: 'Ken',
        Nationality: 'Japanese',
        Style: 'Ansatsuken Karate',
        Appearance: 'Every Game',
        Photo: 'imgs/Ken.jpg',
                FF: 'Shoto'
    },
    {
        firstName: 'Kimberly',
        Nationality: 'American',
        Style: 'Bushinryu Ninjutsu',
        Appearance: 'Street Fighter 6',
        Photo: 'imgs/Kimberly.jpg',
                FF: 'Mix-up Rushdown'
    },
    {
        firstName: 'Kolin',
        Nationality: 'Unknown',
        Style: 'Systema & Ice Powers',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Kolin.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Laura',
        Nationality: 'Brazilian',
        Style: 'Brazilian Jiu-jitsu',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Laura.jpg',
                FF: 'Grappler'
    },
    {
        firstName: 'Lee',
        Nationality: 'Chinese',
        Style: 'Bajiquan & Drunken Fist',
        Appearance: 'Street Fighter 1',
        Photo: 'imgs/Lee.jpg',
                FF: 'Balance'
    },
    {
        firstName: 'Lily',
        Nationality: 'Mexican',
        Style: 'Dual Pogamoggans',
        Appearance: 'Street Fighter 6',
        Photo: 'imgs/Lily.jpg',
                FF: 'Grappler'
    },
    {
        firstName: 'Lucia',
        Nationality: 'Puerto Rican',
        Style: 'Kenpo & Self-Defense Techniques',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Lucia.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Luke',
        Nationality: 'American',
        Style: 'Military Style MMA',
        Appearance: 'Street Fighter 5 & 6',
        Photo: 'imgs/Luke.jpg',
                FF: 'Balance'
    },
    {
        firstName: 'M. Bison',
        Nationality: 'Unknown',
        Style: 'Lerdrit & Psycho Power',
        Appearance: 'Street Fighter 2, Super 2, Alpha, 4, 5, & 6',
        Photo: 'imgs/M.Bison.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Mai',
        Nationality: 'Japanese',
        Style: 'Shiranui-ryuu Ninjutsu',
        Appearance: 'Street Fighter 6',
        Photo: 'imgs/Mai.jpg',
                FF: 'Mix-up'
    },
    {
        firstName: 'Maki',
        Nationality: 'Japanese',
        Style: 'Bushin-ryu Ninjutsu',
        Appearance: 'Street Fighter 4',
        Photo: 'imgs/Maki.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Makoto',
        Nationality: 'Japanese',
        Style: 'Rindoukan Karate',
        Appearance: 'Street Fighter 4',
        Photo: 'imgs/Makoto.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Manon',
        Nationality: 'French',
        Style: 'Judo & Ballet',
        Appearance: 'Street Fighter 6',
        Photo: 'imgs/Manon.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Marisa',
        Nationality: 'Italian',
        Style: 'Pankration',
        Appearance: 'Street Fighter 6',
        Photo: 'imgs/Marisa.jpg',
                FF: 'Brawler'
    },
    {
        firstName: 'Menat',
        Nationality: 'Egyptian',
        Style: 'Soul Power',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Menat.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Mike',
        Nationality: 'American',
        Style: 'Heavyweight Boxing',
        Appearance: 'Street Fighter 1',
        Photo: 'imgs/Mike.jpg',
                FF: 'Brawler'
    },
    {
        firstName: 'Necalli',
        Nationality: 'Unknown',
        Style: 'Brute Strength',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Necalli.jpg',
                FF: 'Balance'
    },
    {
        firstName: 'Necro',
        Nationality: 'Russian',
        Style: 'Yoga & Electric Powers',
        Appearance: 'Street Fighter 3',
        Photo: 'imgs/Necro.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Oro',
        Nationality: 'Unknown',
        Style: 'Senjutsu',
        Appearance: 'Street Fighter 3',
        Photo: 'imgs/Oro.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Poison',
        Nationality: 'American',
        Style: 'Acrobatic Fighting & Kenkasappo',
        Appearance: 'Street Fighter 3, 4, & 5',
        Photo: 'imgs/Poison.jpg',
                FF: 'Poison'
    },
    {
        firstName: 'Q',
        Nationality: 'Unknown',
        Style: 'Unknown',
        Appearance: 'Street Fighter 3',
        Photo: 'imgs/Q.jpg',
                FF: 'Brawler'
    },
    {
        firstName: 'R. Mika',
        Nationality: 'Japanese',
        Style: 'Professional Wrestling',
        Appearance: 'Street Fighter Alpha & 5',
        Photo: 'imgs/R Mika.jpg',
                FF: 'Grappler'
    },
    {
        firstName: 'Rashid',
        Nationality: 'Unknown',
        Style: 'Parkour and Wind Powers',
        Appearance: 'Street Fighter 5 & 6',
        Photo: 'imgs/Rashid.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Remy',
        Nationality: 'French',
        Style: 'Savate & Light Projectiles',
        Appearance: 'Street Fighter 3',
        Photo: 'imgs/Remy.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Retsu',
        Nationality: 'Japanese',
        Style: 'Shorinji Kempo',
        Appearance: 'Street Fighter 3',
        Photo: 'imgs/Retsu.jpg',
                FF: 'Defensive'

    },
    {
        firstName: 'Rolento',
        Nationality: 'American',
        Style: 'Bojutsu',
        Appearance: 'Street Fighter Alpha & 4',
        Photo: 'imgs/Rolento.jpg',
                FF: 'Balance'
    },
    {
        firstName: 'Rose',
        Nationality: 'Italian',
        Style: 'Soul Power',
        Appearance: 'Street Fighter 4 & 5',
        Photo: 'imgs/Rose.jpg',
                FF: 'Mid-range Zoner'
    },
    {
        firstName: 'Rufus',
        Nationality: 'American',
        Style: 'Breakung-Fu',
        Appearance: 'Street Fighter 4',
        Photo: 'imgs/Rufus.jpg',
                FF: 'Balance'
    },
    {
        firstName: 'Ryu',
        Nationality: 'Japanese',
        Style: 'Ansatsuken Karate',
        Appearance: 'Every Game',
        Photo: 'imgs/Ryu.jpg',
                FF: 'Shoto'
    },
    {
        firstName: 'Sagat',
        Nationality: 'Thai (Thailand)',
        Style: 'Muay Thai',
        Appearance: 'Street Fighter 1, 2, Alpha, 4, & 5',
        Photo: 'imgs/Sagat.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Sakura Kasugano',
        Nationality: 'Japanese',
        Style: 'Medical Ninjutsu & Taijutsu',
        Appearance: 'Street Fighter Alpha, 4, & 5',
        Photo: 'imgs/Sakura.jpg',
                FF: 'Zoner'
    },
    {
        firstName: 'Sean',
        Nationality: 'Brazilian',
        Style: 'Imitation Ansatsuken Karate',
        Appearance: 'Street Fighter 3',
        Photo: 'imgs/Sean.jpg',
                FF: 'Shoto'
    },
    {
        firstName: 'Seth',
        Nationality: 'Unknown',
        Style: 'Move Duplication',
        Appearance: 'Street Fighter 4 & 5',
        Photo: 'imgs/Seth.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Sodom',
        Nationality: 'American',
        Style: 'Katana Blades and Jitte',
        Appearance: 'Street Fighter Alpha',
        Photo: 'imgs/Sodom.jpg',
        FF: 'Balance'
    },
    {
        firstName: 'T. Hawk',
        Nationality: 'Mexican',
        Style: 'Thunderfoot Martial Arts',
        Appearance: 'Street Fighter 2 & 4',
        Photo: 'imgs/Thunder Hawk.jpg',
                FF: 'Brawler'
    },
    {
        firstName: 'Terry Bogard',
        Nationality: 'American',
        Style: 'Boxing, Kickboxing, Kung-Fu, and Hakkyokuseiken',
        Appearance: 'Street Fighter 6',
        Photo: 'imgs/Terry.jpg',
                FF: 'Brawler'
    },
    {
        firstName: 'Twelve',
        Nationality: 'None',
        Style: 'Hyper adaptation',
        Appearance: 'Street Fighter 3',
        Photo: 'imgs/Twelve.jpg',
                FF: 'All (Depends on who he copies)'
    },
    {
        firstName: 'Urien',
        Nationality: 'Unknown',
        Style: 'Pankration & Electric Powers',
        Appearance: 'Street Fighter 3 & 5',
        Photo: 'imgs/Urien.jpg',
                FF: 'Defensive'
    },
    {
        firstName: 'Vega',
        Nationality: 'Spanish',
        Style: 'Spanish Bullfighting & Ninjutsu',
        Appearance: 'Street Fighter 2, 4, & 5',
        Photo: 'imgs/Vega.jpg',
                FF: 'Rushdown'
    },
    {
        firstName: 'Yang',
        Nationality: 'Chinese',
        Style: 'Bājíquán',
        Appearance: 'Street Fighter 3 & 4',
        Photo: 'imgs/Yang.jpg',
                FF: 'Balance'
    },
    {
        firstName: 'Yun',
        Nationality: 'Chinese',
        Style: 'Chinese Kung-Fu',
        Appearance: 'Street Fighter Alpha, 3, & 4',
        Photo: 'imgs/Yun.jpg',
                FF: 'Balance'
    },
    {
        firstName: 'Zangief',
        Nationality: 'Russian',
        Style: 'Wrestling',
        Appearance: 'Street Fighter 2, 4, 5, & 6',
        Photo: 'imgs/Zangief.jpg',
                FF: 'Grappler'
    },
    {
        firstName: 'Zeku',
        Nationality: 'Japanese',
        Style: 'Bushinryu Ninjutsu',
        Appearance: 'Street Fighter 5',
        Photo: 'imgs/Zeku.jpg',
                FF: 'Stance'
    }
]