export interface User {
    email: string;
    displayName: string;
    photoURL?: string;
    uid: string;
    boards: {
        [boardName: string]: Task[];
    };
}

export interface Task {
    id: string;
    header: string;
}
