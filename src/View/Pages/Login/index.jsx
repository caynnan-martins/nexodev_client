export default function Login() {

    return ( 
      <main>
            <a href="/">
                <button className="px-5 bg-gray-800 p-2 rounded-full absolute top-4 left-4 text-white">
                    Voltar
                </button>
            </a>
        <div className="flex flex-col items-center justify-center h-screen dark p-4">
          <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
            <form className="flex flex-col">
              <input 
                placeholder="Seu Email" 
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
                type="email" 
              />
              <input 
                placeholder="Sua Senha" 
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
                type="password" 
              />
              <div className="flex items-center justify-between flex-wrap">
                <label className="text-sm text-gray-200 cursor-pointer" htmlFor="remember-me">
                  <input className="mr-2" id="remember-me" type="checkbox" />
                  Salvar
                </label>
                <a className="text-sm text-blue-500 hover:underline mb-0.5" href="#">Esqueceu a senha?</a>
              </div>
              <button 
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" 
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
  