
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField, IconButton, Paper } from '@material-ui/core';
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

    return (
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
    )
}
export default SearchBar;