interface UserData {
    date: string;
    gender: string;
    nationality: string;
    city: string;
}
interface WasherData {
    haveCar: boolean;
}
interface DeleverData {
    haveTruck: boolean;
    truckPlateNumber: string;
}
declare type RolesInfoTypes = Roles.DELEVER | Roles.WASHER | Roles.USER;
interface RolesInfoMap {
    [Roles.DELEVER]: DeleverData;
    [Roles.WASHER]: WasherData;
    [Roles.USER]: UserData;
}
export interface GenerateRolesInfo<T extends RolesInfoTypes> {
    role: T;
    data: RolesInfoMap[T];
}
export declare type RolesInfo = GenerateRolesInfo<Roles.DELEVER> | GenerateRolesInfo<Roles.WASHER>;
export declare const generateRolesInfo: <Key extends RolesInfoTypes>(role: Key, data: RolesInfoMap[Key]) => GenerateRolesInfo<Key>;
export declare const getInfoByRole: <Key extends RolesInfoTypes>(role: Key, list: GenerateRolesInfo<Key>[]) => GenerateRolesInfo<Key>;
export interface Doc {
    type: 'passport' | 'iqama';
    number: string;
    photo?: string[];
}
export interface User {
    _id: string;
    id: string;
    name: string;
    phone: string;
    roles: Roles[];
    rolesInfo: RolesInfo[];
    createdAt: Date;
    password: string;
    email?: string;
    creator?: ThisType<User>;
    docs?: Doc[];
}
export declare enum Roles {
    SUPERADMIN = "superadmin",
    USER = "user",
    ADMIN = "admin",
    WASHER = "washer",
    DELEVER = "delever"
}
export {};
