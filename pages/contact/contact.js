

loadVue();
function loadVue(){
	var contact = new Vue({
		el: '#contact',
		data: {
			text: 'I am text'
		},
		methods: {
			func1() {
				console.log('Send data to the server or update your stores and such.');
			}
		}
	});
}

