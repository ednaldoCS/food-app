import styled from 'styled-components'

export const Container = styled.header`
	margin:0 4rem;
	margin-bottom:2rem;

	display:flex;
	align-items:center;
	justify-content:space-between;



	img{
		width:8rem;
	}


	>div{
		border:none;
		background:none;

		display:flex;
		align-items:center;

		div{
			text-align:center;
			h3{
				margin-bottom:0.125rem;
				font-weight:500;
				color:white;
			}

			strong{
				width:100%;
				color:yellow;
				font-weight:bold;
				text-align:center;

				span{
					filter:brightness(.8)
				}
			}
		}


		svg{
			flex-shrink:0;
			fill:${props=>props.theme.colors.white};
			width:2rem;
			height:2rem;
			margin-left:0.5rem;
			margin-top:.7rem;
		}
	}



	@media (max-width:720px){
		margin:0;
		margin-bottom:1rem;
	}

 `
export const FinishContainer =styled.div`
 	display:flex;
	align-items:center;
	justify-content:space-between;
	background:${props=>props.theme.colors.black};
	margin:0 auto;
	margin-top:.125rem;
	margin-bottom:3rem;
	padding:2rem 0;

	border-radius:8px 8px 8px ;

	div{
		margin-left:auto;
		margin-right:3rem;
		h2{
			margin-bottom:0;
		}

		span{
			color:white;
			font-size:1rem;
		}
	}

	a, button{
		flex:.5;
		text-align:center;
		border:none;
		background:${props=>props.theme.colors.red};
		margin-left:1.5rem;
		margin-right:2rem;
		border-radius:4px;
		padding:1rem;
		margin-top:.7rem;
		color:${props=>props.theme.colors.white};
		font-weight:700;



		&:hover{
			filter:brightness(.8)
		}
	}


	@media(max-width:720px){
		padding:1rem 0 2rem 0;
		justify-content:space-around;
		

		div{

			display:flex;
			align-items:center;
			h2{
				
				font-size:0.9rem;
				margin-right:.5rem;
			}

			span{
				color:white;
				font-weight:600;
				font-size:1.5rem;
			}
		}	
	}	
  ` 