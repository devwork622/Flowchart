import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../data/base_url";
import IndexTable from "../../components/IndexTable";
import VisitTable from "../../components/VisitTable";
import ProcedureTable from "../../components/ProcedureTable";
import ReferenceTable from "../../components/ReferenceTable";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ContextInfo from "../../components/ContextInfo";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import LinearProgress from "@mui/material/LinearProgress";

const WholeTable = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .post(`${baseURL}/sessions`, {
        nome: "benjamin",
        password: "123456",
      })
      .then((response) => {
        setToken(response.data.token);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (token !== "") {
    return (
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={1}>
          <Grid item xl={4} lg={5} md={12} xs={12}>
            <IndexTable token={token}/>
          </Grid>
          <Grid item xl={8} lg={7} md={12} xs={12}>
            <VisitTable token={token} />
          </Grid>
          <Grid item xl={4} lg={5} md={12} xs={12}>
            <ProcedureTable token={token} />
          </Grid>
          <Grid item xl={8} lg={7} md={12} xs={12}>
            <ReferenceTable token={token} />
          </Grid>
        </Grid>
      </Box>
    );
  } else {
      if(error !== "") {
        return (
          <h3>network connection error</h3>
          
        );
      }
      else {
        return (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )
      }
   }
    
};

export default WholeTable;
