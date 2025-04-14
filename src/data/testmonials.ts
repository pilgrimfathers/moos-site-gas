export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Chef Michael Roberts',
        role: 'Executive Chef',
        content: 'The precision and power of Asachi stoves have revolutionized my kitchen. The heat distribution is unmatched.',
        rating: 5
    },
    {
        id: 2,
        name: 'Sarah Chen',
        role: 'Home Chef',
        content: 'Finally found a stove that combines beautiful design with professional performance. Worth every penny!',
        rating: 5
    }
];

export default testimonials;