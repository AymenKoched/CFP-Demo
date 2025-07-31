export interface ErrorResponse<T = Record<string, string>> {
  errorMessage: string;
  data?: T;
}
