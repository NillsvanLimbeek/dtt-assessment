import Vue from 'vue';

import { Character, State, Actions, Getters, Mutations } from '@/lib/types';

const state: State = Vue.observable({
    characters: [
        {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/1',
            },
            location: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/20',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            episode: [
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/2',
            ],
            url: 'https://rickandmortyapi.com/api/character/1',
            created: '2017-11-04T18:48:46.250Z',
        },
        {
            id: 2,
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/1',
            },
            location: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/20',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            episode: [
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/2',
            ],
            url: 'https://rickandmortyapi.com/api/character/2',
            created: '2017-11-04T18:50:21.651Z',
        },
    ],
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
        // const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        //     .map((_num) => {
        //         return Math.floor(Math.random() * 350);
        //     })
        //     .join(',');
        // fetch(`https://rickandmortyapi.com/api/character/${randomNumbers}`)
        //     .then((res) => res.json())
        //     .then((data: Character[]) => mutations.setCharacters(data));
    },
};
