import Link from 'next/link';
import StyledCarousel from './styles/CarouselStyles';
import { ScrollTo } from "react-scroll-to"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCheck,
} from '@fortawesome/free-solid-svg-icons';

import { 
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

export default function HomeCarousel() {
  return (
    <StyledCarousel>
		<div>
		  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators d-none">
		      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
		      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner" role="listbox">
		      <div className="carousel-item active">
		      	<img src="/static/pool-for-google-blog.jpg" />
		        <div className="carousel-caption heading d-md-block"> 
		          	<h3 className="font-weight-bold" >Two Night Hotel Break for Two</h3>
					<ScrollTo>
					{({ scroll }) => (
						<a onClick={() => scroll({ x: 20, y: 830, smooth: true })}><button className="btn btn-outline-light rounded-corner"><FontAwesomeIcon className="green-tick pr-2" icon={faCheck} />Your stay has been booked</button></a>
					)}
					</ScrollTo>
		        </div>
		      </div>
		    </div>
		    <a className="carousel-control-prev d-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
		      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		      <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next d-none" href="#carouselExampleIndicators" role="button" data-slide="next">
		      <span className="carousel-control-next-icon" aria-hidden="true"></span>
		      <span className="sr-only">Next</span>
		    </a>
		  </div>
	  </div>
	  </StyledCarousel>
  );
}
