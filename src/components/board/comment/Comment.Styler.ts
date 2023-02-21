import styled from '@emotion/styled';

export const Comment_Warp = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid gray;
  position: relative;
`;
export const CommentTitle = styled.div`
  position: absolute;
  top: -20px;
  background-color: white;
  font-size: 30px;
  right: 50%;
  transform: translateX(50%);
`;
export const Comment = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 30px;
  background-color: #fcfbec;
`;
export const CommentWriteInfo = styled.span`
  font-weight: 700;
  margin-bottom: 15px;
  margin-right: 20px;
`;
export const CommentContent = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;
export const CommentWrite_Wrap = styled.div`
  padding: 15px;
  background-color: #fcfbec;
  border-radius: 30px;
  position: relative;
  margin: 20px 0px;
`;

export const CommentWriteButton = styled.button`
  height: 120px;
  position: absolute;
  right: 20px;
  bottom: 30px;
  background-color: rgba(196, 183, 59, 0.5);
  border: none;
`;
export const WriterInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`;
export const PasswordInput = styled.input`
  padding: 10px;
  border-radius: 10px;
`;
export const ContentsInput = styled.textarea`
  margin: 10px;
  padding: 10px;
  width: 90%;
  height: 100px;
`;
