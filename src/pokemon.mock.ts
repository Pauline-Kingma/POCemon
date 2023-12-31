import { Pokemon } from './pokemon.models';

export const pokemonMock: Pokemon[] =
  [
    {
      id: 25,
      name: "Pikachu",
      type: "Electric",
      size: {
        height: "0.4 m",
        weight: "6.0 kg"
      },
      abilities: [
        "Static",
        "Lightning Rod"
      ],
      base_stats: {
        HP: 35,
        Attack: 55,
        Defense: 40,
        SpecialAttack: 50,
        SpecialDefense: 50,
        Speed: 90
      },
      evolutions: [
        {
          name: "Raichu",
          method: "Use Thunder Stone"
        }
      ],
      description: "Pikachu is an Electric-type Pokémon known for its speed and agility."
    },
    {
      id: 6,
      name: "Charizard",
      type: "Fire/Flying",
      size: {
        height: "1.7 m",
        weight: "90.5 kg"
      },
      abilities: [
        "Blaze",
        "Solar Power"
      ],
      base_stats: {
        HP: 78,
        Attack: 84,
        Defense: 78,
        SpecialAttack: 109,
        SpecialDefense: 85,
        Speed: 100
      },
      evolutions: [
        {
          name: "Charmeleon",
          method: "Level up"
        },
        {
          name: "Charmander",
          method: "Level up"
        }
      ],
      description: "Charizard is a Fire/Flying-type Pokémon known for its powerful fiery attacks."
    },
    {
      id: 1,
      name: "Bulbasaur",
      type: ["Grass", "Poison"],
      size: {
        height: "0.7 m",
        weight: "6.9 kg"
      },
      abilities: [
        "Overgrow",
        "Chlorophyll"
      ],
      base_stats: {
        HP: 45,
        Attack: 49,
        Defense: 49,
        SpecialAttack: 65,
        SpecialDefense: 65,
        Speed: 45
      },
      evolutions: [
        {
          name: "Ivysaur",
          method: "Level up"
        },
        {
          name: "Charizard",
          method: "Level up"
        }
      ],
      description: "Bulbasaur is a dual-type Grass/Poison Pokémon known for the plant bulb on its back."
    },
    {
      id: 7,
      name: "Squirtle",
      type: "Water",
      size: {
        height: "0.5 m",
        weight: "9.0 kg"
      },
      abilities: [
        "Torrent",
        "Rain Dish"
      ],
      base_stats: {
        HP: 44,
        Attack: 48,
        Defense: 65,
        SpecialAttack: 50,
        SpecialDefense: 64,
        Speed: 43
      },
      evolutions: [
        {
          name: "Wartortle",
          method: "Level up"
        },
        {
          name: "Blastoise",
          method: "Level up"
        }
      ],
      description: "Squirtle is a Water-type Pokémon known for its water-based attacks."
    },
    {
      id: 39,
      name: "Jigglypuff",
      type: ["Normal", "Fairy"],
      size: {
        height: "0.5 m",
        weight: "5.5 kg"
      },
      abilities: [
        "Cute Charm",
        "Competitive"
      ],
      base_stats: {
        HP: 115,
        Attack: 45,
        Defense: 20,
        SpecialAttack: 45,
        SpecialDefense: 25,
        Speed: 20
      },
      evolutions: [
        {
          name: "Wigglytuff",
          method: "Use Moon Stone"
        }
      ],
      description: "Jigglypuff is a Normal/Fairy-type Pokémon known for its soothing lullabies."
    },
    {
      id: 66,
      name: "Machop",
      type: "Fighting",
      size: {
        height: "0.8 m",
        weight: "19.5 kg"
      },
      abilities: [
        "Guts",
        "No Guard"
      ],
      base_stats: {
        HP: 70,
        Attack: 80,
        Defense: 50,
        SpecialAttack: 35,
        SpecialDefense: 35,
        Speed: 35
      },
      evolutions: [
        {
          name: "Machoke",
          method: "Level up"
        },
        {
          name: "Machamp",
          method: "Trade"
        }
      ],
      description: "Machop is a Fighting-type Pokémon known for its incredible strength."
    },
    {
      id: 74,
      name: "Geodude",
      type: ["Rock", "Ground"],
      size: {
        height: "0.4 m",
        weight: "20.0 kg"
      },
      abilities: [
        "Rock Head",
        "Sturdy"
      ],
      base_stats: {
        HP: 40,
        Attack: 80,
        Defense: 100,
        SpecialAttack: 30,
        SpecialDefense: 30,
        Speed: 20
      },
      evolutions: [
        {
          name: "Graveler",
          method: "Level up"
        },
        {
          name: "Golem",
          method: "Trade"
        }
      ],
      description: "Geodude is a Rock/Ground-type Pokémon known for its rocky body."
    },
    {
      id: 16,
      name: "Pidgey",
      type: ["Normal", "Flying"],
      size: {
        height: "0.3 m",
        weight: "1.8 kg"
      },
      abilities: [
        "Keen Eye",
        "Tangled Feet"
      ],
      base_stats: {
        HP: 40,
        Attack: 45,
        Defense: 40,
        SpecialAttack: 35,
        SpecialDefense: 35,
        Speed: 56
      },
      evolutions: [
        {
          name: "Pidgeotto",
          method: "Level up"
        },
        {
          name: "Pidgeot",
          method: "Level up"
        }
      ],
      description: "Pidgey is a Normal/Flying-type Pokémon known for its keen eyesight."
    },
    {
      id: 92,
      name: "Gastly",
      type: ["Ghost", "Poison"],
      size: {
        height: "1.3 m",
        weight: "0.1 kg"
      },
      abilities: [
        "Levitate"
      ],
      base_stats: {
        HP: 30,
        Attack: 35,
        Defense: 30,
        SpecialAttack: 100,
        SpecialDefense: 35,
        Speed: 80
      },
      evolutions: [
        {
          name: "Haunter",
          method: "Level up"
        },
        {
          name: "Gengar",
          method: "Trade"
        }
      ],
      description: "Gastly is a Ghost/Poison-type Pokémon known for its ability to phase through walls."
    },
    {
      id: 95,
      name: "Onix",
      type: ["Rock", "Ground"],
      size: {
        height: "8.8 m",
        weight: "210.0 kg"
      },
      abilities: [
        "Rock Head",
        "Sturdy"
      ],
      base_stats: {
        HP: 35,
        Attack: 45,
        Defense: 160,
        SpecialAttack: 30,
        SpecialDefense: 45,
        Speed: 70
      },
      evolutions: [
        {
          name: "Steelix",
          method: "Trade with Metal Coat"
        }
      ],
      description: "Onix is a Rock/Ground-type Pokémon known for its massive size and strength."
    },
    {
      id: 96,
      name: "Drowzee",
      type: "Psychic",
      size: {
        height: "1.0 m",
        weight: "32.4 kg"
      },
      abilities: [
        "Insomnia",
        "Forewarn"
      ],
      base_stats: {
        HP: 60,
        Attack: 48,
        Defense: 45,
        SpecialAttack: 43,
        SpecialDefense: 90,
        Speed: 42
      },
      evolutions: [
        {
          name: "Hypno",
          method: "Level up"
        }
      ],
      description: "Drowzee is a Psychic-type Pokémon known for its sleep-inducing abilities."
    },
    {
      id: 98,
      name: "Krabby",
      type: "Water",
      size: {
        height: "0.4 m",
        weight: "6.5 kg"
      },
      abilities: [
        "Hyper Cutter",
        "Shell Armor"
      ],
      base_stats: {
        HP: 30,
        Attack: 105,
        Defense: 90,
        SpecialAttack: 25,
        SpecialDefense: 25,
        Speed: 50
      },
      evolutions: [
        {
          name: "Kingler",
          method: "Level up"
        }
      ],
      description: "Krabby is a Water-type Pokémon known for its powerful pincers."
    }   
  ];
