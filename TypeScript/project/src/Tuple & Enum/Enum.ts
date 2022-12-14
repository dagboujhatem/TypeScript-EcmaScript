// An enum is a group of named constant values. Enum stands for enumerated type.

// To define an enum, you follow these steps:
// 1. First, use the enum keyword followed by the name of the enum.
// 2. Then, define constant values for the enum.

// Link: https://www.typescripttutorial.net/typescript-tutorial/typescript-enum/

enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jun)); // Output: true