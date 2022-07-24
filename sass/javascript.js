function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


function getMailtoUrl(to, subject, body) {
    var args = [];
    if (typeof subject !== 'undefined') {
        args.push('subject=' + encodeURIComponent(subject));
    }
    if (typeof body !== 'undefined') {
        args.push('body=' + encodeURIComponent(body))
    }

    var url = 'mailto:' + encodeURIComponent(to);
    if (args.length > 0) {
        url += '?' + args.join('&');
    }
    return url;
}



