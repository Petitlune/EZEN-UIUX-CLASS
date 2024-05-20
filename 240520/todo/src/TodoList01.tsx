import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TodoList01 = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(watch());
  const onValid = (data: any) => {};

  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  //event가 발생하면, target 존재하고 currentTarget도 존재, currentTarget은 이벤트 핸들러가 바인딩 되어 있는 요소의 value 값을 찾아오고자 할 때, 반면 target은 실제 발생된 요소의 value 값을 찾아오고자 할 때 사용.
  //React.js 에서 currentTarget을 사용해서 value값을 찾고자 할 때는 FormEvent를 사용, target을 사용해서 value값을 찾고자 할 때는 changeEvent를 사용
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) {
      return setTodoError("좀 더 길게 입력해야합니다....");
    }
    console.log(todo);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/gm,
              message: "Only naver.com emails allowed",
            },
          })}
          type="email"
          placeholder="email"
        />
        <input
          {...register("firstname", { required: true })}
          type="text"
          placeholder="firstname"
        />
        <input
          {...register("lastname", { required: true })}
          type="text"
          placeholder="lastname"
        />
        <input
          {...register("username", { required: true, minLength: 5 })}
          type="text"
          placeholder="username"
        />
        <input
          {...register("password", {
            required: "Password is required",
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
        <span>{errors.password1?.message as string}</span>
        <button>추가하기</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
  );
};

export default TodoList01;
