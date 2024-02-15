interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const initial = firstName.charAt(0).toUpperCase();
  const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${initial}. ${fullLastName}`;
};

// Example usage
const printedTeacher = printTeacher("John", "Doe");
console.log(printedTeacher);

interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface definition for StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Class definition for StudentClass
class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const studentInstance = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(studentInstance.workOnHomework()); // Should print "Currently working"
console.log(studentInstance.displayName()); // Should print "John"
