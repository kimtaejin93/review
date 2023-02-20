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
