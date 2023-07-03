
import React,{useState,useEffect} from "react";
import "./style.css"

const Products = ()=>{
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        (async ()=>{
            await getProducts();
        })();

    },[])
    const getProducts = async() =>{
        try{

            const response = await  fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.products)
        }
        catch(error){
            console.log(error.message);
        }
    };
    console.log({products});
    <h1>Our Products</h1>

    return (
        
    <div className="Products">
       
        {products.map(item=>(
            <div key={item.id}>
               <img id="images" src={item.images[1]}/>
                <h3>{item.brand}</h3>
                <p>Stock:{item.stock}</p>
                <p>Description:{item.description}</p>
                <p>Category:{item.category}</p>
                </div>
        ))}
    </div>
    )
}
export default Products;