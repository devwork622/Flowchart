import { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { baseURL } from "../../data/base_url";
import style from "./style.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import AddProcedure from "../AddProcedure";
import EditProcedure from "../EditProcedure";
import { red } from "@mui/material/colors";
import { countProcedure } from "../../redux/CountRowColumn/actions";
import { useDispatch, useSelector } from "react-redux";
import { scrollX, scrollY } from "../../redux/ScrollPosition/actions";

const ProcedureTable = (props) => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [procedure, setProcedure] = useState([]);
  // let [procedureId, setProcedureId] = useState([]);

  const handleClickOpen_AddDialog = () => {
    setAddOpen(true);
  };

  const handleClickOpen_EditDialog = () => {
    setEditOpen(true);
  };

  const handleClose_AddDialog = () => {
    setAddOpen(false);
  };

  const handleClose_EditDialog = () => {
    setEditOpen(false);
  };

  const y = useRef(); // this means Y coordinate of screen
  const dispatch = useDispatch();
  const handleScroll = () => {
    dispatch(scrollY(y.current.scrollTop));
  };

  useEffect(() => {
    // y.current.addEventListener("scroll", handleScroll);
    // return () => {
    //   y.current.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  /////////////   getting redux variable of scroll y position
  const storeValue = useSelector((store) => store);

  useEffect(() => {
    axios
      .get(`${baseURL}/protocoloprocedimento/?co_protocolo=77`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) => {
        setProcedure(res.data);        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.token]);

  // useEffect(() => {
  //   // console.log(storeValue.ScrollPosReducer.scrollPos_x, storeValue.ScrollPosReducer.scrollPos_y);
  //   y.current.scrollTop = storeValue.ScrollPosReducer.scrollPos_y;
  // }, [storeValue]);

  useEffect(() => {
    dispatch(countProcedure(procedure.length));
  }, [procedure.length]);

  return (
    <>
      <TableContainer component={Paper}>
        <Box
          style={{
            overflowY: "scroll",
            height: "470px",
            scrollbarWidth: "thin",
          }}
          sx={{
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
          ref={y}
        >
          <Table>
            <TableHead className="bar-shadow">
              <TableRow>
                <TableCell>
                  <Button
                    color="warning"
                    variant="contained"
                    style={{ textTransform: "none" }}
                    endIcon={<AddCircleOutlinedIcon />}
                    onClick={handleClickOpen_AddDialog}
                  >
                    Procedimento
                  </Button>
                </TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Valor Estudo</TableCell>
                <TableCell>Açoes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {procedure.map((data, key) => (                        
                <TableRow className="height-procedure" key={key} >
                  <TableCell>{data.nome_procedimento_estudo}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{data.valor}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={0}>
                      <IconButton
                        aria-label="edit"
                        color="primary"
                        onClick={handleClickOpen_EditDialog}
                      >
                        <EditIcon fontSize="small" />
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
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>

      <AddProcedure
        handleClose_AddDialog={handleClose_AddDialog}
        addOpen={addOpen}
      />
      <EditProcedure
        handleClose_EditDialog={handleClose_EditDialog}
        editOpen={editOpen}
      />
    </>
  );
};

export default ProcedureTable;
