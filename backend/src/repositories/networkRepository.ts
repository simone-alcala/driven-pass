import prisma from '../database/config';
import * as types from '../types/networkTypes';

export async function insert(data: types.CreateNetworkData) {
  return prisma.network.create({ data });
}

export async function getByUserId(userId: number) {
  return prisma.network.findMany({ where: { userId }});
}

export async function getByIdAndUserId(id: number, userId: number) {
  return prisma.network.findFirst({ where: { id, userId }});
}

export async function getByUserIdAndTitle(userId: number, title: string) {
  return prisma.network.findFirst({ where: { userId, title }});
}

export async function deleteByIdAndUserId(id: number, userId: number) {
  return prisma.network.deleteMany({ where: { id, userId }});
}

export async function totalByUserId(userId: number) { 
  return prisma.network.count({ where: { userId } });
}