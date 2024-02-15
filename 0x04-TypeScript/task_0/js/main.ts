interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'City A',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'City B',
};

// Creating an array named studentsList
const studentsList: Student[] = [student1, student2];

// Rendering a table using Vanilla JavaScript
const table = document.createElement('table');
const headerRow = table.insertRow(0);

// Adding headers
const firstNameHeader = headerRow.insertCell(0);
const locationHeader = headerRow.insertCell(1);
firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

// Adding rows for each student
studentsList.forEach((student, index) => {
  const row = table.insertRow(index + 1);
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Appending the table to the body
document.body.appendChild(table);
