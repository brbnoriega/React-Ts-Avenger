import { useTodos } from "../hooks/useTodos";

const Title = () => {
  const { pendingTodos } = useTodos();
  return (
    <>
      <h1>To Do: {pendingTodos}</h1>
    </>
  );
};

export default Title;
