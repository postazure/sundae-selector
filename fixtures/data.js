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
              {"name": "Small", price: 325},
              {"name": "Medium", price: 450},
              {"name": "Large", price: 600}
            ]
          },
          {
            "name": "Material",
            "allowableCount": 1,
            "choices": [
              {"name": "Cake Cone", price: 0},
              {"name": "Waffle Cone", price: 25},
              {"name": "Bowl Cone", price: 175},
              {"name": "Paper Bowl", price: 0},
              {"name": "Collector Bowl", price: 2500}
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
              {"name": "Vanilla", price: 0},
              {"name": "Chocolate", price: 0},
              {"name": "Pumpkin", price: 0},
              {"name": "Rocky Road", price: 0},
              {"name": "Coffee", price: 0}
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
              {"name": "Hot Fudge", price: 100},
              {"name": "Butterscotch", price: 100},
              {"name": "Caramel", price: 100},
              {"name": "Strawberry", price: 150},
              {"name": "Sweetened Condensed Milk", price: 200},
              {"name": "Marshmallow Fluff", price: 200}
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
              {"name": "Walnuts", price: 10},
              {"name": "Peanuts", price: 25},
              {"name": "Pistachios", price: 50},
              {"name": "Almonds", price: 25}
            ]
          },
          {
            "name": "Sprinkles",
            "allowableCount": 1,
            "choices": [
              {"name": "Rainbow", price: 25},
              {"name": "Chocolate", price: 25},
              {"name": "Chocolate Chips", price: 50}
            ]
          },
          {
            "name": "Miscellaneous",
            "allowableCount": 3,
            "choices": [
              {"name": "Whipped Cream", price: 100},
              {"name": "Cherry", price: 0},
              {"name": "Nutella", price: 175}
            ]
          }
        ]
      }
    ]
  }
}
