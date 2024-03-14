export interface ResponseObject<T> {
    result: boolean;
    message: string;
    data: T;
}

export interface ResponseList<T> {
    result: boolean;
    message: string;
    data: Array<T>;
}