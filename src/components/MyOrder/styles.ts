import styled from 'styled-components'

export const Container = styled.div`
	position:absolute;
	z-index:10382;
	bottom:4rem;
	right:5rem;
	background:${({theme})=>theme.colors.red};


	&:hover{
		filter:brightness(.5)

	};

	a{
		display:flex;
		align-items:center;

		span:first-child{
			font-size:1.125rem;
			margin-right:.5rem;
		}


		span:last-child{
			display:flex;
			align-items:center;
			justify-content:center;
			width:2rem;
			height:2rem;
			color:${({theme})=>theme.colors.yellow};
			font-weight:bold;
			
		}
	}


	svg{
		fill:${props=>props.theme.colors.white};
		width:2rem;
		height:2rem;
	}

	@media (min-width:350px) and (max-width:720px){
		top:2rem;
		bottom:100%;
		right:3rem;

		a{
			span:first-child{
				display:none
			}
		}

	}

 `