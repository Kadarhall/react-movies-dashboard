import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getTopRatedMovies } from "../../data/moviesData";
import { Image } from "@mui/icons-material";

const topRatedMovies = await getTopRatedMovies();
console.log("top rated: ", topRatedMovies);

const moviesList = topRatedMovies.map((movie, i) => {
  return {
    id: i + 1,
    title: movie.title,
    avg: movie.vote_average,
    release_date: movie.release_date,
    overview: movie.overview,
    poster_path: movie.poster_path,
  };
});

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "avg",
      headerName: "Vote Avg",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "overview",
      headerName: "Synopsis",
      flex: 1,
    },
    {
      field: "release_date",
      headerName: "Release Date",
      flex: 1,
    },
    {
      field: "poster_path",
      headerName: "Poster",
      flex: 1,
      renderCell: (params) => <Image src={params.value} alt={params.value} />,
    },
  ];

  return (
    <Box m="20px">
      <Header title="TOP RATED" subTitle="List of all time top-rated films" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={moviesList} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Invoices;
