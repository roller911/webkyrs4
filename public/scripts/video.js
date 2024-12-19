 const videos = [
        { id: 'players1', src: '/source/Fog_a_war_2003.mp4', title: '1963 — советский фильм «Каин XVIII» является аллюзией на Карибский кризис;' },
        { id: 'players2', src: '/source/Fog_a_war_2003.mp4', title: '1964 — фильм «Доктор Стрейнджлав, или Как я перестал бояться и полюбил бомбу»;' },
        { id: 'players3', src: '/source/Fog_a_war_2003.mp4', title: '1964 — фильм «Система безопасности» (англ. Fail-Safe);' },
        { id: 'players4', src: '/source/Fog_a_war_2003.mp4', title: '1969 — фильм «Топаз» Альфреда Хичкока;' },
        { id: 'players5', src: '/source/Fog_a_war_2003.mp4', title: '1991 — сериал «Квантовый скачок» (англ. Quantum Leap), серия «Атомная семейка» (англ. Nuclear Family)' },
        { id: 'players6', src: '/source/Fog_a_war_2003.mp4', title: '1999 — фильм «Взрыв из прошлого» (англ. Blast from the Past);' },
        { id: 'players7', src: '/source/Fog_a_war_2003.mp4', title: '2000 — фильм «Тринадцать дней» (англ. Thirteen Days);' },
        { id: 'players8', src: '/source/Fog_a_war_2003.mp4', title: '2003 — «Туман войны»;' },							
        { id: 'players9', src: '/source/Fog_a_war_2003.mp4', title: '2009 — фильм «Хранители» (англ. Watchmen);' },	
        { id: 'players10', src: '/source/Fog_a_war_2003.mp4', title: '2009 — пародия на трилогию «Пираты Карибского моря» «Карибский кризис»;;' },	
        { id: 'players11', src: '/source/Fog_a_war_2003.mp4', title: '2011 — мини-сериал «Династия Кеннеди» (англ. The Kennedys);' },	
        { id: 'players12', src: '/source/Fog_a_war_2003.mp4', title: '2011 — фильм «Люди Икс: Первый Класс» (англ. X-Men: First Class);' },	
    	{ id: 'players13', src: '/source/Fog_a_war_2003.mp4', title: '2017 — сериал «Оптимисты»;' },
    	{ id: 'players14', src: '/source/Fog_a_war_2003.mp4', title: '2020 — фильм «Игры шпионов» (англ. The Courier).' },
    ];
        
    function createVideoContainer(video) {
        var listGroupItem = document.createElement('a');
        listGroupItem.className = 'list-group-item';
        listGroupItem.setAttribute('data-bs-toggle', 'collapse');
        listGroupItem.setAttribute('data-bs-target', `#collapsvideo${video.id}`);
        listGroupItem.textContent = video.title;

        var collapseDiv = document.createElement('div');
        collapseDiv.className = 'collapse';
        collapseDiv.id = `collapsvideo${video.id}`;

        var cardDiv = document.createElement('div');
        cardDiv.className = 'card card-body';

       var videoElement = document.createElement('video');
        videoElement.id = video.id;
        videoElement.controls = false;
        videoElement.src = video.src; 
        videoElement.type = 'video/mp4';
        videoElement.setAttribute('data-ckin', 'default');
        videoElement.setAttribute('data-overlay', '2');
        videoElement.setAttribute('data-color', '#0dcaf0');

        var controls = document.createElement('div');
        controls.className = 'video-controls';

        var playButton = document.createElement('button');
        playButton.onclick = function() { playVideo(video.id); };
        playButton.textContent = 'Play';
        playButton.className = "btn btn-outline-info";

        var pauseButton = document.createElement('button');
        pauseButton.onclick = function() { pauseVideo(video.id); };
        pauseButton.textContent = 'Pause';
        pauseButton.className = "btn btn-outline-info";

        var stopButton = document.createElement('button');
        stopButton.onclick = function() { stopVideo(video.id); };
        stopButton.textContent = 'Stop';
        stopButton.className = "btn btn-outline-info";

        controls.appendChild(playButton);
        controls.appendChild(pauseButton);
        controls.appendChild(stopButton);

        cardDiv.appendChild(videoElement);
        cardDiv.appendChild(controls);

        collapseDiv.appendChild(cardDiv);

        return { listGroupItem, collapseDiv };
       
    }

    function playVideo(id) {
        var video = document.getElementById(id);
        video.play();
    }

    function pauseVideo(id) {
        var video = document.getElementById(id);
        video.pause();
    }

    function stopVideo(id) {
        var video = document.getElementById(id);
        video.pause();
        video.currentTime = 0;
    }

    const listGroup = document.querySelector('#list-video');
    videos.forEach(video => {
        var { listGroupItem, collapseDiv } = createVideoContainer(video);
        listGroup.appendChild(listGroupItem);
        listGroup.appendChild(collapseDiv);
    });