type ApiErrorType = "validation_error" | "client_error" | "server_error";

interface Error {
  code: string;
  detail: string;
  attr: string;
}

export interface ErrorResponse {
  type: ApiErrorType;
  errors: Error[];
}
