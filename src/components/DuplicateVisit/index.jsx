import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import {ContextProvider} from '../ContextInfo';

const unidades = [
    {
        value: '1',
        label: 'Dia(s)',
    },
    {
        value: '2',
        label: 'Semana(s)',
    },
];

const referencias = [
    {
        value: '1',
        label: 'Fim do tratamento',
    },
    {
        value: '2',
        label: 'Inclusao',
    },
    {
        value: '3',
        label: 'Por demanda',
    },
    {
        value: '4',
        label: 'Randomizaçao',
    },
    {
        value: '5',
        label: 'Visita',
    },
];

const resposavels = [
    {
        value: '1',
        label: 'Selecione por favor ...',
    },
];

const locals = [
    {
        value: 'none',
        label: 'Selecione por favor ...',
    },
];

const replicars = [
    {
        value: 'none',
        label: 'Selecione por favor ...',
    },
];


const DuplicateVisit = ({ handleClose_Duplicate, duplicateOpen }) => {
    // const { info, changeInfo } = useContext(ContextProvider)
    const [unidade, setUnidade] = useState('');
    const [referencia, setReferencia] = useState('');
    const [resposavel, setResposavel] = useState('');
    const [local, setLocal] = useState('');
    const [replicar, setReplicar] = useState('');
    const [visita, setVisita] = useState('');
    const [intervalo, setIntervalo] = useState(0);
    const [menos, setMenos] = useState(0);
    const [mais, setMais] = useState(0);
    const [valor, setValor] = useState('');
    const [observacoes, setObservacoes] = useState('');


    const saveContext = () => {
        const tmp_array = [];
        tmp_array.push(visita);
        // tmp_array.push(intervalo);
        // tmp_array.push(unidade);
        // tmp_array.push(referencia);
        // tmp_array.push(menos);
        // tmp_array.push(mais);
        // tmp_array.push(resposavel);
        // tmp_array.push(local);
        // tmp_array.push(valor);
        // tmp_array.push(observacoes);
        // changeInfo(tmp_array);
    }
    const handleChangeUnidade = (event) => {
        setUnidade(event.target.value);
    };

    const handleChangeReferencia = (event) => {
        setReferencia(event.target.value);
    };

    const handleChangeResposavel = (event) => {
        setResposavel(event.target.value);
    };

    const handleChangeLocal = (event) => {
        setLocal(event.target.value);
    };

    const handleChangeReplicar = (event) => {
        setReplicar(event.target.value);
    };

    const asterisk = {
        color: "red"
    }
    return (
        <Dialog
            fullWidth={true}
            maxWidth="lg"
            open={duplicateOpen}
            onClose={handleClose_Duplicate}>
            <DialogContent>
                <Box>
                    <h2>Cadastrar visita</h2>
                    <Divider />
                </Box>
                <Box sx={{ my: 3, mx: 1 }}>
                    <TextField
                        label={<>Visita <span style={asterisk}>*</span></>}
                        id="visita"
                        fullWidth
                        onChange={(e) => setVisita(e.target.value)}
                    />
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextField
                        type="number"
                        label={<>Inervalo <span style={asterisk}>*</span></>}
                        id="intervalo"
                        sx={{ m: 1, width: '27ch' }}
                        onChange={(e) => setIntervalo(e.target.value)}

                    />
                    <TextField
                        label={<>Unidade <span style={asterisk}>*</span></>}
                        id="unidade"
                        select
                        value={unidade} onChange={handleChangeUnidade}
                        sx={{ m: 1, width: '27ch' }}

                    >
                        {unidades.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label={<>Referencia (apos) <span style={asterisk}>*</span></>}
                        id="referencia"
                        select
                        value={referencia} onChange={handleChangeReferencia}
                        sx={{ m: 1, width: '27ch' }}

                    >
                        {referencias.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextField
                        type="number"
                        label={<>Janela dias menos <span style={asterisk}>*</span></>}
                        id="menos"
                        sx={{ m: 1, width: '27ch' }}
                        onChange={(e) => setMenos(e.target.value)}
                    />
                    <TextField
                        type="number"
                        label={<>Janela dias mais <span style={asterisk}>*</span></>}
                        id="mais"
                        sx={{ m: 1, width: '27ch' }}
                        onChange={(e) => setMais(e.target.value)}
                    />
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextField
                        label={<>Responsavel <span style={asterisk}>*</span></>}
                        id="resposavel"
                        select
                        value={resposavel} onChange={handleChangeResposavel}
                        sx={{ m: 1, width: '27ch' }}

                    >
                        {resposavels.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label={<>Local <span style={asterisk}>*</span></>}
                        id="local"
                        select
                        value={local} onChange={handleChangeLocal}
                        sx={{ m: 1, width: '27ch' }}

                    >
                        {locals.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label={<>Valor <span style={asterisk}>*</span></>}
                        id="valor"
                        defaultValue="0,00"
                        sx={{ m: 1, width: '27ch' }}
                        onChange={(e) => setValor(e.target.value)}
                    />
                </Box>

                <Box sx={{ my: 3, mx: 1 }}>
                    <TextField
                        label="Observacoes"
                        id="observacoes"
                        multiline rows={5}
                        fullWidth
                        onChange={(e) => setObservacoes(e.target.value)}
                    />
                </Box>

                <Box sx={{ my: 3 }}>
                    <p><span style={asterisk}>*</span> - Campo exigido</p>
                </Box>
            </DialogContent>
            <Divider />
            <DialogActions sx={{ my: 3, mx: 2 }}>
                <Button onClick={handleClose_Duplicate} variant="outlined">Cancelar</Button>
                <Button onClick={handleClose_Duplicate} variant="contained">Salvar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DuplicateVisit;