import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      desc: "Recolectar las gemas del infinito",
      completed: false,
    },
    {
      id: "2",
      desc: "Gema del alma",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface props {
  children: JSX.Element | JSX.Element[]; //defino el tipo de dato puede ser 1 o varios
}

const TodoProvider = ({ children }: props) => {
  //mantener un estado aca para mantener variables o funciones a lo largo de todos los componentes a traves del Provider
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    //recibe el id del todo que quiero cambiar y cuando se dispare dispachar action
    dispatch({ type: "toggleTodo", payload: { id } });
  };

  return (
    <TodoContext.Provider
      value={{
        todoState,
        toggleTodo,
      }}
    >
      {/* high order component */}
      {children}{" "}
      {/*--> los hijos que seran renderizados aca adentro todos los componentes que dentro del value compartire*/}
      {/* el children viene de las props */}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
