import { Network } from '@prisma/client';

export type ListNetworkData = Network[];
export type CreateNetworkData = Omit<Network, 'id'>;
export type RequestNetworkData = Omit<Network, 'userId'>;
export type UpdateNetworkData = Partial<Network>;