import { DefaultTemplate } from "./components/index.js";
import { MainRoutes } from "./routes/index.jsx";

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
