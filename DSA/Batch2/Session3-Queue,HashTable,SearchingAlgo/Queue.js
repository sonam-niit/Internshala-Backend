class Queue {
    constructor(size = 10) {
        this.playlist = [];
        this.size = size;
    }
    enqueue(song) {
        if (this.playlist.length == this.size) {
            console.log(`Playlist is Full`);
            return;
        }
        this.playlist.push(song);
        console.log(`${song} Inserted`);
    }
    dequeue() {
        if (!this.isEmpty())
            return this.playlist.shift();
    }
    peek() {
        if (!this.isEmpty())
            return this.playlist[0];
    }
    isEmpty() {
        return this.playlist.length == 0;
    }
    getSize(){
        return this.size;
    }
}
function print(data){
    return data? `${data} is playing` : `Playlist is Empty`
}
function finished(data){
    return data? `${data} is Completed` : `Playlist is Empty`
}
const musicPlayer = new Queue(3);
musicPlayer.enqueue('Song1');
musicPlayer.enqueue('Song2');
musicPlayer.enqueue('Song3');
musicPlayer.enqueue('Song4');
for(i=0;i<musicPlayer.getSize();i++){
    console.log(print(musicPlayer.peek()));
    console.log(finished(musicPlayer.dequeue()));
}



