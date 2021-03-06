
const slugify = require('slugify')
export const numberFormatter = (number, digits) => {
    const symbolArray = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'K' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'B' }
    ];
    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let result = '';

    for (let i = 0; i < symbolArray.length; i++) {
        if (number >= symbolArray[i].value) {
            result = (number / symbolArray[i].value).toFixed(digits).replace(regex, '$1') + symbolArray[i].symbol;
        }
    }
    return result;
};

export const formatMovieTitle = (title) => {
    const titleStr = title.toLowerCase();
    return slugify(titleStr)
}
export const getDetailsItem = (details) => {
    return [
        {
            id: 0,
            name: 'Tagline',
            value: `${details.tagline}`
        },
        {
            id: 1,
            name: 'Budget',
            value: `${numberFormatter(details.budget, 1)}`
        },
        {
            id: 2,
            name: 'Revenue',
            value: `${numberFormatter(details.revenue, 1)}`
        },
        {
            id: 3,
            name: 'Status',
            value: `${details.status}`
        },
        {
            id: 4,
            name: 'Release Date',
            value: `${details.release_date}`
        },
        {
            id: 5,
            name: 'Run Time',
            value: `${details.runtime} min`
        }
    ];
}