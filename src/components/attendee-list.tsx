import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
	MoreHorizontal,
	Search,
} from "lucide-react";

export function AttendeeList() {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex items-center gap-3'>
				<h1 className='text-2xl font-bold'>Participantes</h1>
				<div className='flex items-center px-3 py-1.5 gap-3 w-72 border border-white/10 rounded-lg text-sm'>
					<Search className='size-4 text-emerald-300' />
					<input
						className='flex-1 bg-transparent outline-none border-0 p-0 text-sm'
						type='text'
						placeholder='Buscar participante...'
					/>
				</div>
			</div>

			<div className='border border-white/10 rounded-lg'>
				<table className='w-full'>
					<thead>
						<tr className='border-b border-white/10'>
							<th
								style={{ width: 48 }}
								className='py-3 px-4 text-sm font-semibold text-left'
							>
								<input
									type='checkbox'
									className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400'
								/>
							</th>
							<th className='py-3 px-4 text-sm font-semibold text-left'>
								Código
							</th>
							<th className='py-3 px-4 text-sm font-semibold text-left'>
								Participante
							</th>
							<th className='py-3 px-4 text-sm font-semibold text-left'>
								Data inscrição
							</th>
							<th className='py-3 px-4 text-sm font-semibold text-left'>
								Data do check-in
							</th>
							<th
								style={{ width: 64 }}
								className='py-3 px-4 text-sm font-semibold text-left'
							></th>
						</tr>
					</thead>
					<tbody>
						{Array.from({ length: 8 }).map((_, index) => {
							return (
								<tr
									className='border-b border-white/10 hover:bg-white/5'
									key={index}
								>
									<td className='py-3 px-4 text-sm text-zinc-300'>
										<input
											type='checkbox'
											className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400'
										/>
									</td>
									<td className='py-3 px-4 text-sm text-zinc-300'>5655</td>
									<td className='py-3 px-4 text-sm text-zinc-300'>
										<div className='flex flex-col gap-1'>
											<span className='text-white font-semibold'>
												Ana Paula
											</span>
											<span>anaqueiroz.dev@gmail.com</span>
										</div>
									</td>
									<td className='py-3 px-4 text-sm text-zinc-300'>
										7 days ago
									</td>
									<td className='py-3 px-4 text-sm text-zinc-300'>
										7 days ago
									</td>
									<td>
										<button
											className='flex items-center justify-center border border-white/10 bg-black/20 rounded-md size-7 p-1.5'
											title='botão de ações'
										>
											<MoreHorizontal className='size-4 text-white' />
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
					<tfoot>
						<tr>
							<td className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
								Mostrando 10 de 150 itens
							</td>
							<td
								className='py-3 px-4 text-sm text-zinc-300 text-right'
								colSpan={3}
							>
								<div className='inline-flex items-center gap-8'>
									<span>Página 1 de 23</span>
									<div className=' flex gap-1.5'>
										<button className='border border-white/10 bg-white/10 rounded-md size-7 p-1.5'>
											<ChevronsLeft className='size-4 text-white' />
										</button>
										<button className='border border-white/10 bg-white/10 rounded-md size-7 p-1.5'>
											<ChevronLeft className='size-4 text-white' />
										</button>
										<button className='border border-white/10 bg-white/10 rounded-md size-7 p-1.5'>
											<ChevronRight className='size-4 text-white' />
										</button>
										<button className='border border-white/10 bg-white/10 rounded-md size-7 p-1.5'>
											<ChevronsRight className='size-4 text-white' />
										</button>
									</div>
								</div>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
}
