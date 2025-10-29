
export interface AboutUsCardProps{
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
}

export interface TableCardProps{
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
    link?: string[];
}

export interface ServicesCardProps{
    id: number;
    title: string;
    icon: string;
    image: string;
    text: {
        description: string;
    }
}