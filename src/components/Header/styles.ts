import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }

      ul {
        display: flex;
        flex: 1;
        list-style: none;
        align-items: center;

        li {
          & + li {
            margin-left: 32px;
          }

          color: #fff;
          justify-content: center;
          align-items: center;
          padding: 0 15px;
          position: relative;
          padding-bottom: 10px;

          &:first-child::after {
            content: '';
            margin-left: 15px;
            width: 73px;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            background: #ff872c;
          }
        }
      }
    }
  }
`;
