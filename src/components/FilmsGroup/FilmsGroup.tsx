import React from 'react';
import {IMovies} from "../../types/IMovie";

interface FilmsGroupTypes {
    data: IMovies | undefined;
    title: string;
}

export const FilmsGroup: React.FC<FilmsGroupTypes> = ({data, title}) => {
    return (
        <div className={'container'} style={{width: '100%'}}>
            <div style={{width: '400px', height: '220px', display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '100%', height: '100%',display: 'flex', flexDirection: 'row'}}>
                    {data?.items.slice(0, 3).map((item) => (
                        <img style={{width: '100%', height: '100%'}} src={item.posterUrl} alt=""/>
                    ))}
                </div>
                <span style={{color: 'white', fontSize: '1rem', alignSelf: 'start'}}>{title}</span>
            </div>
        </div>
    );
}