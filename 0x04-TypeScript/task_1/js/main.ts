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
