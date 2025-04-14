export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    features: string[];
    images: string[];
}

const products: Product[] = [
    {
        id: 1,
        name: 'Asachi x3',
        description: 'Professional-grade triple burner for precise cooking',
        price: "10,000",
        features: ['Triple burner system', 'Premium stainless steel', 'Smart heat distribution'],
        images: [
            '/images/three-burner-1.jpeg',
            '/images/three-burner.jpeg',
            '/images/burner.jpeg',
            '/images/stove-switch.jpeg'
        ]
    },
    {
        id: 2,
        name: 'Asachi x4',
        description: 'Premium four-burner gas stove with precision control',
        price: "12,000",
        features: ['Professional grade', 'Compact design', 'Maximum efficiency'],
        images: [
            '/images/four-burner.jpeg',
            '/images/single-burner.jpeg',
            '/images/gas-inlet.jpeg',
            '/images/rubber-stand.jpeg'
        ]
    },
    {
        id: 3,
        name: 'Asachi x1',
        description: 'Premium single-burner gas stove with precision control',
        price: "4,500",
        features: ['Professional grade', 'Compact design', 'Maximum efficiency'],
        images: [
            '/images/single-burner.jpeg',
            '/images/gas-inlet.jpeg',
            '/images/rubber-stand.jpeg'
        ]
    }
];

export default products;