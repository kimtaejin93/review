import WriteUI from './Write.Presenter';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { CREATE_BOARD } from './Write.Query';
import { useMutation } from '@apollo/client';

export default function Write() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [boardInputData, setBoardInputData] = useState({
    writer: '',
    password: '',
    title: '',
    contents: '',
  });
  let temp = false;
  const [dataNullCheck, setDataNullCheck] = useState({
    writerCheck: false,
    passwordCheck: false,
    titleCheck: false,
  });
  console.log(dataNullCheck);
  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBoardInputData({
      ...boardInputData,
      [event.target.id]: event?.currentTarget.value,
    });
  };

  const nullCheck = () => {
    boardInputData.writer === ''
      ? setDataNullCheck((prev) => ({ ...prev, writerCheck: false }))
      : setDataNullCheck((prev) => ({ ...prev, writerCheck: true }));
    boardInputData.password === ''
      ? setDataNullCheck((prev) => ({ ...prev, passwordCheck: false }))
      : setDataNullCheck((prev) => ({ ...prev, passwordCheck: true }));
    boardInputData.title === ''
      ? setDataNullCheck((prev) => ({ ...prev, titleCheck: false }))
      : setDataNullCheck((prev) => ({ ...prev, titleCheck: true }));
  };

  let dataNullResult =
    dataNullCheck.writerCheck &&
    dataNullCheck.passwordCheck &&
    dataNullCheck.titleCheck;

  const onClickWrite = async () => {
    nullCheck();
    console.log('dataNullResult', dataNullResult);
    if (
      !(
        dataNullCheck.writerCheck &&
        dataNullCheck.passwordCheck &&
        dataNullCheck.titleCheck &&
        temp
      )
    )
      return;
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: boardInputData.writer,
          password: boardInputData.password,
          title: boardInputData.title,
          contents: boardInputData.contents,
        },
      },
    });
    console.log(result);
    router.push('/boards');
  };
  const onClickCancel = () => {
    if (window.confirm('취소하시겠습니까?')) {
      router.push('/boards');
      return;
    }
  };
  console.log(dataNullCheck);
  return (
    <WriteUI
      onChangeInput={onChangeInput}
      onClickWrite={onClickWrite}
      onClickCancel={onClickCancel}
      dataNullCheck={dataNullCheck}
    />
  );
}
