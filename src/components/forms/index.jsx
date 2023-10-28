import { StdInput } from "./inputs/index.jsx";
import { useForm } from "react-hook-form";

export const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors  },
  } = useForm();

  const submit = (payload) => {
    console.log(payload);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <StdInput
        type={"text"}
        placeholder={"Email"}
        {...register("email")}
        error={errors.email}
      />
      <StdInput
        type={"password"}
        placeholder={"Senha"}
        {...register("password")}
        error={errors.password}
      />
      <div>
        <button>Acessar</button>
        <button>Cadastre-se</button>
      </div>
    </form>
  );
};
