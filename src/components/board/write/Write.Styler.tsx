import styled from '@emotion/styled';
export const BoardWrite_Warp = styled.div`
  width: 1200px;
  margin: auto;
  margin-top: 64px;

  padding: 80px 120px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Writer_Warp = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const Writer = styled.div`
  flex: 1;
  margin-right: 20px;
  position: relative;
`;
export const Password = styled.div`
  flex: 1;
  position: relative;
`;
export const Input_style = styled.input`
  padding: 20px 10px;
  box-sizing: border-box;
  width: 100%;

  vertical-align: bottom;
  font-size: 18px;
  border-radius: 20px;
`;
export const Contents_input_style = styled.textarea`
  padding: 20px 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 18px;
  vertical-align: bottom;
  border-radius: 20px;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  position: relative;
`;
export const Contents = styled.div`
  height: 700px;
  position: relative;
`;
export const Button_Warp = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
export const Button_style = styled.button`
  font-size: 20px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0);
  margin: 30px;
  padding: 20px;
  border-radius: 20px;
  :hover {
    border: 1px solid gray;
  }
`;
export const NullAlert = styled.div`
  color: red;
  font-weight: 600;
  position: absolute;
  bottom: -18px;
  left: 10px;
`;
