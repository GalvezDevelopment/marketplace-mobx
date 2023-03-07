export interface ApiBaseResponse {
  success: boolean;
  error?: { type: string; code: number; }
}
