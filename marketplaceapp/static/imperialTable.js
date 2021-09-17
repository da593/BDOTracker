
$(document).ready( function () {
    //Initalize and render datatable
     $('#table-id').DataTable(
        {   
            "dom": 
            "t<'#table-footer'ip>",

            language: {
                search:"",
                searchPlaceholder:"Search items"
                    },
            
            "columnDefs": [ {
                "targets": 0,
                "orderable": false
                }
               
                ,
            { className: "dt-center", targets: [0,1,2,3,4,5,6,7,8] }],             
            
            order: [[ 6, "dsc" ]],
            
            "data":calculateAdditionalData(),
            
            "columns": [
                
                    {"data":"profession_level",
                    render: function(data) {
                        let color = "white";
                        if (data === "apprentice") {
                            color = '#b3ff7a';
                        }
                        else if (data === "skilled") {
                            color = '#0391c4';      
                        }
                        else if (data === "professional") {
                            color = '#f6c232';      
                        }
                        else if (data === "artisan") {
                            color = '#d42626';      
                        }
                        else if (data === "master") {
                            color = '#ad3495';      
                        }
                        else if (data === "guru") {
                            color = '#ff8315';      
                        }

                        return '<span style="color:' + color + '">' + data + '</span>';
                    }
                    
                },
                    {"data":null,
                    render: function(data) {
                        let color = "white";
                        if (data.grade == 1) {
                            color = '#b3ff7a';
                        }
                        else if (data.grade == 2) {
                            color = '#0391c4';      
                        }
                        else if (data.grade == 3) {
                            color = '#f6c232';      
                        }
                        else if (data.grade == 4) {
                            color = '#ff8315';      
                        }
                        return '<span style="color:' + color + '">' + data.item_name + " x" +data.quantity  + '</span>';
                    }
                },
                    {"data":"in_stock",},
                    {"data":"base_price",},
                  
                    {"data":"total_quantity",},
                    {"data":"profit_box",
                    render: function(data) {
                        var number = $.fn.dataTable.render.number( ',', '.'). display(data);
                        let color = "white"; 
                        if (data < 0) {
                            color = "#ff6367"
                        }
                        else {
                            color = "#b3ff7a"
                        }

                        return '<span style="color:' + color + '">' + number + '</span>';
                    }
                },
                    {"data":"total_profit",
                    render: DataTable.render.profit()
                },
                    {"data":"revenue_box",
                    render: DataTable.render.profit()
                },
                    {"data":"total_revenue",
                    render: DataTable.render.profit()
                },

            ]
        } 
    );
    //sets the searchbox to the customized searchbox created/styled in the html/css
    var table = $('#table-id').dataTable();
    $("#searchbox").keyup(function() {
        table.fnFilter(this.value);

    });

    setUpdateTime() 
} );

//Customized helper render function to style profit numbers
DataTable.render.profit = function () {
    return function ( data ) {
        var number = $.fn.dataTable.render.number( ',', '.'). display(data);
        let color = "white"; 
        if (data < 0) {
            color = "#ff6367"
        }
        else {
            color = "#b3ff7a"
        }

        return '<span style="color:' + color + '">' + number + '</span>';
    };
};


//Datatable plug-in API that holds an array of functions to filter the database
$.fn.dataTable.ext.search.push(
    //Filters items based on if item's in-stock is greater than the user input in-stock
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#instock').val(), 10 );
        var amount = parseFloat( data[2] ) || 0; // Data for the in stock column. (based on #table-id)
 
        if ( ( isNaN( min )) ||
             ( min <= amount ) )
        {
            return true;
        }
        return false;
    },
    //filters item based on box profession level
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#profession-level').val(), 10 );
        var amount = ( data[0] ) ; // Data for the in stock column. (based on #table-id)
        
        if (amount === "apprentice") {
            amount = 1
        }

        else if (amount ==="skilled") {
            amount = 2
        }

        else if (amount ==="professional") {
            amount = 3
        }

        else if (amount ==="artisan"){
            amount = 4
        }
        else if (amount ==="master") {
            amount = 5
        }
        else if (amount ==="guru"){
            amount = 6
        }

        if ( ( isNaN( min )) ||
             ( amount <= min ) )
        {
            return true;
        }
        return false;
    }
);

//When update button hits, Fetch is used to retrieve updated data from database and starts an async promise chain in order to update the table values displayed
function fetch_cooking_data() {
    return  fetch('/cooking', {
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
        },
    }).then(response => {
      if (response.headers.get('content-type') != 'application/json') {
        throw new TypeError();
      }
      return response.json()         
    }) 
}





//Sets current updated time on loadup and on call
function setUpdateTime() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const currentTime = moment().tz(timezone).format('hh:mm:ss A');
    $('#update-time').text("prices updated at".concat(" ",currentTime))
}




