//PREPOSITIONS - used in english words test
const weekdays = [
    {
        en: 'Monday',
        pl: 'poniedziałek',
        cz: 'pondělí',
    },
    {
        en: 'Tuesday',
        pl: 'wtorek',
        cz: 'úterý',
    },
    {
        en: 'Wednesday',
        pl: 'środa',
        cz: 'středa',
    },
    {
        en: 'Thursday',
        pl: 'czwartek',
        cz: 'čtvrtek',
    },
    {
        en: 'Friday',
        pl: 'piątek',
        cz: 'pátek',
    },
    {
        en: 'Saturday',
        pl: 'sobota',
        cz: 'sobota',
    },
    {
        en: 'Sunday',
        pl: 'niedziela',
        cz: 'neděle',
    },
    {
        en: 'month',
        pl: 'miesiąc',
        cz: 'měsíc',
    },
    {
        en: 'week',
        pl: 'tydzień',
        cz: 'týden',
    },
    {
        en: 'day',
        pl: 'dzień',
        cz: 'den',
    },
    {
        en: 'night',
        pl: 'noc',
        cz: 'noc',
    },
    {
        en: 'year',
        pl: 'rok',
        cz: 'rok',
    },
    {
        en: 'hour',
        pl: 'godzina',
        cz: 'hodina',
    },
    {
        en: 'minute',
        pl: 'minuta',
        cz: 'minuta',
    },
    {
        en: 'second',
        pl: 'sekunda',
        cz: 'druhý',
    },
]

export const test = weekdays.map( item => ({ ...item,
    en: item.en.trim(),
    pl: item.pl.trim(),
    cz: item.cz.trim(),
}))