import styled from 'styled-components';

const StyledCarousel = styled.div`
	
.carousel img {
    width: 100%;
    @media (max-width: 767px) {
          width: ${props => props.theme.carouselResponsiveWidth};
          position: ${props => props.theme.carouselPosition};
          left: ${props => props.theme.carouselLeft};
    }

    @media (max-width: 500px) {
        width: 260%;
        position: absolute;
        left: -81%;
    }
}

.carousel-item {
  height: 400px;
  min-height: 400px;
  background: no-repeat center center scroll;
  -webkit-background-size: ${props => props.theme.carouselBg};
  -moz-background-size: ${props => props.theme.carouselBg};
  -o-background-size: ${props => props.theme.carouselBg};
  background-size: ${props => props.theme.carouselBg};
}

.carousel-item:after {
  content:"";
  display:block;
  position:${props => props.theme.carouselPosition} !important;
  top:0;
  bottom:0;
  left:0;
  right:0;
  {/*background: rgb(33 37 41 / 71%);*/}
  background: rgb(33 37 41 / 71%);
  @media (max-width: 767px) {
          width: ${props => props.theme.carouselResponsiveWidth} !important;
          position: ${props => props.theme.carouselPosition} !important;
          left: ${props => props.theme.carouselLeft} !important;
    }
}
.carousel-caption {
    position: ${props => props.theme.carouselPosition} !important;
    right: 15%;
    left: 15%;
    z-index: 10;
    color: #fff;
    text-align: center;
    padding-bottom: 70px;
}

.social-button-main {
    position: ${props => props.theme.carouselPosition};
    z-index: 999;
    top: 30px;
    right: 2px;
}

.social-button-main .svg-inline--fa {
    font-size: 40px;
    color: #fff;
    @media (max-width: 767px) {
          font-size: 30px;
    }
}

.heading .display-4 {
    @media (max-width: 767px) {
          font-size: 35px;
    }
}

.heading .display-5 {
    @media (max-width: 767px) {
          font-size: 20px;
    }
}

.site-map-title {
    @media (max-width: 767px) {
        border-top: 1px solid #fff;
        padding-bottom: 0px;
        width: 260px;
        margin: 0 auto;
    }
}

.rounded-corner{
    border-radius: ${props => props.theme.roundedCorner} !important;	
}

.green-tick {
    color: #00a8a5;
    font-size: 25px;
    vertical-align: bottom;
}

button {
    width: auto;
    color: white;
    background-color: ${props => props.theme.black};
    border: 0;
    border-radius: ${props => props.theme.roundedCorner} !important;
    opacity: 0.7;
    font-size: 1rem;
    padding: 0.4rem 0.9rem;
  }
`;

export default StyledCarousel;