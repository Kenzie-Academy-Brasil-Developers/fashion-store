import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to={"/dashboard"}>
            <li>Início</li>
          </Link>
          <Link to={"/dashboard/products"}>
            <li>Produtos</li>
          </Link>
        </ul>
      </nav>
      <h1>Painel do Administrador</h1>
      <p>Seja bem vindo, {"AdminName"}</p>
    </>
  );
};
