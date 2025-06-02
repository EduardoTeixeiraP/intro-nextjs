import Page from "@/server-client/page";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="grid justify-center ">
      <div className="mt-10 ">
      <NavBar links={
          [
            {label:'Inicio', href:'/'},
            {label:'Sobre nós', href:'./about'},
            {label:'Produtos', href:'/produtos'}
          ]
          }/>
      <Page/>
      </div>
    </div>
  )
}