import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export const Menu = styled.div`
  display: flex;
  margin-top: 80px;
`;
export const PageMoveButton = styled.button`
  margin: auto;
  height: 100px;
  width: 100px;
  border: 1px solid #9373ff;
  background-color: white;
  transition: 0.3s ease-in-out;
  border-radius: 50%;
  font-weight: 800;

  cursor: pointer;
  :hover {
    background-color: #9373ff;
    transition: 0.3s ease-in-out;
  }
`;
export default function Home() {
  const router = useRouter();
  const onClickPageMoveButton = () => {
    router.push('boards');
  };
  return (
    <Menu>
      <PageMoveButton onClick={onClickPageMoveButton}>
        자유게시판
      </PageMoveButton>
    </Menu>
  );
}
