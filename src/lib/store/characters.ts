import Vue from 'vue';

import { Character, State, Actions, Getters, Mutations } from '@/lib/types';

const state: State = Vue.observable({
    characters: [],
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
};

export const mutations: Mutations = {
    setCharacters: (characters: Character[]) => (state.characters = characters),
};

export const actions: Actions = {
    fetchCharacters() {
        const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            .map((_num) => {
                return Math.floor(Math.random() * 350);
            })
            .join(',');

        fetch(`https://rickandmortyapi.com/api/character/${randomNumbers}`)
            .then((res) => res.json())
            .then((data: Character[]) => mutations.setCharacters(data));
    },
};
