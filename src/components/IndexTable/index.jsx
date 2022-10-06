import { Fragment, useEffect, useState } from 'react';
import './style.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddVisit from '../AddVisit';
import { useSelector } from 'react-redux';

function createData(details, alpha, visit) {
    return { details, alpha, visit };
}

const IndexTable = (props) => {

    ///////////// to get redux variable
    const storeValue = useSelector((store) => store)
    // useEffect(()=>{
    //     console.log(storeValue.CountReducer)
    // }, [])
    ////////////// to get redux variable

    const rows = [
        createData('Nome Protocolo', 'Alphacross', 'Nome'),
        createData('Nome do Braço', 'Controle/Experience', 'Intervalo'),
        createData('Qtde. Visitas', storeValue.CountReducer.count_visit, 'Unidade'),
        createData('Qtde. Procedimentos', storeValue.CountReducer.count_procedure, 'Referencia(apos)'),
        createData('', null, 'Visita Referencia'),
        createData('', null, 'Janela -'),
        createData('', null, 'Janela +'),
        createData('', null, 'Valor Total'),
    
    ];
    
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                    }}
                >
                    <Table >
                        <TableHead>
                            <TableRow sx={{height:"73px"}}>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        style={{ textTransform: 'none' }}
                                        endIcon={<RemoveCircleOutlinedIcon />}
                                    >
                                        Menos Detalhes
                                    </Button>
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell direction='asc' iconcomponent='ArrowDownwardIcon'>
                                    <Button
                                        color='warning'
                                        variant="contained"
                                        style={{ textTransform: 'none' }}
                                        endIcon={<AddCircleOutlinedIcon />}
                                        onClick={handleClickOpen}
                                    >
                                        Visita
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index} 
                                    sx={{height:"37px"}}                                                                   
                                >
                                    <TableCell>
                                        {row.details}
                                    </TableCell>
                                    <TableCell>{row.alpha}</TableCell>
                                    <TableCell>{row.visit}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </TableContainer>

            <AddVisit handleClose={handleClose} open={open} token={props.token} />

        </Fragment>
    );
}

export default IndexTable;