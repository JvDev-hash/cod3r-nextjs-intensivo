import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Formulario from "../components/Formulario";
import Cliente from "../core/Cliente";
import { useState } from "react";

export default function Home() {
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Cliente ${cliente.nome} foi excluído com sucesso`)
  }

  function salvarCliente(cliente : Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 44, '2'),
    new Cliente('Carlos', 34, '3'),
    new Cliente('Pedro', 35, '4'),
  ]
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
          {visivel === 'tabela' ? (
            <>
              <div className="flex justify-end">
                <Botao cor='green' className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
              </div>
              <Tabela clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}/>
            </>
          ) : (
            <Formulario cliente={cliente} cancelado={() => setVisivel('tabela')} clienteMudou={salvarCliente}/>
          )}
      </Layout>
    </div>
  )
}
