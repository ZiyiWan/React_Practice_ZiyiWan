export interface signUpResponse {
  code: number;
  data: signUpRequest;
  msg: string;
}

export interface signUpRequest {
  email: string;
  password: string;
  role: string;
}

export interface loginRequest {
  email: string;
  password: string;
  role: string;
}

export interface loginResponse {
  code: number;
  data: { role: string; token: string; userId: number };
  msg: string;
}

export interface signUpInfo {
  role: string;
  email: string;
  password: string;
}