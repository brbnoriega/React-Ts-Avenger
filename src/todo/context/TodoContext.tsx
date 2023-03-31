import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";
//aca alojo toda la info que compartire a lo largo de mis componentes

export type TodoContextProps ={//los type no se extienden las interfaces si-
todoState: TodoState;
toggleTodo: (id: string)=> void;
}

export const TodoContext = createContext<TodoContextProps>({}as TodoContextProps); //lo exporto para reutilizarlo

