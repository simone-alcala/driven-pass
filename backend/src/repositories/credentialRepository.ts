import prisma from '../database/config';
import * as types from '../types/credentialType';

export async function insert(data: types.CreateCredentialData) {
  return prisma.credential.create({ data });
}

export async function getByUserId(userId: number) {
  return prisma.credential.findMany({ where: { userId }});
}

export async function getByIdAndUserId(id: number, userId: number) {
  return prisma.credential.findFirst({ where: { id, userId }});
}

export async function getByUserIdAndTitle(userId: number, title: string) {
  return prisma.credential.findFirst({ where: { userId, title }});
}

export async function deleteByIdAndUserId(id: number, userId: number) {
  return prisma.credential.deleteMany({ where: { id, userId }});
}

export async function totalByUserId(userId: number) { 
  return prisma.credential.count({ where: { userId } });
}