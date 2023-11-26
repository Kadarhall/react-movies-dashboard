import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { getUpcomingMovies } from "../data/moviesData";
import { getCurrentMovies } from "../data/moviesData";

const upcomingMovies = await getUpcomingMovies();
const currentMovies = await getCurrentMovies();

const upcomingMoviesList = upcomingMovies.map((movie, i) => {
  return {
    x: movie.title,
    y: movie.vote_average,
  };
});

upcomingMoviesList.sort((a, b) => (a.x > b.x ? 1 : b.x > a.x ? -1 : 0));
upcomingMoviesList.splice(0, 6);

const currentMoviesList = currentMovies.map((movie, i) => {
  return {
    x: movie.title,
    y: movie.vote_average * 100,
  };
});

currentMoviesList.sort((a, b) => (a.x > b.x ? 1 : b.x > a.x ? -1 : 0));

console.log("currentMoviesList: ", currentMoviesList);

const popularMoviesList = currentMovies.map((movie, i) => {
  return {
    x: movie.title,
    y: movie.popularity,
  };
});

popularMoviesList.sort((a, b) => (a.x > b.x ? 1 : b.x > a.x ? -1 : 0));

let totalMoviesList = [
  // {
  //   id: "top",
  //   color: tokens("dark").greenAccent[500],
  //   data: topMoviesList,
  // },
  {
    id: "popular",
    color: tokens("dark").blueAccent[300],
    data: popularMoviesList,
  },
  {
    id: "vote avg",
    color: tokens("dark").redAccent[200],
    data: currentMoviesList,
  },
];

console.log("totalMoviesList: ", totalMoviesList);

//totalMoviesList = [...new Set(totalMoviesList)];

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={totalMoviesList}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: 5,
        legend: isDashboard ? undefined : "average",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
