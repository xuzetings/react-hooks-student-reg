import { useEffect, useReducer } from 'react';
import Registration from './Registration';
import List from './List';
import { IStudent, IState, STUDENT_ACTION_TYPE } from '../../typings';
import { studentReducer } from '../../reducers/StudentReducer';

const initialState: IState = {
  studentList: []
}

function Index() {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  // 用于初始化
  useEffect(() => {
    const studentList = JSON.parse(localStorage.getItem('studentList') || '[]');
    dispatch({
      actionType: STUDENT_ACTION_TYPE.INIT,
      payload: studentList
    })
  }, []);

  // 用于监测studentList的变化，并保存在localStorage
  useEffect(() => {
    localStorage.setItem('studentList', JSON.stringify(state.studentList));
  }, [state.studentList]);

  const addStudent = (student: IStudent) => {
    dispatch({
      actionType: STUDENT_ACTION_TYPE.ADD,
      payload: student
    })
  }

  const removeStudent = (id: number) => {
    dispatch({
      actionType: STUDENT_ACTION_TYPE.REMOVE,
      payload: id
    })
  }

  return (
    <div className="wrapper">
      <Registration studentList={state.studentList} addStudent={addStudent} />
      <List studentList={state.studentList} removeStudent={removeStudent} />
    </div>
  );
}

export default Index;
