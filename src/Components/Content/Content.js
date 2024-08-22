import styles from './Content.module.css'
import { useState, useEffect } from 'react';


function Content(){

    const name1 = "zihan";
    const [name, setName] = useState('');
    const [count, setCount] = useState(100);
    const [color, setColor] = useState('Red');

    const handleClick = () => {
         let ranNum = Math.floor(Math.random()*55);
         setCount(ranNum)
         console.log(count);
         console.log(color);
         
    }

    const handleName = (name) => {
        console.log(name);
    }

    const handleLast = () => {

        const names = ['Daniel', 'Harry', 'Brian'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
        console.log(name);
        
    }


    return(
        <main >
            <p className={styles.content}>
                Products
            </p>
            <button className={styles.button} onClick={handleClick}>Count</button>  
            <button className={styles.button}  onClick={()=>handleName(name)}>Product</button>
            <button className={styles.button}  onClick={handleLast}>names</button> 
            
        </main>

    );

}

export default Content;