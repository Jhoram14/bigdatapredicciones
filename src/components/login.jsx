import React from "react";

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos del formulario:', formData);
    };
  return (
    <>
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input type="text" id="username" name="username" required/>
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required/>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
    </>
  );
}

