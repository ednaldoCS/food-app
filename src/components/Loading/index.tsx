import React from 'react';
import ReactLoading from 'react-loading';

import {Container} from './styles'

export default function Loading({textMessage}:any){
	return(
		<Container>
			<div>
				<h2>{textMessage}</h2>
				<ReactLoading type='spin' color='white' height={100} width={100} />
			</div>
		</Container>
	)
}