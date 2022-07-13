import { useRef, FC, ReactElement } from 'react';
import { IStudent } from '../../typings';

interface IProps {
  addStudent: (student: IStudent) => void;
  studentList: IStudent[];
}

const Registration: FC<IProps> = ({
  addStudent,
  studentList
}): ReactElement => {

  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const add = (): void => {
    const name: string = nameRef.current!.value.trim();
    const address: string = addressRef.current!.value.trim();
    if (name.length > 0 && address.length > 0) {
      const isExist = studentList.find(stu => stu.name === name && stu.address === address)
      if (isExist) {
        alert("重复数据");
        return;
      } else {
        addStudent({
          id: new Date().getTime(),
          name: name,
          address: address
        })
        nameRef.current!.value = '';
        addressRef.current!.value = '';
      }
    } else {
      alert("请输入姓名和住址");
    }
  }

  return (
    <>
      <div className="field">
        <label>姓名</label>
        <input ref={nameRef} type="text" placeholder="学生姓名" id="name" />
      </div>
      <div className="field">
        <label>住址</label>
        <input ref={addressRef} type="text" placeholder="学生住址" id="address" />
      </div>
      <button onClick={add}>注册</button>
    </>
  )
}

export default Registration;
