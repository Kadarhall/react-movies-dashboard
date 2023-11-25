import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc nunc velit, facilisis a nulla quis, scelerisque ornare enim.
            Donec gravida risus vitae quam viverra auctor. Vestibulum lectus
            nisi, tempor vitae libero eget, interdum cursus tellus. Fusce ac
            turpis sed lorem venenatis pharetra. Nulla tristique sapien non
            faucibus fermentum. Sed nulla massa, porta id enim nec, lobortis
            tempus enim. Quisque maximus convallis nibh, eu mattis ligula
            feugiat quis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc nunc velit, facilisis a nulla quis, scelerisque ornare enim.
            Donec gravida risus vitae quam viverra auctor. Vestibulum lectus
            nisi, tempor vitae libero eget, interdum cursus tellus. Fusce ac
            turpis sed lorem venenatis pharetra. Nulla tristique sapien non
            faucibus fermentum. Sed nulla massa, porta id enim nec, lobortis
            tempus enim. Quisque maximus convallis nibh, eu mattis ligula
            feugiat quis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc nunc velit, facilisis a nulla quis, scelerisque ornare enim.
            Donec gravida risus vitae quam viverra auctor. Vestibulum lectus
            nisi, tempor vitae libero eget, interdum cursus tellus. Fusce ac
            turpis sed lorem venenatis pharetra. Nulla tristique sapien non
            faucibus fermentum. Sed nulla massa, porta id enim nec, lobortis
            tempus enim. Quisque maximus convallis nibh, eu mattis ligula
            feugiat quis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc nunc velit, facilisis a nulla quis, scelerisque ornare enim.
            Donec gravida risus vitae quam viverra auctor. Vestibulum lectus
            nisi, tempor vitae libero eget, interdum cursus tellus. Fusce ac
            turpis sed lorem venenatis pharetra. Nulla tristique sapien non
            faucibus fermentum. Sed nulla massa, porta id enim nec, lobortis
            tempus enim. Quisque maximus convallis nibh, eu mattis ligula
            feugiat quis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            A Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc nunc velit, facilisis a nulla quis, scelerisque ornare enim.
            Donec gravida risus vitae quam viverra auctor. Vestibulum lectus
            nisi, tempor vitae libero eget, interdum cursus tellus. Fusce ac
            turpis sed lorem venenatis pharetra. Nulla tristique sapien non
            faucibus fermentum. Sed nulla massa, porta id enim nec, lobortis
            tempus enim. Quisque maximus convallis nibh, eu mattis ligula
            feugiat quis.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
