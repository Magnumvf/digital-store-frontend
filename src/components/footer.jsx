import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-gray   text-white py-10 pl-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-4xl font-extrabold mb-4">Digital Store</h4>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="px-6">
            <h4 className="text-lg font-semibold mb-4 ml-15 ">Informação</h4>
            <ul className="text-sm flex-col space-y-4">
              <li>
                <a href="/about" className="decoration-white hover:underline">
                  Sobre Drip Store
                </a>
              </li>
              <li>
                <a href="/security" className="hover:underline">
                  Segurança
                </a>
              </li>
              <li>
                <a href="/wishlist" className="hover:underline">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  Trabalhe conosco
                </a>
              </li>
              <li>
                <a href="/orders" className="hover:underline">
                  Meus Pedidos
                </a>
              </li>
            </ul>
          </div>
          <div className="pl-6">
            <h4 className="text-lg font-semibold mb-4 ">Categorias</h4>
            <ul className="text-sm space-y-3">
              <li>
                <a href="/category/t-shirts" className="hover:underline">
                  Camisetas
                </a>
              </li>
              <li>
                <a href="/category/pants" className="hover:underline">
                  Calças
                </a>
              </li>
              <li>
                <a href="/category/hats" className="hover:underline">
                  Bonés
                </a>
              </li>
              <li>
                <a href="/category/headphones" className="hover:underline">
                  Headphones
                </a>
              </li>
              <li>
                <a href="/category/shoes" className="hover:underline">
                  Tênis
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-auto pl-8 px-4 ml-8">
          <h4 className="text-lg font-semibold mb-4">Contato</h4>
          <p className="text-sm">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p className="text-sm mt-4">(85) 3051-3411</p>
        </div>
      </div>
      <div className="text-center text-xs ">
        <hr className="w-5/6 h-px mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <p className="pt-5">&copy; 2022 Digital College</p>
      </div>
    </footer>
  );
};

export default Footer;
