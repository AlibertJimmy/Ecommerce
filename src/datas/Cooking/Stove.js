import FireMapleTitaniumStoveFMS116T1 from '../../assets/Items/Cooking/Stove/FireMapleTitaniumStoveFMS116T/FireMapleTitaniumStoveFMS116T_1.jpg';
import FireMapleTitaniumStoveFMS116T2 from '../../assets/Items/Cooking/Stove/FireMapleTitaniumStoveFMS116T/FireMapleTitaniumStoveFMS116T_2.jpg';
import FireMapleTitaniumStoveFMS116T3 from '../../assets/Items/Cooking/Stove/FireMapleTitaniumStoveFMS116T/FireMapleTitaniumStoveFMS116T_3.jpg';
import FireMapleTitaniumStoveFMS116T4 from '../../assets/Items/Cooking/Stove/FireMapleTitaniumStoveFMS116T/FireMapleTitaniumStoveFMS116T_4.jpg';
import FireMapleTitaniumStoveFMS116T5 from '../../assets/Items/Cooking/Stove/FireMapleTitaniumStoveFMS116T/FireMapleTitaniumStoveFMS116T_5.jpg';

import EsbitLiquidAlcoholStove from '../../assets/Items/Cooking/EsbitLiquidAlcoholStove/EsbitLiquidAlcoholStove.jpg';

export const stoveList = [

  {
    name: 'Titanium Stove FMS-116T',
    category: 'Cooking',
    subCategory: 'Stove',
    id: 'FireMapleTitaniumStoveFMS116T',
    available: true,
    weight: '48g',
    new: true,
    illustrations:
  [
    { picture: FireMapleTitaniumStoveFMS116T1 },
    { picture: FireMapleTitaniumStoveFMS116T2 },
    { picture: FireMapleTitaniumStoveFMS116T3 },
    { picture: FireMapleTitaniumStoveFMS116T4 },
    { picture: FireMapleTitaniumStoveFMS116T5 }
  ],
    brand: 'Fire Mapple',
    price: 42.00,
    description:
    [
      { li: "The Fire Maple - Titanium Stove FMS-116T weighs only 48 g (comparable to that of a hen's egg)." },
      { li: "But that's not its only strength: ultra-compact, it stores easily, and its power will allow you to heat 1 liter of water in less than 3.5 minutes." }
    ],
    characteristic:
      [
        { li: 'Foldable titanium branches, sturdy, and particularly non-slip.' },
        { li: 'Power: 2820 watts (heats 1 liter of water in an average of 3.5 minutes).' },
        { li: 'Manual ignition for increased reliability and lightweight design.' },
        { li: 'Precise flame adjustment for boiling, cooking, or simmering.' },
        { li: 'Designed for threaded cartridges (does not work with CampinGaz cartridges).' },
        { li: 'Comes with a carrying case.' },
        { li: 'Detachable burner/cartridge connection (orange part) for cleaning the injection screw.' },
        { li: 'Diameter of the support with unfolded branches: 10 cm.' },
        { li: 'Burner diameter: 4.65 cm.' },
        { li: 'Height: 6.5 cm.' },
        { li: 'Weight: 48 g measured (without the storage box - not necessary if you put the stove in your cookware).' }
      ]
  },
  {
    name: 'Liquid Alcohol Stove',
    category: 'Cooking',
    subCategory: 'Stove',
    id: 'EsbitLiquidAlcoholStove',
    available: true,
    weight: '92g',
    new: false,
    illustrations:
  [
    { picture: EsbitLiquidAlcoholStove }
  ],
    brand: 'Esbit',
    price: 17.00,
    description:
    [
      { li: "The Esbit liquid alcohol stove is made of brass. It comes with a screw cap with a gasket and is supplied with a simmer ring that allows you to vary the stove's power and extinguish it." },
      { li: 'You can use the foldable stainless steel stove from Esbit or simply place your cookware on three stones around it.' },
      { li: 'The reservoir is filled to 3/4 capacity, which is 70 ml (do not fill it to the brim). With these 70 ml, you get 30 minutes of heating.' }
    ],
    characteristic:
      [
        { li: 'Liquid alcohol stove.' },
        { li: 'Made of stainless steel and brass.' },
        { li: 'Stove diameter: 74 mm.' },
        { li: 'Stove height: 46 mm.' },
        { li: 'Weight: 92 g.' },
        { li: 'Useful capacity: 70 ml.' }
      ]
  }
];
