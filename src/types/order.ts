export interface IOrder {
    fullName: string;
    email: string;
    phoneNumber: string;
    details: string;
}

export function checkOrderInfo(order: IOrder) {
    if (order.fullName == "" || order.phoneNumber == "") {
        return false;
    }

    return true;
}