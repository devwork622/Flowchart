import React, { useEffect, useContext, useRef, useState } from "react";
import axios from "axios";
import { baseURL } from "../../data/base_url";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DuplicateVisit from "../DuplicateVisit";
import { red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import style from "./style.module.scss";
import { countVisit } from "../../redux/CountRowColumn/actions";
import { useDispatch, useSelector } from "react-redux";
import { scrollX, scrollY } from "../../redux/ScrollPosition/actions";

const VisitTable = (props) => {
  const [duplicateOpen, setDuplicateOpen] = useState(false);
  const [visit, setVisit] = useState([]);
  const x = useRef(); // this means X coordinate of screen
  const dispatch = useDispatch();

  const handleClickOpen_Duplicate = () => {
    setDuplicateOpen(true);
  };

  const handleClose_Duplicate = () => {
    setDuplicateOpen(false);
  };

  const handleScroll = () => {
    dispatch(scrollX(x.current.scrollLeft));
  };

  // useEffect(() => {
  //   // x.current.addEventListener("scroll", handleScroll);
  //   // return () => {
  //   //   x.current.removeEventListener("scroll", handleScroll);
  //   // };
  // }, []);

  /////////////   getting redux variable of scroll x position
  const storeValue = useSelector((store) => store);

  useEffect(() => {
    axios
      .get(`${baseURL}/visita?co_braco=90`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) => {
        setVisit(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.token]);

  // useEffect(() => {
  //   x.current.scrollLeft = storeValue.ScrollPosReducer.scrollPos_x;
  // }, [storeValue]);

  useEffect(() => {
    dispatch(countVisit(visit.length));
  }, [visit.length]);

  return (
    <>
      <TableContainer component={Paper}>
        <Box
          style={{ overflowX: "scroll", scrollbarWidth: "thin" }}
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
          ref={x}
        >
          {visit.map((data, index) => {
            return (
              <Table
                className={style.tableMargin}
                sx={{ width: "177px", padding: "14px" }}
                style={{ borderCollapse: "collapse" }}
                key={index}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <IconButton aria-label="edit" color="primary">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          aria-label="content copy"
                          color="warning"
                          onClick={handleClickOpen_Duplicate}
                        >
                          <ContentCopyIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          aria-label="delete forever"
                          style={{ color: red[500] }}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ height: "37px" }}>
                    <TableCell>{data.nome_visita}</TableCell>
                  </TableRow>
                  <TableRow sx={{ height: "37px" }}>
                    <TableCell>{data.intervalo}</TableCell>
                  </TableRow>
                  <TableRow sx={{ height: "37px" }}>
                    <TableCell>
                      {data.intervalo_unidade == 1 ? "Semana(s)" : "Dia(s)"}
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ height: "37px" }}>
                    <TableCell>
                      {data.intervalo_referencia == 1 ? "Inclusao" : "Fim do tratamento"}
                      {/* {
                      ()=>{
                        if(data.intervalo_referencia == 1) 
                          return "dsfdsf";
                        else if (data.intervalo_referencia == 2)
                          return "Fim do tratameno";
                        else if (data.intervalo_referencia == 3)
                          return "Por demanda";
                        else if (data.intervalo_referencia == 4)
                          return "Randomizaçao";
                        else if (data.intervalo_referencia == 5)
                          return "Visita";
                      }} */}
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ height: "37px" }}>
                    <TableCell>{data.intervalo_referencia_visita}</TableCell>
                  </TableRow>
                  <TableRow sx={{ height: "37px" }}>
                    <TableCell>{data.janela_dias_menos}</TableCell>
                  </TableRow>
                  <TableRow sx={{ height: "37px" }}>
                    <TableCell>{data.janela_dias_mais}</TableCell>
                  </TableRow>
                  <TableRow sx={{ height: "37px" }}>
                    <TableCell>{data.valor}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            );
          })}
        </Box>
      </TableContainer>
      <DuplicateVisit
        handleClose_Duplicate={handleClose_Duplicate}
        duplicateOpen={duplicateOpen}
      />
    </>
  );
};
export default VisitTable;
