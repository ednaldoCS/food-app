import styled from 'styled-components'

export const Container= styled.div`
	background:${props=>props.theme.colors.black};
	padding:2rem 2.5rem; 
	border-radius:8px;
	
	table{
		width:100%;
		border-space:0 0;
		border-collapse:collapse;


		th{
			padding:0 1rem 0.5rem 1rem;

			font-weight:500;
			font-size1.25rem;
			text-transform:uppercase;
			text-align:left;

			&:nth-child(2){
				padding-left:3rem
			}
		}

		td{
			padding:1.5rem 1rem 1.5rem 1rem;
			border-bottom: 1px solid ${props=>props.theme.colors.gray600};


			height:4px


			h4{
				margin-bottom:0.5rem;
				font-weight:500;
				font-size1:1.125rem;
			}

			>span{
				font-weight:700;
				font-size1:1.5rem;
			}


			.quantity{
				display:flex;
				align-items:center;
				gap:0.5rem;
				button{
					background:transparent;
					border:none;
					display:flex;
					align-items:center;
				}

				img{
					width:1.5rem;
				}
			}



			h5{
				font-weight:700;
				font-size:1.5rem;
			}


			&:first-child{
				width:7.5rem;
				padding-left:0;
				padding-right:0;


				img{
					object-fit:cover;
					width:7.5rem;
					height:7.5rem;
					borader-radius:8px;
				}
			}

			&:nth-child(2){
				padding-left:3rem;
			}

			&:nth-child(3), &:nth-child(4){
				width:11rem;
			}


			&:last-child{
				width:1.5rem;


				button{
					border:none;
					background:none;
					width:100%;

					display:flex;
					align-items:center;
					justify-content:flex-end;

					svg{
						fill:yellow;
						width:1.5rem;
						height:1.5rem;
					}
				}
			}



		}
	}

 `