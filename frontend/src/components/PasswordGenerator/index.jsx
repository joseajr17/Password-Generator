import { PasswordDisplay } from "../PasswordDisplay";
import { PasswordOptions } from "../PasswordOptions";

export function PasswordGenerator() {

    return(
        <div className="flex flex-col size-auto self-center">
            <PasswordDisplay />
            <PasswordOptions />
            
        </div>
    );
}