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
    created: Date;
}

enum Status {
    alive,
    dead,
    unknown,
}

enum Gender {
    female,
    male,
    genderless,
    unknown,
}

interface Origin {
    name: string;
    url: string;
}

interface Location {
    name: string;
    url: string;
}
