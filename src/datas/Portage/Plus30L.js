import HybergBanditX40Liters1 from '../../assets/Items/Portage/Plus30L/HybergBanditX40Liters/HybergBanditX40Liters_1.jpg';
import HybergBanditX40Liters2 from '../../assets/Items/Portage/Plus30L/HybergBanditX40Liters/HybergBanditX40Liters_2.jpg';
import HybergBanditX40Liters3 from '../../assets/Items/Portage/Plus30L/HybergBanditX40Liters/HybergBanditX40Liters_3.jpg';
import HybergBanditX40Liters4 from '../../assets/Items/Portage/Plus30L/HybergBanditX40Liters/HybergBanditX40Liters_4.jpg';

import BerghausMunroIIIR from '../../assets/Items/Portage/Plus30L/BerghausMunroIIIR/BerghausMunroIIIR.jpg';

export const plus30LList = [

  {
    name: 'Bandit X - 40 liters',
    category: 'Portage',
    subCategory: 'Plus30L',
    id: 'HybergBanditX40liter',
    available: true,
    weight: '480g',
    new: false,
    illustrations:
  [
    { picture: HybergBanditX40Liters1 },
    { picture: HybergBanditX40Liters2 },
    { picture: HybergBanditX40Liters3 },
    { picture: HybergBanditX40Liters4 }
  ],
    brand: 'Hyberg',
    price: 180.00,
    description:
    [
      { li: 'The Hyberg Bandit X is a backpack designed for users who want to carry the lightest load possible without compromising reliability. ' },
      { li: 'With a total capacity of 40 liters (29 liters for the main pocket and 11 liters for the additional pockets), it can accommodate the gear of an experienced user in 3-season mode.' },
      { li: 'Its durable materials make it suitable for daily use and versatile enough for travel.' }
    ],
    characteristic:
      [
        { li: 'Daypack and multi-day backpack in ultra-light mode.' },
        { li: 'Materials: Dimension Polyant© X-PAC VX21, Dyneema© Stretch Mesh Fabric.' },
        { li: 'One-size-fits-all back length: suitable for 45 cm to 65 cm (individuals from 1.60 m to 1.95 m).' },
        { li: 'Removable wide webbing belt: suitable for hip circumferences from 80 cm to 130 cm.' },
        { li: 'Removable and height-adjustable chest strap.' }
      ]
  },
  {
    name: 'Berghaus - Munro II IR ',
    category: 'Portage',
    subCategory: 'Plus30L',
    id: 'BerghausMunroIIIR',
    available: true,
    weight: '900g',
    new: true,
    illustrations:
  [
    { picture: BerghausMunroIIIR }
  ],
    brand: 'Hyberg',
    price: 109.00,
    description:
    [
      { li: 'With its 900g weight, the Munro II IR may not be the lightest in its literage, but it is certainly one of the most indestructible.' },
      { li: "It's ideal for those who venture off the beaten path and travel in challenging conditions." },
      { li: 'Constructed from Cordura 1000, it can withstand the harshest abrasion conditions, and its internal aluminum frame allows it to carry unusual loads for a 35-liter bag.' }
    ],
    characteristic:
      [
        { li: 'Lightweight and ultra-resistant backpack.' },
        { li: 'Comfortable to carry thanks to its pre-formed aluminum frame and back foam (both removable).' },
        { li: 'Non-elevatable top flap with a zippered pocket.' },
        { li: 'Side compression straps.' },
        { li: 'Adjustable front elastic for carrying a ground mat, a lightweight shelter, or damp rain gear.' }
      ]
  }
];
