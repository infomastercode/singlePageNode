//var dataTable = new DataTable("#myTable");
//console.log(dataTable);

function loadThis(){
	    $('#aaaaaa').dynatable({
        dataset: {
            ajax: true,
            //ajaxMethod: 'GET',
            ajaxUrl: 'http://localhost:3000/api/test',
            ajaxOnLoad: true,
            records: [],

        }
    });
}


  /*  var dynatable = $('#aaaaaa"').dynatable({
        dataset: {
            ajax: true,
            ajaxMethod: 'POST',
            ajaxUrl: 'http://localhost:3000/api/product',
            ajaxOnLoad: true,
            records: []
        }
    });*/ //.data('dynatable');

/*
    function get_list_product() {
    $('#tbl_master_product').dynatable({
        dataset: {
            ajax: true,
            ajaxMethod: 'POST',
            ajaxUrl: base_url + '/catalog/part/product/getListRecord',
            ajaxOnLoad: true,
            records: []
        }
    });
}
*/