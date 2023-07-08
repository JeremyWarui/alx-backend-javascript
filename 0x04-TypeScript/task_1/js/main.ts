interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher: Teacher = {
    firstName: "James",
    lastName: "Craig",
    fullTimeEmployee: true,
    location: "New York",
    contract: false
}

console.log(teacher);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string) {
    const firstLetter = firstName.substring(0, 1);
    const name = `${firstLetter}. ${lastName}`;
    return name;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}