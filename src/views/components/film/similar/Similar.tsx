import React from 'react';
import {useGetSimilarQuery} from "_/serviceAPI";
import {Slider} from "@/shared-components/slider/Slider";
import {Caption} from "@/shared-components/caption/Caption";
import {CardItem} from "@/layout-components/card-item/CardItem";

interface SimilarProps {
    id?: number
}

export const Similar: React.FC<SimilarProps> = ({id}) => {
    const {data} = useGetSimilarQuery(id)

    return (
        <>
            {data && data?.total < 6
                ? <Caption description='К сожалению, мы не смогли найти достаточное количетсво похожих фильмов :('/>
                : (
                    <>
                        <Caption
                            title='Похожее кино'
                            description='Вам также может понравиться'
                        />

                        <Slider data={data?.items?.map((item) =>
                            <CardItem
                                key={item.filmId}
                                name={item.nameRu}
                                src={item.posterUrl}
                                link={`/film/${item.filmId}`}
                            />
                        )}
                        />
                    </>
                )
            }
        </>
    );
}

