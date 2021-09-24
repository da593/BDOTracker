$(document).ready( function () {

    var table = $('#table-id').DataTable(
        {   
            "dom": 
            "<ti>",

            language: {
                search:"",
                searchPlaceholder:"Search items"
                    },
            paging:false,

            "columnDefs": [ {
                "targets": [0,1],
                "orderable": false
                }
               
                ,
            { className: "dt-center", targets: [0,1,2,3,4,5,6,7] }],             
            
            order: [[ 5, "dsc" ]],
            
            "data":calculateFarmingData(),
            
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
                        return '<span style="color:' + color + '">' + data.item_name + '</span>';
                    }
                },
                    {"data":"fruit",},
                    {"data":"growth_time",
                    render: function(data) {
                        hr = Math.floor((data / 60))
                        min = data % 60
                        return hr + "hr " + min+"m"
                    }
                },
                    {"data":"harvest_day",},
                    {"data":"in_stock",},
                

                    {"data":"market",
                    render: DataTable.render.profit()
                },
                    {"data":"vendor",
                    render: DataTable.render.profit()
                },

                {"data":"crate",
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