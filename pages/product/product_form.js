


let app = new Vue({
  el: '#product',
  data: {
    items: {
    	product_code: null,
    	product_name: null,
    	price: null,
    	quantity: null
    }
  },
  methods: {
    saveProduct: function () {
    	axios.post('/api/product', this.items).then((response) => {
    		console.log(response);
    		this.items = response.data;
    	});
    }, 
    get: function(){
    

    	// const field = document.querySelector("input[name=abc]").value;
    	//const field = document.querySelector("input["'"x:s"'"=s]").value;

    	//	console.log(this.p, this.something, field );
    	console.log(this.items);
    }
  }
})

//appVue.$forceUpdate();



function xx(){
	//console.log(appVue);
}



/*
function saveProduct(){

	axios.get('/user')
	  .then(function (response) {

	  	     var app = new Vue({
        el: '#product',
        data: {
        	text: response
        },
        methods: {
          func1() {
            console.log('Send data to the server or update your stores and such.');
          }
        }
      });

	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	console.log(app);
}
*/

