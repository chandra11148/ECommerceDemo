import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
  } from '@mui/material';
  import './Filter.css'

function Filter({categories,selectedCategory,setSelectedCategory,selectedSorting,setSelectedSorting,sortingOptions}) {
    // console.log(selectedCategory);
  return (
    <AppBar className="AppBar">
    <Toolbar>
      <Typography variant="h6">Product List</Typography>
      
      <Select sx={{marginRight:"1rem"}}
        label="Category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ marginLeft: 'auto' }}
      >
        {categories.map(category => (
          <MenuItem key={category} value={category}>{category}</MenuItem>
        ))}
      </Select>
      
      <FormControl>
      <InputLabel>Sort By</InputLabel>
            <Select
              label="Sort By"
              value={selectedSorting}
              onChange={(e) => setSelectedSorting(e.target.value)}
            >
              {sortingOptions.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </Select>
          </FormControl>
    </Toolbar>
  </AppBar>
  )
}

export default Filter