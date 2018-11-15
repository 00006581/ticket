//sweet alert for the form//

var clickButton = document.getElementById('click');
if (clickButton) {
	clickButton.onclick = (event)=>{
		event.preventDefault();

		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var message = document.getElementById('form').value;


		if (name !=='' && email !=='' && message !=='') {

			swal('Your message sent', name, 'success');

		    document.getElementById('name').value = '';
		    document.getElementById('email').value = '';
		    document.getElementById('form').value = '';
			
		} else{
			swal({
				type:'error',
				title:'Oops...',
				text:'We ask you to fill required fields!',
			});

		}
	}
}

var send = document.getElementById('send');
var arr = [];

send.addEventListener('click', function(event){
	event.preventDefault();

	var name = document.getElementById('name').value;
	var order = document.getElementById('order');
	var order_select = order.options[order.selectedIndex].text;
	var number_list = document.getElementById('number_list');
	var number_select = number_list.options[number_list.selectedIndex].text;
	var date = document.getElementById('date_time').value;


	if (name == "") {
		alert('hdf');
	}else{
		alert('success');
		let booking_list = {
			name : name,
			order : order_select,
			number : number_select,
			date_time : date
		}

		arr.push(booking_list);

		localStorage.setItem('list', JSON.stringify(arr));
		
	}



}); 

