import styled from 'styled-components'

export const Container= styled.div`
	display:flex;
	flex-direction:column;
	gap:1.5rem;
	margin-bottom:6rem;

	.order-item{
		background:${props=>props.theme.colors.black};
		padding:1.75rem 1.5rem;
		border-radius:4px;


		display:grid;
		grid-template-columns:250px 1fr;
		gap:1.5rem;

		>div:first-child{
			img{
				height:100%;
				width:100%;
				object-fit:cover;
				borader-radius:4px;
			}
		}

		>div:last-child{
			display:flex;
			flex-direction:column;
			justify-content:space-between;

			h4{
				margin-bottom:.5rem;
				font-weight:400;
				font-size:1.75rem;
			}

			>span{
				font-weight:400;
				font-size:2rem;
			}

			.buttons{

				display:flex;
				align-items:center;
				gap:2rem;
				margin:0.85rem 0;

				div{
					flex-shrink:0;
					display:flex;
					align-items:center;
					gap:.5rem;

					button{
						background:none;
						border:none;
						flex:0;

						display:flex;
						align-items:center;
						justify-content:center;

						img{
							width:2rem;
						}
					}

					span{
						display:block;
						background:white;
						padding:0.15rem 0.75rem;
						borader-radius:4px;

						font-weight:500;
						font-size:1.75rem;
						color:${props=>props.theme.colors.black}
					}
				}


				button{
					flex-shrink:0;
					border:none;
					background:none;


					display:flex;
					align-items:center;
					justify-content:center;

					svg{
						fill:${props=>props.theme.colors.yellow};
						width:2rem;
						height:2rem
					}
				}
			}

			h5{
				font-size:2.25rem;
				span{
					font-size:1.5rem;
				}
			}
		}


		@media(max-width:540px){
			grid-template-columns:1fr;

			padding:1rem;

			>div:first-child{
				height:10rem;
			}

			>div:last-child{
				.buttons{
					gap:2rem
				}

				h5{
					span{
						font-size:1.5rem
					}

					font-size:2.25rem;
				}
			}
		}
	}

 `
	