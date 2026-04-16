export interface Service {
  name: string;
  description: string;
  price: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Unit {
  name: string;
  description: string;
  image: string;
  mapUrl: string;
}

export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}
