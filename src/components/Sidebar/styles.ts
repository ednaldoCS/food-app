import styled from 'styled-components'


interface ContainerProps{
	isMenuOpen:boolean
}


export const Container = styled.aside<ContainerProps>`
	background:${props=> props.theme.colors.red};
	width:${(props)=>props.isMenuOpen ? '16rem' : '7.75rem'};

	padding:2rem 0;
	overflow:hidden;

	display:flex;
	flex-direction:column;
	align-items:center;


	transition: width 0.3s;




	button{
		background:transparent;
		border:none;
		width:100%
	};

	nav{
		flex:1;
		width:100%;
		display:flex;
		align-items:center;
		justify-content:center;

		ul{
			display:flex;
			flex-direction:column;
			justify-content:center;
			align-items:center;
			gap:1.5rem;
			overflow:hidden;
		};

		li{	
			width:100%;
			padding:.5rem;
			a{
				width:fit-content;
				position:relative;
				padding-left:1.875rem;
				padding-right:1.875rem;

				display:flex;
				align-items:center;
				justify-content:center;
				gap:2rem; 
				
				svg{
					fill:${({theme})=>theme.colors.white};
					width:4rem;
					height:4rem;
					transition: fill 0.3s;
				}

				span{
					padding-left:0px;
					font-size:1rem;
					font-weight:500;
					transition:color 0.3s;
				}


				&.active{
					&::after{
						content:'';
						position:absolute;
						left:0;
						top:50%;
						bottom:0;
						transform:translateY(-50%);

						background-color:${({theme})=>theme.colors.yellow};
						width:5px;
						height:100%;

						border-radius:0px 5px 5px 0px;

					}

					svg{
						fill:${({theme})=>theme.colors.yellow};
					}

					span{
						color:${({theme})=>theme.colors.yellow};
					}
				}

			}

		}
	}


	@media (max-width:720px) and (min-width:350px){
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		z-index:999;


		border-top-right-radius:1.5rem;
		border-top-left-radius:1.5rem;

		width:100%;
		heigth:5vh;
		overflow-y:auto;
		padding:0px;


		button{
			display:none;
		}

		nav{
			heigth:100%;

			ul{
				flex-direction:row;
				align-items:center;
			}

			li {
				a{
					flex-direction:column;
					padding:0rem;
					svg{
						width:3.25rem;
						heigth:3.25rem;
					}

					span{
						display:none;
					}

					&.active{
						&::after{
							display:none
						}
					}
				}
			}
		}

	};




`