/**
 * Client Types
 */
export interface Client {
  id: number;
  name: string;
  category: string;
  logo: string;
  description: string;
  /** Omitted when the client has no working website. */
  website?: string;
}
