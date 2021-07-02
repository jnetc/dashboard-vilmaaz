import styled from 'styled-components';

export const DateTodayStyle = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  #day_of_week {
    font-size: ${props => props.theme.fontsize_16};
    font-weight: 400;
  }
  #current_date {
    font-size: ${props => props.theme.fontsize_14};
    color: ${props => props.theme.grey_light()};
    padding-top: 5px;
  }
`;
