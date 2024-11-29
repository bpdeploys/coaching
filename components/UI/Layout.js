import styled from 'styled-components';

const PhoneLayout = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: block;
    background: #142c6a;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
`;

const DesktopLayout = styled.div`
  display: none;
  @media (min-width: 771px) {
    display: block;
  }
`;

export default function Layout(props) {
  return (
    <div>
      <PhoneLayout>{props.children}</PhoneLayout>
      <DesktopLayout>
        <h1>PC VIEW</h1>
      </DesktopLayout>
    </div>
  );
}
