export interface IUser{
    email: string,
    password: string,
    token: string
}

export interface IUserResponse {
    user: IUser;
    accessToken: string;
}
