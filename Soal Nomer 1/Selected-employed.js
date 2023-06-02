function getUnselectedEmployees(employees, selected_employees) {
    return employees.filter(
        (emp) =>
            !selected_employees.some((selectedEmp) => selectedEmp.nik === emp.nik)
    );
}

const employees = [
    { nik: "1", name: "ABIYYU" },
    { nik: "2", name: "ADHIKA" },
    { nik: "3", name: "AFRIE" },
    { nik: "4", name: "ALAM" },
];

const selected_employees = [
    { nik: "1", name: "ABIYYU" },
    { nik: "2", name: "ADHIKA" },
];

const unselected_employees = getUnselectedEmployees(
    employees,
    selected_employees
);
console.log(unselected_employees);
const outputElement = document.getElementById("output");

const list = document.createElement("ul");

unselected_employees.forEach((employee) => {
    const listItem = document.createElement("li");
    listItem.textContent = `NIK: ${employee.nik}, Name: ${employee.name}`;
    list.appendChild(listItem);
});

outputElement.appendChild(list);
