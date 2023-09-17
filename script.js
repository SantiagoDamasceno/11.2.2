document.addEventListener('DOMContentLoaded', () => {
    let btnSubmit = document.getElementById('btnSubmit');
  
    btnSubmit.addEventListener('click', async () => {
      let userName = document.getElementById('userName').value;
      let surName = document.getElementById('surName').value;
      let dob = document.getElementById('dob').value;
  
      let data = { 'Nombre': userName, 'Apellido': surName, 'Fecha de nacimiento': dob };
  
      try {
          let response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response=>response.json())
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    });
  });
  
