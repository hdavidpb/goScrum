import { useFormik } from "formik";
import { ILoginInitialValues } from "./interface";
import "../styles.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialValues: ILoginInitialValues = {
    email: "",
    password: "",
  };
  const validate = (values: ILoginInitialValues) => {
    const errors: ILoginInitialValues = {};

    if (!values.email) {
      errors.email = "El email es requerido.";
    }
    if (!values.password) {
      errors.password = "La contraseña es requerida.";
    }

    return errors;
  };

  const onSubmit = (): any => {
    alert("BIENVENIDO!");
    navigate("/");
    localStorage.setItem("logged", "yes");
  };
  const formik = useFormik({ initialValues, onSubmit, validate });
  const { handleChange, handleSubmit, values, errors } = formik;

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <h1>Iniciar sesión</h1>
      <div className="input_container">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span className="errors">{errors.email}</span>}
      </div>
      <div className="input_container">
        <label>Contraseña</label>
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <span className="errors">{errors.password}</span>}
      </div>
      <button type="submit">Enviar</button>
      <label>
        <Link to={"/register"}>Registrarme</Link>
      </label>
    </form>
  );
};

export default Login;
