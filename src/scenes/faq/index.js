import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Some Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Excepteur officia culpa laborum aliqua magna aute irure quis mollit
            aliqua eu est amet. Laboris irure laborum reprehenderit consectetur
            occaecat occaecat esse sunt laborum sit. Adipisicing id veniam
            commodo ut ea dolor non cupidatat amet ullamco nulla aute. Elit qui
            duis in excepteur consectetur aliqua magna.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Excepteur officia culpa laborum aliqua magna aute irure quis mollit
            aliqua eu est amet. Laboris irure laborum reprehenderit consectetur
            occaecat occaecat esse sunt laborum sit. Adipisicing id veniam
            commodo ut ea dolor non cupidatat amet ullamco nulla aute. Elit qui
            duis in excepteur consectetur aliqua magna.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Third Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Excepteur officia culpa laborum aliqua magna aute irure quis mollit
            aliqua eu est amet. Laboris irure laborum reprehenderit consectetur
            occaecat occaecat esse sunt laborum sit. Adipisicing id veniam
            commodo ut ea dolor non cupidatat amet ullamco nulla aute. Elit qui
            duis in excepteur consectetur aliqua magna.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Forth Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Excepteur officia culpa laborum aliqua magna aute irure quis mollit
            aliqua eu est amet. Laboris irure laborum reprehenderit consectetur
            occaecat occaecat esse sunt laborum sit. Adipisicing id veniam
            commodo ut ea dolor non cupidatat amet ullamco nulla aute. Elit qui
            duis in excepteur consectetur aliqua magna.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
