import React,{useState} from 'react';
import { observer, inject } from 'mobx-react';
import {Row,Col,Divider,Button,Modal,Input,Rate} from "antd";
import Card from "./Card";
import MovieStore from "./store/Movie";

const movie = new MovieStore();

// @observer 
// @inject('movie')
const App= observer(()=>{
  const [isModel,setisModel]=useState(false);
  const [newRate,setRate] =useState(0);
  const [newTitle,setTitle] =useState("");

  const onReatechange=(value:any)=>{
    setRate(value);
  }
  const onModal=()=>{
    movie.CreateMovie(newTitle,newRate);
    setTitle('');
    setRate(0);
    setisModel(false);
  }

  const onDelete=(id:any)=>{
    movie.DeleteMovie(id);
  }
  const onExistingRateChange=(id:number,value:number)=>{
    movie.ChangeMovie(id,value);
  }

  return (
    <> 
      <Row justify="center">
            <Button type="primary" danger onClick={()=>setisModel(true)}>
              추가하기
            </Button>
      </Row>
      <Divider/>
      {
        movie.movies.map((movie) =>(
          <>
            <Row>
              <Card key={movie.id}
                title={movie.title}
                rate={movie.rate}
                onChange={(value:any) =>onExistingRateChange(movie.id, value)}
                onDelete={()=>onDelete(movie.id)}
              />
            </Row>
          </>
        ))
      }
      <Modal title="추가하기" visible={isModel} onOk={onModal} onCancel={()=>setisModel(false)}>
        <Input placeholder="영화이름을 입력해주세요" value={newTitle} onChange={(e:any)=>setTitle(e.target.value)}/>
        <Rate onChange={onReatechange} value={newRate}/>
      </Modal>
    </>
  );
});

export default App;
