import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { atom, useRecoilState } from "recoil";
import { StringLiteral } from "typescript";

// interface IForm {
//   todo: string;
//   // email: string;
//   // firstname: string;
//   // lastname: string;
//   // username: string;
//   // password: string;
//   // password1: string;
//   // extraError: string;
// }

// interface ITodo {
//   id: number;
//   text: string;
//   //category는 타입리터럴 형식으로 줌
//   category: "TO_DO" | "DOING" | "DONE";
// }
// const todoState = atom<ITodo[]>({
//   key: "todo",
//   default: [],
// });

const TodoList01 = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  // const value = useRecoilValue(todoState);
  // const ModFn = useSetRecoilState(todoState);
  const {
    register,
    // watch,
    handleSubmit,
    // formState: { errors },
    // setError,
    setValue,
  } = useForm<IForm>();
  //   {
  //   defaultValues: {
  //     email: "@naver.com",
  //   },
  // }
  // console.log(watch());
  // const onValid = (data: any) => {
  //   if (data.password !== data.pssword1) {
  //     setError(
  //       "password1",
  //       { message: "Password is not the same..." },
  //       { shouldFocus: true }
  //     );
  //   }
  //   setError("extraError", { message: "Server offline..." });
  // };

  // const [todo, setTodo] = useState("");
  const handleValid = ({ todo }: IForm) => {
    setTodos((oldTodos) => [
      { id: Date.now(), text: todo, category: "TO_DO" },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };
  console.log(todos);
  // const [todoError, setTodoError] = useState("");
  //event가 발생하면, target 존재하고 currentTarget도 존재, currentTarget은 이벤트 핸들러가 바인딩 되어 있는 요소의 value 값을 찾아오고자 할 때, 반면 target은 실제 발생된 요소의 value 값을 찾아오고자 할 때 사용.
  //React.js 에서 currentTarget을 사용해서 value값을 찾고자 할 때는 FormEvent를 사용, target을 사용해서 value값을 찾고자 할 때는 changeEvent를 사용

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setTodo(value);
  // };
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (todo.length < 10) {
  //     return setTodoError("좀 더 길게 입력해야합니다....");
  //   }
  //   console.log(todo);
  // };

  return (
    <div>
      <h1>할 일 정리하기</h1>
      <br />
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
        {/* <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/gm,
              message: "Only naver.com emails allowed",
            },
          })}
          type="email"
          placeholder="email"
        />
        <span>{errors.email?.message as string}</span>
        <input
          {...register("firstname", {
            required: "Write Here",
            // validate: (value) => !value.includes("test"),
            validate: (value) =>
              value.includes("test") ? "No test allowed" : true,
          })}
          type="text"
          placeholder="firstname"
        />
        <span>{errors.firstname?.message as string}</span>
        <input
          {...register("lastname", { required: true })}
          type="text"
          placeholder="lastname"
        />
        <span>{errors.lastname?.message as string}</span>
        <input
          {...register("username", {
            required: "username is required",
            minLength: 5,
          })}
          type="text"
          placeholder="username"
        />

        <input
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 10,
              message: "비밀번호가 너무 짧습니다.",
            },
          })}
          type="password"
          placeholder="password"
        />
        <span>{errors.password?.message as string}</span>
        <input
          {...register("password1", {
            required: "Password1 is required",
            minLength: {
              value: 10,
              message: "비밀번호가 너무 짧습니다.",
            },
          })}
          type="password"
          placeholder="password1"
        />
        <span>{errors.password1?.message as string}</span> */}

        <button>추가하기</button>
        {/* {todoError !== "" ? todoError : null} */}
        {/* <span>{errors.extraError?.message as string}</span> */}
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList01;
