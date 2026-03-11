import { Car } from "../lib/types";

export const INITIAL_CARS: Car[] = [
    {
        id: 1,
        name: "Honda Amaze",
        rate: 8,
        available: true,
        desc: "Compact & fuel efficient perfect for city drives",
        images: ["https://picsum.photos/id/1015/800/600", "https://picsum.photos/id/1016/800/600", "https://picsum.photos/id/1018/800/600"]
    },
    {
        id: 2,
        name: "Hyundai Creta",
        rate: 12,
        available: true,
        desc: "Spacious family SUV with great comfort",
        images: ["https://picsum.photos/id/102/800/600", "https://picsum.photos/id/103/800/600", "https://picsum.photos/id/104/800/600"]
    },
    {
        id: 3,
        name: "Maruti Swift",
        rate: 6,
        available: false,
        desc: "Zippy and easy to park",
        images: ["https://picsum.photos/id/106/800/600", "https://picsum.photos/id/107/800/600", "https://picsum.photos/id/108/800/600"]
    },
    {
        id: 4,
        name: "Mahindra Scorpio N",
        rate: 15,
        available: true,
        desc: "Rugged adventure SUV",
        images: ["https://picsum.photos/id/201/800/600", "https://picsum.photos/id/202/800/600", "https://picsum.photos/id/203/800/600"]
    },
    {
        id: 5,
        name: "Toyota Innova Crysta",
        rate: 14,
        available: true,
        desc: "Premium 7-seater for family trips",
        images: ["https://picsum.photos/id/251/800/600", "https://picsum.photos/id/252/800/600", "https://picsum.photos/id/253/800/600"]
    },
    {
        id: 6,
        name: "Tata Nexon EV",
        rate: 10,
        available: true,
        desc: "Eco-friendly electric SUV",
        images: ["https://picsum.photos/id/160/800/600", "https://picsum.photos/id/161/800/600", "https://picsum.photos/id/162/800/600"]
    }
];
