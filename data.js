var $ = (arg) => document.querySelector(arg)

window.onload = () => {
  let tbody = $('#tbody')  
  let temps_string = localStorage.getItem('list')
  let temps; 

  if (temps_string == null) {
    alert('No data was entered!')
  } else {
    temps = JSON.parse(temps_string)
  }   

  for (temp of temps || []) {
    let body_content = `
      <tr>
        <td>${temp.name}</td>
        <td>${temp.order}</td>
        <td>${temp.date_time}</td>
        <td>${temp.number}</td>
      </tr>
    `
    tbody.innerHTML += body_content
  }
}