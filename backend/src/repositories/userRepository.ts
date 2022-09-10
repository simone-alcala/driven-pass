import prisma from '../database/config';

import * as types from '../types/userType';

export async function insert(data: types.CreateUserData) {
  return prisma.user.create({ data });  
}

export async function update(id: number, data: types.UpdateUserData) {
  return prisma.user.update({ where: { id }, data });  
}

export async function findById(id: number) {
  return prisma.user.findUnique({ where: { id } });  
}

export async function findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });  
}

export async function findAll() {
  return prisma.user.findMany();  
}