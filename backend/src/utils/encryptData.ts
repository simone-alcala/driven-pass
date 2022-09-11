import dotenv from 'dotenv';
import Cryptr from 'cryptr';

dotenv.config();
const CRYPTR = new Cryptr(process.env.CRYPTR || '');

export function encryptData(data: string) {
  return CRYPTR.encrypt(data);
}