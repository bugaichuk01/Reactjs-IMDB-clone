import React from 'react';
import styles from './Actors.module.scss';
import {useGetActorsQuery} from "_/serviceAPI";
import {IStaff} from "../../../../types/IStaff";
import {Slider} from "@/shared-components/slider/Slider";
import {CardItem} from "@/layout-components/card-item/CardItem";

interface ActorsTypes {
    filmId?: number;
}

export const Actors: React.FC<ActorsTypes> = ({filmId}) => {

    const {data} = useGetActorsQuery(filmId);

    const actors = data?.filter((item: IStaff) => item.professionKey === 'ACTOR');

    return <Slider data={actors?.map((item: IStaff) =>
        <CardItem
            name={item.nameRu}
            src={item.posterUrl}
            key={item.professionKey}
            link={`/name/${item.staffId}`}
            description={item.description}
            footerClassName={styles.footer}
        />
    )}/>
}