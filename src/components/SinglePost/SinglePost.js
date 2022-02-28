
import { styled } from '@mui/system';
import React from 'react'
import { useParams } from 'react-router-dom'
const StyledSection=styled('section',{})`
box-sizing: border-box;
width: 70vw;
text-align:center;
padding:0rem 3rem;
padding-top:7rem; 


`
const StyledContainer=styled('div',{})`
border:1px solid rgba(0,0,0,0.4);
margin:auto;
padding:2rem 4rem;
`
const H1=styled('h1',{})`
text-align:left;
font-size:3rem;
`
const Img=styled('img',{})`
width:30%;

`
const Body=styled('div',{})`
display:flex;

`
const Description=styled('p',{})`
padding:1rem 0rem;
margin-right:4rem;
`

export default function SinglePost() {
    let {id}=useParams();
 
  return (
     <StyledSection>
         <StyledContainer>
             <H1>
                 Hello
             </H1>
             <Body>
          
            <Description>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repudiandae consectetur temporibus laudantium quo voluptas nesciunt. Placeat officia cupiditate maxime officiis laboriosam minima provident quia culpa ex cumque modi aut unde voluptate nemo, rem voluptatem eos fugiat tempore numquam aperiam!
            </Description>
            <Img src="food.jfif"/>
            </Body>
         
         </StyledContainer>
     </StyledSection>
    
  )
}
