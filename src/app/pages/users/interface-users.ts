export interface IUsers {
    id?: string;
    name: string;
    email: string;
    active: boolean;
    password: string;
    phone: string;
    user_login: string;
    cpf_cnpj: string;
    role: string;
    group_id: BigInteger;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
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
