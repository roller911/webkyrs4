ymaps.ready(init);
var moscow = [55.749863, 37.6177];
var turkey = [38.9574, 35.241368];
var cuba = [21.521757, -77.781167];
var usa = [38.8951, -77.0364];
var lat1 = usa[0];
var lon1 = usa[1];
var lat2 = cuba[0];
var lon2 = cuba[1];
var lat3 = moscow[0];
var lon3 = moscow[1];
var lat4 = turkey[0];
var lon4 = turkey[1];
// Extract coordinates


function init() {
    var myMap = new ymaps.Map("map", {
        center: [21.521757, -15.781167],
        zoom: 2
    });

  
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
        
      
        myMap.geoObjects.add(new ymaps.Placemark(userCoordinates, {
            hintContent: 'Ваше местоположение ' + userAddress,
            balloonContent: 'Адрес: ' + userAddress
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#0FF00F'
        }));

    
        
        addMarkers(myMap, userCoordinates, userAddress);
    }, function(err) {
        console.log('Ошибка: ' + err);
        if (err instanceof ymaps.geolocation.Error) {
            console.log('Ошибка геолокации: ' + err.message);
        }
    });

    function radian(deg) {
    return deg * (Math.PI / 180);
}

/*расчет расстояния между двумя координатами на сфере при помощи формулы Хаверсина с помощью широты и долготы
https://www.yandex.ru/search?text=%D1%84%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0+%D1%85%D0%B0%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%BD%D0%B0+%D0%BA%D0%B0%D0%BA+%D1%80%D0%B0%D1%81%D1%81%D1%87%D0%B8%D1%82%D1%8B%D0%B2%D0%B0%D0%B5%D1%82%D1%81%D1%8F&lr=47&clid=2800404
lat1 - широта 1
lat2 - широта 2
lon1 - долгота 1
lon2 - долгота 2
fsh - разница в широте
fdl - разница в долготе
 a - временная переменная, a = sin в квадрате (fsh/2) + cos lat1 * cos lat2 * sin в квадрате (fdl/2)
c - центральный угол c=атан2(корень а, корень 1-a)
 Дистанция = радиус Земли * с
где R-радиус Земли. */
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const fsh = radian(lat2 - lat1);
    const fdl = radian(lon2 - lon1);
    const a = Math.sin(fsh / 2) * Math.sin(fsh / 2) +
               Math.cos(radian(lat1)) * Math.cos(radian(lat2)) *
               Math.sin(fdl / 2) * Math.sin(fdl / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

try {
    const distanceCubaUSA = calculateDistance(lat1, lon1, lat2, lon2);
    const distanceMoscowTurkey = calculateDistance(lat3, lon3, lat4, lon4);


    myMap.geoObjects.add(new ymaps.Placemark([(lat1+lat2) / 2, (lon1 + lon2) / 2], {
        hintContent: `Расстояние: ${distanceCubaUSA} км`,
        balloonContentHeader: `Расстояние между Кубой и США: ${distanceCubaUSA} км`
    }, {
        preset: 'islands#circleDotIcon',
        iconColor: '#0F00FF'
    }));
    myMap.geoObjects.add(new ymaps.Placemark([(lat3+lat4) / 2, (lon3 + lon4) / 2], {
        hintContent: `Расстояние: ${distanceMoscowTurkey} км`,
        balloonContentHeader: `Расстояние между Кубой и США: ${distanceMoscowTurkey} км`
    }, {
        preset: 'islands#circleDotIcon',
        iconColor: '#FF0000'
    }));

    document.getElementById('distance1').innerHTML = ` ${distanceCubaUSA} км.`;
    document.getElementById('distance2').innerHTML = ` ${distanceMoscowTurkey} км.`;
} catch (error) {
    console.error(error.message);
}

}