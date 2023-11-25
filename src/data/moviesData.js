export const getCurrentMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJiYmY3NjI4YjRlNTYyMTg2YzcxN2E5Mjk2OTE2OSIsInN1YiI6IjY1M2Q0ODBjNTkwN2RlMDExYmM0YmFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6JV1_WIUAoDDJoo-VdkH1-p8-2u02DgKD5Z1syEmEV0",
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      
      const movies = jsonResponse.results;
      return movies;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUpcomingMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJiYmY3NjI4YjRlNTYyMTg2YzcxN2E5Mjk2OTE2OSIsInN1YiI6IjY1M2Q0ODBjNTkwN2RlMDExYmM0YmFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6JV1_WIUAoDDJoo-VdkH1-p8-2u02DgKD5Z1syEmEV0'
    }
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      
      const movies = jsonResponse.results;
      return movies;
    }
  } catch (error) {
    console.log(error);
  }
}

export const getTopRatedMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJiYmY3NjI4YjRlNTYyMTg2YzcxN2E5Mjk2OTE2OSIsInN1YiI6IjY1M2Q0ODBjNTkwN2RlMDExYmM0YmFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6JV1_WIUAoDDJoo-VdkH1-p8-2u02DgKD5Z1syEmEV0'
    }
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      
      const movies = jsonResponse.results;
      return movies;
    }
  } catch (error) {
    console.log(error);
  }
}