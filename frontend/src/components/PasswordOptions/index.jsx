
export function PasswordOptions() {
    return (
        <div className="border border-gray-600/50 m-2 p-2 pr-0 flex flex-row justify-between rounded-lg bg-white gap-40 text-xl">
            <div className="flex flex-col gap-4 mb-2 mt-2">
                <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-600/50 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ml-2">Letra maiúscula</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-600/50 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ml-2">Letra minúscula</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-600/50 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ml-2">Números</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-600/50 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ml-2">Símbolos</label>
                </div>
            </div>
            <div className="flex p-2 gap-2">
                <label>Nº de caracteres:</label>
                <div className="flex h-min rounded-md ">
                    <input placeholder="A" className="rounded border border-gray-600/50 outline-offset-2 w-1/2 shadow-lg"></input>
                </div>
            </div>
        </div>
    );
}

// PasswordOptions.jsx     # Controles de comprimento e opções