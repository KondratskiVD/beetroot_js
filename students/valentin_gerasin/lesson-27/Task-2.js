const getGcd = (a, b) => {
    if (!b) {
        return a;
    }

    return getGcd(b, a % b);
};

const makeRational = (numer, denom) => {
    const gcd = getGcd(numer, denom);
    return { numer: numer / gcd, denom: denom / gcd };
};

const getNumer = (rational) => rational.numer;
const getDenom = (rational) => rational.denom;

const add = (rational1, rational2) => (
    makeRational(
        getNumer(rational1) * getDenom(rational2) + getNumer(rational2) * getDenom(rational1),
        getDenom(rational1) * getDenom(rational2),
    ));

const sub = (rational1, rational2) => (
    makeRational(
        getNumer(rational1) * getDenom(rational2) - getNumer(rational2) * getDenom(rational1),
        getDenom(rational1) * getDenom(rational2),
    ));

const mult = (rational1, rational2) => (
    makeRational(
        getNumer(rational1) * getNumer(rational2),
        getDenom(rational1) * getDenom(rational2),
    )
)
const div = (rational1, rational2) => (
    makeRational(
        getNumer(rational1) * getDenom(rational2),
        getDenom(rational1) * getNumer(rational2),
    )
)


const addResult = add({ numer: 10, denom: 5 }, { numer: 2, denom: 3 })
console.log(addResult);
const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;
console.log(ratToString(addResult));


const difResult = sub({ numer: 4, denom: 5 }, { numer: 2, denom: 3 })
console.log(difResult)
const difToString = (dif) => `${getNumer(dif)}/${getDenom(dif)}`;
console.log(difToString(difResult));


const multResult = mult({ numer: 4, denom: 5 }, { numer: 2, denom: 3 })
console.log(multResult)
const multToString = (multiplication) => `${getNumer(multiplication)}/${getDenom(multiplication)}`;
console.log(multToString(multResult));


const divResult = div({ numer: 6, denom: 7 }, { numer: 2, denom: 3 })
console.log(divResult)
const divString = (divis) => `${getNumer(divis)}/${getDenom(divis)}`;
console.log(divString(divResult));