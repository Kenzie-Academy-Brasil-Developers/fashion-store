import { StdInput, StdTextArea } from "./inputs/index.jsx";
import { useForm } from "react-hook-form";
import { MdArrowBack, MdOutlineModeEditOutline } from "react-icons/md";
import { LiaPlusCircleSolid } from "react-icons/lia";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
        <button type="submit">Acessar</button>
        <button>Cadastre-se</button>
      </div>
    </form>
  );
};

export const RegisterAdminForm = () => {
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
        <button>Cadastrar-se</button>
      </form>
    </div>
  );
};

export const RegisterProductForm = () => {
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
          type={"number"}
          placeholder={"Preço R$"}
          {...register("price")}
          error={errors.price}
        />
        <StdInput
          type={"text"}
          placeholder={"Imagem (url)"}
          {...register("image")}
          error={errors.image}
        />
        <StdTextArea
          placeholder={"Descriçao resumida"}
          {...register("description")}
          error={errors.description}
        />
        <button>
          <LiaPlusCircleSolid size={20} /> Novo produto
        </button>
      </form>
    </div>
  );
};

export const UpdateProductForm = () => {
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
          type={"number"}
          placeholder={"Preço R$"}
          {...register("price")}
          error={errors.price}
        />
        <StdInput
          type={"text"}
          placeholder={"Imagem (url)"}
          {...register("image")}
          error={errors.image}
        />
        <StdTextArea
          placeholder={"Descriçao resumida"}
          {...register("description")}
          error={errors.description}
        />
        <button>
          <MdOutlineModeEditOutline size={20} /> Novo produto
        </button>
      </form>
    </div>
  );
};
