import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function Row(props: { row: any }) {
	const { row } = props
	const [open, setOpen] = React.useState(false)

	return (
		<React.Fragment>
			<TableRow  sx={{ width:100}}>
				<TableCell >
					<IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component='th' scope='row'>
					{row.severity}
				</TableCell>
				<TableCell align='left'>{row.grouped_finding_created}</TableCell>
				<TableCell align='left'>{row.sla}</TableCell>
				<TableCell align='left'>{row.description}</TableCell>
				<TableCell align='left'>{row.security_analyst}</TableCell>
				<TableCell align='left'>{row.owner}</TableCell>
				<TableCell align='left'>{row.status}</TableCell>
				<TableCell align='left'>{row.progress}</TableCell>
				<TableCell align='left'>  </TableCell>
				<TableCell align='left'>  </TableCell>
				<TableCell align='left'>  </TableCell>
			</TableRow>
			<TableRow sx={{ width:100}}>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
					<Collapse in={open} timeout='auto'  unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant='h6' gutterBottom component='div'>
								Row Findings
							</Typography>
							<Table size='small' aria-label='purchases'>
								<TableHead>
									<TableRow>
										<TableCell>SEVERITY</TableCell>
										<TableCell>TIME</TableCell>
										<TableCell align='left'>SOURCE</TableCell>
										<TableCell align='left'>DESCRIPTION</TableCell>
										<TableCell align='left'>ASSET</TableCell>
										<TableCell align='left'>STATUS</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{JSON.parse(row.raw_findings)?.map((raw_finding: any, index: number) => (
										<TableRow key={index}>
											<TableCell component='th' scope='row'>
												{raw_finding.severity}
											</TableCell>
											<TableCell>{raw_finding.time}</TableCell>
											<TableCell align='left'>{raw_finding.source}</TableCell>
											<TableCell align='left'>{raw_finding.description}</TableCell>
											<TableCell align='left'>{raw_finding.status}</TableCell>
											<TableCell align='left'>{raw_finding.asset}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

function CollapsibleTable({ records }: any) {
	return (
		<>
			<Typography variant='h6' gutterBottom component='div'>
				Grouped Findings
			</Typography>
			<TableContainer component={Paper}>
				<Table aria-label='collapsible table'>
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell align='center' >SEVERITY</TableCell>
							<TableCell align='left'>TIME</TableCell>
							<TableCell align='left'>SLA&nbsp;(g)</TableCell>
							<TableCell align='left'>DESCRIPTION&nbsp;(g)</TableCell>
							<TableCell align='left'>SECURITY ANALYST&nbsp;(g)</TableCell>
							<TableCell align='left'>OWNER &nbsp;(g)</TableCell>
							<TableCell align='left'>WORKFLOW &nbsp;(g)</TableCell>
							<TableCell align='left'>STATUS &nbsp;(g)</TableCell>
							<TableCell align='left'>OF FINDINGS &nbsp;(g)</TableCell>
							<TableCell align='left'>COMMUNICATION &nbsp;(g)</TableCell>
							<TableCell align='left'>ACTION &nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{records?.map((record: any) => (
							<Row key={record.id} row={record} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export default CollapsibleTable
