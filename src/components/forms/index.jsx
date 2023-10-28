import { StdInput } from "./inputs/index.jsx";
import { useForm } from "react-hook-form";
import { MdArrowBack } from "react-icons/md"

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

export const RegisterForm = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (payload) => {
    console.log(payload);
  };

  return (
    <div>
      <button>
        <MdArrowBack size={20} /> Voltar
      </button>
      <h2>Cadastrar-se</h2>
      <p>Seja bem vindo, administrador!</p>
      <form onSubmit={handleSubmit(submit)}>
        <StdInput
          type={"text"}
          placeholder={"Nome"}
          {...register("name")}
          error={errors.name}
        />
        <StdInput
          type={"email"}
          placeholder={"Email"}
          {...register("email")}
          error={errors.email}
        />
        <StdInput
          type={"password"}
          placeholder={"Senha"}
          {...register("password")}
          error={errors.name}
        />
        <StdInput
          type={"password"}
          placeholder={"Confirmar senha"}
          {...register("passValidate")}
          error={errors.passValidate}
        />
      </form>
    </div>
  );
}
