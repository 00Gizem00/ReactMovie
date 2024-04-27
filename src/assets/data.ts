export interface MovieDataType {
    id: string;
    title: string;
    thumbnail: {
      trending?: {
        small: string;
        large: string;
      };
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  }
  
  export const moviesData = [
    {
      id: "1",
      title: "Comedy Show",
      thumbnail: {
        trending: {
          small: "./thumbnails/call-me-sm.jpg",
          large: "./thumbnails/call-me-l.jpg",
        },
        regular: {
          small: "./thumbnails/call-me-sm.jpg",
          medium: "./thumbnails/call-me-sm.jpg",
          large: "./thumbnails/call-me-l.jpg",
        },
      },
      year: 2019,
      category: "Movie",
      rating: "PG",
      isBookmarked: false,
      isTrending: true,
    },
    {
      id: "2",
      title: "Once Upon a Time We Were In",
      thumbnail: {
        trending: {
          small: "./thumbnails/yves-cedric-schulze-sm.jpg",
          large: "./thumbnails/yves-cedric-schulze-l.jpg",
        },
        regular: {
          small: "./thumbnails/yves-cedric-schulze-sm.jpg",
          medium: "./thumbnails/yves-cedric-schulze-m.jpg",
          large: "./thumbnails/yves-cedric-schulze-l.jpg",
        },
      },
      year: 2021,
      category: "Movie",
      rating: "PG",
      isBookmarked: false,
      isTrending: true,
    },
    {
      id: "3",
      title: "Undiscovered Cities",
      thumbnail: {
        trending: {
          small: "./thumbnails/everton-vila-sm.jpg",
          large: "./thumbnails/everton-vila-l.jpg",
        },
        regular: {
          small: "./thumbnails/everton-vila-sm.jpg",
          medium: "./thumbnails/everton-vila-m.jpg",
          large: "./thumbnails/everton-vila-l.jpg",
        },
      },
      year: 2019,
      category: "TV Series",
      rating: "E",
      isBookmarked: false,
      isTrending: true,
    },
    {
      id: "4",
      title: "1998",
      thumbnail: {
        trending: {
          small: "./thumbnails/michelle-ding-sm.jpg",
          large: "./thumbnails/michelle-ding-l.jpg",
        },
        regular: {
          small: "./thumbnails/michelle-ding-sm.jpg",
          medium: "./thumbnails/michelle-ding-m.jpg",
          large: "./thumbnails/michelle-ding-l.jpg",
        },
      },
      year: 2021,
      category: "Movie",
      rating: "18+",
      isBookmarked: false,
      isTrending: true,
    },
    {
      id: "5",
      title: "Dark Side of the Moon",
      thumbnail: {
        trending: {
          small: "./thumbnails/javier-grixo-sm.jpg",
          large: "./thumbnails/javier-grixo-l.jpg",
        },
        regular: {
          small: "./thumbnails/javier-grixo-sm.jpg",
          medium: "./thumbnails/javier-grixo-sm.jpg",
          large: "./thumbnails/javier-grixo-l.jpg",
        },
      },
      year: 2018,
      category: "TV Series",
      rating: "PG",
      isBookmarked: true,
      isTrending: true,
    },
    {
      id: "6",
      title: "The Great Lands",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2019,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "7",
      title: "The Diary",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2019,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "8",
      title: "Earth’s Untouched",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "18+",
      isBookmarked: true,
      isTrending: false,
    },
    {
      id: "9",
      title: "No Land Beyond",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2019,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "10",
      title: "During the Hunt",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2016,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "11",
      title: "Autosport the Series",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2016,
      category: "TV Series",
      rating: "18+",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "12",
      title: "Same Answer II",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "13",
      title: "Below Echo",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2016,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "14",
      title: "The Rockies",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2015,
      category: "TV Series",
      rating: "E",
      isBookmarked: true,
      isTrending: false,
    },
    {
      id: "15",
      title: "Relentless",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "PG",
      isBookmarked: true,
      isTrending: false,
    },
    {
      id: "16",
      title: "Community of Ours",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2018,
      category: "TV Series",
      rating: "18+",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "17",
      title: "Van Life",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2015,
      category: "Movie",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "18",
      title: "The Heiress",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2021,
      category: "Movie",
      rating: "PG",
      isBookmarked: true,
      isTrending: false,
    },
    {
      id: "19",
      title: "Off the Track",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "18+",
      isBookmarked: true,
      isTrending: false,
    },
    {
      id: "20",
      title: "Whispering Hill",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "21",
      title: "112",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2013,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "22",
      title: "Lone Heart",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "E",
      isBookmarked: true,
      isTrending: false,
    },
    {
      id: "23",
      title: "Production Line",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2018,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "25",
      title: "Dogs",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2016,
      category: "TV Series",
      rating: "E",
      isBookmarked: true,
      isTrending: false,
    },
    {
      id: "26",
      title: "Asia in 24 Days",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2020,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "27",
      title: "The Tasty Tour",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2016,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "28",
      title: "Darker",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "18+",
      isBookmarked: true,
      isTrending: false,
    },
    {
      id: "29",
      title: "Unresolved Cases",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2018,
      category: "TV Series",
      rating: "18+",
      isBookmarked: false,
      isTrending: false,
    },
    {
      id: "30",
      title: "Mission: Saturn",
      thumbnail: {
        regular: {
          small: "./thumbnails/joel-protasio-sm.jpg",
          medium: "./thumbnails/joel-protasio-m.jpg",
          large: "./thumbnails/joel-protasio-l.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "PG",
      isBookmarked: true,
      isTrending: false,
    },
  ];