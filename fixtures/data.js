export default class FixtureData {
  customizations() {
    return [
      {
        "name": "Container",
        "selections": {
          "size": {
            "name": "Size",
            "allowableCount": 1,
            "choices": [
              {"name": "Small"},
              {"name": "Medium"},
              {"name": "Large"}
            ]
          },

          "material": {
            "name": "Material",
            "allowableCount": 1,
            "choices": [
              {"name": "Cake Cone"},
              {"name": "Waffle Cone"},
              {"name": "Bowl Cone"},
              {"name": "Paper Bowl"},
              {"name": "Collector Bowl"}
            ]
          }
        }
      },
      {
        "name": "Ice Cream",
        "selections": {
          "flavor": {
            "name": "Flavor",
            "allowableCount": 3,
            "choices": [
              {"name": "Vanilla"},
              {"name": "Chocolate"},
              {"name": "Pumpkin"},
              {"name": "Rocky Road"},
              {"name": "Coffee"}
            ]
          }
        }
      },
      {
        "name": "Sauces",
        "selections": {
          "flavor": {
            "name": "Flavor",
            "allowableCount": 1,
            "choices": [
              {"name": "Hot Fudge"},
              {"name": "Butterscotch"},
              {"name": "Caramel"},
              {"name": "Strawberry"},
              {"name": "Sweetened Condensed Milk"},
              {"name": "Marshmallow Fluff"}
            ]
          }
        }
      },
      {
        "name": "Toppings",
        "selections": {
          "nuts": {
            "name": "Nuts",
            "allowableCount": 1,
            "choices": [
              {"name": "Walnuts"},
              {"name": "Peanuts"},
              {"name": "Pistachios"},
              {"name": "Almonds"}
            ]
          },
          "sprinkles": {
            "name": "Sprinkles",
            "allowableCount": 1,
            "choices": [
              {"name": "Rainbow"},
              {"name": "Chocolate"},
              {"name": "Chocolate Chips"}
            ]
          },
          "miscellaneous": {
            "name": "Miscellaneous",
            "allowableCount": 3,
            "choices": [
              {"name": "Whipped Cream"},
              {"name": "Cherry"},
              {"name": "Nutella"}
            ]
          }
        }
      }
    ]
  }
}
