import dotenv from 'dotenv';
import Cryptr from 'cryptr';

dotenv.config();
const CRYPTR = new Cryptr(process.env.CRYPTR || '');

export function decryptData(data: string) {
  return CRYPTR.decrypt(data);
}
