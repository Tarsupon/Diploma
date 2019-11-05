export class Board {
    boardId: number;
    boardName: string;
    boardTasks: Task[];
  }

export interface Task {
    id: number;
    header: string;
    time: string;
}