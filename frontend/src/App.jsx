import { Header } from "./components/Header"
import { PasswordGenerator } from "./components/PasswordGenerator"

function App() {
  return (
    <div className="flex flex-col bg-gray-100 gap-5 font-roboto">
      <Header />
      <div className="pt-4 flex flex-col text-center text-2xl">
        <h1>Essa ferramenta tem como intuito ser utilizada para gerar instantaneamente</h1>
        <h1>uma senha aleatória e segura.</h1>
      </div>
      <PasswordGenerator />
    </div>
  )
}

export default App
