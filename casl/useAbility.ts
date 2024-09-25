import { useContext } from "react";
import { AbilityContext } from "./Can";

export function useAbility() {
    const context = useContext(AbilityContext);

    if (!context) {
        throw new Error('useAbility must be used within an AbilityProvider');
    }

    return context;
}
