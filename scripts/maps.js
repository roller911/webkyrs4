ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [21.521757, -15.781167],
        zoom: 2
    });
    var moscow = [55.749863, 37.6177];
    var turkey = [38.9574, 35.241368];
    var cuba = [21.521757, -77.781167];
    var usa = [38.8951, -77.0364];


  
    myMap.geoObjects.add(new ymaps.Placemark(cuba, {
        hintContent: 'Куба',
        balloonContent: 'Куба'
    }, {
        preset: 'islands#dotIcon',
        iconColor: '#0000FF'
    }));

   myMap.geoObjects.add(new ymaps.Placemark(moscow, {
        hintContent: 'Москва',
        balloonContent: 'Москва'
    }, {
        preset: 'islands#dotIcon',
        iconColor: '#FF0000'
    }));

    myMap.geoObjects.add(new ymaps.Placemark(usa, {
        hintContent: 'США - Вашингтон',
        balloonContent: 'США - Вашингтон'
    }, {
        preset: 'islands#dotIcon',
        iconColor: '#0000FF'
    }));

     myMap.geoObjects.add(new ymaps.Placemark(turkey, {
        hintContent: 'Турция - Стамбул',
        balloonContent: 'Турция - Стамбул'
    }, {
        preset: 'islands#dotIcon',
        iconColor: '#FF0000'
    }));

    var polyline1 = new ymaps.Polyline([moscow, turkey], {}, {
        strokeColor: '#FF0000',
        strokeWidth: 4
        });
        myMap.geoObjects.add(polyline1);

    var polyline2 = new ymaps.Polyline([cuba, usa], {}, {
        strokeColor: '#0000FF',
        strokeWidth: 4
        });
        myMap.geoObjects.add(polyline2);



    ymaps.geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true,
        params: {
            enableHighAccuracy: true,
            timeout: 2000
        }
    }).then(function(result) {
        var userCoordinates = result.geoObjects.get(0).geometry.getCoordinates();
        var userAddress = result.geoObjects.get(0).properties.get('text');
        console.log(userCoordinates);
      
        myMap.geoObjects.add(new ymaps.Placemark(userCoordinates, {
            hintContent: 'Ваше местоположение ' + userAddress,
            balloonContent: 'Адрес: ' + userAddress
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#0FF00F'
        }));

    
        myMap.setCenter(userCoordinates, 2);
        addMarkers(myMap, userCoordinates, userAddress);
    }, function(err) {
        console.log('Ошибка: ' + err);
        if (err instanceof ymaps.geolocation.Error) {
            console.log('Ошибка геолокации: ' + err.message);
        }
    });
}
