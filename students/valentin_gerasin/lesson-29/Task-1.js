//Создать страницу, которая выводит нумерованный список песен:
var playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

function numList(arr) {
    let list = document.createElement('ol')
    document.body.appendChild(list)

    arr.forEach(
        function (song) {
            let track = `${song.author} - ${song.song}`;
            let text = document.createTextNode(track)
            let li = document.createElement('li')
            li.append(text)
            list.append(li)
        }

    )
}
numList(playList)
