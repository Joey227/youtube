var load = document.getElementById('loading');
var content = document.getElementById('content');

content.hidden = true;
function loading() {
    setTimeout(() => {
        load.innerHTML = 'Loading.';
        setTimeout(() => {
            load.innerHTML = 'Loading..';
            setTimeout(() => {
                load.innerHTML = 'Loading...';
                setInterval(() => {
                    load.innerHTML = 'Loading';
                    loading();
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}

setTimeout(showcontent, 4000);

function showcontent() {
    load.hidden = true;
    content.hidden = false;
}