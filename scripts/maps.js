 ymaps.ready(init);
 document.cookie = "bh=your_value; SameSite=None; Secure";

        function init() {
            var mapDiv = document.getElementById("map");
            var myMap = new ymaps.Map(mapDiv, {
                center: [56.326552, 44.024662],
                zoom: 14
            });

            myMap.geoObjects
            .add(new ymaps.Placemark([56.326552, 44.024662], {
                 hintContent: 'Корпус №1 НГТУ им. Р.Е. Алексеева',
                 balloonContent: 'Корпус №1 НГТУ им. Р.Е. Алексеева'
             }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184' 
        }));
}
