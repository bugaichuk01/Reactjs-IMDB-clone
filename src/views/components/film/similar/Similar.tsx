import React from 'react';
import {useGetSimilarQuery} from "_/serviceAPI";
import {SimilarItem} from "../similar-item/SimilarItem";
import {Slider} from "@/shared-components/slider/Slider";
import {Caption} from "@/shared-components/caption/Caption";

interface SimilarProps {
    id: number | undefined
}

export const Similar: React.FC<SimilarProps> = ({id}) => {
    const {data} = useGetSimilarQuery(id)

    return (
        <>
            {data && data.total < 6
                ? <Caption description={`К сожалению, мы не смогли найти достаточное количетсво похожих фильмов :(`}/>
                : (
                    <>
                        <Caption description={`Вам также может понравиться`} title='Похожее кино'/>

                        <Slider
                            itemsNumber={6}
                            data={data?.items?.map((item) => (
                                <SimilarItem key={item.filmId} item={item}/>
                            ))}
                        />
                    </>
                )
            }

        </>
    );
}

