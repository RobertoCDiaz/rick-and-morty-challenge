const { exercise1, exercise2 } = require('./solver');

jest.setTimeout(10000);

// Setup exercises results before running tests.
let ex1 = null;
let ex2 = null;

beforeAll(async () => {
    ex1 = await exercise1();
    ex2 = await exercise2();
});

/** -------------------------------------------------------------
 * First exercise tests.
 ---------------------------------------------------------------- */
test("Tests if first exercise executes in less than 3 seconds", async () => {
    try {
        expect(ex1.in_time).toBeTruthy();
    } catch (e) {
        throw new Error(`Time should not exceed 3s. Time: ${ex1.time}`);
    }
});

test("Tests if first exercise's answers are correct", async () => {
    expect(ex1.results[0].count).toBe(82);
    expect(ex1.results[1].count).toBe(88);
    expect(ex1.results[2].count).toBe(494);
});

/** -------------------------------------------------------------
 * Second exercise tests.
 ---------------------------------------------------------------- */
test("Tests if second exercise executes in less than 3 seconds", async () => {
    try {
        expect(ex2.in_time).toBeTruthy();
    } catch (e) {
        throw new Error(`Time should not exceed 3s. Time: ${ex2.time}`);
    }
});

test("Tests if second exercise's answers are correct", async () => {
    expect(ex2.results).toEqual([
        {
            "name":"Pilot",
            "episode":"S01E01",
            "locations":[
                "Bepis 9",
                "Earth (C-137)",
                "Girvonesk",
                "Gromflom Prime",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"Lawnmower Dog",
            "episode":"S01E02",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Mr. Goldenfold's dream",
                "Snuffles' Dream",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"Anatomy Park",
            "episode":"S01E03",
            "locations":[
                "Anatomy Park",
                "Earth (C-137)",
                "unknown"
            ],
            "locationsCount":3
        },
        {
            "name":"M. Night Shaym-Aliens!",
            "episode":"S01E04",
            "locations":[
                "Earth (C-137)",
                "unknown"
            ],
            "locationsCount":2
        },
        {
            "name":"Meeseeks and Destroy",
            "episode":"S01E05",
            "locations":[
                "Earth (C-137)",
                "Fantasy World",
                "Giant's Town",
                "Mr. Meeseeks Box",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"Rick Potion #9",
            "episode":"S01E06",
            "locations":[
                "Cronenberg Earth",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Raising Gazorpazorp",
            "episode":"S01E07",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Gazorpazorp",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Rixty Minutes",
            "episode":"S01E08",
            "locations":[
                "Earth (C-137)",
                "Earth (C-500A)",
                "Earth (Phone Dimension)",
                "Earth (Replacement Dimension)",
                "Gazorpazorp",
                "Hamster in Butt World",
                "Interdimensional Cable",
                "Trunk World",
                "unknown"
            ],
            "locationsCount":9
        },
        {
            "name":"Something Ricked This Way Comes",
            "episode":"S01E09",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Pluto",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Close Rick-counters of the Rick Kind",
            "episode":"S01E10",
            "locations":[
                "Cronenberg Earth",
                "Earth (C-137)",
                "Earth (Chair Dimension)",
                "Earth (Evil Rick's Target Dimension)",
                "Earth (J19ζ7)",
                "Earth (Phone Dimension)",
                "Earth (Pizza Dimension)",
                "Earth (Replacement Dimension)",
                "Eric Stoltz Mask Earth",
                "Greasy Grandma World",
                "Hideout Planet",
                "Mount Olympus",
                "Mr. Meeseeks Box",
                "unknown"
            ],
            "locationsCount":14
        },
        {
            "name":"Ricksy Business",
            "episode":"S01E11",
            "locations":[
                "Bepis 9",
                "Bird World",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Fantasy World",
                "Gear World",
                "Girvonesk",
                "Planet Squanch",
                "Testicle Monster Dimension",
                "unknown"
            ],
            "locationsCount":10
        },
        {
            "name":"A Rickle in Time",
            "episode":"S02E01",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "unknown"
            ],
            "locationsCount":3
        },
        {
            "name":"Mortynight Run",
            "episode":"S02E02",
            "locations":[
                "Earth (5-126)",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Gazorpazorp",
                "Gear World",
                "Glaagablaaga",
                "Mr. Meeseeks Box",
                "Roy: A Life Well Lived",
                "Testicle Monster Dimension",
                "unknown"
            ],
            "locationsCount":10
        },
        {
            "name":"Auto Erotic Assimilation",
            "episode":"S02E03",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Unity's Planet",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Total Rickall",
            "episode":"S02E04",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "unknown"
            ],
            "locationsCount":3
        },
        {
            "name":"Get Schwifty",
            "episode":"S02E05",
            "locations":[
                "Alphabetrium",
                "Bird World",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Girvonesk",
                "Larva Alien's Planet",
                "Planet Squanch",
                "Signus 5 Expanse",
                "unknown",
                "Árboles Mentirosos"
            ],
            "locationsCount":10
        },
        {
            "name":"The Ricks Must Be Crazy",
            "episode":"S02E06",
            "locations":[
                "Earth (C-137)",
                "Earth (Giant Telepathic Spiders Dimension)",
                "Earth (Replacement Dimension)",
                "Kyle's Teenyverse",
                "Rick's Battery Microverse",
                "Zeep Xanflorp's Miniverse",
                "unknown"
            ],
            "locationsCount":7
        },
        {
            "name":"Big Trouble in Little Sanchez",
            "episode":"S02E07",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Nuptia 4",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Interdimensional Cable 2: Tempting Fate",
            "episode":"S02E08",
            "locations":[
                "Bepis 9",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Glaagablaaga",
                "Hamster in Butt World",
                "Larva Alien's Planet",
                "Plopstar",
                "unknown",
                "Árboles Mentirosos"
            ],
            "locationsCount":9
        },
        {
            "name":"Look Who's Purging Now",
            "episode":"S02E09",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Purge Planet",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"The Wedding Squanchers",
            "episode":"S02E10",
            "locations":[
                "Bird World",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Glaagablaaga",
                "Larva Alien's Planet",
                "Planet Squanch",
                "unknown",
                "Árboles Mentirosos"
            ],
            "locationsCount":8
        },
        {
            "name":"The Rickshank Rickdemption",
            "episode":"S03E01",
            "locations":[
                "Bird World",
                "Earth (C-137)",
                "Earth (D-99)",
                "Earth (J19ζ7)",
                "Earth (Replacement Dimension)",
                "unknown"
            ],
            "locationsCount":6
        },
        {
            "name":"Rickmancing the Stone",
            "episode":"S03E02",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Post-Apocalyptic Earth",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Pickle Rick",
            "episode":"S03E03",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "unknown"
            ],
            "locationsCount":3
        },
        {
            "name":"Vindicators 3: The Return of Worldender",
            "episode":"S03E04",
            "locations":[
                "Bepis 9",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Gear World",
                "Girvonesk",
                "unknown"
            ],
            "locationsCount":6
        },
        {
            "name":"The Whirly Dirly Conspiracy",
            "episode":"S03E05",
            "locations":[
                "Bird World",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Resort Planet",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"Rest and Ricklaxation",
            "episode":"S03E06",
            "locations":[
                "Abadango",
                "Detoxifier",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"The Ricklantis Mixup",
            "episode":"S03E07",
            "locations":[
                "Citadel of Ricks",
                "Earth (C-137)",
                "Earth (D716)",
                "Earth (D716-B)",
                "Earth (D716-C)",
                "Earth (J-22)",
                "Earth (K-22)",
                "Earth (K-83)",
                "Earth (Replacement Dimension)",
                "Trunk World",
                "unknown"
            ],
            "locationsCount":11
        },
        {
            "name":"Morty's Mind Blowers",
            "episode":"S03E08",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Mr. Meeseeks Box",
                "The Menagerie",
                "Venzenulon 7",
                "unknown"
            ],
            "locationsCount":6
        },
        {
            "name":"The ABC's of Beth",
            "episode":"S03E09",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Krootabulon",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"The Rickchurian Mortydate",
            "episode":"S03E10",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Mega Gargantuan Kingdom",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Edge of Tomorty: Rick, Die, Rickpeat",
            "episode":"S04E01",
            "locations":[
                "Earth (C-137)",
                "Earth (Fascist Dimension)",
                "Earth (Fascist Shrimp Dimension)",
                "Earth (Fascist Teddy Bear Dimension)",
                "Earth (Replacement Dimension)",
                "Earth (Wasp Dimension)",
                "Mr. Meeseeks Box",
                "unknown"
            ],
            "locationsCount":8
        },
        {
            "name":"The Old Man and the Seat",
            "episode":"S04E02",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Globaflyn",
                "Midland Quasar",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"One Crew Over the Crewcoo's Morty",
            "episode":"S04E03",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Earth (Tusk Dimension)",
                "Gramuflack",
                "Mount Olympus",
                "Plitzville Montana",
                "unknown"
            ],
            "locationsCount":7
        },
        {
            "name":"Claw and Hoarder: Special Ricktim's Morty",
            "episode":"S04E04",
            "locations":[
                "Draygon",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Rattlestar Ricklactica",
            "episode":"S04E05",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Snake Planet",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Never Ricking Morty",
            "episode":"S04E06",
            "locations":[
                "Earth (C-137)",
                "Morty’s Story",
                "Ricks’s Story",
                "Story Train",
                "Tickets Please Guy Nightmare",
                "unknown"
            ],
            "locationsCount":6
        },
        {
            "name":"Promortyus",
            "episode":"S04E07",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Glorzo Asteroid",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"The Vat of Acid Episode",
            "episode":"S04E08",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Merged Universe",
                "Near-Duplicate Reality",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"Childrick of Mort",
            "episode":"S04E09",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Gaia",
                "Mount Olympus",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"Star Mort: Rickturn of the Jerri",
            "episode":"S04E10",
            "locations":[
                "Bird World",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Gromflom Prime",
                "Planet Squanch",
                "unknown"
            ],
            "locationsCount":6
        },
        {
            "name":"Mort Dinner Rick Andre",
            "episode":"S05E01",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Narnia Dimension",
                "The Ocean",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"Mortyplicity",
            "episode":"S05E02",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Interdimensional Cable",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"A Rickconvenient Mort",
            "episode":"S05E03",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Elemental Rings",
                "Ferkus 9",
                "Morglutz",
                "Slartivart",
                "unknown"
            ],
            "locationsCount":7
        },
        {
            "name":"Rickdependence Spray",
            "episode":"S05E04",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Morty",
                "Near-Duplicate Reality",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"Amortycan Grickfitti",
            "episode":"S05E05",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Hell",
                "Space Tahoe",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"Rick & Morty's Thanksploitation Spectacular",
            "episode":"S05E06",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "France",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Gotron Jerrysis Rickvangelion",
            "episode":"S05E07",
            "locations":[
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Normal Size Bug Dimension",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Rickternal Friendshine of the Spotless Mort",
            "episode":"S05E08",
            "locations":[
                "Bird World",
                "Birdperson's Consciousness",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "unknown"
            ],
            "locationsCount":5
        },
        {
            "name":"Forgetting Sarick Mortshall",
            "episode":"S05E09",
            "locations":[
                "Avian Planet",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "unknown"
            ],
            "locationsCount":4
        },
        {
            "name":"Rickmurai Jack",
            "episode":"S05E10",
            "locations":[
                "Bird World",
                "Citadel of Ricks",
                "Earth (C-137)",
                "Earth (Replacement Dimension)",
                "Earth (Unknown dimension)",
                "Rick and Two Crows Planet",
                "unknown"
            ],
            "locationsCount":7
        }
    ]);
});
