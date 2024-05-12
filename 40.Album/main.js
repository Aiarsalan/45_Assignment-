"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist 1', 'Album Title 1');
console.log(album1);
var album2 = make_album('Artist 2', 'Album Title 2');
console.log(album2);
var album3 = make_album('Artist 3', 'Album Title 3', 5);
console.log(album3);
