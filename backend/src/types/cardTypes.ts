import { Card } from '@prisma/client';

export type ListCredentialData = Card[];
export type CreateCardData = Omit<Card, 'id'>;
export type RequestCardData = Omit<CreateCardData, 'userId'>;
export type UpdateCardData = Partial<CreateCardData>;
