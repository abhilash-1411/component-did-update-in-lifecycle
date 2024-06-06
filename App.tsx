

import React, { useState,useEffect } from 'react';
import {
  Text,
 Button,
  View,
} from 'react-native';



   
const App=()=> {
  const [count ,setCount]=useState(0);
  const [data,setData]=useState(100)
//   useEffect(()=>{
//      console.warn("Do some animations")
//   },[count])

//   useEffect(()=>{
//     console.warn("call some api here")
//  },[data])

 

  return (
    <View>
      <Text style={{fontSize:25}}> {data} :useEffect as componentDidUpdate:{count}</Text>
      <Button title='Update Counter' onPress={()=>setCount(count+1)}/>
      <Button title='Update Data' onPress={()=>setData(data+1)}/>
      <User info={{count,data}}/>
    </View>
        
  );
}
const User=(props)=>{
  useEffect(()=>{
    console.warn("run this code when data prop is updated")
   
  },[props.info.data])

  useEffect(()=>{
    console.warn("run this code when count prop is updated")
   
  },[props.info.count])
  return(
  <View>
  <Text style={{fontSize:30,color:'orange'}}> Data:{props.info.data}</Text>
  <Text style={{fontSize:30,color:'orange'}}> Count:{props.info.count}</Text>
   </View>
  )
}


export default App;
