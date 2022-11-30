import { Coords } from "./common";
import { Roles, User } from "./user";
interface ServicesMap {
    [Roles.DELEVER]: DeleveryService;
    [Roles.WASHER]: WashingService;
}
declare type Comment = {
    user: User;
    text: string;
    datetime: string;
};
export declare enum TaskStatus {
    NEW = "new",
    ASSIGNED = "assigned",
    IN_WORK = "in_work",
    DONE = "done"
}
export interface DeleveryService {
    datetime: string;
    coords: Coords;
}
export interface WashingService {
    datetime: string;
    coords: Coords;
    countCar: number;
}
export interface GenerateTask<T extends Roles.DELEVER | Roles.WASHER> {
    _id: string;
    user: User;
    assigned: User;
    comments: Comment[];
    status: TaskStatus;
    roleWorker: T;
    data: ServicesMap[T];
    description: string;
    assignedAt: string;
    createdAt: string;
    updatedAt: string;
}
export declare type Task = GenerateTask<Roles.DELEVER> | GenerateTask<Roles.WASHER>;
export declare type ErrorResponseGetTasks = {
    success: false;
    data: [];
};
export {};
