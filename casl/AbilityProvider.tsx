import React, { ReactNode } from 'react';
import { AbilityContext } from './Can';
import { defineAbilityForUser } from './abilities';
import permissions from "./permission.json"

type AbilityProviderProps = {
    children: ReactNode;
};

const AbilityProvider: React.FC<AbilityProviderProps> = ({ children }) => {


    if (permissions) {
        const ability = defineAbilityForUser("it_admin", permissions);
        return (
            <AbilityContext.Provider value={ability}>
                {children}
            </AbilityContext.Provider>
        );
    }
};

export default AbilityProvider;
