import styled from '@emotion/styled';

export const FeedbackOptionsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
`;
export const FeedbackOptionsItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
export const FeedbackOptionsButton = styled.button`
  outline: none;
  border-radius: 4px;
  width: 70px;
  height: 30px;
  font-weight: 600;
  cursor: pointer;
`;
