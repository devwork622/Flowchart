import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { baseURL } from "../../data/base_url";
import "./style.scss";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ReferenceItem from "../ReferenceItem";
import { useDispatch, useSelector } from "react-redux";
import { scrollX, scrollY } from "../../redux/ScrollPosition/actions";
import CustomizeTR from "../CustomizeTR/CustomizeTR";
import CircularProgress from "@mui/material/CircularProgress";

const ReferenceTable = (props) => {
  const [reference, setReference] = useState([]);
  // const scroll_pos = useRef();
  // const dispatch = useDispatch();

  // /////////     to dispatch scroll x and y redux
  // const handleScroll = () => {
  //   //console.log("33333333333333");
  //   dispatch(scrollX(scroll_pos.current.scrollLeft)); // x coordinate
  //   dispatch(scrollY(scroll_pos.current.scrollTop)); // y coordinate
  // };

  // //////////    getting scroll position of reference table
  // //useEffect(() => {
  // //////////      to dispatch visit count and procedure count redux
  // // dispatch(countVisit(a.length));
  // // dispatch(countProcedure(b.length));

  // // scroll_pos.current.addEventListener("scroll", handleScroll);

  // // return () => {
  // //   scroll_pos.current.removeEventListener("scroll", handleScroll);
  // // };
  // //}, []);

  // /////////////   getting redux variable of scroll position
  // const storeValue = useSelector((store) => store);
  // useEffect(() => {
  //   scroll_pos.current.scrollLeft = storeValue.ScrollPosReducer.scrollPos_x;
  //   scroll_pos.current.scrollTop = storeValue.ScrollPosReducer.scrollPos_y;
  // }, [storeValue]);
  // console.log(props.token)
  useEffect(() => {
    axios
      .get(`${baseURL}/visitaprocedimento/?co_braco=90`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) => {
        setReference(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (reference.length > 0) {
    let tmp = reference[0].co_protocolo_procedimento;
    let resultTr = [],
    tmpTr = [];    
    // return <>{reference.map((data) => data.co_visita)}</>;
    return (
      <TableContainer component={Paper}>
        <Box
          style={{ overflow: "scroll", height: "470px" }}
          sx={{
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
          // ref={scroll_pos}
        >
          <div className="reference-title"></div>
          <table className="reference-table">
            <tbody>
              {reference.map((data) => {
                if (tmp == data.co_protocolo_procedimento) {
                  tmpTr.push(
                    <ReferenceItem
                      key={data.id}
                      id={data.id}
                      idA={data.co_visita}
                      idB={data.co_protocolo_procedimento}
                      display={data.disponibilidade}
                      token={props.token}
                    />
                  );
                } else {                  
                  tmp = data.co_protocolo_procedimento;
                  resultTr = [...tmpTr];
                  tmpTr = [];
                  tmpTr.push(
                    <ReferenceItem
                      key={data.id}
                      id={data.id}
                      idA={data.co_visita}
                      idB={data.co_protocolo_procedimento}
                      display={data.disponibilidade}
                      token={props.token}
                    />
                  );
                  return (
                    <CustomizeTR key={data.co_visita} children={resultTr} />
                  );
                }
              })}
            </tbody>
          </table>
        </Box>
      </TableContainer>
    );
  } else {
    return (
      <TableContainer component={Paper}>
        <Box
          style={{ overflow: "scroll", height: "470px" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <CircularProgress />
          <p style={{marginLeft: "10px"}}>Loading...</p>
        </Box>
      </TableContainer>
    );
  }
};
export default ReferenceTable;
