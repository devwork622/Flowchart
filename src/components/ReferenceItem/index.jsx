import axios from "axios";
import { baseURL } from "../../data/base_url";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import style from "./style.module.scss";
import Tooltip from "@mui/material/Tooltip";

const ReferenceItem = (props) => {
  
  const [display, setDisplay] = useState(props.display);
  const [id] = useState(props.id);
  const [realDisplay, setRealDisplay] = useState(0);

  const handleClickDisplay = (state_val) => {    
    setDisplay(state_val);
    const checkedItem_id = props.id;
    const updateData = { disponibilidade: state_val };
    const headers = {
      Authorization: `Bearer ${props.token}`,
    };

    axios
      .put(`${baseURL}/visitaprocedimento/${checkedItem_id}`, updateData, {
        headers,
      })
       
  };

  const longText = (
    <div>
      <div>id: {props.id}</div>
      <div>id_a: {props.idA}</div>
      <div>id_b:{props.idB}</div>
      <div>display: {display}</div>
    </div>
  );

  {
    return (
      <td className="reference-item">
        <Tooltip title={longText}>
        <Stack direction="row" spacing={1} style={{ width: "inherit" }}>
          <IconButton
            aria-label="warning amber"
            color={display == 2 ? "warning" : "default"}
            onClick={() => {if(display==2)handleClickDisplay(0); else handleClickDisplay(2);}}
          >
            <WarningAmberIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="check"
            color={display == 1 ? "success" : "default"}
            onClick={() => {if(display==1)handleClickDisplay(0); else handleClickDisplay(1);}}
          >
            <CheckCircleOutlineIcon fontSize="small" />
          </IconButton>
        </Stack>
        </Tooltip>
      </td>
    );
  }
};
export default ReferenceItem;
