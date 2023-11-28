
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import searchStyles from './styles';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchStories, getStories } from "../../../redux/actions/stories";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const classes = searchStyles();
    const dispatch = useDispatch();




    const { stories, isLoading } = useSelector((state) => state.stories);

    useEffect(() => {
        // Filter and map storiesList when stories or searchTerm changes

        const filteredStories = stories
            .filter((val) => {

                if (

                    val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    isTag(searchTerm.toLowerCase(), val) ||
                    val.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.creator.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    return val;
                };

            });

        if (searchTerm != "") {
            dispatch(searchStories(filteredStories));
        }


    }, [stories, searchTerm, dispatch]);

    const handleSearch = () => {

        try {
            dispatch(searchStories(storiesList));
        } catch (error) {
            alert(`Error: couldn't show search results.`);
        }
    }

    const isTag = (searchTag, val) => {
        val.tags.forEach((tag, i) => {
            console.log('tag is ' + tag);
            if (tag.includes(searchTag)) {
                console.log('search tag is ' + searchTag);
                return true;
            }
        });

        return false;
    }



    return (
        /*<Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ marginRight: '10px' }} />
            <Input
                placeholder={placeholder}
                onChange={onChange}
                sx={{width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
                disableUnderline
            />
        </Box>*/

        <div className={classes.templateContainer}>
            <div className={classes.searchInput_Container}>
                <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                    setSearchTerm(event.target.value);


                }} />
            </div>

        </div>
    )
}

export default SearchBar;