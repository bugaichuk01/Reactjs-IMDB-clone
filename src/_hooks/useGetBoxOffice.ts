import {IBoxOffice} from "../types/IBoxOffice";
import converter from '_/converters';
import {useGetBoxOfficeQuery} from "_/serviceAPI";

export const useGetBoxOffice = (id?: number) => {
    const {data} = useGetBoxOfficeQuery(id);

    return data?.items?.map((item: IBoxOffice) => (
        {caption: `${converter.convertBoxOffice(item.type)}`, value: `${item.type !== 'BUDGET' ? '+' : ''} ${converter.convertPrice(item.amount)} $`, condition: item.amount}
    ));
}