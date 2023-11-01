import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to={"/dashboard"}>
            <li className="navigation-title sm">INÍCIO</li>
          </Link>
          <Link to={"/dashboard/products"}>
            <li className="navigation-title sm">PRODUTOS</li>
          </Link>
        </ul>
      </nav>
      <h1 className="title-2">PAINEL DO ADMINISTRADOR</h1>
      <p className="paragraph">Seja bem vindo, {"AdminName"}</p>
    </>
  );
};
