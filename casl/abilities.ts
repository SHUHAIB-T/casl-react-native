import { AbilityBuilder, Ability } from '@casl/ability';

export function defineAbilityForUser(userRole: string, permissions: any) {
    const { can, build } = new AbilityBuilder(Ability);

    userRole = userRole?.toLowerCase();

    if (userRole && userRole === 'admin') {
        can('manage', 'all');
        return build();
    }

    const rolePermissions = permissions?.[userRole];

    if (rolePermissions) {
        Object.keys(rolePermissions?.documentTypes).forEach((docType) => {
            const { action } = rolePermissions.documentTypes[docType];
            can(action, docType);
        });
    }

    const attachments = permissions?.[userRole];

    if (attachments) {
        Object.keys(rolePermissions?.attachments).forEach((docType) => {
            const { action } = rolePermissions.attachments[docType];
            can(action, docType);
        });
    }

    return build();
}
