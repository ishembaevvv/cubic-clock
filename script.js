const date_time = (id) => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    document.getElementById('s').innerHTML = '' + s;
    document.getElementById('m').innerHTML = '' + m;
    document.getElementById('h').innerHTML = '' + h;

    setTimeout('date_time("'+"s"+'");','1000');

    return true;
}

window.onload = date_time('s');

