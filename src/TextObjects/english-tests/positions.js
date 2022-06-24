//POSITIONS - used in english words test
const positions = [
    {
        en: 'under',
        pl: 'pod',
        cz: 'pod',
    },
    {
        en: 'in',
        pl: 'w',
        cz: 'v',
    },
    {
        en: 'on',
        pl: 'na',
        cz: 'na',
    },
    {
        en: 'next to',
        pl: 'obok',
        cz: 'vedle',
    },
    {
        en: 'behind',
        pl: 'za',
        cz: 'za',
    },
    {
        en: 'over',
        pl: 'nad',
        cz: 'nad',
    },
    {
        en: 'in front of',
        pl: 'przed',
        cz: 'před',
    },
    {
        en: 'between',
        pl: 'pomiędzy',
        cz: 'mezi',
    },
    {
        en: 'opposite',
        pl: 'naprzeciwko',
        cz: 'naproti',
    },
]

export const test = positions.map( item => ({ ...item,
    en: item.en.trim(),
    pl: item.pl.trim(),
    cz: item.cz.trim(),
}))