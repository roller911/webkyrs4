 ymaps.ready(init);
 document.cookie = "bh=your_value; SameSite=None; Secure";

        function init() {
            var mapDiv = document.getElementById("map");
            var myMap = new ymaps.Map(mapDiv, {
                center: [56.32, 44],
                zoom: 7
            });

            // Добавьте маркер
            var latlong = [56.2863, 44.0836];
            var myPlacemark = new ymaps.Placemark(latlong, {
                hintContent: 'Корпус №6 НГТУ им. Р.Е. Алексеева',
                balloonContent: 'Корпус №6 НГТУ им. Р.Е. Алексеева'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'https://yandex.ru/mapsmarker/marker_00000.png',
                iconImageSize: [12, 12],
                iconImageOffset: [-3, -12]
            });

            myMap.geoObjects.add(myPlacemark);
        }
