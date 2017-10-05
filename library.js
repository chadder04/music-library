/*
 *  Music Library class definition
 */

let MusicLibrary = function (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
};

    // Add a playlist object to the MusicLibrary
    MusicLibrary.prototype.addPlaylist = function (playlist) {
        return this.playlists.push(playlist);
    };


/*
 *  Playlist class definition
 */

let Playlist = function (name) {
    this.name = name;
    this.tracks = [];
}

    Playlist.prototype.addTrack = function (track) {
        this.tracks.push(track);
    }

    Playlist.prototype.getOverallRating = function () {
        let totalRating = 0;

        this.tracks.forEach((track) => {
            totalRating += track.getTrackRating();
        });

        return totalRating / this.tracks.length;
    }

    Playlist.prototype.getTotalDuration = function () {
        let duration = 0;

        this.tracks.forEach((track) => {
            duration += track.getTrackLength();
        });

        return duration;
    }

/*
 *  Track class definition
 */

let Track = function (title, rating, length) {
    this.track = {
        title: title,
        rating: rating,
        length: length
    }
}

    Track.prototype.getTrackLength = function () {
        return this.track.length;
    }

    Track.prototype.getTrackRating = function () {
        return this.track.rating;
    }


/*
 *  Testing / Sample Code
 */


let myLibrary = new MusicLibrary('Chads Playlist', 'Chadder');

let newPlaylist = new Playlist('2017 Favorite Tunes');
    newPlaylist.addTrack(new Track('Sunshine Lollipops', 5, 243));
    newPlaylist.addTrack(new Track('Sunshine Lollipops', 2, 229));
    newPlaylist.addTrack(new Track('Sunshine Lollipops', 1, 319));
    newPlaylist.addTrack(new Track('Sunshine Lollipops', 3, 545));

let anotherPlaylist = new Playlist('2018 Tunes to Jam');
    anotherPlaylist.addTrack(new Track('Track 1', 5, 245));
    anotherPlaylist.addTrack(new Track('Track 2', 4, 145));
    anotherPlaylist.addTrack(new Track('Track 3', 1, 545));
    anotherPlaylist.addTrack(new Track('Track 4', 1, 415));
    anotherPlaylist.getOverallRating(); // return overallRating
    anotherPlaylist.getTotalDuration(); // return totalDuration

myLibrary.addPlaylist(newPlaylist);
myLibrary.addPlaylist(anotherPlaylist);