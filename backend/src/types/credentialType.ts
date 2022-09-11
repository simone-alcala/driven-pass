import { Credential } from '@prisma/client';

export type ListCredentialData = Credential[];
export type CreateCredentialData = Omit<Credential, 'id'>;
export type RequestCredentialData = Omit<CreateCredentialData, 'userId'>;
export type UpdateCredentialData = Partial<CreateCredentialData>;