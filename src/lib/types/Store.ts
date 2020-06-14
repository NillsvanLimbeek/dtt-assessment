import { Character } from './Character';

export interface State {
    characters: Character[];
}

export interface Getters {
    getCharacters: () => Character[];
    getCharacter: (id: number) => Character;
}

export interface Mutations {
    setCharacters: (characters: Character[]) => void;
    sortCharacters: (characters: Character[]) => void;
}

export interface Actions {
    fetchCharacters: () => void;
}
