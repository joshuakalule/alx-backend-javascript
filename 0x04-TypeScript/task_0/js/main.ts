interface Student {
    firstName: string;
    lastName: String;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Joshua',
    lastName: 'Kalule',
    age: 45,
    location: 'Kampala',
};

const student2: Student = {
    firstName: 'User2',
    lastName: 'lastname',
    age: 54,
    location: 'Addis Ababa',
}

const studentList: Student[] = [student1, student2];

const tableBody = document.createElement("table");

studentList.forEach((student) => {
    const row = document.createElement("tr");

    row.innerHTML = `<td>${student.firstName}</td><td>${student.lastName}</td>`;
    tableBody.appendChild(row);
});
