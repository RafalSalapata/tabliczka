//NUMBERS - used in english words test
const animals = [
    {
        en: 'dog',
        pl: 'pies',
        cz: 'pes',
    },
    {
        en: 'cat',
        pl: 'kot',
        cz: 'kočka',
    },
    {
        en: 'bird',
        pl: 'ptak',
        cz: 'pták',
    },
    {
        en: 'elephant',
        pl: 'słoń',
        cz: 'slon',
    },
    {
        en: 'tiger',
        pl: 'tygrys',
        cz: 'tygr',
    },
    {
        en: 'lion',
        pl: 'lew',
        cz: 'lev',
    },
    {
        en: 'fish',
        pl: 'ryba',
        cz: 'ryba',
    },
    {
        en: 'bug',
        pl: 'robak',
        cz: 'červ',
    },
    {
        en: 'giraffe',
        pl: 'żyrafa',
        cz: 'žirafa',
    },
    {
        en: 'hippo',
        pl: 'hipopotam',
        cz: 'hroch',
    },
]

export const test = animals.map( item => ({ ...item,
    en: item.en.trim(),
    pl: item.pl.trim(),
    cz: item.cz.trim(),
}))