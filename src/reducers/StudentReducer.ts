import {
  IState,
  IStudent,
  IStudentAction,
  STUDENT_ACTION_TYPE,
} from '../typings'

function studentReducer(state: IState, action: IStudentAction): IState {
  const { actionType, payload } = action
  switch (actionType) {
    case STUDENT_ACTION_TYPE.INIT:
      // 注意：{...state, studentList: xxx}这种写法的含义是：展开state所有属性，
      // 同时更新其中的studentList属性
      return {
        ...state,
        studentList: payload as IStudent[],
      }
    case STUDENT_ACTION_TYPE.ADD:
      return {
        ...state,
        studentList: [...state.studentList, payload as IStudent],
      }
    case STUDENT_ACTION_TYPE.REMOVE:
      return {
        ...state,
        studentList: state.studentList.filter(
          (student) => student.id !== (payload as number)
        ),
      }
    case STUDENT_ACTION_TYPE.UPDATE:
      const { id, name, address } = payload as IStudent
      return {
        ...state,
        studentList: state.studentList.map((stu) => {
          return stu.id === id
            ? {
                ...stu,
                name,
                address,
              }
            : {
                ...stu,
              }
        }),
      }
    default:
      return state
  }
}

export { studentReducer }
