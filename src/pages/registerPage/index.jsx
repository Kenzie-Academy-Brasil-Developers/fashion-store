import registerBanner from "../../assets/registerBanner.png"
import { RegisterAdminForm } from "../../components"

export const RegisterPage = () => {
  return (
    <section>
      <img src={registerBanner} alt="register banner" />
      <RegisterAdminForm />
    </section>
  )
}