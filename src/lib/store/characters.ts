import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';

import { RootState, CharacterState, Character, SortBy } from '@/lib/types';
import { fetchData } from '../utils';

const state: CharacterState = {
    characters: [],
    sortedBy: 'name',
};

const getters: GetterTree<CharacterState, RootState> = {
    getCharacters: () => state.characters,

    getCharacter: (state, id: number) => {
        const character = state.characters.find(
            (character) => character.id === id,
        );

        if (!character) throw new Error('No character was found');

        return character;
    },

    getSortedBy: () => state.sortedBy,
};

const mutations: MutationTree<CharacterState> = {
    setCharacters: (state, characters: Character[]) =>
        (state.characters = characters),

    setSortedCharacters: (state, characters: Character[]) => {
        state.characters.splice(0, state.characters.length, ...characters);
    },

    setSortedBy: (state, sort: SortBy) => {
        state.sortedBy = sort;
    },
};

const actions: ActionTree<CharacterState, RootState> = {
    async fetchCharacters({ commit }) {
        const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            .map((_num) => {
                return Math.floor(Math.random() * 350);
            })
            .join(',');

        const characters = await fetchData<Character[]>(
            `character/${randomNumbers}`,
        );

        commit('setCharacters', characters);
    },

    async setCharacters({ commit }, characters: Character[]) {
        commit('setCharacters', characters);
    },

    async setSortedCharacters(
        { commit },
        { characters, sort }: { characters: Character[]; sort: SortBy },
    ) {
        await commit('setSortedCharacters', characters);
        commit('setSortedBy', sort);
    },
};

export const characters: Module<CharacterState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
