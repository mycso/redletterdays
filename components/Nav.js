import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { debounce } from './../src/utilities/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';


const StyledHeader = styled.header`

	.multi-border li:nth-child(1) {
  		background: ${props => props.theme.mainBlue};
	}

	.multi-border li:nth-child(2) {
  		background: ${props => props.theme.lightBlue};
	}

	.multi-border li:nth-child(3) {
  		background: ${props => props.theme.turquoise};
	}

	.multi-border li:nth-child(4) {
  		background: ${props => props.theme.yellow};
	}

	.multi-border li:nth-child(5) {
  		background: ${props => props.theme.orange};
	}

	.navy-blue{
		color: ${props => props.theme.navyBlue};
	}

	.blue{
		color: ${props => props.theme.mainBlue};
	}

	.navbar .svg-inline--fa {
	    font-size: ${props => props.theme.fontSize};
	}

	.rld-logo {
    	max-width: ${props => props.theme.logoStaxWidth};
		cursor: pointer;
	}

	.multi-border-wrapper {
		margin-top: 92px;
		padding:0;
	}

	ul.multi-border {
	  	list-style:none;
	  	width:100%;
	  	font-size:0;
	  	padding:0;
	}

	.multi-border li {
	  	display:inline-block;
	  	width:20%;
	  	height:7px;
	}

	button:focus {
    	outline: none !important
	}

	.active:after {
		content: '';
	}

	.left-margin {
		margin-left: 1rem;
	}

	.right-margin {
		margin-right: 1rem;
	}

  	.navbar-light .navbar-nav .nav-link {
    	text-decoration: none;
    	padding: 10px !important;
    	display: block;
    	color: ${props => props.theme.navyBlue};
		background-color: ${props => props.theme.transparent};
  	}

	a.bg-light:focus, a.bg-light:hover, button.bg-light:focus, button.bg-light:hover {
		background-color: ${props => props.theme.transparent};
	}

  	.nav-link.active {
    	color: ${props => props.theme.lightBlue} !important;
  	}
  	.nav-link.user.active {
    	color: ${props => props.theme.navyBlue} !important;
  	}

  	a {
  		cursor: pointer;
  	}

	.header-color {
		background-color: #e40521;
	}
`;


export default function Nav() {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
  	const [visible, setVisible] = useState(true);  
	  
	const MainNavbarStyles = {
		position: 'fixed',
		height: '95px',
		width: '100%',
		textAlign: 'center',
		transition: 'top 0.6s',
		zIndex: '1030'
	}
	
	const handleScroll = debounce(() => {
	const currentScrollPos = window.pageYOffset;

	setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

	setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
	window.addEventListener('scroll', handleScroll);

	return () => window.removeEventListener('scroll', handleScroll);

	}, [prevScrollPos, visible, handleScroll]);

	return (
		<StyledHeader data-test="nav">
		<nav style={{ ...MainNavbarStyles, top: visible ? '0' : '-95px' }} className="navbar navbar-expand-lg navbar-light header-color fixed-top px-0 col-lg-12">
			<div className="container col-lg-12 col-md-12 col-sm-12">
				<Link href="/">
				<div className="navbar-brand left-margin">
					<img className="rld-logo" src="/static/rld-logo-white.png" />
				</div>
				</Link>
			</div>
		</nav>
		</StyledHeader>
  	);
}
