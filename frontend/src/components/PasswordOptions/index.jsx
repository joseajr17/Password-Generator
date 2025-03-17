export function PasswordOptions() {
    return (
        <div className="border m-2 p-2 flex flex-row justify-between">
            <div className="flex flex-col gap-4">
                <div>
                    <input type="checkbox"></input>
                    <label>Letra maiúscula</label>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <label>Letra minúscula</label>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <label>Números</label>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <label>Símbolos</label>
                </div>
            </div>
            <div className="flex h-min flex-row gap-2">
                <label>Nº de caracteres:</label>
                <input placeholder="A"></input>
            </div>
        </div>
    );
}

// PasswordOptions.jsx     # Controles de comprimento e opções