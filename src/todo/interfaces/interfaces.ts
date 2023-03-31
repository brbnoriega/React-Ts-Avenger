export interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}



export interface TodoState{//como quiero que luzca el todoState
    todoCount: number;
    todos: Todo[],
    completed: number;
    pending: number;
      
    }
    