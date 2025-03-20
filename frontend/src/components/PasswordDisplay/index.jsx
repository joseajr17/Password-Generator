import copyIcon from '../../assets/copy.png'
import gearIcon from '../../assets/gear.png'

export function PasswordDisplay() {
    return (
        <div className="flex flex-row justify-between border border-gray-600/50 gap-1 m-2 rounded-lg bg-white pr-2">
            <form className="w-full">
                <input placeholder="Aqui vai ter a senha gerada" className="block w-full p-4 text-gray-900 rounded-lg text-2xl"></input>
            </form>
            <div className="w-auto flex">
                <button className="rounded cursor-pointer p-2 group relative">
                    <span className="absolute left-1/2 -top-8 transform -translate-x-1/2 opacity-0 
                   bg-gray-800 text-white text-xs px-2 py-1 rounded-md transition-opacity 
                   group-hover:opacity-100">
                        Copiar
                    </span>
                    <img src={copyIcon} alt="Ícone" width="40" height="40" />
                </button>
            </div>
            <div className="flex justify-center">
                <button className="rounded cursor-pointer group relative p-2">
                <span className="absolute left-1/2 -top-8 transform -translate-x-1/2 opacity-0 
                   bg-gray-800 text-white text-xs px-2 py-1 rounded-md transition-opacity 
                   group-hover:opacity-100">
                        Gerar
                    </span>
                    <img src={gearIcon} alt="Ícone" width="40" height="40" />
                </button>
            </div>
        </div>
    );
}