import React from 'react';
import {useGetActorsQuery} from "_/serviceAPI";
import {IStaff} from "../../../../types/IStaff";
import {ActorItem} from "../actor-item/ActorItem";
import {Slider} from "@/shared-components/slider/Slider";

interface ActorsTypes {
    filmId: number | undefined;
}

export const Actors: React.FC<ActorsTypes> = ({filmId}) => {

    const {data} = useGetActorsQuery(filmId);

    const actors = data?.filter((item: IStaff) => item.professionKey === 'ACTOR');

    return <Slider data={actors?.map((item : IStaff) => <ActorItem key={item.professionKey} item={item} />)} itemsNumber={6} />
}