export interface Character {
    id: number;
    name: string;
    status: Status;
    species: string;
    type: string;
    gender: Gender;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

type Status = 'Alive' | 'Dead' | 'Unknown';

type Gender = 'Female' | 'Male' | 'Genderless' | 'Unknown';

interface Origin {
    name: string;
    url: string;
}

interface Location {
    name: string;
    url: string;
}
