import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const categorias = [];

const asterisk = {
    color: "red"
}

const replicars = [
  {
    value: "1",
    label: "Selecione por favor ...",
  },
];

const executores = [
  {
    value: "1",
    label: "Selecione por favor ...",
  },
];

const AddProcedure = ({ handleClose_EditDialog, editOpen }) => {
  const [categoria, setCategoria] = useState("");
  const [replicar, setReplicar] = useState("");
  const [executore, setExecutore] = useState("");

  const handleChangeCategoria = (event) => {
    setCategoria(event.target.value);
  };

  const handleChangeReplicar = (event) => {
    setReplicar(event.target.value);
  };

  const handleChangeExecutore = (event) => {
    setExecutore(event.target.value);
  };

  return (
    <Dialog fullWidth={true} maxWidth="lg" open={editOpen} onClose={handleClose_EditDialog}>
      <DialogContent>
        <Box>
          <h2>Editar procedimento</h2>
          <Divider />
        </Box>
        <Box>
          <Box sx={{ my: 3 }}>
            <TextField
              label="Procedimento"
              id="procedimento"
              defaultValue="Demografia"
              sx={{ m: 1, width: "27ch" }}
            />
            <TextField
              label="Categoria procedimento"
              id="categoria-procedimento"
              select
              value={categoria}
              onChange={handleChangeCategoria}
              sx={{ m: 1, width: "27ch" }}
            >
              {categorias.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              disabled
              label="Custo base"
              id="custo-base"
              defaultValue="R$ 0, 00"
              sx={{ m: 1, width: "27ch" }}
            />
            <TextField
              label={<>Valor flowchart <span style={asterisk}>*</span></>}
              id="valor-flowchart"
              defaultValue="14,97"
              sx={{ m: 1, width: "27ch" }}
            />
          </Box>
          <Box sx={{ my: 3, mx: 1 }}>
            <TextField
              id="observacoes"
              label="Observacoes"
              multiline
              rows={5}
              fullWidth
            />
          </Box>
          <Box sx={{ my: 3 }}>
            <TextField
              label={<>Replicar para procedimentos pendentes? <span style={asterisk}>*</span></>}
              id="replicar"
              select
              value={replicar}
              onChange={handleChangeReplicar}
              sx={{ m: 1, width: "56ch" }}
            >
              {replicars.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Executores padrao"
              id="executores"
              select
              value={executore}
              onChange={handleChangeExecutore}
              sx={{ m: 1, width: "56ch" }}
            >
              {executores.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ my: 3 }}>
            <p> <span style={asterisk}>*</span> - Campo exigido</p>
          </Box>
        </Box>        
      </DialogContent>
      <Divider />
      <DialogActions sx={{ my: 3, mx: 2 }}>
        <Button onClick={handleClose_EditDialog} variant="outlined">
          Cancelar
        </Button>
        <Button onClick={handleClose_EditDialog} variant="contained">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProcedure;
