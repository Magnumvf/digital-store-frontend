import "../index.css";
import Sapato from "../assets/Sapato_direito.svg";
import Sapatoo from "../assets/Sapato_esquerdo.svg";
import Gmail from "../assets/gmail.svg";
import Facebook from "../assets/Face.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import HeaderLogin from "./HeaderLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/login", data);
      console.log("Deu bom", response.data);
    } catch (error) {
      console.error("Deu ruim", error);
    }
  };

  return (
    
    <main className="min-h-screen">
      <HeaderLogin/>
      <section className="bg-custom-gradient min-h-screen flex justify-center items-center">
        <div className="flex justify-between gap-3 py-20 px-24 h-full w-full max-w-6xl">
          <div className="w-[650px] h-[550px] bg-white rounded-md relative z-10">
            <div className="p-6 m-4">
              <h3 className="text-black font-bold ">Acesse a sua conta</h3>
              <p className="text-lg text-zinc-800 py-4">
                Novo cliente? Então registre-se{" "}
                <button className="underline ">aqui.</button>
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-black font-bold">
                    Login *
                  </label>
                  <input 
                    className="bg-zinc-50 h-12 rounded-sm placeholder:text-gray-400 placeholder:text-sm placeholder:px-8 pl-3"
                    type="email"
                    placeholder="Insira seu login ou email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-black font-bold">
                    Senha *
                  </label>
                  <input
                    className="bg-zinc-50 h-12 rounded-sm placeholder:text-gray-400 placeholder:text-sm placeholder:px-8 pl-3"
                    type="password"
                    placeholder="Insira sua senha"
                    {...register("password", {required: true})}
                  />
                </div>
                <span className="text-sm text-zinc-800 py-6">
                  <Link className="underline" to={"/recuperar"} >Esqueci minha senha</Link>
                  
                </span>
              </div>
              <div className="p-2">
                <div className="bg-pink-600 flex justify-center h-10 rounded-lg ">
                  <button
                    onClick={() => handleSubmit(onSubmit)()}
                    className="w-full text-sm text-white font-bold"
                  >
                    Acessar conta
                  </button>
                </div>
              </div>

              <div className="flex justify-center py-12 gap-4">
                <span className="text-sm text-zinc-800">Ou faça login com</span>
                <img src={Gmail} alt="Gmail" />
                <img src={Facebook} alt="Facebook" />
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full">
            <img
              className="absolute top-1 left-1 transform rotate-[350deg] "
              src={Sapato}
              alt="sapato"
              style={{ height: "400px" }}
            />
            <img
              className="absolute top-20 right-0 transform -rotate-12"
              src={Sapatoo}
              alt="sapato"
              style={{ height: "400px" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
