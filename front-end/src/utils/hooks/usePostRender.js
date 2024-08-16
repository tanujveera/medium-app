import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { postFetch } from '../../redux/postSlice';
import Shimmer from '../Shimmer';

const usePostRender = (id) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const handleFn = async () => {
    if(id){
      const response = await dispatch(postFetch(id));
    }
    else{
      <Shimmer/>
    }
    }
    handleFn()
  },[dispatch,id]);
}

export default usePostRender