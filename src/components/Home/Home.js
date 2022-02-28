import './Home.scss'
import LoginSuccess from './LoginSuccess';
import { useEffect,useState } from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';



export default function Home() { 
    const [successMessage,setSuccessMessage]=useState(false);
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        console.log(posts);
        if(localStorage.getItem('loggedIn')){
            setSuccessMessage(true);
            localStorage.removeItem('loggedIn');
        }
        else{
            setSuccessMessage(false);

        }
        

    },[])
    useEffect(()=>{
       const savedPosts=JSON.parse(localStorage.getItem('posts'));
    //    const newPosts=savedPosts.map(post=>({...post,slug:post.title.split(' ')[0]+post.title.split(' ')[1]??''}))
    //    localStorage.setItem('posts',JSON.stringify(newPosts));
       if(!savedPosts)return;
       setPosts(savedPosts);


    },[])
  
  return (
      <section className="home">
          {successMessage && ReactDom.createPortal(<LoginSuccess/>,document.querySelector('#success-modal'))}
         
          <div className="home__container">
            {posts?.map((post,i)=>  <div key={post.id} className="home__container--post">
              <div className='home__container--post__image' style={{backgroundImage:`url("${post.image}")`}} alt="" ></div>
             <div className="home__container--post__content">
            <div className="home__container--post__content__user">
             <img src={`https://randomuser.me/api/portraits/men/${i+5}.jpg`} alt="" />
             <h4>Awni Rifai</h4>
            </div>
             <h3 className='home__container--post__content__heading'>{post.title.slice(0,20)}</h3>
             <p className="home__container--post__content__p">{post.description.slice(0,150)}...</p>
            <Link style={{textDecoration:'none'}} to={'/'+post.slug} className="home__container--post__content--btn">view post</Link>
             
                
             </div>
              </div>)}
           
          
          </div>
          <AddButton setPosts={setPosts}/>


      </section>
  );
}
