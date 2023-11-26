import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getCurrentMovies } from "../../data/moviesData";
import { Image } from "@mui/icons-material";

const currentMovies = await getCurrentMovies();

const moviesList = currentMovies.map((movie, i) => {
  return {
    id: i + 1,
    title: movie.title,
    avg: movie.vote_average,
    release_date: movie.release_date,
    overview: movie.overview,
    poster_path: movie.poster_path,
  };
});

const Team = () => {
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
    // {
    //   field: "access",
    //   headerName: "Access Level",
    //   flex: 1,
    //   renderCell: ({ row: { access } }) => {
    //     return (
    //       <Box
    //         width="50%"
    //         m="0 auto"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         backgroundColor={
    //           access === "admin"
    //             ? colors.greenAccent[600]
    //             : colors.greenAccent[700]
    //         }
    //         borderRadius="4px"
    //       >
    //         {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
    //         {access === "manager" && <SecurityOutlinedIcon />}
    //         {access === "user" && <LockOpenOutlinedIcon />}
    //         <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
    //           {access}
    //         </Typography>
    //       </Box>
    //     );
    //   },
    // },
  ];

  return (
    <Box m="20px">
      <Header title="CURRENT RELEASES" subTitle="List of Current Films" />
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
        }}
      >
        <DataGrid rows={moviesList} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
