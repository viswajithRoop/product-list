import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from "react-bootstrap"

function Product() {

    const [data, setData] = useState([])

    // const [result, setResult]=useState([])

    const [search, setSearch] = useState("")

    const getdata=()=>{
        axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products'
        }).then(resp => {
            setData(
                resp.data
            )
        })
    }
    const filterResult = (cat) => {
        const result = data.filter((curdata)=>{
            return curdata.category===cat;
        });
        getdata()
        setData(result)
        console.log("result",result)

    }

    useEffect(() => {
        getdata()

    }, [])



    return (
        <div className="App">
            <div>
                <h1 className='bg-primary text-white'>Product List</h1>
                <div>
                <div><input type='text' 
                placeholder='search..'
                onChange={(event)=>{
                    setSearch(event.target.value)
                }}/>
                <Button className="btn btn-secondary width-40px m-3" onClick={()=>filterResult("men's clothing")}>men's clothing</Button>
                <Button className="btn btn-secondary width-40px m-3" onClick={()=>filterResult("women's clothing")}>women's clothing</Button>
                <Button className="btn btn-secondary width-40px m-3" onClick={()=>filterResult("jewelery")}>jewelery</Button>
                <Button className="btn btn-secondary width-40px m-3" onClick={()=>filterResult("electronics")}>electronics</Button>

                </div>
                
                </div>
                    {data.map((item, key) => {
                        return (
                            <div className='d-inline-flex' >
                                <Card className="shadow p-3 m-2 bg-body rounded" style={{ width: '15rem',height:'38rem' }}>
                                    <Card.Img style={{ height: '15rem' }} variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.title.slice(0,30)}</Card.Title>
                                        <h5 style={{ color: '#1273de' }}>{item.category}</h5>
                                        <p style={{ overflow: "hidden" }}>
                                            {item.description.slice(0,100)}
                                        </p>
                                        <h5>Price: ₹{item.price}</h5>
                                        <h6>{item.rating.rate} ★</h6>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
            </div>

        </div>
    );
}

export default Product;

{/* <table>
<tr>
    <th>id</th>
    <th>price</th>
    <th>title</th>
    <th>category</th>
</tr>
{data.map((item, key) => {
    return (
        <tr key={key}>
            <td>{item.id}</td>
            <td>{item.price}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
        </tr>
    )
})}
</table> */}
