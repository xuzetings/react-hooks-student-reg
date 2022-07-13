import { FC } from 'react'
import { IStudent } from '../../typings'
import SingleStudent from './SingleStudent'

interface IProps {
  studentList: IStudent[]
  removeStudent(id: number): void
}

const List: FC<IProps> = ({ studentList, removeStudent }) => {
  return (
    <>
      <h2>学生列表</h2>
      <ul>
        {studentList.map((student: IStudent) => {
          return (
            <SingleStudent
              key={student.id}
              student={student}
              removeStudent={removeStudent}
            />
          )
        })}
      </ul>
    </>
  )
}

export default List
