import { useState } from "react";
import { PasswordDisplay } from "../PasswordDisplay";
import { PasswordOptions } from "../PasswordOptions";

export function PasswordGenerator() {
    const [charLenght, setCharLenght] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeLowerCase, setIncludeLowerCase] = useState(true);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeSymbols, setIncludeSymmbols] = useState(true);
    const [senha, setSenha] = useState("");

    function gerarSenha() {
        let characters = "";
        if(includeLowerCase)
            characters = "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers)
            characters += "0123456789";
        if (includeUpperCase)
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeSymbols)
            characters += "!@#$%^&*()_+[]{}|;:,.<>?/";

        let novaSenha = "";

        for (let i = 0; i < charLenght; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            novaSenha += characters[randomIndex];
            
        }
        setSenha(novaSenha);
    }


    return (
        <div className="flex flex-col size-auto self-center">
            <PasswordDisplay gerarSenha={ gerarSenha } senha={ senha } />
            <PasswordOptions lenght={ charLenght } gerarSenha={ gerarSenha } 
            includeNumbers={ includeNumbers } includeUpperCase={ includeUpperCase } includeSymbols={ includeSymbols } includeLowerCase={ includeLowerCase }
            setLength={ setCharLenght } setIncludeNumber={ setIncludeNumbers } setIncludeUpperCase={ setIncludeUpperCase }  
            setIncludeSymmbols={ setIncludeSymmbols } setIncludeLowerCase={ setIncludeLowerCase } />
        </div>
    );
}