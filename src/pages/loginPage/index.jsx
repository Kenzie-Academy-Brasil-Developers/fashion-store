import bannerImg from "../../assets/banner.png";
import { LoginForm } from "../../components";

export const LoginPage = () => {
  return (
    <div className="container">
      <section>
        <img src={bannerImg} alt="banner image" />
        <LoginForm />
      </section>
    </div>
  );
};
