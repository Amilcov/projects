


window.onload = () => {
     
    async function read() {
        try {
                const res = await fetch("https://geek-jokes.sameerkumar.website/api");
                const data = await res.json();
                console.log('chuck',data);
                document.getElementById("message").innerText = data;
        }  catch (err) {
                console.log(err);
        }
    }
    read();
   
    document.getElementById("jokeBtn").addEventListener("click", read);

}




    