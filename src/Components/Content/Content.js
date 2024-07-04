import styles from './Content.module.css'



function Content(){

    const handleClick = () => {
         console.log("Products")
    }

    const handleName = (name) => {
        console.log(name);
    }


    return(
        <main >
            <p className={styles.content}>
                Products
            </p>
            <button onClick={handleClick}>Count</button>  
            <button onClick={()=>handleName("Milk")}>Product</button>
        </main>

    );

}

export default Content;