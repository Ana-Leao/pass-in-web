import nlwUniteIcon from "../assets/nlw-unit-icon.svg";

export function Header() {
	return (
		<div className='flex items-center gap-5 py-2'>
			<img src={nlwUniteIcon} />

			<nav className='flex items-center gap-5'>
				<a href='' className='text-sm font-medium text-zinc-400'>
					Eventos
				</a>
				<a href='' className='text-sm font-medium'>
					Participantes
				</a>
			</nav>
		</div>
	);
}
