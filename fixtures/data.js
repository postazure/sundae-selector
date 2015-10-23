export default class FixtureData {
  customizations() {
    return [
      {
        "name": "Container",
        "selections": [
          {
            "name": "Size",
            "allowableCount": 1,
            "choices": [
              {"name": "Small"},
              {"name": "Medium"},
              {"name": "Large"}
            ]
          },
          {
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
        ]
      },
      {
        "name": "Ice Cream",
        "selections": [
          {
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
        ]
      },
      {
        "name": "Sauces",
        "selections": [
          {
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
        ]
      },
      {
        "name": "Toppings",
        "selections": [
          {
            "name": "Nuts",
            "allowableCount": 1,
            "choices": [
              {"name": "Walnuts"},
              {"name": "Peanuts"},
              {"name": "Pistachios"},
              {"name": "Almonds"}
            ]
          },
          {
            "name": "Sprinkles",
            "allowableCount": 1,
            "choices": [
              {"name": "Rainbow"},
              {"name": "Chocolate"},
              {"name": "Chocolate Chips"}
            ]
          },
          {
            "name": "Miscellaneous",
            "allowableCount": 3,
            "choices": [
              {"name": "Whipped Cream"},
              {"name": "Cherry"},
              {"name": "Nutella"}
            ]
          }
        ]
      }
    ]
  }
}
