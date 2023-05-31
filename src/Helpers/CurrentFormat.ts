export function currentFormat(current:number){

	return new Intl.NumberFormat('pt-BR',{
		style:'currency',
		currency:'BRL',
	}).format(current)
}	