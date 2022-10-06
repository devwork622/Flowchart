import React, { useContext, useState } from "react";
import axios from "axios";
import { baseURL } from "../../data/base_url";
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
// import {ContextProvider} from '../ContextInfo';

const unidades = [
  {
    value: 1,
    label: "Dia(s)",
  },
  {
    value: 2,
    label: "Semana(s)",
  },
];

const referencias = [
  {
    value: 1,
    label: "Fim do tratamento",
  },
  {
    value: 2,
    label: "Inclusao",
  },
  {
    value: 3,
    label: "Por demanda",
  },
  {
    value: 4,
    label: "Randomizaçao",
  },
  {
    value: 5,
    label: "Visita",
  },
];

const resposavels = [
  {
    value: null,
    label: "select ....",
  },
];

const locals = [
  {
    value: null,
    label: "select ....",
  },
];

const replicars = [];

const AddVisit = ({ handleClose, open, token }) => {
  // const { info, changeInfo } = useContext(ContextProvider)
  const [visita, setVisita] = useState("");
  const [intervalo, setIntervalo] = useState(0);
  const [unidade, setUnidade] = useState(0);
  const [referencia, setReferencia] = useState(0);
  const [menos, setMenos] = useState(0);
  const [mais, setMais] = useState(0);
  const [resposavel, setResposavel] = useState("");
  const [local, setLocal] = useState("");
  const [valor, setValor] = useState("0.00");
  const [observacoes, setObservacoes] = useState("");
  const [newVisitId, setNewVisitId] = useState(0);
  const [newVisitRemark, setNewVisitRemark] = useState("");
  const [replicar, setReplicar] = useState("");
  const sendData = {
    "co_protocolo": 77,
    "nome_visita": visita,
    "janela_dias_menos": menos,
    "janela_dias_mais": mais,
    "valor": valor,
    "co_braco": 90,
    "local": null,
    "responsavel": null,
    "intervalo": intervalo,
    "intervalo_unidade": unidade,
    "intervalo_referencia": referencia,
    "intervalo_referencia_visita": null,
    "observacoes": observacoes,
    "co_externo": null,
  };

  const createVisitItem = () => {    
    axios
    .get(`${baseURL}/protocoloprocedimento/?co_protocolo=77&id`, {
      headers: {"Authorization": `Bearer ${token}`},
    })
    .then((res) => {
        // res.data.map((item, key)=>{
        //     console.log(item.id);
        // })
        console.log(res.data.length);
    })

    // axios
    //   .post(
    //     `${baseURL}/visita?co_braco=90`, sendData, {
    //       headers: {"Authorization": `Bearer ${token}`},
    //     })
    //   .then((res) => {        
    //     setNewVisitId(res.data.id);
    //     setNewVisitRemark(res.data.observacoes);
    //   });
    
      handleClose();
  };

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
    color: "red",
  };
  return (
    <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
      <DialogContent>
        <Box>
          <h2>Cadastrar visita</h2>
          <Divider />
        </Box>
        <Box sx={{ my: 3, mx: 1 }}>
          <TextField
            label={
              <>
                Visita <span style={asterisk}>*</span>
              </>
            }
            id="visita"
            fullWidth
            onChange={(e) => setVisita(e.target.value)}
          />
        </Box>
        <Box sx={{ my: 3 }}>
          <TextField
            type="number"
            label={
              <>
                Inervalo <span style={asterisk}>*</span>
              </>
            }
            id="intervalo"
            sx={{ m: 1, width: "27ch" }}
            onChange={(e) => setIntervalo(e.target.value)}
          />
          <TextField
            label={
              <>
                Unidade <span style={asterisk}>*</span>
              </>
            }
            id="unidade"
            select
            value={unidade}
            onChange={handleChangeUnidade}
            sx={{ m: 1, width: "27ch" }}
          >
            {unidades.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label={
              <>
                Referencia (apos) <span style={asterisk}>*</span>
              </>
            }
            id="referencia"
            select
            value={referencia}
            onChange={handleChangeReferencia}
            sx={{ m: 1, width: "27ch" }}
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
            label={
              <>
                Janela dias menos <span style={asterisk}>*</span>
              </>
            }
            id="menos"
            sx={{ m: 1, width: "27ch" }}
            onChange={(e) => setMenos(e.target.value)}
          />
          <TextField
            type="number"
            label={
              <>
                Janela dias mais <span style={asterisk}>*</span>
              </>
            }
            id="mais"
            sx={{ m: 1, width: "27ch" }}
            onChange={(e) => setMais(e.target.value)}
          />
        </Box>
        <Box sx={{ my: 3 }}>
          <TextField
            label="Responsavel"
            id="resposavel"
            select
            value={resposavel}
            onChange={handleChangeResposavel}
            sx={{ m: 1, width: "27ch" }}
          >
            {resposavels.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Local"
            id="local"
            select
            value={local}
            onChange={handleChangeLocal}
            sx={{ m: 1, width: "27ch" }}
          >
            {locals.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label={
              <>
                Valor <span style={asterisk}>*</span>
              </>
            }
            id="valor"
            defaultValue="0.00"
            sx={{ m: 1, width: "27ch" }}
            onChange={(e) => setValor(e.target.value)}
          />
        </Box>

        <Box sx={{ my: 3, mx: 1 }}>
          <TextField
            label="Observacoes"
            id="observacoes"
            multiline
            rows={5}
            fullWidth
            onChange={(e) => setObservacoes(e.target.value)}
          />
        </Box>

        <Box sx={{ my: 3 }}>
          <p>
            <span style={asterisk}>*</span> - Campo exigido
          </p>
        </Box>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ my: 3, mx: 2 }}>
        <Button onClick={handleClose} variant="outlined">
          Cancelar
        </Button>
        <Button onClick={createVisitItem} variant="contained">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddVisit;
