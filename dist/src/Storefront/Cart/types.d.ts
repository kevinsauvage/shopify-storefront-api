type CartLine = {
    cursor: string | null;
    id: string;
    quantity: number;
    merchandise: {
        id: string;
        title: string;
        image: {
            url: string;
            altText: string | null;
        } | null;
        product: {
            id: string;
            title: string;
        };
    };
    attributes: Attribute[];
};
type Attribute = {
    key: string;
    value: string;
};
type Cost = {
    totalAmount: {
        amount: string;
        currencyCode: string;
    };
    subtotalAmount: {
        amount: string;
        currencyCode: string;
    };
    totalTaxAmount: {
        amount: string | null;
        currencyCode: string | null;
    };
    totalDutyAmount: {
        amount: string | null;
        currencyCode: string | null;
    };
};
type BuyerIdentity = {
    email: string | null;
    phone: string | null;
    customer: {
        id: string | null;
        displayName: string | null;
    } | null;
    countryCode: string;
    deliveryAddressPreferences: {
        id: string;
        label: string;
        address: {
            id: string;
            address1: string | null;
            address2: string | null;
            city: string | null;
            province: string | null;
            country: string | null;
            zip: string | null;
        } | null;
    }[];
};
export type CartType = {
    id: string;
    createdAt: string;
    updatedAt: string;
    checkoutUrl: string;
    totalQuantity: number;
    note: string | null;
    lines: CartLine[];
    attributes: Attribute[];
    cost: Cost;
    discountCodes: string[];
    buyerIdentity: BuyerIdentity;
};
export {};
