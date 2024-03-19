import {IUser} from "./user.interface.ts";

export interface IAllState {
    token: string | null,
    user: IUser | null,
    loading: boolean,
    error: string | null,
}
