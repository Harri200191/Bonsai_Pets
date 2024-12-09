export interface Testimonial {
    id: number;
    name: string;
    image: string;
    text: string;
    pet: string;
  }
  
  export interface BonsaiPet {
    id: number;
    name: string;
    species: string;
    image: string;
    description: string;
    price: number;
  }
  
  export interface Workshop {
    id: number;
    city: string;
    date: string;
    slots: number;
    price: number;
  }