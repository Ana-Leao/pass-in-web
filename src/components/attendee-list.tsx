import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
	MoreHorizontal,
	Search,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { attendees } from "../data/attendees";
import { useState } from "react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function AttendeeList() {
	const [page, setPage] = useState(1);
	const totalPages = Math.ceil(attendees.length / 10);

	function goToNextPage() {
		setPage(page + 1);
	}

	function goToPreviousPage() {
		setPage(page - 1);
	}

	function goToFirstPage() {
		setPage(1);
	}

	function goToLastPage() {
		setPage(totalPages);
	}

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

			<Table>
				<thead>
					<tr className='border-b border-white/10'>
						<TableHeader style={{ width: 48 }}>
							<input
								type='checkbox'
								className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400'
							/>
						</TableHeader>
						<TableHeader>Código</TableHeader>
						<TableHeader>Participante</TableHeader>
						<TableHeader>Data inscrição</TableHeader>
						<TableHeader>Data do check-in</TableHeader>
						<TableHeader style={{ width: 64 }}></TableHeader>
					</tr>
				</thead>
				<tbody>
					{attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
						return (
							<TableRow key={attendee.id}>
								<TableCell>
									<input
										type='checkbox'
										className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400'
									/>
								</TableCell>
								<TableCell>{attendee.id}</TableCell>
								<TableCell>
									<div className='flex flex-col gap-1'>
										<span className='text-white font-semibold'>
											{attendee.name}
										</span>
										<span>{attendee.email}</span>
									</div>
								</TableCell>
								<TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
								<TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
								<TableCell>
									<IconButton
										transparent
										className='flex items-center justify-center border border-white/10 bg-black/20 rounded-md size-7 p-1.5'
										title='botão de ações'
									>
										<MoreHorizontal className='size-4 text-white' />
									</IconButton>
								</TableCell>
							</TableRow>
						);
					})}
				</tbody>
				<tfoot>
					<tr>
						<TableCell colSpan={3}>
							Mostrando 10 de {attendees.length} itens
						</TableCell>
						<TableCell className='text-right' colSpan={3}>
							<div className='inline-flex items-center gap-8'>
								<span>
									Página {page} de {totalPages}
								</span>
								<div className=' flex gap-1.5'>
									<IconButton onClick={goToFirstPage} disabled={page === 1}>
										<ChevronsLeft className='size-4 text-white' />
									</IconButton>
									<IconButton onClick={goToPreviousPage} disabled={page === 1}>
										<ChevronLeft className='size-4 text-white' />
									</IconButton>
									<IconButton
										onClick={goToNextPage}
										disabled={page === totalPages}
									>
										<ChevronRight className='size-4 text-white' />
									</IconButton>
									<IconButton
										onClick={goToLastPage}
										disabled={page === totalPages}
									>
										<ChevronsRight className='size-4 text-white' />
									</IconButton>
								</div>
							</div>
						</TableCell>
					</tr>
				</tfoot>
			</Table>
		</div>
	);
}
