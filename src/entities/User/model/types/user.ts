export interface User {
    id: string | undefined;
    userName: string | undefined;
    email: string | undefined;
    photo: string | undefined;
    userToken: string | undefined;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
