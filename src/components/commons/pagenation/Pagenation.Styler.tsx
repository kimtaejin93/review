import styled from '@emotion/styled';

export const PageNumber = styled.div<{ activePage: number; id: string }>`
  background-color: ${(props) =>
    props.activePage === Number(props.id) && '#ffff99'};

  font-weight: ${(props) => props.activePage === Number(props.id) && '700'};
  margin: 5px;
  width: 20px;
  display: flex;
  justify-content: center;
`;

export const PageNation_Warp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageNumber_Warp = styled.div`
  display: flex;
`;
