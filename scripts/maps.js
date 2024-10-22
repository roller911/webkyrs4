ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.326552, 44.024662],
        zoom: 14
    });

  
    myMap.geoObjects.add(new ymaps.Placemark([56.326552, 44.024662], {
        hintContent: 'Корпус №1 НГТУ им. Р.Е. Алексеева',
        balloonContent: 'Корпус №1 НГТУ им. Р.Е. Алексеева'
    }, {
        preset: 'islands#dotIcon',
        iconColor: '#782678'
    }));


    ymaps.geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true,
        params: {
            enableHighAccuracy: true,
            timeout: 200
        }
    }).then(function(result) {
        var userCoordinates = result.geoObjects.get(0).geometry.getCoordinates();
        var userAddress = result.geoObjects.get(0).properties.get('text');
        console.log(userCoordinates);
        console.log(userAddress);

      
        myMap.geoObjects.add(new ymaps.Placemark(userCoordinates, {
            hintContent: 'Ваше местоположение ' + userAddress,
            balloonContent: 'Адрес: ' + userAddress
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#542542'
        }));

    
        myMap.setCenter(userCoordinates, 15);
        plotRoute(myMap, userCoordinates, [56.326552, 44.024662], userAddress);
    }, function(err) {
        console.log('Ошибка: ' + err);
        if (err instanceof ymaps.geolocation.Error) {
            console.log('Ошибка геолокации: ' + err.message);
        }
    });
}

function plotRoute(myMap, fromCoordinates, toCoordinates, userAddress) {
    ymaps.route([fromCoordinates, toCoordinates], {
        mapStateAutoApply: true,
        viaIndexes: [0, 1],
        routePathEditorEnabled: true,
        routeEditorEnabled: true
    }).then(function(route) {
        myMap.geoObjects.add(route);
        addMarkers(myMap, fromCoordinates, toCoordinates, userAddress);
        var distance = route.properties.get("distance");
        console.log("Расстояние по дорогам: " + distance + "м");
        document.getElementById('distance').innerHTML = "Расстояние по дорогам: " + (distance / 1000).toFixed(2) + " км";
    }, function(error) {
        console.log('Ошибка построения маршрута: ' + error.message);
    });
}

function addMarkers(myMap, fromCoordinates, toCoordinates, userAddress) {
    myMap.geoObjects.add(new ymaps.Placemark(fromCoordinates, {
        hintContent: 'Ваше местоположение ' + userAddress,
        balloonContent: 'Адрес: ' + userAddress
    }, {
        preset: 'islands#dotIcon',
        iconColor: '#FF0000'
    }));

 
    myMap.geoObjects.add(new ymaps.Placemark(toCoordinates, {
        hintContent: 'Корпус №1 НГТУ им. Р.Е. Алексеева',
        balloonContent: 'Корпус №1 НГТУ им. Р.Е. Алексеева'
    }, {
        preset: 'islands#dotIcon',
        iconColor: '#0000FF'
    }));
}
