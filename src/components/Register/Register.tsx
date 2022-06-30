import { useEffect, useState } from "react";
import { useFormik, getIn } from "formik";

import { IRegisterInitialValues } from "./interfaces";
import MyCustomSelect from "../MyCustomSelect";
import { continentOptions, regionOptions, roleOptions } from "../helpers";
import "../styles.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [showInput, setShowInput] = useState(false);
  const initialValues: IRegisterInitialValues = {
    userName: "",
    email: "",
    password: "",
    continent: "",
    region: "",
    role: "",
    teamId: "",
    isTeamMember: [],
  };
  const validate = (values: IRegisterInitialValues) => {
    const errors: IRegisterInitialValues = {};

    if (!values.userName) {
      errors.userName = "Requerido";
    }
    if (!values.email) {
      errors.email = "Requerido";
    }

    if (!values.password) {
      errors.password = "Requerido";
    }

    if (!values.continent) {
      errors.continent = "Requerido";
    }
    if (!values.region) {
      errors.region = "Requerido";
    }
    if (!values.role) {
      errors.region = "Requerido";
    }

    if (values.isTeamMember?.length !== 0 && !values.teamId) {
      errors.teamId = "Requerido";
    }
    return errors;
  };

  const onSubmit = (): any => {
    console.log("REGISTERED");
    localStorage.setItem("logged", "yes");
    console.log(values);
  };
  const formik = useFormik({ initialValues, onSubmit, validate });
  const { handleChange, handleSubmit, values, errors, setFieldValue } = formik;
  const checkValue = getIn(values, "isTeamMember");
  useEffect(() => {
    console.log(checkValue.length);
    if (checkValue.length !== 0) {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  }, [checkValue]);

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <h1>Registrarse</h1>
      <div className="input_container">
        <label>Nombre de usuario</label>
        <input
          type="text"
          name="userName"
          value={values.userName}
          onChange={handleChange}
        />
        {errors.userName && <span className="errors">*{errors.userName}</span>}
      </div>
      <div className="input_container">
        <label>Contraseña</label>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <span className="errors">*{errors.password}</span>}
      </div>
      <div className="input_container">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span className="errors">*{errors.email}</span>}
      </div>
      <div className="input_check_container">
        <input
          name="isTeamMember"
          type="checkbox"
          id="teamMember"
          value="isTeamMember"
          onChange={handleChange}
        />
        <label htmlFor="teamMember">Pertener a un equipo ya creado</label>
      </div>
      {showInput && (
        <div className="input_container">
          <label>Por favor introduce el identificador</label>
          <input
            name="teamId"
            type="text"
            value={values.teamId}
            onChange={handleChange}
          />
          {errors.teamId && <span className="errors">*{errors.teamId}</span>}
        </div>
      )}

      <div className="input_container">
        <label>Rol</label>
        <MyCustomSelect
          options={roleOptions}
          value={values.role!}
          onChange={(value: any) => setFieldValue("role", value.value)}
        />
        {errors.role && <span className="errors">*{errors.role}</span>}
      </div>
      <div className="input_container">
        <label>Continente</label>
        <MyCustomSelect
          options={continentOptions}
          value={values.continent!}
          onChange={(value: any) => setFieldValue("continent", value.value)}
        />
        {errors.continent && (
          <span className="errors">*{errors.continent}</span>
        )}
      </div>
      <div className="input_container">
        <label>Región</label>
        <MyCustomSelect
          options={regionOptions}
          value={values.region!}
          onChange={(value: any) => setFieldValue("region", value.value)}
        />
        {errors.region && <span className="errors">*{errors.region}</span>}
      </div>
      <button type="submit">Registrar</button>
      <label>
        <Link to={"/login"}>Ya tengo cuenta</Link>
      </label>
    </form>
  );
};

export default Register;
