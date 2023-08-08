interface User {
    id: number;
    fullName: string;
    email?: string;
    password?: string;
}

interface Course {
    id: number;
}

export type {
    User,
    Course
}
