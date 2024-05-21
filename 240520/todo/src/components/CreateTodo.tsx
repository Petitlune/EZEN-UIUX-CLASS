import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

interface IForm {
  todo: string;
}

const CreateTodo = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  // const value = useRecoilValue(todoState);
  // const ModFn = useSetRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ todo }: IForm) => {
    setTodos((oldTodos) => [
      { id: Date.now(), text: todo, category: "TO_DO" },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };
  console.log(todos);
  return (
    <form
      onSubmit={handleSubmit(handleValid)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <input
        {...register("todo", { required: "Please Write a todo..." })}
        type="text"
        placeholder="할 일을 입력하세요"
      />

      <button>추가하기</button>
    </form>
  );
};

export default CreateTodo;
