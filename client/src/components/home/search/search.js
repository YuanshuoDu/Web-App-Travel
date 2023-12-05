
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField, IconButton, Paper, Button, Container } from '@material-ui/core';
import searchStyles from './styles';
import React, { useState, useEffect } from "react";


const SearchBar = ({ stories, setSearchResults }) => {
    const classes = searchStyles();
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = (e) => {
        //console.log('stories searchBar ' + stories.isArray);   
        if (!searchTerm) return setSearchResults(stories);
        if (Array.isArray(stories)) {
            const resultsArray = stories.filter(story => story.title.includes(searchTerm) || story.city.includes(searchTerm) || story.country.includes(searchTerm) || story.message.includes(searchTerm));
            setSearchResults(resultsArray);
        }
    }

    const handleFilterChange = (filter) => {
        if (Array.isArray(stories)) {
            var resultsArray = [];
            switch (filter) {
                case 'today':
                    const today = new Date().toLocaleDateString();
                    resultsArray = stories.filter((story) => {
                        return story.createdAt && new Date(story.createdAt).toLocaleDateString() === today;
                    });
                    break;
                case 'week':
                    const startDateWeek = new Date();
                    startDateWeek.setDate(startDateWeek.getDate() - 7);
                    resultsArray = stories.filter((story) => {
                        return story.createdAt && new Date(story.createdAt) >= startDateWeek;
                    });
                    break;
                case 'month':
                    const startDateMonth = new Date();
                    // Set to the first day of the month
                    startDateMonth.setDate(1); 
                    console.log(startDateMonth);
                    resultsArray = stories.filter((story) => {
                        return story.createdAt && new Date(story.createdAt) >= startDateMonth;
                    });
                    break;
                case 'year':
                    const startDateYear = new Date();
                    startDateYear.setFullYear(startDateYear.getFullYear() - 1); // Set to one year ago
                    resultsArray = stories.filter((story) => {
                        return story.createdAt && new Date(story.createdAt) >= startDateYear;
                    });
                    break;
                default:
                    // All stories
                    resultsArray = stories;
                    break;
            }
            console.log(resultsArray);

            setSearchResults(resultsArray);
        }
    }

    return (
        <Container>
            <Paper className={classes.searchContainer}>
                <TextField
                    className={classes.searchInput}
                    variant="standard"
                    placeholder="Search for a story"
                    value={searchTerm}
                    onChange={handleInputChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleSearch} edge="end">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Paper>
            <>

                <div className={classes.filterFlex}>

                    <Button onClick={() => handleFilterChange('today')} variant="contained"
                    >Today</Button>
                    <Button onClick={() => handleFilterChange('week')} variant="contained"
                    >This week</Button>
                    <Button onClick={() => handleFilterChange('month')} variant="contained"
                    >This month</Button>
                    <Button onClick={() => handleFilterChange('year')} variant="contained"
                    >This year</Button>
                    <Button onClick={() => handleFilterChange('all')} variant="contained"
                    >All</Button>
                </div>
            </>

        </Container>


    )
}
export default SearchBar;