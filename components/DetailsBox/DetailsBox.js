import styled from 'styled-components';
import Link from 'next/link';

const StyDetailsBox = styled.div`
  font-size: 3rem;
  width: 40vw;
  max-width: 200px;
  padding: 1rem 2rem;
  margin: 2rem 0;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px 0px #00000040;
  border: 0.5px solid #e5e5e5;

  .StyDetailWrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }

  img {
    width: 3rem;
  }
  .StyDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    span,
    p {
      color: black;
      font-size: 1.6rem;

      @media (min-width: 768px) {
        font-size: 1.6rem;
      }
    }
    @media (min-width: 1024px) {
      p {
        font-size: 1.2rem;
        margin-top: 1rem;
      }
    }
  }

  .StyViewButton {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    a {
      color: black;
      text-align: center;
      font-size: 1.5rem;
    }
    small {
      color: black;
      text-align: center;
      font-size: 1.3rem;
    }
  }
`;

function DetailsBox({ number, name, img, small, href, hrefAll }) {
  return (
    <StyDetailsBox>
      <a href={hrefAll}>
        <div className="StyDetailWrapper">
          {img ? (
            <div className="StyDetailIcon">
              <img src={img} alt={name} />
            </div>
          ) : null}
          <div className="StyDetail">
            <span>{number}</span>
            <p>{name}</p>
          </div>
        </div>
        <div className="StyViewButton">
          {small ? (
            <small>{small}</small>
          ) : href ? (
            <Link href={href}>View All</Link>
          ) : (
            <a>View All</a>
          )}
        </div>
      </a>
    </StyDetailsBox>
  );
}

export default DetailsBox;
