 const url = " https://icanhazdadjoke.com/";

 const btn = document.querySelector(".btn");
 const result = document.querySelector(".result");

 btn.addEventListener("click", () => {
   fetchDadJoke();
 })
 const fetchDadJoke = async() => {
   result.textContent = 'Loading...';
   try {
      const response = await fetch(url, 
         {
         headers: {
            Accept:
            'application/json',
            'user-Agent':'learning app',
         }
      }
       );
      if(!response.ok){
         throw new Error('error');
      }
   const data = await response.json();
   console.log(data);
    result.textContent = data.joke;
   //THE data uses dot notation to access the joke property of the data object
   } catch (error) {
      console.log(error.message);
      result.textContent ='There was an error...';
   }
  }
 fetchDadJoke();