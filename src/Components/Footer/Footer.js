function Footer(){
    
  const today = new Date();

    return(
       
        <footer className="App">
            <p>
                Copyright &copy; {today.getFullYear()}
            </p>
        </footer>

    );
}

export default Footer;