export class User {
    email: string;
    displayName: string;
    photoURL?: string;
    uid: string;
    boards?: Board[];
    // boards: {
    //     [boardName: string]: Task[];
    // };
}

export class Board {
    id: string;
    boardName: string;
    description: string;
    tasks: Task[];
}

export class Task {
    id: string;
    description: string;
    header: string;
}
