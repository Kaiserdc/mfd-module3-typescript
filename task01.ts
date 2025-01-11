interface TotalPrice {
    price: number,
    discount: number,
    isInstallment?: boolean,
    months: number
}

const totalPrice = ({price, discount, isInstallment, months}: TotalPrice): number => {
    const finalPrice: number = price - (price * discount) / 100;

    if (isInstallment) return (finalPrice / months)

    return finalPrice
};

const price = totalPrice({price: 100000, discount: 25, isInstallment: true, months: 12});
console.log(price); // 6250
