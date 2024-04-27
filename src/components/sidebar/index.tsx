import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Hidden, Typography } from '@mui/material';
import HomeIcon from "../../assets/icons/icon-nav-home.svg";
import MovieIcon from "../../assets/icons/icon-nav-movies.svg";
import TvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import BookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";

const navLinks = [
    {
        title: "Home",
        icon: HomeIcon,
        path: "/"
    },
    {
        title: "Movies",
        icon: MovieIcon,
        path: "/movies"
    },
    {
        title: "TV Series",
        icon: TvSeriesIcon,
        path: "/tv-series"
    },
    {
        title: "Bookmarks",
        icon: BookmarkIcon,
        path: "/bookmarks"
    }
]

const Sidebar = () => {
    const { pathname } = useLocation();
    return (
        <Box 
        sx={{
            backgroundColor: "#1F2937",
            padding: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: {
                xs: "row",
                lg: "column",
            },
            alignItems: "center",
            justifyContent: "space-between",
            width: {
                sm: "%100",
                lg: 200,
            },
        
        }}>
        
            <Box
            sx={{
            display: "flex",
            flexDirection: {
                xs: "row",
                lg: "column",
            },
            gap: 5,
            alignItems: {
                xs: "center",
                lg: "start",
            },
            width: "100%",
            }}>
                <Hidden smDown>
                    <Typography
                    variant="h5"
                    component={"h1"}
                    my={2}
                    fontWeight={400}
                    fontSize={18}
                    >
                        Movie App
                    </Typography>
                </Hidden>
                <Box sx={{
                    py: {
                        xs: "0px",
                        lg: "16px",
                    },
                    display: "flex",
                    flexDirection: {
                        xs: "row",
                        lg: "column",
                    },
                    gap: 4,
                
                }}>
                    {navLinks.map((item) => (
                        <Link key={item.title} to={item.path} style={{textDecoration: "none"}}>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                                color: "white",
                                textDecoration: "none",
                            
                            }}>
                                <img 
                                src={item.icon} 
                                alt={item.title} 
                                style={{
                                    width:"18px", 
                                    filter: `${
                                        pathname === item.path 
                                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)" 
                                        : "invert(84%)"
                                    }`,
                                }}
                                />
                                <Hidden mdDown>
                                    <Typography>{item.title}</Typography>
                                </Hidden>
                            </Box>
                        </Link>

                    ))}

                </Box>
            </Box>
        </Box>

    );
};

export default Sidebar;