import React, { useState } from "react";
import { useForm } from "react-hook-form";
/* function ToDoList() {
  const [toDo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          placeholder="Write a to-do-list ..."
        />
        <button>Add</button>
      </form>
    </div>
  );
} */
interface IForm {
  email: string;
  firstName: string;
  password: string;
  password1: string;
  lastName: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  // watch: form의 입력값들의 변화를 관찰할 수 있게 해주는 함수
  const onValid = (data: IForm) => {
    console.log(data);
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same!" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline." });
  };
  return (
    <div>
      {/* handleSubmit의 첫번째 인자가 유효한 데이터면 Submit을 할 경우 호출합니다. */}
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("email", {
            required: "Email is required",
            validate: (value) =>
              value.includes("nico") ? "no nicos allowed" : true,
          })}
          placeholder="Email"
        />
        <span style={{ color: "white" }}>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "Write here !",
            minLength: {
              value: 5,
              message: "Your firstName is too short!",
            },
          })}
          placeholder="first Name"
        />
        <span style={{ color: "white" }}>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "Write here !" })}
          placeholder="last Name"
        />
        <span style={{ color: "white" }}>{errors?.lastName?.message}</span>
        <input
          {...register("password", { required: "Write here !" })}
          placeholder="password"
        />
        <span style={{ color: "white" }}>{errors?.password?.message}</span>
        <input
          {...register("password1", { required: "Write here !" })}
          placeholder="password1"
        />
        <span style={{ color: "white" }}>{errors?.password1?.message}</span>
        <span style={{ color: "white" }}>{errors?.extraError?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
