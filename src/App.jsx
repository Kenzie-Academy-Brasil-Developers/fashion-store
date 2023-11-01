import { DefaultTemplate } from "./components/index.js";
import { MainRoutes } from "./routes/index.jsx";
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <DefaultTemplate>
        <MainRoutes />
      </DefaultTemplate>
    </>
  );
};

export default App;
