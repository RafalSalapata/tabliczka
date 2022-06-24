//NUMBERS - used in english words test
const numbers = [
    {
        en: 'one',
        pl: 'jeden',
        cz: 'jeden',
    },
    {
        en: 'two',
        pl: 'dwa',
        cz: 'dva',
    },
    {
        en: 'three',
        pl: 'trzy',
        cz: 'tři',
    },
    {
        en: 'four',
        pl: 'cztery',
        cz: 'čtyři',
    },
    {
        en: 'five',
        pl: 'pięć',
        cz: 'pět',
    },
    {
        en: 'six',
        pl: 'sześć',
        cz: 'šest',
    },
    {
        en: 'seven',
        pl: 'siedem',
        cz: 'sedm',
    },
    {
        en: 'eight',
        pl: 'osiem',
        cz: 'osm',
    },
    {
        en: 'nine',
        pl: 'dziewięć',
        cz: 'devět',
    },
    {
        en: 'ten',
        pl: 'dziesięć',
        cz: 'deset',
    },
    {
        en: 'eleven',
        pl: 'jedenaście',
        cz: 'jedenáct',
    },
    {
        en: 'twelve',
        pl: 'dwanaście',
        cz: 'dvanáct',
    },
    // {
    //     en: 'thirteen',
    //     pl: 'trzynaście',
    //     cz: 'třináct',
    // },
    // {
    //     en: 'fourteen',
    //     pl: 'czternaście',
    //     cz: 'čtrnáct',
    // },
    // {
    //     en: 'fifteen',
    //     pl: 'piętnaście',
    //     cz: 'patnáct',
    // },
    // {
    //     en: 'sixteen',
    //     pl: 'szesnaście',
    //     cz: 'šestnáct',
    // },
    // {
    //     en: 'seventeen',
    //     pl: 'siedemnaście',
    //     cz: 'sedmnáct',
    // },
    // {
    //     en: 'eighteen',
    //     pl: 'osiemnaście',
    //     cz: 'osmnáct',
    // },
    // {
    //     en: 'nineteen',
    //     pl: 'dziewiętnaście',
    //     cz: 'devatenáct',
    // },
    // {
    //     en: 'twenty',
    //     pl: 'dwadzieścia',
    //     cz: 'dvacet',
    // },
]

export const test = numbers.map( item => ({ ...item,
    pl: item.pl.trim(),
    cz: item.cz.trim(),
    en: item.en.trim(),
}))