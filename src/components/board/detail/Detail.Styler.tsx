import styled from '@emotion/styled';

export const Board_Warp = styled.div`
  width: 1200px;
  min-height: 800px;
  margin: auto;
  margin-top: 64px;
  padding: 80px 120px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
`;

export const BoardHead_Warp = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
`;
export const WriterInfo = styled.div`
  display: flex;
`;
export const Writer = styled.div`
  font-size: 24px;
  font-weight: 800;
`;
export const CreateAt = styled.div`
  color: #828282;
  font-size: 16px;
  font-weight: 400;
`;
export const Contents = styled.div`
  margin-top: 20px;
  flex: 1;
`;
export const LikeDisLike = styled.div`
  text-align: center;
`;
export const BoardBody_Warp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
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
export const CommentWriter = styled.div`
  font-weight: 700;
  margin-bottom: 15px;
`;
