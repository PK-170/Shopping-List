import styles from './Content.module.css'
import { useState } from 'react';


function Content(){

    const name1 = "zihan";
    const [name, setName] = useState('');
    const [count, setCount] = useState(100);

    const handleClick = () => {
         let ranNum = Math.floor(Math.random()*55);
         setCount(ranNum)
         console.log(count);
         
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
            <button onClick={handleClick}>Count</button>  
            <button onClick={()=>handleName(name)}>Product</button>
            <button onClick={handleLast}>names</button> 
            <p>
                This is Testing Paragraph
            </p>
        </main>

    );

}

export default Content;