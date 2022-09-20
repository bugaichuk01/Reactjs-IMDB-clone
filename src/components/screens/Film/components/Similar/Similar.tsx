import React from 'react';
import {SimilarItem} from "./SimilarItem/SimilarItem";
import {FilmsTitle} from "../../../../FilmsTitle/FilmsTitle";
import {Slider} from "../../../../Slider/Slider";
import {useGetSimilarQuery} from "../../../../../_services/serviceAPI";
import {Content} from "../../../../Content/Content";

interface SimilarTypes {
    id: number | undefined;
}

export const Similar: React.FC<SimilarTypes> = ({id}) => {
    const {data, isLoading, isFetching} = useGetSimilarQuery(id)

    return (
        <>
            <div>
                <FilmsTitle description='Вам также может понравиться' title='Похожее кино'/>
            </div>

            <Content data={data} isLoading={isLoading} isFetching={isFetching}>
                <Slider
                    itemsNumber={6}
                    data={data?.items?.map((item) => (
                        <SimilarItem key={item.filmId} item={item}/>
                    ))}
                />
            </Content>
        </>
    );
}

