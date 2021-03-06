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
        song: "ENTER SANDMAN",

    }
]

let addSong = (array) => {
    let ol = document.createElement('ol');
    document.body.appendChild(ol)

    array.forEach(composition => {
        let info = `${composition.author} - "${composition.song}";`
        let textNode = document.createTextNode(info)
        let li = document.createElement('li')
        li.append(textNode)
        ol.append(li)
    })
}
addSong(playList)
