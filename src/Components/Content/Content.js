import styles from './Content.module.css'
import { useState } from 'react';


function Content(){

    const name1 = "zihan";
    const [name, setName] = useState('Ming');
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+88)
        setName('ming2')
         console.log(count)
    }

    const handleName = (name) => {
        console.log(name);
    }

    const handleLast = () => {

        const names = ['Daniel', 'Harry', 'Brian'];
        const int = Math.floor(Math.random() * 3);
        console.log(names[int]);
    }


    return(
        <main >
            <p className={styles.content}>
                Products
            </p>
            <button onDoubleClick={handleClick}>Count</button>  
            <button onClick={()=>handleName("Suger")}>Product</button>
            <button onClick={handleLast}>names</button> 
            <p>
                This is Paragraph {name} {count} 
            </p>
        </main>

    );

}

export default Content;