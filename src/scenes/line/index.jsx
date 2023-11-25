import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header
        title="Current Movies Line Chart"
        subTitle="Line Chart of Current Movies Voter Avg and Popularity"
      />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
