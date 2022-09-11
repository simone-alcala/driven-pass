import { SafeNote } from '@prisma/client';

export type ListSafeNoteData = SafeNote[];
export type CreateSafeNoteData = Omit<SafeNote, 'id'>;
export type RequestSafeNoteData = Omit<SafeNote, 'userId'>;
export type UpdateSafeNoteData = Partial<SafeNote>;