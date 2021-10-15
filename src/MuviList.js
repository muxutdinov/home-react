import React, { useState } from 'react'

export const MuviList = () => {
    const [data, setData] = useState([
        {id:1,name:"Harry Pottor",price:"100$"},
        {id:2,name:"Harry Keyn",price:"200$"},
        {id:3,name:"Mr Been",price:"300$"},
        {id:4,name:"Tom Krus",price:"400$"}
    ])
    return (
        <div>
            {
                data.map((value,index)=>{
                    return(
                        <div key={value.id}>
                            <h1>{value.name}</h1>
                            <h3>{value.price}</h3>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MuviList