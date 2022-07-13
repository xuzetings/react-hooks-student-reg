import { FC } from 'react';
import { IStudent } from "../../typings";

interface IProps {
  student: IStudent;
  removeStudent(id: number): void;
}

const SingleStudent: FC<IProps> = ({
  student,
  removeStudent
}) => {
  const { id, name, address } = student;

  return (
    <li>
      <h4>{name}</h4>
      <p>{address}</p>
      <p><button onClick={() => removeStudent(id)}>删除</button></p>
    </li>
  )
}

export default SingleStudent;
