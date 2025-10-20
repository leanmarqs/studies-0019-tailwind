import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      "Se este e-mail estiver cadastrado, enviaremos o link de recuperação."
    );
    navigate("/");
  }

  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-between overflow-hidden">
      {/* CONTEÚDO CENTRAL */}
      <div className="relative flex flex-col items-center justify-center flex-1 px-4 text-center">
        {/* LOGO */}
        <img
          src="/public/vibo-logo-alt-2.svg"
          alt="VIBO Logo"
          className="w-72 mx-auto mb-6"
        />

        {/* TÍTULO */}
        <h2 className="text-gray-200 text-2xl font-semibold mb-2">
          Esqueceu sua senha?
        </h2>

        <p className="text-gray-400 text-sm mb-8 w-72">
          Digite o e-mail da sua conta e enviaremos instruções para redefinir
          sua senha.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-64 text-left"
        >
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full bg-gray-900/80 border border-gray-700 text-gray-200 px-4 py-2 rounded-full focus:outline-none focus:border-purple-500 transition backdrop-blur-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition"
          >
            Enviar link
          </button>
        </form>

        {/* DIVIDER "OU" */}
        <div className="flex items-center gap-2 my-6 w-64">
          <span className="flex-1 h-px bg-gray-800"></span>
          <span className="text-gray-500 text-sm">ou</span>
          <span className="flex-1 h-px bg-gray-800"></span>
        </div>

        {/* BOTÃO CRIAR CONTA */}
        <button
          onClick={() => navigate("/signup")}
          className="w-64 bg-white text-gray-900 font-semibold py-2 rounded-full hover:bg-gray-200 transition"
        >
          Criar nova conta
        </button>

        {/* VOLTAR LOGIN */}
        <p
          onClick={() => navigate("/")}
          className="text-purple-500 mt-6 cursor-pointer hover:text-purple-400 transition text-sm"
        >
          Voltar para o login
        </p>
      </div>

      {/* FOOTER */}
      <footer className="relative text-gray-600 text-xs text-center py-4">
        © 2025 VIBO — All rights reserved.
      </footer>
    </div>
  );
}
