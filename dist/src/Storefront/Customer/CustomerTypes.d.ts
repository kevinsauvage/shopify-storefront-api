export interface CustomerResponse<T> {
    data?: T;
    errors?: Array<{
        message: string;
    }>;
}
export interface CustomerCreateInput {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    [key: string]: unknown;
}
export interface CustomerAddressCreateInput {
    address1: string;
    address2?: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    firstName?: string;
    lastName?: string;
    company?: string;
    phone?: string;
}
export interface CustomerMetafield {
    id: string;
    namespace: string;
    key: string;
    value: string;
}
export interface CustomerOrder {
    id: string;
    orderNumber: string;
    totalPrice: string;
    currencyCode: string;
}
export interface CustomerAddress {
    id: string;
    address1: string;
    address2: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
}
