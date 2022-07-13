export interface IStudent {
    id: number;
    name: string;
    address: string
}

export interface IState {
    studentList: IStudent[];
}

export enum STUDENT_ACTION_TYPE {
    INIT = 'init',
    ADD = 'add',
    REMOVE = 'remove',
    UPDATE = 'update'
}

export interface IStudentAction {
    actionType: STUDENT_ACTION_TYPE;
    payload: IStudent | IStudent[] | number
}