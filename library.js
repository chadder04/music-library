/*
 *  Music Library class definition
 */

let MusicLibrary = function (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
};

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

    Playlist.prototype.addTrack = function(track) {
        this.tracks.push(track);
    }

    Playlist.prototype.overallRating = function() {

    }

    Playlist.prototype.totalDuration = function() {

    }

/*
 *  Track class definition
 */

let Track = function(title, rating, length) {
    let track = {
        title: title,
        rating: rating,
        length: length
    }
    return track;
}



/*
 *  Testing / Sample Code
 */


let myLibrary = new MusicLibrary('Chads Playlist', 'Chadder');

let newPlaylist = new Playlist('2017 Favorite Tunes');
    newPlaylist.addTrack( new Track('Sunshine Lollipops', 5, 3.29) );
    newPlaylist.addTrack( new Track('Sunshine Lollipops', 2, 2.29) );
    newPlaylist.addTrack( new Track('Sunshine Lollipops', 6, 3.19) );
    newPlaylist.addTrack( new Track('Sunshine Lollipops', 9, 5.45) );

let anotherPlaylist = new Playlist('2018 Tunes to Jam');
    anotherPlaylist.addTrack( new Track('Track 1', 5, 2.45) );
    anotherPlaylist.addTrack( new Track('Track 2', 4, 1.45) );
    anotherPlaylist.addTrack( new Track('Track 3', 7, 5.45) );
    anotherPlaylist.addTrack( new Track('Track 4', 2, 4.15) );
    anotherPlaylist.getOverallRating(); // return overallRating
    anotherPlaylist.getTotalDuration(); // return totalDuration

myLibrary.addPlaylist( newPlaylist );
myLibrary.addPlaylist( anotherPlaylist );
