import { Button, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, FC } from "react";

type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
};

const SearchBar: FC<Props> = ({ onChange, onSearch }) => {


    return (
        <>
            <Typography
                variant='h1'
                sx={{
                    m: '10px',
                    fontSize: '25px',
                    color: '#01013b'
                }}
            >
                Search movie
            </Typography>
            <TextField
                id="outlined-basic"
                onChange={onChange}
                variant="outlined"
                fullWidth
                sx={{
                    width: '30%'
                }}
                label="Search"
            />
            <Button
                onClick={onSearch}
                variant="outlined"
                sx={{
                    height: '40px',
                    ml: '5px'
                }}
            >
                Search
            </Button>
        </>
    )
}

export default SearchBar;