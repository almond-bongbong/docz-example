import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const BasicButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 30px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }
  
  ${props => props.inline && css`
    display: inline-block;
    width: auto;
  `};
  
  ${props => props.size === 30 && css`
    padding: 5px 30px;
  `};
  
  ${props => props.size === 50 && css`
    padding: 15px 30px;
  `};
  
  ${props => props.theme === 'red' && css`
    background-color: #fff;
    border: 1px solid #ddd;
    color: #666;
  `};
  
  ${props => props.theme === 'red' && css`
    background-color: #da032c;
    border: 1px solid #da032c;
    color: #fff;
  `};
`;

const Button = ({ children, theme, size, inline, onClick }) => {
  return (
    <BasicButton type="button" theme={theme} size={size} inline={inline} onClick={onClick}>
      {children}
    </BasicButton>
  );
};

Button.propTypes = {
  /** display 속성 */
  inline: PropTypes.bool,
  /** 버튼명 */
  children: PropTypes.string,
  /** 테마 - red, white */
  theme: PropTypes.string.isRequired,
  /** 높이 - 30, 40, 50 */
  size: PropTypes.number,
  /** 클릭이벤트 */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 40,
  inline: true,
};

export default Button;