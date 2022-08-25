export interface IUsers {
  id?: string;
  name: string;
  email: string;
  active: boolean;
  password: string;
  phone: string;
  user_login: string;
  app_password: string;
  role: string;
  group_id: BigInteger;
  first_login: boolean;
  can_create: boolean;
  can_create_header: boolean;
  can_edit: boolean;
  can_delete: boolean;
  can_list: boolean;
  can_finish_header: boolean;
  can_followup: boolean;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  branch_id: string;
}

export interface IUserIntegration {
  id?: string;
  name: string;
  email: string;
  login: string;
  internal_id: BigInteger;
  role?: string;
  branch_id?: BigInteger;
  integrated: boolean;
}