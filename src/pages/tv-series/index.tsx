import React, {SetStateAction, useContext, useState} from "react";
import Layout from "../../Layout";
import { Box, InputAdornment, InputBase, Paper, Typography } from "@mui/material";
import SearhIcon from "../../assets/icons/icon-search.svg";
import MovieTrendList from "../../components/movie-list/movieTrendList";
import MovieList from "../../components/movie-list";

const TvSeries = () => {
    return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment= {
              <InputAdornment position="start">
                <img src={SearhIcon} alt="search" width={20} height={20} 
              />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Recommended For You
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
          </Box>

        ): (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}"{""}
            </Typography>
            <MovieList recommendList={searchList} />

          </Box>
        )}
      </Box>
    </Layout>
    );
};

export default TvSeries;