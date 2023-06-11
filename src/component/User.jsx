import React, { useEffect, useState } from 'react'
import './User.css'




const User = () => {
    const [gender, setgender] = useState("all")
    const [Udata, setUdata] = useState([])
    function hello(e){
        setgender(e.target.value)
        console.log(gender);
        console.log(Udata);

    }
    useEffect(()=>{
      getData();
    },[gender])
    async function getData(){
        const res=await fetch(`https://randomuser.me/api/?results=30`)
        const data= await res.json();
        console.log(Udata);
        if(gender==="male" || gender==="female"){   
        const filtereddata=data.results.filter((e)=>e.gender===gender)
        setUdata(filtereddata);
    }
    else if(gender==="all"){
        setUdata(data.results)
        console.log(Udata);
        console.log("elseif");
    }
   

    }
  return (
    <>
 
    <div className='user container center col '>
        <div className="contentwala">
    <div style={{textAlign:"justify"}}  ><h2>User Details</h2></div>
    <div style={{textAlign:"justify"}}  className="desc ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo delectus odit voluptate enim quas debitis, illum doloribus inventore quo, nam praesentium, iste autem dolor. Tenetur debitis eveniet quia aliquid.
    Assumenda, illo dolore quos consectetur veniam asperiores ad perferendis, numquam sapiente quibusdam quo fugiat reprehenderit quisquam nemo itaque, sequi a magnam laudantium dicta amet? Quo, ducimus blanditiis. Corporis, reprehenderit atque.
    Ab nostrum dicta aut optio iusto animi lae dignissimos incidunt commodi aliquid nemo, exercitationem autem minus tempora non corporis maxime excepturi corrupti vero blanditiis eveniet dolore quasi possimus distinctio. Perspiciatis.</div></div>
    <div className="inputsRadio " onChange={(e)=>hello(e)}>
    <span><input type="radio" name="gender" id="" value="all" defaultChecked />
        All</span>
        <span>
        <input type="radio" name="gender" value="female" id="" />
        Female</span>
        <span>
        <input type="radio" name="gender" value="male" id="" />
       Male</span>
    </div>
    <div className="tablewala">
          <table style={{ width:"90%",margin:"20px 40px",padding:"10px"}}>
             <thead style={{backgroundColor:"black"}} >
                 <tr>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th> Gender</th>
                 </tr>
             </thead>
             <tbody className='tablebody'>
                 {
                 Udata.length>1?(Udata.map((e)=>(
                    <>
                    <tr style={{margin:"20px 0px"}}>
                            <td width={150}><img style={{margin:"20px 0px"}} width={150} height={100} src={e.picture.large} alt="" /></td>
                            <td style={{marginLeft:"20px"}}>
                               <span >{e.name.first}</span> </td>
                            <td> <span>{e.email}</span> </td>
                            <td><span>{e.gender}</span></td>
                        </tr>
                        </>
               )
        )):null}   
            </tbody>
          </table>
      </div>
       
    </div>
    </>
  )
}

export default User

