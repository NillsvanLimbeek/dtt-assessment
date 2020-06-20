import { SortBy } from './SortBy';
import { Character } from './Character';

export interface CharacterState {
    characters: Character[];
    sortedBy: SortBy;
}
