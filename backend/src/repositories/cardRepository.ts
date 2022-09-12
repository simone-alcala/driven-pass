import prisma from '../database/config';
import * as types from '../types/cardTypes';

export async function insert(data: types.CreateCardData) {
  return prisma.card.create({ data });
}

export async function getByUserId(userId: number) {
  return prisma.card.findMany({ where: { userId }});
}

export async function getByIdAndUserId(id: number, userId: number) {
  return prisma.card.findFirst({ where: { id, userId }});
}

export async function getByUserIdAndTitle(userId: number, title: string) {
  return prisma.card.findFirst({ where: { userId, title }});
}

export async function deleteByIdAndUserId(id: number, userId: number) {
  return prisma.card.deleteMany({ where: { id, userId }});
}

export async function totalByUserId(userId: number) { 
  return prisma.card.count({ where: { userId } });
}