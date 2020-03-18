export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
}

export interface Album {
    userId: number;
    id: number;
    title: string;
}

export interface Hero {
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
}

export interface Slide { 
    img: string;
    titulo: string;
    desc: string;
}
