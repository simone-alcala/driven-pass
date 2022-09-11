import prisma from '../database/config';
import * as types from '../types/safeNoteTypes';

export async function insert(data: types.CreateSafeNoteData) {
  return prisma.safeNote.create({ data });
}

export async function getByUserId(userId: number) {
  return prisma.safeNote.findMany({ where: { userId }});
}

export async function getByIdAndUserId(id: number, userId: number) {
  return prisma.safeNote.findFirst({ where: { id, userId }});
}

export async function getByUserIdAndTitle(userId: number, title: string) {
  return prisma.safeNote.findFirst({ where: { userId, title }});
}

export async function deleteByIdAndUserId(id: number, userId: number) {
  return prisma.safeNote.deleteMany({ where: { id, userId }});
}

export async function totalByUserId(userId: number) { 
  return prisma.safeNote.count({ where: { userId } });
}