export function PasswordDisplay() {
    return(
        <div className="flex flex-row justify-between border gap-2">
            <form>
                <input placeholder="Aqui vai ter a senha gerada"></input>
            </form>
            <div>
                <button className="border rounded cursor-pointer">Copiar</button>
            </div>
        </div>
    );
}

// PasswordDisplay.jsx     # Mostra a senha gerada