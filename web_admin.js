    let xhr = new XMLHttpRequest();
    var url = "https://gpsproject.azurewebsites.net/api/add-coordinates?code=VZMdS0biiH5uHbUDuvcenauhkmOQYEomPj6SnkI9sDy/icWUqlgYAQ==";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.name)
        }
    }
    var data = JSON.stringify({"id": "d31365", "name": "ali", "personType": "driver", "longitude": "35.329843", "latitude": "33.419457"});
    xhr.send(data);
