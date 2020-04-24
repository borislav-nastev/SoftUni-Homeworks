function songs(songs) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = Number(time);
        }
    }

    songs.shift();
    let givenTypeList = songs.pop();
    let resultArray = [];

    for (let song of songs) {
        let [type, name, time] = song.split("_");
        let currentSong = new Song(type, name, time);

        if(currentSong.typeList === givenTypeList || givenTypeList === "all") {
            resultArray.push(currentSong.name);
        }
    }

    for(let name of resultArray) {
        console.log(name);
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);