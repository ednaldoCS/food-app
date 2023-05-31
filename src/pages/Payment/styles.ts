import styled from 'styled-components';

export const Container=styled.div` 
	padding:2rem;
	margin:0 auto;
	height:100vh;
	overflow-y:auto;

 `


 export const Inner=styled.main`
	background:${props=>props.theme.colors.black};
	padding:2rem 2.5rem;
	border-radius:8px;

`

export const Form=styled.form`
	display:flex;
	flex-direction:column;

	.error{
		color:${props=>props.theme.colors.red};
		font-size:.95rem;
	}


	h2{
		margin:2.5rem 0 2rem;

		&:first-child{
			margin-top:0
		}
	}

	.field{
		flex-grow:1;
		margin-bottom:1rem;
	}

	.field-group{
		flex-grow:1;
		display:flex;
		flex-direction:row;
		gap:2rem;
		width:100%;
	}


	label{
		display:block;
		color:${props=>props.theme.colors.white};
		margin-bottom:0.5rem;
	}

	input[type='email'],
	input[type='tel'],
	input[type='number'],
	input[type='text'],
	select{
		flex-grow:1;
		background:${props=>props.theme.colors.gray800};
		color:${props=>props.theme.colors.white};
		border:1px solid transparent;
		borader-radius:4px;
		transition: all 0.2s;
		height:42px;
		width:100%;
		margin:0 0 1rem;
		padding:0.7rem;
	}

	select{
		height:65px;
	}

	@media(max-width:540px){
		.field-group{
			flex-direction:column;
		}
	}


 `