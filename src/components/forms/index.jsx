import { StdInput, StdTextArea } from "./inputs/index.jsx";
import { useForm } from "react-hook-form";
import { MdArrowBack, MdOutlineModeEditOutline } from "react-icons/md";
import { LiaPlusCircleSolid } from "react-icons/lia";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  productSchema,
  registerAdminSchema,
} from "./index.schema.js";
import { useContext } from "react";
import { productContext } from "../../providers/productsProvider.jsx";
import { loginContext } from "../../providers/loginProvider.jsx";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

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
        <button type="submit" className="btn access">
          ACESSAR
        </button>
        <button className="btn register">CADASTRE-SE</button>
      </div>
    </form>
  );
};

export const RegisterAdminForm = () => {
  const {createUser} = useContext(loginContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerAdminSchema) });

  const submit = (payload) => {
    createUser(payload)
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
          error={errors.password}
        />
        <StdInput
          type={"password"}
          placeholder={"Confirmar senha"}
          {...register("passValidate")}
          error={errors.passValidate}
        />
        <button className="btn registerForm">CADASTRAR-SE</button>
      </form>
    </div>
  );
};

export const RegisterProductForm = () => {
  const { createItem } = useContext(productContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });

  const submit = (payload) => {
    createItem(payload);
  };

  return (
    <div>
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
          placeholder={"Descriço resumida"}
          {...register("description")}
          error={errors.description}
        />
        <button className="btn newProduct">
          <LiaPlusCircleSolid size={20} />
          NOVO PRODUTO
        </button>
      </form>
    </div>
  );
};

export const UpdateProductForm = () => {
  const { updateItem } = useContext(productContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });

  const submit = (payload) => {
    updateItem(payload);
  };

  return (
    <div>
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
        <button className="btn editProduct">
          <MdOutlineModeEditOutline size={20} />
          EDITAR PRODUTO
        </button>
      </form>
    </div>
  );
};
