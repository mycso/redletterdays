import styled from 'styled-components';
import HomeCarousel from '../components/HomeCarousel';
import DetailsPage from '../components/DetailsPage';

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
	font-size: 20px;
`;

export default function IndexPage() {
  return (
    <>
      <HomeCarousel />
      <Inner>
        <DetailsPage />
      </Inner>
    </>
  )
}
