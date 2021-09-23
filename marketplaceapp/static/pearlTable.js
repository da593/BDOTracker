
$(document).ready( function () {
    //Initalize and render datatable
     $('#table-id').DataTable(
        {   
            "dom": 
            "t<ip>",

            language: {
                search:"",
                searchPlaceholder:"Search items"
                    },
            
            "columnDefs": [ 
            {
            "targets": 0,
            "orderable": false
            },
            {
                "targets":6,
                "visible":false
            
            },
            { className: "dt-center", targets: [0,1,2,3,4,5] }
        
        ],             
            
            order: [[ 2, "dsc" ]],
            
            "data":JSON.parse(document.getElementById('item_data').textContent),
            
            "columns": [
                
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
                        return '<span style="color:' + color + '">' + data.item_name +  '</span>';
                    }
                },
                    {"data":"hourly_sale",},
                    {"data":"daily_sale",},
                    {"data":"weekly_sale",},
                    {"data":"monthly_sale",},
                    {"data":"total_trades",},
                    {"data":"item_type",
                }
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


//Datatable plug-in API that holds an array of functions to filter the database
$.fn.dataTable.ext.search.push(

    //filters item based on item type
    function( settings, data, dataIndex ) {
        var type =  $('#item-type').val()
        
        var item_type = ( data[6] ) ; // Data for the in stock column. (based on #table-id)
        if (type.toUpperCase() === "all".toUpperCase()) {
            return true
        }
        else if (type.toUpperCase() === item_type.toUpperCase()) {
            return true
        }

        else {
            return false
        }
        
    }
);








