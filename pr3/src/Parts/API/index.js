import"../../Assets/scss/layoutSearch.scss";
import { useState,useEffect } from "react";
import { searchService } from "../../Services/searchService";
import { Tag } from "antd";


import { NavLink } from "react-router-dom";
function ApiJobs(props){
  const infor = props;
  const page = infor.page[0].page;
  const select = infor.page[0].select;
  const [data,setData]=useState([])

  useEffect(()=>{
    var start = (page-1)*4+1;
    var end=start +3;
    var select = select;
    const fetchApi = async()=>{
      const res = await searchService('jobs');

      const newData=res.filter(item => {
        if(item.id>=start && item.id<=end)
        return item.id;
      })
      
      setData(newData)
    }
     fetchApi();
  }
  ,[page])

    return(
        <>
      {data && (data.map(item=>(
        <>
           <div className="ApiJobs__item">
           <div className="ApiJobs__item__wrap" >

           <p className="ApiJobs__item__wrap__tag">{item.id}</p>
            <Tag color="green" >{item.name}</Tag>
            <p>Ngôn ngữ:  {item.tags.map(language =>(<Tag>{language}</Tag>))}</p>
            <p>Lương: {item.salary}$</p>
            <p>Thành phố: {item.city.map(city =>(<Tag>{city}</Tag>))}</p>
            <h6><NavLink  to={`/jobs/${item.id}`} >Xem thêm</NavLink></h6>
           </div>
           </div>
        </>
      )))}
        </>
    );
}
export default ApiJobs;