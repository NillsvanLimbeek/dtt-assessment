import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';

import { RootState, CharacterState, Character, SortBy } from '@/lib/types';
import { fetchData, randomNumbers } from '../utils';

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
        const randomIds = randomNumbers(10, 350);
        const characters = await fetchData<Character[]>(
            `character/${randomIds}`,
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
