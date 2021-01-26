import { numberFormatter } from ".";

export const HEADER_LIST = [
    {
        id: 1,
        iconClass: 'fas fa-film',
        name: 'Now Playing',
        type: 'now_playing'
    },
    {
        id: 2,
        iconClass: 'fas fa-fire',
        name: 'Popular',
        type: 'popular'
    },
    {
        id: 3,
        iconClass: 'fas fa-star',
        name: 'Top Rated',
        type: 'top_rated'
    },
    {
        id: 4,
        iconClass: 'fas fa-plus-square',
        name: 'Upcoming',
        type: 'upcoming'
    }
];

export const MOVIE_TYPE_HASH = {
    now_playing: 'Now Playing',
    popular: 'Popular',
    top_rated: 'Top Rated',
    upcoming: 'Upcoming'
};




export const DETAILITEMS = [
    {
        id: 0,
        name: 'Tagline',
        value: 'Part of the journey is the end'
    },
    {
        id: 1,
        name: 'Budget',
        value: `${numberFormatter(356000000, 1)}`
    },
    {
        id: 2,
        name: 'Revenue',
        value: `${numberFormatter(2800000000, 1)}`
    },
    {
        id: 3,
        name: 'Status',
        value: 'Released'
    },
    {
        id: 4,
        name: 'Release Date',
        value: '2019-04-24'
    },
    {
        id: 5,
        name: 'Run Time',
        value: '181 min'
    }
];

export const SYMBOL_ARRAY = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' }
];


export const REGEX_NUMBER = /\.0+$|(\.[0-9]*[1-9])0+$/;