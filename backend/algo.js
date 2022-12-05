

const mergeData = [
  {
    "foodClass": "Branded",
    "description": "(SOFT) GRANOLA BITES, APPLE RAISIN",
    "foodNutrients": [
      {
        "type": "FoodNutrient",
        "id": 23160698,
        "nutrient": {
          "id": 1003,
          "number": "203",
          "name": "Protein",
          "rank": 600,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 5
      },
      {
        "type": "FoodNutrient",
        "id": 23160699,
        "nutrient": {
          "id": 1004,
          "number": "204",
          "name": "Total lipid (fat)",
          "rank": 800,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 20
      },
      {
        "type": "FoodNutrient",
        "id": 23160700,
        "nutrient": {
          "id": 1005,
          "number": "205",
          "name": "Carbohydrate, by difference",
          "rank": 1110,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 60
      },
      {
        "type": "FoodNutrient",
        "id": 23160701,
        "nutrient": {
          "id": 1008,
          "number": "208",
          "name": "Energy",
          "rank": 300,
          "unitName": "kcal"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 450
      },
      {
        "type": "FoodNutrient",
        "id": 23160702,
        "nutrient": {
          "id": 2000,
          "number": "269",
          "name": "Sugars, Total",
          "rank": 1510,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 22.5
      },
      {
        "type": "FoodNutrient",
        "id": 23160703,
        "nutrient": {
          "id": 1079,
          "number": "291",
          "name": "Fiber, total dietary",
          "rank": 1200,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 7.5
      },
      {
        "type": "FoodNutrient",
        "id": 23160704,
        "nutrient": {
          "id": 1087,
          "number": "301",
          "name": "Calcium, Ca",
          "rank": 5300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 50
      },
      {
        "type": "FoodNutrient",
        "id": 23160705,
        "nutrient": {
          "id": 1089,
          "number": "303",
          "name": "Iron, Fe",
          "rank": 5400,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 1.8
      },
      {
        "type": "FoodNutrient",
        "id": 23160706,
        "nutrient": {
          "id": 1093,
          "number": "307",
          "name": "Sodium, Na",
          "rank": 5800,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 300
      },
      {
        "type": "FoodNutrient",
        "id": 23160707,
        "nutrient": {
          "id": 1104,
          "number": "318",
          "name": "Vitamin A, IU",
          "rank": 7500,
          "unitName": "IU"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23160708,
        "nutrient": {
          "id": 1162,
          "number": "401",
          "name": "Vitamin C, total ascorbic acid",
          "rank": 6300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23160709,
        "nutrient": {
          "id": 1253,
          "number": "601",
          "name": "Cholesterol",
          "rank": 15700,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23160710,
        "nutrient": {
          "id": 1257,
          "number": "605",
          "name": "Fatty acids, total trans",
          "rank": 15400,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23160711,
        "nutrient": {
          "id": 1258,
          "number": "606",
          "name": "Fatty acids, total saturated",
          "rank": 9700,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 15
      }
    ],
    "foodAttributes": [],
    "modifiedDate": "7/14/2017",
    "availableDate": "7/14/2017",
    "marketCountry": "United States",
    "brandOwner": "MySuperFoods Company LLC",
    "brandName": "MYSUPERSNACK",
    "gtinUpc": "851893004015",
    "dataSource": "LI",
    "ingredients": "WHOLE OATS, COCONUT OIL, BROWN RICE SYRUP, DATES, OAT BRAN, BROWN RICE FLOUR, DRIED APPLES, CHIA SEEDS, TAPIOCA FLOUR, DRIED RAISINS, STABILIZER BLEND (CITRUS FIBER, XANTHAN GUM, GUM ARABIC), SEA SALT, NATURAL FLAVOR, CINNAMON, BAKING SODA.",
    "servingSize": 40,
    "servingSizeUnit": "g",
    "labelNutrients": {
      "fat": {
        "value": 8
      },
      "saturatedFat": {
        "value": 6
      },
      "transFat": {
        "value": 0
      },
      "cholesterol": {
        "value": 0
      },
      "sodium": {
        "value": 120
      },
      "carbohydrates": {
        "value": 24
      },
      "fiber": {
        "value": 3
      },
      "sugars": {
        "value": 9
      },
      "protein": {
        "value": 2
      },
      "calcium": {
        "value": 20
      },
      "iron": {
        "value": 0.72
      },
      "calories": {
        "value": 180
      }
    },
    "packageWeight": "1.41 oz/40 g",
    "tradeChannels": [
      "NO_TRADE_CHANNEL"
    ],
    "microbes": [],
    "brandedFoodCategory": "Snack, Energy & Granola Bars",
    "publicationDate": "7/29/2021",
    "foodUpdateLog": [
      {
        "foodClass": "Branded",
        "description": "(SOFT) GRANOLA BITES, APPLE RAISIN",
        "foodAttributes": [
          {
            "id": 1967647,
            "name": "Description",
            "value": "2",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "7/29/2021",
        "fdcId": 1858967,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "(SOFT) GRANOLA BITES",
        "foodAttributes": [
          {
            "id": 1482646,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "3/19/2021",
        "fdcId": 1483060,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "(SOFT) GRANOLA BITES",
        "foodAttributes": [
          {
            "id": 1115274,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "2/26/2021",
        "fdcId": 1191020,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "(SOFT) GRANOLA BITES",
        "foodAttributes": [],
        "publicationDate": "4/1/2019",
        "fdcId": 379023,
        "dataType": "Branded"
      }
    ],
    "fdcId": 1858967,
    "dataType": "Branded"
  },
  {
    "foodClass": "Branded",
    "description": "(GROUND SHRIMP)",
    "foodNutrients": [
      {
        "type": "FoodNutrient",
        "id": 23600469,
        "nutrient": {
          "id": 1003,
          "number": "203",
          "name": "Protein",
          "rank": 600,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 66.5
      },
      {
        "type": "FoodNutrient",
        "id": 23600470,
        "nutrient": {
          "id": 1004,
          "number": "204",
          "name": "Total lipid (fat)",
          "rank": 800,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 3.89
      },
      {
        "type": "FoodNutrient",
        "id": 23600471,
        "nutrient": {
          "id": 1005,
          "number": "205",
          "name": "Carbohydrate, by difference",
          "rank": 1110,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 3.57
      },
      {
        "type": "FoodNutrient",
        "id": 23600472,
        "nutrient": {
          "id": 1008,
          "number": "208",
          "name": "Energy",
          "rank": 300,
          "unitName": "kcal"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 314
      },
      {
        "type": "FoodNutrient",
        "id": 23600473,
        "nutrient": {
          "id": 2000,
          "number": "269",
          "name": "Sugars, Total",
          "rank": 1510,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 2.39
      },
      {
        "type": "FoodNutrient",
        "id": 23600474,
        "nutrient": {
          "id": 1079,
          "number": "291",
          "name": "Fiber, total dietary",
          "rank": 1200,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 1
      },
      {
        "type": "FoodNutrient",
        "id": 23600475,
        "nutrient": {
          "id": 1087,
          "number": "301",
          "name": "Calcium, Ca",
          "rank": 5300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 536
      },
      {
        "type": "FoodNutrient",
        "id": 23600476,
        "nutrient": {
          "id": 1089,
          "number": "303",
          "name": "Iron, Fe",
          "rank": 5400,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 9.64
      },
      {
        "type": "FoodNutrient",
        "id": 23600477,
        "nutrient": {
          "id": 1093,
          "number": "307",
          "name": "Sodium, Na",
          "rank": 5800,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 1800
      },
      {
        "type": "FoodNutrient",
        "id": 23600478,
        "nutrient": {
          "id": 1104,
          "number": "318",
          "name": "Vitamin A, IU",
          "rank": 7500,
          "unitName": "IU"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 5360
      },
      {
        "type": "FoodNutrient",
        "id": 23600479,
        "nutrient": {
          "id": 1162,
          "number": "401",
          "name": "Vitamin C, total ascorbic acid",
          "rank": 6300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23600480,
        "nutrient": {
          "id": 1253,
          "number": "601",
          "name": "Cholesterol",
          "rank": 15700,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 309
      },
      {
        "type": "FoodNutrient",
        "id": 23600481,
        "nutrient": {
          "id": 1257,
          "number": "605",
          "name": "Fatty acids, total trans",
          "rank": 15400,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23600482,
        "nutrient": {
          "id": 1258,
          "number": "606",
          "name": "Fatty acids, total saturated",
          "rank": 9700,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 1.61
      }
    ],
    "foodAttributes": [],
    "modifiedDate": "1/29/2018",
    "availableDate": "1/29/2018",
    "marketCountry": "United States",
    "brandOwner": "Mi Costenita Food Dist.",
    "brandName": "MI COSTENITA",
    "gtinUpc": "714444001218",
    "dataSource": "LI",
    "ingredients": "GROUND SHRIMP, SALT, FD&C RED #40.",
    "servingSize": 28,
    "servingSizeUnit": "g",
    "labelNutrients": {
      "fat": {
        "value": 1.09
      },
      "saturatedFat": {
        "value": 0.451
      },
      "transFat": {
        "value": 0
      },
      "cholesterol": {
        "value": 86.5
      },
      "sodium": {
        "value": 504
      },
      "carbohydrates": {
        "value": 1
      },
      "fiber": {
        "value": 0.28
      },
      "sugars": {
        "value": 0.669
      },
      "protein": {
        "value": 18.6
      },
      "calcium": {
        "value": 150
      },
      "iron": {
        "value": 2.7
      },
      "calories": {
        "value": 87.9
      }
    },
    "packageWeight": "57 g/2 oz",
    "tradeChannels": [
      "NO_TRADE_CHANNEL"
    ],
    "microbes": [],
    "brandedFoodCategory": "Seasoning Mixes, Salts, Marinades & Tenderizers",
    "publicationDate": "7/29/2021",
    "foodUpdateLog": [
      {
        "foodClass": "Branded",
        "description": "(GROUND SHRIMP)",
        "foodAttributes": [
          {
            "id": 1974615,
            "name": "Nutrient Added",
            "value": "5",
            "foodAttributeType": {
              "id": 998
            }
          },
          {
            "id": 1974616,
            "name": "Nutrient Updated",
            "value": "4",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "7/29/2021",
        "fdcId": 1863073,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "(GROUND SHRIMP)",
        "foodAttributes": [
          {
            "id": 1494826,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "3/19/2021",
        "fdcId": 1491547,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "(GROUND SHRIMP)",
        "foodAttributes": [
          {
            "id": 1127716,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "2/26/2021",
        "fdcId": 1199500,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "(GROUND SHRIMP)",
        "foodAttributes": [],
        "publicationDate": "4/1/2019",
        "fdcId": 388587,
        "dataType": "Branded"
      }
    ],
    "fdcId": 1863073,
    "dataType": "Branded"
  },
  {
    "foodClass": "Branded",
    "description": "(PICKLED MUSTARD GREEN) TAKANA, (PICKLED MUSTARD GREEN)",
    "foodNutrients": [
      {
        "type": "FoodNutrient",
        "id": 23560314,
        "nutrient": {
          "id": 1003,
          "number": "203",
          "name": "Protein",
          "rank": 600,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCSL",
          "description": "Calculated from a less than value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 3.53
      },
      {
        "type": "FoodNutrient",
        "id": 23560315,
        "nutrient": {
          "id": 1004,
          "number": "204",
          "name": "Total lipid (fat)",
          "rank": 800,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23560316,
        "nutrient": {
          "id": 1005,
          "number": "205",
          "name": "Carbohydrate, by difference",
          "rank": 1110,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 3.53
      },
      {
        "type": "FoodNutrient",
        "id": 23560317,
        "nutrient": {
          "id": 1008,
          "number": "208",
          "name": "Energy",
          "rank": 300,
          "unitName": "kcal"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 21
      },
      {
        "type": "FoodNutrient",
        "id": 23560318,
        "nutrient": {
          "id": 2000,
          "number": "269",
          "name": "Sugars, Total",
          "rank": 1510,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23560319,
        "nutrient": {
          "id": 1079,
          "number": "291",
          "name": "Fiber, total dietary",
          "rank": 1200,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCSL",
          "description": "Calculated from a less than value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 3.5
      },
      {
        "type": "FoodNutrient",
        "id": 23560320,
        "nutrient": {
          "id": 1087,
          "number": "301",
          "name": "Calcium, Ca",
          "rank": 5300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 71
      },
      {
        "type": "FoodNutrient",
        "id": 23560321,
        "nutrient": {
          "id": 1089,
          "number": "303",
          "name": "Iron, Fe",
          "rank": 5400,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0.63
      },
      {
        "type": "FoodNutrient",
        "id": 23560322,
        "nutrient": {
          "id": 1093,
          "number": "307",
          "name": "Sodium, Na",
          "rank": 5800,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 705
      },
      {
        "type": "FoodNutrient",
        "id": 23560323,
        "nutrient": {
          "id": 1104,
          "number": "318",
          "name": "Vitamin A, IU",
          "rank": 7500,
          "unitName": "IU"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23560324,
        "nutrient": {
          "id": 1162,
          "number": "401",
          "name": "Vitamin C, total ascorbic acid",
          "rank": 6300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23560325,
        "nutrient": {
          "id": 1253,
          "number": "601",
          "name": "Cholesterol",
          "rank": 15700,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23560326,
        "nutrient": {
          "id": 1257,
          "number": "605",
          "name": "Fatty acids, total trans",
          "rank": 15400,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23560327,
        "nutrient": {
          "id": 1258,
          "number": "606",
          "name": "Fatty acids, total saturated",
          "rank": 9700,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      }
    ],
    "foodAttributes": [],
    "modifiedDate": "3/17/2021",
    "availableDate": "3/17/2021",
    "marketCountry": "United States",
    "brandOwner": "Akiyama Tsukemono California",
    "brandName": "AKIYAMA",
    "gtinUpc": "087902104005",
    "dataSource": "LI",
    "ingredients": "MUSTARD GREEN, WATER, SALT, MONOSODIUM GLUTAMATE, CITRIC ACID.",
    "servingSize": 28.350000381469727,
    "servingSizeUnit": "g",
    "labelNutrients": {
      "fat": {
        "value": 0
      },
      "saturatedFat": {
        "value": 0
      },
      "transFat": {
        "value": 0
      },
      "cholesterol": {
        "value": 0
      },
      "sodium": {
        "value": 200
      },
      "carbohydrates": {
        "value": 1
      },
      "fiber": {
        "value": 0.992
      },
      "sugars": {
        "value": 0
      },
      "protein": {
        "value": 1
      },
      "calcium": {
        "value": 20.1
      },
      "iron": {
        "value": 0.179
      },
      "calories": {
        "value": 5.95
      }
    },
    "packageWeight": "10 oz/283 g",
    "tradeChannels": [
      "NO_TRADE_CHANNEL"
    ],
    "microbes": [],
    "brandedFoodCategory": "Pickles, Olives, Peppers & Relishes",
    "publicationDate": "7/29/2021",
    "foodUpdateLog": [
      {
        "foodClass": "Branded",
        "description": "(PICKLED MUSTARD GREEN) TAKANA, (PICKLED MUSTARD GREEN)",
        "foodAttributes": [
          {
            "id": 1979277,
            "name": "Added Package Weight",
            "value": "9",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "7/29/2021",
        "fdcId": 1866205,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "(PICKLED MUSTARD GREEN) TAKANA, (PICKLED MUSTARD GREEN)",
        "foodAttributes": [
          {
            "id": 1844759,
            "name": "Description",
            "value": "2",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "6/17/2021",
        "fdcId": 1767274,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "AKIYAMA, TAKANA GREEN MUSTARD PICKLE",
        "foodAttributes": [
          {
            "id": 1503447,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "3/19/2021",
        "fdcId": 1498597,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "AKIYAMA, TAKANA GREEN MUSTARD PICKLE",
        "foodAttributes": [
          {
            "id": 1136422,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "2/26/2021",
        "fdcId": 1206544,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "AKIYAMA, TAKANA GREEN MUSTARD PICKLE",
        "foodAttributes": [],
        "publicationDate": "4/1/2019",
        "fdcId": 396535,
        "dataType": "Branded"
      }
    ],
    "fdcId": 1866205,
    "dataType": "Branded"
  },
  {
    "foodClass": "Branded",
    "description": "(SAUSAGE MADE WITH PORK AND TURKEY) - SAUSAGE GRAVY IN A FLAKY CRUST, SAUSAGE & GRAVY DEEP DISH",
    "foodNutrients": [
      {
        "type": "FoodNutrient",
        "id": 19379669,
        "nutrient": {
          "id": 1003,
          "number": "203",
          "name": "Protein",
          "rank": 600,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 5.56
      },
      {
        "type": "FoodNutrient",
        "id": 19379670,
        "nutrient": {
          "id": 1004,
          "number": "204",
          "name": "Total lipid (fat)",
          "rank": 800,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 16.7
      },
      {
        "type": "FoodNutrient",
        "id": 19379671,
        "nutrient": {
          "id": 1005,
          "number": "205",
          "name": "Carbohydrate, by difference",
          "rank": 1110,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 22.2
      },
      {
        "type": "FoodNutrient",
        "id": 19379672,
        "nutrient": {
          "id": 1008,
          "number": "208",
          "name": "Energy",
          "rank": 300,
          "unitName": "kcal"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 263
      },
      {
        "type": "FoodNutrient",
        "id": 19379673,
        "nutrient": {
          "id": 2000,
          "number": "269",
          "name": "Sugars, Total",
          "rank": 1510,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 3.03
      },
      {
        "type": "FoodNutrient",
        "id": 19379674,
        "nutrient": {
          "id": 1079,
          "number": "291",
          "name": "Fiber, total dietary",
          "rank": 1200,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 1.5
      },
      {
        "type": "FoodNutrient",
        "id": 19379675,
        "nutrient": {
          "id": 1087,
          "number": "301",
          "name": "Calcium, Ca",
          "rank": 5300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 71
      },
      {
        "type": "FoodNutrient",
        "id": 19379676,
        "nutrient": {
          "id": 1089,
          "number": "303",
          "name": "Iron, Fe",
          "rank": 5400,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 1.16
      },
      {
        "type": "FoodNutrient",
        "id": 19379677,
        "nutrient": {
          "id": 1092,
          "number": "306",
          "name": "Potassium, K",
          "rank": 5700,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 116
      },
      {
        "type": "FoodNutrient",
        "id": 19379678,
        "nutrient": {
          "id": 1093,
          "number": "307",
          "name": "Sodium, Na",
          "rank": 5800,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 520
      },
      {
        "type": "FoodNutrient",
        "id": 19379679,
        "nutrient": {
          "id": 1110,
          "number": "324",
          "name": "Vitamin D (D2 + D3), International Units",
          "rank": 8650,
          "unitName": "IU"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 19379680,
        "nutrient": {
          "id": 1235,
          "number": "539",
          "name": "Sugars, added",
          "rank": 1540,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 1
      },
      {
        "type": "FoodNutrient",
        "id": 19379681,
        "nutrient": {
          "id": 1253,
          "number": "601",
          "name": "Cholesterol",
          "rank": 15700,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 18
      },
      {
        "type": "FoodNutrient",
        "id": 19379682,
        "nutrient": {
          "id": 1257,
          "number": "605",
          "name": "Fatty acids, total trans",
          "rank": 15400,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 19379683,
        "nutrient": {
          "id": 1258,
          "number": "606",
          "name": "Fatty acids, total saturated",
          "rank": 9700,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 5.56
      }
    ],
    "foodAttributes": [
      {
        "id": 1620020,
        "name": "Added Brand/Sub Brand Information",
        "value": "10",
        "foodAttributeType": {
          "id": 998,
          "name": "Update Log",
          "description": "Changes that were made to this food"
        }
      }
    ],
    "modifiedDate": "8/1/2019",
    "availableDate": "8/1/2019",
    "marketCountry": "United States",
    "brandOwner": "Conagra Frozen Foods",
    "brandName": "BANQUET",
    "gtinUpc": "031000101305",
    "dataSource": "LI",
    "ingredients": "FILLING: WATER, SAUSAGE CRUMBLE MADE WITH PORK AND TURKEY (PORK, MECHANICALLY SEPARATED TURKEY, SOY PROTEIN CONCENTRATE, SALT, SUGAR, SPICES, DEXTROSE, NATURAL FLAVORINGS, CITRIC ACID, BHA, BHT), NONFAT DRY MILK FORTIFIED WITH VITAMINS A AND D, MODIFIED CORN STARCH, CHICKEN FLAVOR (WHEAT FLOUR, CHICKEN FAT [WITH BHA, PROPYL GALLATE AND CITRIC ACID ADDED], FULLY HYDROGENATED COTTONSEED OIL), SOYBEAN OIL, NONFAT DRY MILK, SALT, ACETYLATED MONOGLYCERIDES, SPICE, XANTHAN GUM, GUAR GUM. CRUST: WHEAT FLOUR, LARD (DEODORIZED LARD, HYDROGENATED LARD, BHT [PRESERVATIVE]), WATER, DEXTROSE, SALT, CARAMEL COLOR.",
    "servingSize": 198,
    "servingSizeUnit": "g",
    "labelNutrients": {
      "fat": {
        "value": 33.1
      },
      "saturatedFat": {
        "value": 11
      },
      "transFat": {
        "value": 0
      },
      "cholesterol": {
        "value": 35.6
      },
      "sodium": {
        "value": 1030
      },
      "carbohydrates": {
        "value": 44
      },
      "fiber": {
        "value": 2.97
      },
      "sugars": {
        "value": 6
      },
      "protein": {
        "value": 11
      },
      "calcium": {
        "value": 141
      },
      "iron": {
        "value": 2.3
      },
      "potassium": {
        "value": 230
      },
      "addedSugar": {
        "value": 1.98
      },
      "calories": {
        "value": 521
      }
    },
    "tradeChannels": [
      "NO_TRADE_CHANNEL"
    ],
    "microbes": [],
    "brandedFoodCategory": "Frozen Dinners & Entrees",
    "publicationDate": "3/19/2021",
    "foodUpdateLog": [
      {
        "foodClass": "Branded",
        "description": "(SAUSAGE MADE WITH PORK AND TURKEY) - SAUSAGE GRAVY IN A FLAKY CRUST, SAUSAGE & GRAVY DEEP DISH",
        "foodAttributes": [
          {
            "id": 1620020,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "3/19/2021",
        "fdcId": 1595088,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "(SAUSAGE MADE WITH PORK AND TURKEY) - SAUSAGE GRAVY IN A FLAKY CRUST, SAUSAGE & GRAVY DEEP DISH",
        "foodAttributes": [
          {
            "id": 1252928,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "2/26/2021",
        "fdcId": 1302980,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "(SAUSAGE MADE WITH PORK AND TURKEY) - SAUSAGE GRAVY IN A FLAKY CRUST, SAUSAGE & GRAVY DEEP DISH",
        "foodAttributes": [],
        "publicationDate": "6/26/2020",
        "fdcId": 979333,
        "dataType": "Branded"
      }
    ],
    "fdcId": 1595088,
    "dataType": "Branded"
  },
  {
    "foodClass": "Branded",
    "description": "#1 HAM & PEPPERONI",
    "foodNutrients": [
      {
        "type": "FoodNutrient",
        "id": 23844144,
        "nutrient": {
          "id": 1003,
          "number": "203",
          "name": "Protein",
          "rank": 600,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 19.5
      },
      {
        "type": "FoodNutrient",
        "id": 23844145,
        "nutrient": {
          "id": 1004,
          "number": "204",
          "name": "Total lipid (fat)",
          "rank": 800,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 15.6
      },
      {
        "type": "FoodNutrient",
        "id": 23844146,
        "nutrient": {
          "id": 1005,
          "number": "205",
          "name": "Carbohydrate, by difference",
          "rank": 1110,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 19.5
      },
      {
        "type": "FoodNutrient",
        "id": 23844147,
        "nutrient": {
          "id": 1008,
          "number": "208",
          "name": "Energy",
          "rank": 300,
          "unitName": "kcal"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 299
      },
      {
        "type": "FoodNutrient",
        "id": 23844148,
        "nutrient": {
          "id": 2000,
          "number": "269",
          "name": "Sugars, Total",
          "rank": 1510,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 3.9
      },
      {
        "type": "FoodNutrient",
        "id": 23844149,
        "nutrient": {
          "id": 1079,
          "number": "291",
          "name": "Fiber, total dietary",
          "rank": 1200,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 1.3
      },
      {
        "type": "FoodNutrient",
        "id": 23844150,
        "nutrient": {
          "id": 1087,
          "number": "301",
          "name": "Calcium, Ca",
          "rank": 5300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 130
      },
      {
        "type": "FoodNutrient",
        "id": 23844151,
        "nutrient": {
          "id": 1089,
          "number": "303",
          "name": "Iron, Fe",
          "rank": 5400,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0.94
      },
      {
        "type": "FoodNutrient",
        "id": 23844152,
        "nutrient": {
          "id": 1093,
          "number": "307",
          "name": "Sodium, Na",
          "rank": 5800,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 1170
      },
      {
        "type": "FoodNutrient",
        "id": 23844153,
        "nutrient": {
          "id": 1104,
          "number": "318",
          "name": "Vitamin A, IU",
          "rank": 7500,
          "unitName": "IU"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 130
      },
      {
        "type": "FoodNutrient",
        "id": 23844154,
        "nutrient": {
          "id": 1162,
          "number": "401",
          "name": "Vitamin C, total ascorbic acid",
          "rank": 6300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23844155,
        "nutrient": {
          "id": 1253,
          "number": "601",
          "name": "Cholesterol",
          "rank": 15700,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 58
      },
      {
        "type": "FoodNutrient",
        "id": 23844156,
        "nutrient": {
          "id": 1257,
          "number": "605",
          "name": "Fatty acids, total trans",
          "rank": 15400,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 23844157,
        "nutrient": {
          "id": 1258,
          "number": "606",
          "name": "Fatty acids, total saturated",
          "rank": 9700,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 7.79
      }
    ],
    "foodAttributes": [],
    "modifiedDate": "7/14/2017",
    "availableDate": "7/14/2017",
    "marketCountry": "United States",
    "brandOwner": "Hormel Foods Corporation ",
    "subbrandName": "REV",
    "brandName": "HORMEL",
    "gtinUpc": "037600168588",
    "dataSource": "LI",
    "ingredients": "FLATBREAD (ENRICHED FLOUR [WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE MONONITRATE, RIBOFLAVIN, FOLIC ACID], WATER, VITAL WHEAT GLUTEN, LIQUID BROWN SUGAR, OAT FIBER, SOY FLOUR, CONTAINS 2% OR LESS OF SOYBEAN OIL, PRUNE JUICE CONCENTRATE, SODIUM ACID PYROPHOSPHATE, BAKING SODA, YEAST, WHEAT PROTEIN ISOLATE,POTASSIUM SORBATE & SODIUM PROPIONATE [PRESERVATIVES], CELLULOSE GUM,FUMARIC ACID, SALT, GUAR GUM, CALCIUM SULFATE, CARRAGEENAN, XANTHAN GUM, MALTODEXTRIN, ANNATTO COLOR, ENZYMES), PASTEURIZED PROCESS MOZZARELLA AND AMERICAN CHEESE PRODUCT (LOW MOISTURE PART-SKIM MOZZARELLA CHEESE [PART-SKIM MILK, CHEESE CULTURE, SALT, ENZYMES], AMERICAN CHEESE [MILK, CHEESE CULTURE, SALT, ENZYMES], WATER, CREAM, SODIUM PHOSPHATE, SALT, SORBIC ACID [PRESERVATIVE]), HAM (CURED WITH HONEY, SALT, SUGAR, WATER, DEXTROSE, LACTIC ACID STARTER CULTURE, SODIUM ASCORBATE, SODIUM NITRITE), PEPPERONI (PORK, BEEF, SALT, CONTAINS 2% OR LESS OF WATER, DEXTROSE, SPICES, LACTIC ACID STARTER CULTURE, OLEORESIN OF PAPRIKA, GARLIC POWDER, SODIUM NITRITE, BHA, BHT, CITRIC ACID).",
    "servingSize": 77,
    "servingSizeUnit": "g",
    "labelNutrients": {
      "fat": {
        "value": 12
      },
      "saturatedFat": {
        "value": 6
      },
      "transFat": {
        "value": 0
      },
      "cholesterol": {
        "value": 44.7
      },
      "sodium": {
        "value": 901
      },
      "carbohydrates": {
        "value": 15
      },
      "fiber": {
        "value": 1
      },
      "sugars": {
        "value": 3
      },
      "protein": {
        "value": 15
      },
      "calcium": {
        "value": 100
      },
      "iron": {
        "value": 0.724
      },
      "calories": {
        "value": 230
      }
    },
    "packageWeight": "2.7 oz/77 g",
    "tradeChannels": [
      "NO_TRADE_CHANNEL"
    ],
    "microbes": [],
    "brandedFoodCategory": "Prepared Subs & Sandwiches",
    "publicationDate": "7/29/2021",
    "foodUpdateLog": [
      {
        "foodClass": "Branded",
        "description": "#1 HAM & PEPPERONI",
        "foodAttributes": [
          {
            "id": 2053870,
            "name": "Added Package Weight",
            "value": "9",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "7/29/2021",
        "fdcId": 1920891,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "#1 HAM & PEPPERONI",
        "foodAttributes": [
          {
            "id": 1886421,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "6/17/2021",
        "fdcId": 1795628,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "#1 HAM & PEPPERONI",
        "foodAttributes": [
          {
            "id": 1643952,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "3/19/2021",
        "fdcId": 1614062,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "#1 HAM & PEPPERONI",
        "foodAttributes": [
          {
            "id": 1276620,
            "name": "Added Brand/Sub Brand Information",
            "value": "10",
            "foodAttributeType": {
              "id": 998
            }
          }
        ],
        "publicationDate": "2/26/2021",
        "fdcId": 1321926,
        "dataType": "Branded"
      },
      {
        "foodClass": "Branded",
        "description": "#1 HAM & PEPPERONI",
        "foodAttributes": [],
        "publicationDate": "4/1/2019",
        "fdcId": 525534,
        "dataType": "Branded"
      }
    ],
    "fdcId": 1920891,
    "dataType": "Branded"
  },
  {
    "foodClass": "Branded",
    "description": "'TUDE HONEY'TUDE RAW HONEY CRISP APPLE JUICE",
    "foodNutrients": [
      {
        "type": "FoodNutrient",
        "id": 3746124,
        "nutrient": {
          "id": 1004,
          "number": "204",
          "name": "Total lipid (fat)",
          "rank": 800,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 3746125,
        "nutrient": {
          "id": 1089,
          "number": "303",
          "name": "Iron, Fe",
          "rank": 5400,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0.15
      },
      {
        "type": "FoodNutrient",
        "id": 3746126,
        "nutrient": {
          "id": 1093,
          "number": "307",
          "name": "Sodium, Na",
          "rank": 5800,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 3746127,
        "nutrient": {
          "id": 1162,
          "number": "401",
          "name": "Vitamin C, total ascorbic acid",
          "rank": 6300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 25.3
      },
      {
        "type": "FoodNutrient",
        "id": 5488035,
        "nutrient": {
          "id": 1003,
          "number": "203",
          "name": "Protein",
          "rank": 600,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 5488036,
        "nutrient": {
          "id": 1005,
          "number": "205",
          "name": "Carbohydrate, by difference",
          "rank": 1110,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 13.5
      },
      {
        "type": "FoodNutrient",
        "id": 5488037,
        "nutrient": {
          "id": 1008,
          "number": "208",
          "name": "Energy",
          "rank": 300,
          "unitName": "kcal"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 55
      },
      {
        "type": "FoodNutrient",
        "id": 5488038,
        "nutrient": {
          "id": 2000,
          "number": "269",
          "name": "Sugars, Total",
          "rank": 1510,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 12.7
      }
    ],
    "foodAttributes": [],
    "modifiedDate": "4/29/2018",
    "availableDate": "4/29/2018",
    "marketCountry": "United States",
    "brandOwner": "FRESH MATTERS, LLC.",
    "gtinUpc": "851621003044",
    "dataSource": "LI",
    "ingredients": "HONEY CRISP APPLE JUICE, VITAMIN C.",
    "servingSize": 237,
    "servingSizeUnit": "ml",
    "householdServingFullText": "8 ONZ",
    "labelNutrients": {
      "fat": {
        "value": 0
      },
      "sodium": {
        "value": 0
      },
      "carbohydrates": {
        "value": 32
      },
      "sugars": {
        "value": 30.1
      },
      "protein": {
        "value": 0
      },
      "iron": {
        "value": 0.355
      },
      "calories": {
        "value": 130
      }
    },
    "tradeChannels": [
      "NO_TRADE_CHANNEL"
    ],
    "microbes": [],
    "brandedFoodCategory": "Fruit & Vegetable Juice, Nectars & Fruit Drinks",
    "publicationDate": "4/1/2019",
    "foodUpdateLog": [
      {
        "foodClass": "Branded",
        "description": "'TUDE HONEY'TUDE RAW HONEY CRISP APPLE JUICE",
        "foodAttributes": [],
        "publicationDate": "4/1/2019",
        "fdcId": 495380,
        "dataType": "Branded"
      }
    ],
    "fdcId": 495380,
    "dataType": "Branded"
  },
  {
    "foodClass": "Branded",
    "description": "'TDE PINKY'TUDE RAW CRIPPS PINK APPLE JUICE",
    "foodNutrients": [
      {
        "type": "FoodNutrient",
        "id": 3746120,
        "nutrient": {
          "id": 1004,
          "number": "204",
          "name": "Total lipid (fat)",
          "rank": 800,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 3746121,
        "nutrient": {
          "id": 1089,
          "number": "303",
          "name": "Iron, Fe",
          "rank": 5400,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0.3
      },
      {
        "type": "FoodNutrient",
        "id": 3746122,
        "nutrient": {
          "id": 1093,
          "number": "307",
          "name": "Sodium, Na",
          "rank": 5800,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 3746123,
        "nutrient": {
          "id": 1162,
          "number": "401",
          "name": "Vitamin C, total ascorbic acid",
          "rank": 6300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 25.3
      },
      {
        "type": "FoodNutrient",
        "id": 5488031,
        "nutrient": {
          "id": 1003,
          "number": "203",
          "name": "Protein",
          "rank": 600,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 5488032,
        "nutrient": {
          "id": 1005,
          "number": "205",
          "name": "Carbohydrate, by difference",
          "rank": 1110,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 13.5
      },
      {
        "type": "FoodNutrient",
        "id": 5488033,
        "nutrient": {
          "id": 1008,
          "number": "208",
          "name": "Energy",
          "rank": 300,
          "unitName": "kcal"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 51
      },
      {
        "type": "FoodNutrient",
        "id": 5488034,
        "nutrient": {
          "id": 2000,
          "number": "269",
          "name": "Sugars, Total",
          "rank": 1510,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 12.7
      }
    ],
    "foodAttributes": [],
    "modifiedDate": "4/29/2018",
    "availableDate": "4/29/2018",
    "marketCountry": "United States",
    "brandOwner": "FRESH MATTERS, LLC.",
    "gtinUpc": "851621003037",
    "dataSource": "LI",
    "ingredients": "CRISP PINK APPLE JUICE, VITAMIN C.",
    "servingSize": 237,
    "servingSizeUnit": "ml",
    "householdServingFullText": "8 ONZ",
    "labelNutrients": {
      "fat": {
        "value": 0
      },
      "sodium": {
        "value": 0
      },
      "carbohydrates": {
        "value": 32
      },
      "sugars": {
        "value": 30.1
      },
      "protein": {
        "value": 0
      },
      "iron": {
        "value": 0.711
      },
      "calories": {
        "value": 121
      }
    },
    "tradeChannels": [
      "NO_TRADE_CHANNEL"
    ],
    "microbes": [],
    "brandedFoodCategory": "Fruit & Vegetable Juice, Nectars & Fruit Drinks",
    "publicationDate": "4/1/2019",
    "foodUpdateLog": [
      {
        "foodClass": "Branded",
        "description": "'TDE PINKY'TUDE RAW CRIPPS PINK APPLE JUICE",
        "foodAttributes": [],
        "publicationDate": "4/1/2019",
        "fdcId": 495381,
        "dataType": "Branded"
      }
    ],
    "fdcId": 495381,
    "dataType": "Branded"
  },
  {
    "foodClass": "Branded",
    "description": "'TUDE GRANNY'TUDE RAW GRANNY SMITH APPLE JUICE",
    "foodNutrients": [
      {
        "type": "FoodNutrient",
        "id": 3746116,
        "nutrient": {
          "id": 1004,
          "number": "204",
          "name": "Total lipid (fat)",
          "rank": 800,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 3746117,
        "nutrient": {
          "id": 1089,
          "number": "303",
          "name": "Iron, Fe",
          "rank": 5400,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0.3
      },
      {
        "type": "FoodNutrient",
        "id": 3746118,
        "nutrient": {
          "id": 1093,
          "number": "307",
          "name": "Sodium, Na",
          "rank": 5800,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 3746119,
        "nutrient": {
          "id": 1162,
          "number": "401",
          "name": "Vitamin C, total ascorbic acid",
          "rank": 6300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 25.3
      },
      {
        "type": "FoodNutrient",
        "id": 5488027,
        "nutrient": {
          "id": 1003,
          "number": "203",
          "name": "Protein",
          "rank": 600,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 5488028,
        "nutrient": {
          "id": 1005,
          "number": "205",
          "name": "Carbohydrate, by difference",
          "rank": 1110,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 9.7
      },
      {
        "type": "FoodNutrient",
        "id": 5488029,
        "nutrient": {
          "id": 1008,
          "number": "208",
          "name": "Energy",
          "rank": 300,
          "unitName": "kcal"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 38
      },
      {
        "type": "FoodNutrient",
        "id": 5488030,
        "nutrient": {
          "id": 2000,
          "number": "269",
          "name": "Sugars, Total",
          "rank": 1510,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 9.7
      }
    ],
    "foodAttributes": [],
    "modifiedDate": "4/29/2018",
    "availableDate": "4/29/2018",
    "marketCountry": "United States",
    "brandOwner": "FRESH MATTERS, LLC.",
    "gtinUpc": "851621003013",
    "dataSource": "LI",
    "ingredients": "GRANNY SMITH APPLE JUICE, VITAMIN C.",
    "servingSize": 237,
    "servingSizeUnit": "ml",
    "householdServingFullText": "8 ONZ",
    "labelNutrients": {
      "fat": {
        "value": 0
      },
      "sodium": {
        "value": 0
      },
      "carbohydrates": {
        "value": 23
      },
      "sugars": {
        "value": 23
      },
      "protein": {
        "value": 0
      },
      "iron": {
        "value": 0.711
      },
      "calories": {
        "value": 90.1
      }
    },
    "tradeChannels": [
      "NO_TRADE_CHANNEL"
    ],
    "microbes": [],
    "brandedFoodCategory": "Fruit & Vegetable Juice, Nectars & Fruit Drinks",
    "publicationDate": "4/1/2019",
    "foodUpdateLog": [
      {
        "foodClass": "Branded",
        "description": "'TUDE GRANNY'TUDE RAW GRANNY SMITH APPLE JUICE",
        "foodAttributes": [],
        "publicationDate": "4/1/2019",
        "fdcId": 495382,
        "dataType": "Branded"
      }
    ],
    "fdcId": 495382,
    "dataType": "Branded"
  },
  {
    "foodClass": "Branded",
    "description": "'TUDE GALA'TUDE RAW GALA APPLE JUICE",
    "foodNutrients": [
      {
        "type": "FoodNutrient",
        "id": 3746112,
        "nutrient": {
          "id": 1004,
          "number": "204",
          "name": "Total lipid (fat)",
          "rank": 800,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 3746113,
        "nutrient": {
          "id": 1089,
          "number": "303",
          "name": "Iron, Fe",
          "rank": 5400,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0.3
      },
      {
        "type": "FoodNutrient",
        "id": 3746114,
        "nutrient": {
          "id": 1093,
          "number": "307",
          "name": "Sodium, Na",
          "rank": 5800,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 3746115,
        "nutrient": {
          "id": 1162,
          "number": "401",
          "name": "Vitamin C, total ascorbic acid",
          "rank": 6300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 25.3
      },
      {
        "type": "FoodNutrient",
        "id": 5488023,
        "nutrient": {
          "id": 1003,
          "number": "203",
          "name": "Protein",
          "rank": 600,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 5488024,
        "nutrient": {
          "id": 1005,
          "number": "205",
          "name": "Carbohydrate, by difference",
          "rank": 1110,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 13.5
      },
      {
        "type": "FoodNutrient",
        "id": 5488025,
        "nutrient": {
          "id": 1008,
          "number": "208",
          "name": "Energy",
          "rank": 300,
          "unitName": "kcal"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 51
      },
      {
        "type": "FoodNutrient",
        "id": 5488026,
        "nutrient": {
          "id": 2000,
          "number": "269",
          "name": "Sugars, Total",
          "rank": 1510,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 12.7
      }
    ],
    "foodAttributes": [],
    "modifiedDate": "4/28/2018",
    "availableDate": "4/28/2018",
    "marketCountry": "United States",
    "brandOwner": "FRESH MATTERS, LLC.",
    "gtinUpc": "851621003075",
    "dataSource": "LI",
    "ingredients": "GALA APPLE JUICE, VITAMIN C.",
    "servingSize": 237,
    "servingSizeUnit": "ml",
    "householdServingFullText": "8 ONZ",
    "labelNutrients": {
      "fat": {
        "value": 0
      },
      "sodium": {
        "value": 0
      },
      "carbohydrates": {
        "value": 32
      },
      "sugars": {
        "value": 30.1
      },
      "protein": {
        "value": 0
      },
      "iron": {
        "value": 0.711
      },
      "calories": {
        "value": 121
      }
    },
    "tradeChannels": [
      "NO_TRADE_CHANNEL"
    ],
    "microbes": [],
    "brandedFoodCategory": "Fruit & Vegetable Juice, Nectars & Fruit Drinks",
    "publicationDate": "4/1/2019",
    "foodUpdateLog": [
      {
        "foodClass": "Branded",
        "description": "'TUDE GALA'TUDE RAW GALA APPLE JUICE",
        "foodAttributes": [],
        "publicationDate": "4/1/2019",
        "fdcId": 495383,
        "dataType": "Branded"
      }
    ],
    "fdcId": 495383,
    "dataType": "Branded"
  },
  {
    "foodClass": "Branded",
    "description": "'TUDE FUJI'TUDE RAW FUJI APPLE JUICE",
    "foodNutrients": [
      {
        "type": "FoodNutrient",
        "id": 3746108,
        "nutrient": {
          "id": 1004,
          "number": "204",
          "name": "Total lipid (fat)",
          "rank": 800,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 3746109,
        "nutrient": {
          "id": 1089,
          "number": "303",
          "name": "Iron, Fe",
          "rank": 5400,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0.3
      },
      {
        "type": "FoodNutrient",
        "id": 3746110,
        "nutrient": {
          "id": 1093,
          "number": "307",
          "name": "Sodium, Na",
          "rank": 5800,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 3746111,
        "nutrient": {
          "id": 1162,
          "number": "401",
          "name": "Vitamin C, total ascorbic acid",
          "rank": 6300,
          "unitName": "mg"
        },
        "foodNutrientDerivation": {
          "code": "LCCD",
          "description": "Calculated from a daily value percentage per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 25.3
      },
      {
        "type": "FoodNutrient",
        "id": 5488019,
        "nutrient": {
          "id": 1003,
          "number": "203",
          "name": "Protein",
          "rank": 600,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 0
      },
      {
        "type": "FoodNutrient",
        "id": 5488020,
        "nutrient": {
          "id": 1005,
          "number": "205",
          "name": "Carbohydrate, by difference",
          "rank": 1110,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 13.5
      },
      {
        "type": "FoodNutrient",
        "id": 5488021,
        "nutrient": {
          "id": 1008,
          "number": "208",
          "name": "Energy",
          "rank": 300,
          "unitName": "kcal"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 51
      },
      {
        "type": "FoodNutrient",
        "id": 5488022,
        "nutrient": {
          "id": 2000,
          "number": "269",
          "name": "Sugars, Total",
          "rank": 1510,
          "unitName": "g"
        },
        "foodNutrientDerivation": {
          "code": "LCCS",
          "description": "Calculated from value per serving size measure",
          "foodNutrientSource": {
            "id": 9,
            "code": "12",
            "description": "Manufacturer's analytical; partial documentation"
          }
        },
        "amount": 12.7
      }
    ],
    "foodAttributes": [],
    "modifiedDate": "4/27/2018",
    "availableDate": "4/27/2018",
    "marketCountry": "United States",
    "brandOwner": "FRESH MATTERS, LLC.",
    "gtinUpc": "851621003020",
    "dataSource": "LI",
    "ingredients": "FUJI APPLE JUICE, VITAMIN C.",
    "servingSize": 237,
    "servingSizeUnit": "ml",
    "householdServingFullText": "8 ONZ",
    "labelNutrients": {
      "fat": {
        "value": 0
      },
      "sodium": {
        "value": 0
      },
      "carbohydrates": {
        "value": 32
      },
      "sugars": {
        "value": 30.1
      },
      "protein": {
        "value": 0
      },
      "iron": {
        "value": 0.711
      },
      "calories": {
        "value": 121
      }
    },
    "tradeChannels": [
      "NO_TRADE_CHANNEL"
    ],
    "microbes": [],
    "brandedFoodCategory": "Fruit & Vegetable Juice, Nectars & Fruit Drinks",
    "publicationDate": "4/1/2019",
    "foodUpdateLog": [
      {
        "foodClass": "Branded",
        "description": "'TUDE FUJI'TUDE RAW FUJI APPLE JUICE",
        "foodAttributes": [],
        "publicationDate": "4/1/2019",
        "fdcId": 495384,
        "dataType": "Branded"
      }
    ],
    "fdcId": 495384,
    "dataType": "Branded"
  }
]

quickSort(mergeData);
for(let i = 0; i < mergeData.length; i++) console.log(mergeData[i].description);

/**
 * Quick sorts an input array from index 0 to end of array
 * @param {*} arr 
 */
function quickSort(arr) {quickSortHelper(arr, 0, arr.length-1);}

/**
* Recursive function that calculates partition index and exits once low pointer is no longer less than right pointer
* @param {*} arr 
* @param {*} low 
* @param {*} high 
*/
function quickSortHelper(arr, low, high) {
  if(low < high)
  {
    let pivot = partition(arr, low, high);
    quickSortHelper(arr, low, pivot - 1);
    quickSortHelper(arr, pivot + 1, high);
  }
}

/**
* Partition function that finds and swaps necessary elements 
* @param {*} arr 
* @param {*} low 
* @param {*} high 
* @returns pivot index
*/
  function partition(arr, low, high) {
  let pivot = arr[low];
  let up = low;
  let down = high;

  while(up < down)
  {
    for(let j = up; j < high; j++)
    {
      if(arr[up].description[0] > pivot.description[0])
        break;
      up++;
    }
    for(let j = high; j > low; j--)
    {
      if(arr[down].description[0] < pivot.description[0])
        break;
      down--;
    }
    if(up < down)
      swap(arr, up, down);
  }
  swap(arr, low, down);
  return down;
}

/**
* Swaps two elements of an input array
* @param {*} arr 
* @param {*} index1 
* @param {*} index2 
*/
function swap(arr, index1, index2)
{
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}