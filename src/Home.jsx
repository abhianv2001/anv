import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Usercontext from './Usecontext';


function Home() {
    const [count, setcount] = useState(0);
    const [cal, setcal] = useState();
    const txtname = useRef();
    const [data, setdata] = ([]);
    const [user, setuser] = useState("anv");

    const handleclick = () => {
        txtname.current.focus();
    }

    useEffect(() => {
        setTimeout(() => {
            setcount(count + 1);
        }, 1000)
    })

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data);
                const filterdata = res.data.filter((product) => product.price < 100)
                setdata(filterdata);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>

            <h1>Time Start now....{count}</h1>
            <input type="text" name="name" placeholder='entername...' ref={txtname} onChange={(e) => setcal(e.target.value)}
            />
            <button type="button" onClick={handleclick}>click</button>
            <table border="1">
                <tr>
                    <th>Images</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>

            </table>
            <Usercontext.Provider value={user}>
                <h1>{user}</h1>
            </Usercontext.Provider>

        </>
    )
}

export default Home;
