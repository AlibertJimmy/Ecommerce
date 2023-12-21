import GraniteGearScurry1 from '../../assets/Items/Portage/Minus30L/GraniteGearScurry/GraniteGearScurry_1.jpg';
import GraniteGearScurry2 from '../../assets/Items/Portage/Minus30L/GraniteGearScurry/GraniteGearScurry_2.jpg';
import GraniteGearScurry3 from '../../assets/Items/Portage/Minus30L/GraniteGearScurry/GraniteGearScurry_3.jpg';
import GraniteGearScurry4 from '../../assets/Items/Portage/Minus30L/GraniteGearScurry/GraniteGearScurry_4.jpg';
import GraniteGearScurry5 from '../../assets/Items/Portage/Minus30L/GraniteGearScurry/GraniteGearScurry_5.jpg';
import GraniteGearScurry6 from '../../assets/Items/Portage/Minus30L/GraniteGearScurry/GraniteGearScurry_6.jpg';
import GraniteGearScurry7 from '../../assets/Items/Portage/Minus30L/GraniteGearScurry/GraniteGearScurry_7.jpg';

import OMMClassic25L1 from '../../assets/Items/Portage/Minus30L/OMMClassic25L/OMMClassic25L_1.jpg';
import OMMClassic25L2 from '../../assets/Items/Portage/Minus30L/OMMClassic25L/OMMClassic25L_2.jpg';
import OMMClassic25L3 from '../../assets/Items/Portage/Minus30L/OMMClassic25L/OMMClassic25L_3.jpg';
import OMMClassic25L4 from '../../assets/Items/Portage/Minus30L/OMMClassic25L/OMMClassic25L_4.jpg';

export const minus30LList = [

  {
    name: 'Scurry',
    category: 'Portage',
    subCategory: 'Minus30L',
    id: 'GraniteGearScurry',
    available: true,
    weight: '510g',
    new: false,
    illustrations:
  [
    { picture: GraniteGearScurry1 },
    { picture: GraniteGearScurry2 },
    { picture: GraniteGearScurry3 },
    { picture: GraniteGearScurry4 },
    { picture: GraniteGearScurry5 },
    { picture: GraniteGearScurry6 },
    { picture: GraniteGearScurry7 }
  ],
    brand: 'Granite Gear',
    price: 105.00,
    description:
    [
      { li: 'The Scurry is a robust day-hiking backpack, suitable for those who already have the equipment and knowledge for ultralight hiking.' },
      { li: 'It can also serve as a backpack for overnight trips for those experienced in ultralight backpacking.' },
      { li: 'Its roll-top closure effectively protects your gear while allowing for fine-tuning of the volume.' },
      { li: 'Equipped with a comfortable back and shoulder straps, it is designed to be easily forgotten during your hike.' },
      { li: 'Its features, including the front zippered pocket, provide flexibility for efficient gear organization.' },
      { li: 'With a specified capacity of 24 liters, you can additionally carry two large water bottles in the side pockets.' },
      { li: 'The compression straps returning to the front also allow you to transport extra gear, such as a compact shelter or a ground mat.' }
    ],
    characteristic:
      [
        { li: 'Capacity: 24 liters in the main compartment (+ external pockets).' },
        { li: 'Fabric: 100-denier PU-coated Cordura ripstop with reinforcements in 210-denier Cordura.' },
        { li: 'Very comfortable shoulder straps (thick foam) and wide.' },
        { li: 'Shoulder straps equipped with load lifters.' },
        { li: 'Adjustable width and height chest strap.' }
      ]
  },
  {
    name: 'OMM Classic 25L',
    category: 'Portage',
    subCategory: 'Minus30L',
    id: 'OMMClassic25L',
    available: true,
    weight: '715g',
    new: true,
    illustrations:
  [
    { picture: OMMClassic25L1 },
    { picture: OMMClassic25L2 },
    { picture: OMMClassic25L3 },
    { picture: OMMClassic25L4 }
  ],
    brand: 'OMM',
    price: 99.00,
    description:
    [
      { li: 'The OMM Classic 25L is a mid-sized backpack meticulously designed to make your life easier.' },
      { li: 'The angled side pockets allow you to grab your water bottle without taking off your backpack (fits 0.5-liter bottles).' },
      { li: 'The large front mesh pocket enables you to carry a helmet, rain jacket, or lightweight shelter to increase the nominal capacity of 25 liters.' },
      { li: 'Its internal back foam transforms into a short bivouac mattress.' }
    ],
    characteristic:
      [
        { li: 'Hiking and mountaineering backpack.' },
        { li: 'Fabric: Nylon 80 g/m² 210 T.' },
        { li: "Volume: 25 liters (we believe it's a true 25 liters)." },
        { li: 'Ice axe carrying straps.' },
        { li: 'Front mesh for storing a wet jacket or carrying additional gear.' },
        { li: 'Angled mesh side pockets allowing access without removing the backpack.' }
      ]
  }

];
