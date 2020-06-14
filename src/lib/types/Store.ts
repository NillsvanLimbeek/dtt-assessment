import { Character } from './Character';

export interface State {
    characters: Character[];
    sortedBy: 'name' | 'status' | 'episode';
}

export interface Getters {
    getCharacters: () => Character[];
    getCharacter: (id: number) => Character;
    getSortedBy: () => 'name' | 'status' | 'episode';
}

export interface Mutations {
    setCharacters: (characters: Character[]) => void;
    setSortedCharacters: (characters: Character[]) => void;
    setSortedBy: (sort: 'name' | 'status' | 'episode') => void;
}

export interface Actions {
    fetchCharacters: () => void;
}
