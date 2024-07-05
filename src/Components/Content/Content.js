import styles from './Content.module.css'



function Content(){

    const handleClick = () => {
         console.log("Products")
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
            <button onClick={handleClick}>Count</button>  
            <button onClick={()=>handleName("Milk")}>Product</button>
            <button onClick={handleLast}>names</button> 
        </main>

    );

}

export default Content;