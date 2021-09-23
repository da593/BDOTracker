
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
            
            "columnDefs": [ {
                "targets": 0,
                "orderable": false
                }
               
                ,
            { className: "dt-center", targets: [0,1,2,3,4,5,6,7,8] }],             
            
            order: [[ 6, "dsc" ]],
            
            "data":calculateAdditionalData(getPageType()),
            
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
                    render: DataTable.render.profit()
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












