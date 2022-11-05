import React from 'react';
import {useGetSimilarQuery} from "_/serviceAPI";
import {SimilarItem} from "../similar-item/SimilarItem";
import {Slider} from "@/shared-components/slider/Slider";
import {Caption} from "@/shared-components/caption/Caption";
import {Content} from "@/layout-components/content/Content";

interface SimilarProps {
    id: number | undefined
}

export const Similar: React.FC<SimilarProps> = ({id}) => {
    const {data, isLoading, isFetching} = useGetSimilarQuery(id)

    return (
        <>
            {data && data.total < 4
                ? <Caption description={`К сожалению, мы не смогли найти похожих фильмов :(`}/>
                : (
                    <>
                        <Caption description={`Вам также может понравиться`} title='Похожее кино'/>

                        <Content data={data} isLoading={isLoading} isFetching={isFetching}>
                            <Slider
                                itemsNumber={6}
                                data={data?.items?.map((item) => (
                                    <SimilarItem key={item.filmId} item={item}/>
                                ))}
                            />
                        </Content>
                    </>
                )
            }

        </>
    );
}

