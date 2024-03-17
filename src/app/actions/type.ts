export interface SubmitEmailResponse {
  response:
    | "success"
    | "invalid_email"
    | "already_registered"
    | "error"
    | "unknown_error";
}
