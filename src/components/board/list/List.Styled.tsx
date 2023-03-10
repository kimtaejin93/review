import styled from '@emotion/styled';
export const Title = styled.div`
  flex: 1;
  text-align: center;
`;
export const BoardWarp = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-top: 10px;
  padding: 20px;
  border-bottom: 1px solid #c7b96d7c;
`;

export const SearchInput = styled.input`
  margin: 20px;
  padding: 15px;
  width: 300px;
  border-radius: 30px;
  text-align: center;
  border-color: gray;
  :focus {
    outline: none !important;
  }
`;
export const BoardArea = styled.div`
  margin-top: 30px;
  padding: 20px;

  position: relative;

  text-align: center;
  margin: auto;
`;
export const SearchInputArea = styled.div`
  display: flex;
  justify-content: center;
`;
export const DetailPage = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 1200px;
  margin: auto;
  margin-top: 30px;
`;
