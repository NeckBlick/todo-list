import React from "react";
import Header from "../../components/Header";
import Typed from "react-typed";
import { BsLinkedin, BsGithub, BsFillArrowUpCircleFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export default function Home() {
  return (
    <div>
      <Header />
      <BsFillArrowUpCircleFill size={50} color="#7e22ce" className="fixed right-10 bottom-10 cursor-pointer hover:scale-110" />
      <section className="w-full h-[50rem]">
        <div className="px-8 w-full h-full lg:flex lg:flex-row sm:flex-col">
          <div className="h-full p-2 lg:w-2/4 sm:w-full flex flex-col gap-8 justify-center items-center">
            <Typed
              className="text-3xl font-medium"
              strings={[
                "Seja bem vindo ao meu portfólio",
                "Eu sou desenvolvedor Full Stack",
                "Eu sou apaixonado por programação desde pequeno",
              ]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
            <p className="text-justify w-2/3">
              Sou estudante de Desenvolvimento de Sistemas no SENAI e de Análise
              e Desenvolvimento de Sistemas na Universidade Anhembi Morumbi,
              apaixonado por tecnologia e programação. Estou em busca de uma
              oportunidade para ingressar no mercado de trabalho como
              Desenvolvedor(a), seja em estágio ou posição júnior. 
            </p>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Entre em contato:</h1>
              <div className="flex gap-2 m-auto">
                <a href="https://www.linkedin.com/in/dev-nicolas-gomes-/" target="blank">
                  <BsLinkedin size={35} color="#1d4ed8"/>
                </a>
                <a href="https://github.com/NeckBlick" target="blank">
                  <BsGithub size={35}/>
                </a>
                <a href="mailto:nicolasgomesleal@hotmail.com" target="blank">
                  <MdEmail size={35}/>
                </a>
              </div>
            </div>
          </div>
          <div className="h-full lg:w-2/4 sm:w-full flex justify-center items-center">
            Imagem
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /*  */
}
