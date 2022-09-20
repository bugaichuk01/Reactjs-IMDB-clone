import {useGetBoxOfficeQuery} from "../_services/serviceAPI";
import {convertBoxOffice} from "../_helpers/convertBoxOffice";
import {converPrice} from "../_helpers/convertPrice";
import {IBoxOffice} from "../types/IBoxOffice";

export const useGetBoxOffice = (id: number | undefined) => {
    const {data} = useGetBoxOfficeQuery(id);

    return data?.items.map((item: IBoxOffice) => (
        {caption: `${convertBoxOffice(item.type)}`, value: `${item.type !== 'BUDGET' ? '+' : ''} ${converPrice(item.amount)} $`, condition: item.amount}
    ));
}