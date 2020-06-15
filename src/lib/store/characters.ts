import Vue from 'vue';

import { Character, State, Actions, Getters, Mutations } from '@/lib/types';
import { fetchData } from '@/lib/utils';

const state: State = Vue.observable({
    characters: [],
    sortedBy: 'name',
});

export const getters: Getters = {
    getCharacters: () => state.characters,

    getCharacter: (id: number) => {
        const character = state.characters.find(
            (character) => character.id === id,
        );

        if (!character) throw new Error('No character was found');

        return character;
    },

    getSortedBy: () => state.sortedBy,
};

export const mutations: Mutations = {
    setCharacters: (characters: Character[]) => (state.characters = characters),

    setSortedCharacters: (characters: Character[]) => {
        state.characters.splice(0, state.characters.length, ...characters);
    },

    setSortedBy: (sort: 'name' | 'status' | 'episode') => {
        state.sortedBy = sort;
    },
};

export const actions: Actions = {
    async fetchCharacters() {
        const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            .map((_num) => {
                return Math.floor(Math.random() * 350);
            })
            .join(',');
        const characters = await fetchData<Character[]>(
            `character/${randomNumbers}`,
        );
        mutations.setCharacters(characters);
    },
};
