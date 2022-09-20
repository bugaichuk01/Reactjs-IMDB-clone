import React from 'react';
import {ActorItem} from "./ActorItem/ActorItem";
import {useGetActorsQuery} from "../../../../../_services/serviceAPI";
import {IStaff} from "../../../../../types/IStaff";
import {Slider} from "../../../../Slider/Slider";

interface ActorsTypes {
    filmId: number | undefined;
}

export const Actors: React.FC<ActorsTypes> = ({filmId}) => {

    const {data} = useGetActorsQuery(filmId);

    const actors = data?.filter((item: IStaff) => item.professionKey === 'ACTOR');

    return <Slider data={actors?.map((item : IStaff) => <ActorItem key={item.professionKey} item={item} />)} itemsNumber={6} />
}