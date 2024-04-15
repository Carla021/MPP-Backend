import { Monitor } from "./model/monitor";
import { faker } from '@faker-js/faker';

let monitorIdCounter: number = 1;

export function generateUniqueId(): number {
    return monitorIdCounter++;
}

const brands = [
    "Acer",
    "Asus",
    "Dell",
    "HP",
    "LG",
    "Samsung",
    "BenQ",
    "ViewSonic",
    "Alienware",
    "MSI",
  ];

const refreshRates = ["60Hz", "120Hz", "144Hz", "240Hz"];

export function createMonitor(): Monitor {
    const id = generateUniqueId();
    const brand = brands[faker.number.int({min: 0, max: brands.length - 1})];
    const refreshRate = refreshRates[faker.number.int({min: 0, max: refreshRates.length - 1})];
    const image = faker.image.url();

    return new Monitor(id, brand, refreshRate, image);
}

export const monitors: Monitor[] = Array.from({length: 20}, () => {
    const newMonitor = createMonitor();
    return newMonitor;
})