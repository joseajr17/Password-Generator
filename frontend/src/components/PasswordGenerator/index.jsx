import { PasswordDisplay } from "../PasswordDisplay";
import { PasswordOptions } from "../PasswordOptions";

export function PasswordGenerator() {
    return(
        <div className="border flex flex-col">
            <PasswordDisplay />
            <PasswordOptions />
            <div className="flex justify-center">
                <button className="border cursor-pointer">Gerar</button>
            </div>
        </div>
    );
}