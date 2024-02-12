import { heroes } from '../data/heros'

export const getHerosByPublisher = (publisher) => {

    const publishers = ['DC Comics', 'Marvel Comics'];

    if (!publishers.includes(publisher)) {
        throw new Error('Invalid publisher: ' + publisher)
    }

    return heroes.filter(hero => hero.publisher === publisher);

}