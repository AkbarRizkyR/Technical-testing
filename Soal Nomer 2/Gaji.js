function applyCriteria(benefit, kriteria) {
    let criteriaMap = new Map();

    for (let obj of kriteria) {
        for (let key in obj) {
            criteriaMap.set(key, obj[key]);
        }
    }

    for (let benefitItem of benefit) {
        if (criteriaMap.has(benefitItem.name)) {
            const newAmount = benefitItem.amount;
            const criteriaNames = criteriaMap.get(benefitItem.name);

            for (let name of criteriaNames) {
                let itemToUpdate = benefit.find(b => b.name === name);
                if (itemToUpdate) {
                    itemToUpdate.amount = newAmount;
                }
            }
        }
    }

    return benefit;
}

const benefit = [
    {
        id: 1,
        name: "Gaji Pokok",
        amount: 3000000,
        unit: 12
    },
    {
        id: 2,
        name: "Tunjangan Hari Raya (THR)",
        amount: 0,
        unit: 1
    },
    {
        id: 3,
        name: "Uang makan",
        amount: 100000,
        unit: 12
    },
    {
        id: 4,
        name: "Tunjangan shift",
        amount: 0,
        unit: 0.2
    },
];

const kriteria = [{ 'Gaji Pokok': ['Tunjangan Hari Raya (THR)', 'Tunjangan shift'] }];
console.log(applyCriteria(benefit, kriteria));

const updatedBenefits = applyCriteria(benefit, kriteria);

const outputElement = document.getElementById('output');

updatedBenefits.forEach(benefit => {
    const row = outputElement.insertRow(-1);
    row.insertCell(0).textContent = benefit.id;
    row.insertCell(1).textContent = benefit.name;
    row.insertCell(2).textContent = benefit.amount;
    row.insertCell(3).textContent = benefit.unit;
});
