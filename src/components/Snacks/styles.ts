import styled,{keyframes} from 'styled-components'


const shimmerEffect = keyframes`
	0%{
		background-position:0%;
	}
	50%{
		background-position:50%;
	}
	75%{
		background-position:125%;
	}
	100%{
		background-position:200%;
	}
`


export const Container = styled.div`
	display:grid;
	grid-template-columns:repeat(auto-fit, minmax(300px, auto));
	gap:1.75rem;
	margin-bottom:4rem;

	.snack{
		position:relative;
		background-color:${({theme})=>theme.colors.black};
		padding:1.75rem 1.5rem;
		border-radius:4px;

		span{
			position:absolute;
			top:-0.5rem;
			left:-0.5rem;
			background-color:${({theme})=>theme.colors.red};
			border-radius:50%;
			width:2rem;
			height:2rem;
			display:flex;
			justify-content:center;
			align-items:center;

			font-weight:500;
			font-size:1.125rem;
		}

		h2{
			margin-bottom:0.75rem;
			font-weight:700;
			font-size:1.5rem;
			text-align:center;
		}

		img{
			object-fit:cover;
			width:100%;
			height:11.25rem;
			border-radius:4px;
			margin-bottom:0.75rem;
		}

		p{
			font-size:.875rem;
		}

		>div{
			margin-top:.875rem;
			display:flex;
			justify-content:space-between;
			align-items:center;


			strong{
				font-size:2rem;
				font-weight:500;
			}

			button{
				width:3rem;
				height:3rem;
				border:none;
				background-color:${props=>props.theme.colors.red};
				border-radius:50%;


				display:flex;
				align-items:center;
				justify-content:center;

				svg{
					stroke:${props=>props.theme.colors.white};
					width:1.5rem;
					height:1.5rem;
				}


				&:hover{
					filter: brightness(.5);
				}
			}
		}
	}



	@media(max-width:500px){
		grid-template-columns:1fr;
	}

 `