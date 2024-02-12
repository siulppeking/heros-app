import { useMemo } from "react";
import { getHerosByPublisher } from "../helpers/getHerosByPublisher"
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {

    const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heros.map(hero => {
                    return <HeroCard
                        key={hero.id}
                        hero={hero}
                    />
                })
            }
        </div>
    )
}

export default HeroList 