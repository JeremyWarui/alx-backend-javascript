interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const firstStudent: Student = {
    firstName: "Hayes",
    lastName: "Moyes",
    age: 32,
    location: "San Francisco"
}

const secStudent: Student = {
    firstName: "Alex",
    lastName: "Fergurson",
    age: 54,
    location: "San Francisco"
}

const studentsList: Student[] = [firstStudent, secStudent];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
for (const student of studentsList) {
    const row: HTMLTableRowElement = document.createElement("tr");

    const firstNameCol: HTMLTableCellElement = document.createElement("td");
    const firstNameData: Text = document.createTextNode(student.firstName);
    firstNameCol.appendChild(firstNameData);

    const locationCell: HTMLTableCellElement = document.createElement("td");
    const locationData: Text = document.createTextNode(student.location);
    locationCell.appendChild(locationData);

    row.appendChild(firstNameCol);
    row.appendChild(locationCell);

    table.appendChild(row);
}

body.appendChild(table);
