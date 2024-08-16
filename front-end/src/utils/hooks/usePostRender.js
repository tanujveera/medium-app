import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postFetch } from '../../redux/postSlice';

const usePostRender = (id) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const handleFn = async () => {
    if(id){
      const response = await dispatch(postFetch(id));
    }
    else{
      console.log("Else useEffect");
    }
    }
    handleFn()
  },[dispatch,id]);
  const post = useSelector((state) => state.post.singlePost);
  console.log(post);
}

export default usePostRender