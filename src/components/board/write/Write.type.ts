import React, { ChangeEvent } from 'react';
export interface IBoardWriteProps {
  onChangeInput: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickWrite: () => void;
  onClickCancel: () => void;
  dataNullCheck: {
    writerCheck: boolean;
    passwordCheck: boolean;
    titleCheck: boolean;
  };
}
