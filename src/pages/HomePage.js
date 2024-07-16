import { useEffect, useState, useRef } from "react";
import { useTitle } from "../hooks/useTitle"; 
import { PostCard, SkeletonCard } from "../components"
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config"

export const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const [posts, setPosts] = useState([false, false, false]);
  const postsRef = useRef(collection(db, "posts"));
  useTitle("Home");


  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      console.log(data.docs);
      setPosts(data.docs.map((document) => (
        {...document.data(), id: document.id}
        )
      ));
    }
    getPosts();
  }, [postsRef, toggle]);

  return (
    <section>
      {
        posts.map((post, index) => (
          post ? (
            <PostCard key={ post.id} post={post} toggle={toggle} setToggle={setToggle}/>
          ) :
          (
            <SkeletonCard key={index} />
          )
        ))
      }
    </section>
  )
}
