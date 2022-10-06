import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const previstos = [
    {
        value: '1',
        label: 'Nao previsto',
    },
    {
        value: '2',
        label: 'Previsto',
    },
    {
        value: '3',
        label: 'Condicional',
    },
];

const replicars = [
    {
        value: '1',
        label: 'Selecione por favor ...',
    },
];



const EditCell = () => {
    const [previsto, setPrevisto] = useState('');
    const [replicar, setReplicar] = useState('');

    const handleChangPrevisto = (event) => {
        setPrevisto(event.target.value);
    };

    const handleChangeReplicar = (event) => {
        setReplicar(event.target.value);
    };
    
    return (
        <Container fixed>
            <Box>
                <h2>Editar procedimento da visita</h2>
                <Divider />
            </Box>
            <Box sx={{ my: 3, mx: 1 }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Valor padrao" />
                <TextField
                    disabled
                    label="Valor"
                    id="valor"
                    defaultValue="14.97"
                    sx={{ m: 1, width: '27ch' }}
                />
                <TextField
                    label="Previsto / Condicional"
                    id="previsto-condicional"
                    select
                    value={previsto} onChange={handleChangPrevisto}
                    sx={{ m: 1, width: '27ch' }}

                >
                    {previstos.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box sx={{ my: 3, mx: 1 }}>
                <TextField
                    id="observacoes"
                    label="Observacoes"
                    multiline rows={5}
                    fullWidth
                />
            </Box>
            <Box sx={{ my: 3, mx: 1 }}>
                <TextField
                    label="Replicar visita para participantes *"
                    id="replicar"
                    select
                    value={replicar} onChange={handleChangeReplicar}
                    sx={{ m: 1, width: '56ch' }}

                >
                    {replicars.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box sx={{ my: 3 }}>
                <p> * - Campo exigido</p>
            </Box>
            <Box>
                <Divider />
                <Stack spacing={2} direction="row-reverse" sx={{ my: 3 }}>
                    <Button variant="contained">Salvar</Button>
                    <Button variant="outlined">Cancelar</Button>
                </Stack>
            </Box>
        </Container>
    );
}

export default EditCell;