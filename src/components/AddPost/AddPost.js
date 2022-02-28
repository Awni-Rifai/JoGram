import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const StyledDiv = styled("div", {})`
  margin-bottom: 2rem;
`;
const StyledForm = styled("form", {})`
  padding: 1rem 2rem;
`;
const StyledHeading = styled("h1", {})`
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 0.4rem;
`;

export default function AddPost({ setOpen, setOpenAlert ,setPosts}) {
  const API_KEY = "Uf-Q9-CNxW2gCVohzEq5UBYMmWOG-8rKiSqU6pfipf8";

  // const fetchMovies=async()=>{
  //     try{
  //         const data= await axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}`);
  //         setPosts(data.data);
  //          console.log(data.data);
  //     }
  //     catch(err){

  //     }

  // }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("food");
  const [slug, setSlug] = useState("");
  const imageLinks={
    food:['food.jfif','food2.jfif','food3.jfif','food4.jfif','food5.webp'],
    gaming:['gaming.jfif','gaming2.jfif','gaming3.jfif','gaming4.jfif','gaming4.jfif'],
    tech:['tech.jfif','tech2.jfif','tech3.jfif','tech4.jfif','tech4.jfif']
  }

  const createPost = (e) => {
    e.preventDefault();
  
    const randomNum=(Math.floor(Math.random()*5));
    setPosts(prevPosts=>{
      const slug=title.split(' ')[0];
      const newPosts= [...prevPosts,{
        id:Math.random(),
        title:title,
        category:category,
        description:description,
        dateCreated:new Date().toISOString().split('T')[0],
        image:imageLinks[category][randomNum],
        slug:slug

      }]
      localStorage.setItem('posts',JSON.stringify(newPosts));
      return newPosts
    })
    setOpen(false);
    setOpenAlert(true);

  };
  return (
    <>
      <StyledHeading>Add a post</StyledHeading>
      <hr />
      <StyledForm onSubmit={createPost}>
        <StyledDiv>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="standard-basic"
            name="title"
            variant="standard"
            label="Title"
            size="small"
            style={{ width: "100%" }}
          />
        </StyledDiv>
        <StyledDiv>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            variant="outlined"
            name="Description"
            placeholder="enter your post here ..."
            label="Description"
            size="small"
            style={{ width: "100%" }}
            multiline
            rows={4}
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
          />
        </StyledDiv>
        <StyledDiv>
          <InputLabel id="category-select-label">Select category</InputLabel>
          <Select
            labelId="category-select-label"
            id="demo-simple-select"
            value="food"
            label="category"
            name="category"
            onChange={e=>setCategory(e.target.value)}
            value={category}
          >
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="gaming">Gaming</MenuItem>
            <MenuItem value="tech">Tech</MenuItem>
          </Select>
        </StyledDiv>
        <div style={{ width: "100%", marginTop: "3rem" }}>
          <Button
            variant="outlined"
            onClick={() => setOpen(false)}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            style={{ float: "right" }}
            color="primary"
            type="submit"
          >
            Create
          </Button>
        </div>
      </StyledForm>
    </>
    
  );
}
