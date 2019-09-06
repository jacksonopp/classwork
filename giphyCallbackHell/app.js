function search(item) {
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=EBEbmryRHsMs8j6Vmrpesd0DPbM5wOyi&q=" + item + "&limit=25&offset=0&rating=G&lang=en"
    return queryURL;
}

fetch(search("hello")).then(function (response1) {
    return response1.json();
}).then(function (responseJson1) {
    fetch(search("hello")).then(function (response2) {
        return response2.json();
    }).then(function (responseJson2) {
        fetch(search("hello")).then(function (response3) {
            return response3.json();
        }).then(function (responseJson3) {
            fetch(search("hello")).then(function (response4) {
                return response4.json();
            }).then(function (responseJson4) {
                fetch(search("hello")).then(function (response5) {
                    return response5.json();
                }).then(function (responseJson5) {
                    fetch(search("hello")).then(function (response6) {
                        return response6.json();
                    }).then(function (responseJson6) {
                        console.log(responseJson1);
                        console.log(responseJson2);
                        console.log(responseJson3);
                        console.log(responseJson4);
                        console.log(responseJson5);
                        console.log(responseJson6);
                    });
                });
            });
        });
    });
});
// an idea?
function getGifs(url, cb) {
    fetch(url).then(function (response) {
        return response.json()
    }).then(function (responseJson) {
        cb(responseJson);
    })
}


getGifs(search("goodbye"), function (responseJson1) {
    getGifs(search("goodbye"), function (responseJson2) {
        getGifs(search("goodbye"), function (responseJson3) {
            getGifs(search("goodbye"), function (responseJson4) {
                getGifs(search("goodbye"), function (responseJson5) {
                    getGifs(search("goodbye"), function (responseJson6) {
                        console.log(responseJson1);
                        console.log(responseJson2);
                        console.log(responseJson3);
                        console.log(responseJson4);
                        console.log(responseJson5);
                        console.log(responseJson6);
                    })
                })
            })
        })
    })
})

//arrows, idea 2
function a() {
    return "a";
}

const b = function () {
    return "b";
}


const c = () => {
    return "c";
}

const d = () => "d";

a();
b();
c();
d();

const getGifs2 = (url, cb) => {
    fetch(url).then((response) => {
        return response.json();
    }).then((responseJson) => {
        cb(responseJson);
    })
}


getGifs2(search("okay"), (responseJson1) => {
    getGifs2(search("okay"), (responseJson2) => {
        getGifs2(search("okay"), (responseJson3) => {
            getGifs2(search("okay"), (responseJson4) => {
                getGifs2(search("okay"), (responseJson5) => {
                    getGifs2(search("okay"), (responseJson6) => {
                        console.log(responseJson1);
                        console.log(responseJson2);
                        console.log(responseJson3);
                        console.log(responseJson4);
                        console.log(responseJson5);
                        console.log(responseJson6);
                    })
                })
            })
        })
    })
})

// promises idea 3 - great if the fetches are not dependant on each other

const getGifs3 = (url) => {
    return fetch(url).then((response) => {
        return response.json();
    })
}

const promise1 = getGifs3(search("what"));
const promise2 = getGifs3(search("what"));
const promise3 = getGifs3(search("what"));
const promise4 = getGifs3(search("what"));
const promise5 = getGifs3(search("what"));
const promise6 = getGifs3(search("what"));


Promise.all([
    promise1,
    promise2,
    promise3,
    promise4,
    promise5,
    promise6
]).then((values) => {
    console.log(values);
})

// async await idea 4

const getGifs4 = (url) => {
    return fetch(url).then((response) => {
        return response.json();
    })
}

async function allTheGifs() {
    const responseJson1 = await getGifs4(search("cat"));
    const responseJson2 = await getGifs4(search("cat"));
    const responseJson3 = await getGifs4(search("cat"));
    const responseJson4 = await getGifs4(search("cat"));
    const responseJson5 = await getGifs4(search("cat"));
    const responseJson6 = await getGifs4(search("cat"));

    console.log(responseJson1);
    console.log(responseJson2);
    console.log(responseJson3);
    console.log(responseJson4);
    console.log(responseJson5);
    console.log(responseJson6);

}

allTheGifs();