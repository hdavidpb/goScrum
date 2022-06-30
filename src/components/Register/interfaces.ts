export interface IRegisterInitialValues {
  userName?: string;
  password?: string;
  email?: string;
  teamId?: string;
  role?: string;
  continent?: string;
  region?: string;
  isTeamMember?: string[];
}

export interface IOptions {
  value: string;
  label: string;
}
