import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function LoginPage() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    const result = await signIn("credentials", {
      email: email.value,
      contrasena: password.value,
      redirect: false,
    });

    if (result?.error) {
      // handle sign-in error
      alert(result.error);
    } else if (result?.url) {
      // redirect to sign-in URL if it exists
      router.push("/");
    } else {
      // redirect to index page on successful sign-in
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="form_container mt-0">
          <h2>Accede a tu cuenta ahora</h2>
          <form onSubmit={handleSubmit}>
            <input placeholder="Email" type="email" name="email" required />
            <input placeholder="Password" type="password" name="password" required />
            <button type="submit">Sign In</button>
          </form>
          <Link href="/recuperar-contrasena">Olvidaste tu contraseña?</Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
