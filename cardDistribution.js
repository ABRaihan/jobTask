function cartDistribution(persons) {
    const cards = persons?.map(({ district, currentYear, postNo, birthYear, priority }, serial) => {
        const cardWithDistrict = district.slice(0, 2).toUpperCase(),
            cardWithYear = cardWithDistrict + String(currentYear).slice(-2),
            cardWithPostal = cardWithYear + String(postNo).slice(0, 2),
            cardWithBirth = cardWithPostal + birthYear,
            cardNumber = cardWithBirth.padEnd(15, "0") + (serial + 1);

        let gift = (+cardNumber.slice(-1)) % 2 === 0 ? "R" : "W";
        return { cardNumber, gift, priority };
    })
    return cards.sort((prev, next) => prev.priority - next.priority);

}
