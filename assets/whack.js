const container = document.getElementById("adscontainer")

function create() {
    const img = new Image();
    img.src = "assets/images/ads/" + Math.floor(Math.random() * 3 + 1).toString() + ".png"
    img.style = "width: 25vw; position: absolute; left: " + Math.floor(Math.random() * 100).toString() + "%; top: " + Math.floor(Math.random() * 100).toString() + "%;"
    container.appendChild(img)
}

function destroy() {
    if (container.children.length > 10) {
        container.removeChild(container.firstChild)
    }
}

for (let i = 0; i < 10; i++) {
    create()
}

setInterval(create, 600)
setInterval(destroy, 1)