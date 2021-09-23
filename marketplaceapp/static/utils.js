
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

function getPageType () {
    console.log()
    if (document.getElementById('title').textContent.toUpperCase().includes("cooking".toUpperCase())) {
        return "cooking"
    }

    else if (document.getElementById('title').textContent.toUpperCase().includes("alchemy".toUpperCase())){
        return "alchemy"
    }

    else if (document.getElementById('title').textContent.toUpperCase().includes("farming".toUpperCase())){
        return "farming"
    }

    else if (document.getElementById('title').textContent.toUpperCase().includes("pearl".toUpperCase())){
        return "pearlmarket"
    }
    
}

//When update button hits, Fetch is used to retrieve updated data from database and starts an async promise chain in order to update the table values displayed
function fetch_data(type) {
    return  fetch('/'.concat(type), {
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

