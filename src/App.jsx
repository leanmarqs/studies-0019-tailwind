function App() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-between overflow-hidden">
      {/* VÍDEO DE FUNDO DESFOCADO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-sm opacity-70"
      >
        <source src="/clips/bf6-clip.mp4" type="video/mp4" />
      </video>

      {/* CAMADA ESCURA PARA CONTRASTE */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTEÚDO CENTRAL */}
      <div className="relative flex flex-col items-center justify-center flex-1 px-4 text-center">
        {/* LOGO */}
        <img
          src="/public/vibo-logo-alt-2.svg"
          alt="VIBO Logo"
          className="w-80 mx-auto mb-6"
        />

        {/* SUBTÍTULO */}
        <p className="text-gray-300 mb-8 text-lg">
          Jogue, compartilhe, viralize.
        </p>

        {/* CAMPOS DE LOGIN */}
        <div className="flex flex-col gap-3 w-64 text-left">
          <input
            type="text"
            placeholder="Nome de usuário ou e-mail"
            className="w-full bg-gray-900/80 border border-gray-700 text-gray-200 px-4 py-2 rounded-full focus:outline-none focus:border-purple-500 transition backdrop-blur-md"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full bg-gray-900/80 border border-gray-700 text-gray-200 px-4 py-2 rounded-full focus:outline-none focus:border-purple-500 transition backdrop-blur-md"
          />

          <button className="w-full border border-gray-700 text-gray-200 font-semibold py-2 rounded-full hover:bg-gray-900/90 transition">
            Entrar
          </button>

          {/* Divider com "ou" */}
          <div className="flex items-center gap-2 my-2 w-full">
            <span className="flex-1 h-px bg-gray-800"></span>
            <span className="text-gray-500 text-sm">ou</span>
            <span className="flex-1 h-px bg-gray-800"></span>
          </div>

          {/* Botão Google */}
          <button className="w-full bg-white text-gray-900 font-semibold py-2 rounded-full hover:bg-gray-200 transition flex items-center justify-center gap-2">
            <img src="/google-logo.svg" alt="Google Logo" className="w-5 h-5" />
            <span>Entrar com Google</span>
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-3 hover:text-gray-300 cursor-pointer transition">
          Esqueceu a senha?
        </p>

        <p className="text-gray-400 text-sm mt-20">
          Não tem uma conta?{" "}
          <span className="text-purple-500 hover:text-purple-400 cursor-pointer transition">
            Cadastre-se
          </span>
        </p>
      </div>

      {/* FOOTER */}
      <footer className="relative text-gray-600 text-xs text-center py-4">
        © 2025 VIBO — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
