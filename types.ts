// src/types.ts
export interface Notification {
  id: number;
  title: string;
  body?: string;      // optional, legacy
  bodyKey?: string;
  createdAt: number;
}
