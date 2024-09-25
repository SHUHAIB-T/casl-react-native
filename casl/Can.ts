import { createContext } from 'react';
import { createContextualCan } from '@casl/react';
import { PureAbility, AnyAbility } from '@casl/ability';

export const AbilityContext = createContext<PureAbility | null>(null);

export const Can = createContextualCan(
    AbilityContext.Consumer as React.Consumer<AnyAbility>
);
