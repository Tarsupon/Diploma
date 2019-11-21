export interface User {
    email: string;
    displayName: string;
    photoURL?: string;
    uid: string;
    boards?: Board[];
    // boards: {
    //     [boardName: string]: Task[];
    // };
}

export interface Board {
    id: string;
    boardName: string;
    description: string;
    tasks: Task[];
}

export interface Task {
    id: string;
    description: string;
    header: string;
}
