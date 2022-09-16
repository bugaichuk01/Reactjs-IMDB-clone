import {useGetBoxOfficeQuery} from "../_services/serviceAPI";
import {convertBoxOffice} from "../_helpers/convertBoxOffice";
import {converPrice} from "../_helpers/convertPrice";

type boxOfficeTypes = {
    type: string;
    amount: number;
}

export const useGetBoxOffice = (id: string | undefined) => {
    const boxOffice = useGetBoxOfficeQuery(id as string);

    return boxOffice?.data?.items.map((item: boxOfficeTypes) => (
        {caption: `${convertBoxOffice(item.type)}`, value: `${item.type !== 'BUDGET' ? '+' : ''} ${converPrice(item.amount)} $`, condition: item.amount}
    ));
}