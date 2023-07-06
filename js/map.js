// La variable museos estáa definida en global scope, y por tanto podemos acceder a ella desde cualquier sitio
let map;
let markers=[];

const setListener = ()=>{
    document.querySelectorAll(".museo_individualNames").forEach((museoName, index)=>{
        museoName.addEventListener("click",()=>{
            google.maps.event.trigger(markers[index], "click")
        })
    })
}

const displayListaMuseos = ()=>{
    let museoHTML="";
    museos.forEach(museo=>{
        museoHTML += `
        <div class="box">
            <i class="fa-solid fa-user-astronaut"></i>
            <h4 class="museo_individualNames">${museo.name}</h4>
        </div>
        `
    })
    document.getElementById("nombres").innerHTML = museoHTML;
}

const createMarker = (coord, name, address, phone, website)=>{
    let html = `
        <div class="window">
            <h2>${name}</h2>
            <div class="address">
                <i class="fa-solid fa-rocket fa-lg"></i>
                <h3>${address}</h3>
            </div>
            <div class="phone">
                <i class="fa-solid fa-phone fa-lg"></i>
                <h3>${phone}</h3>
            </div>
            <div class="website">
                <i class="fa-solid fa-earth-americas fa-lg"></i>
                <a href=${website} target="_blank" rel="noopener noreferrer">Visita su sitio web</a>
            </div>
        </div>
    `
    const marker = new google.maps.Marker({
        position: coord,
        map: map,
        icon: "./images/lugares/icono50.png"
    })
    google.maps.event.addListener(marker, "click", ()=>{
        infoWindow.setContent(html);
        infoWindow.open(map,marker)
    })
    markers.push(marker)

}

const createLocationMarkers = ()=>{
    let bounds = new google.maps.LatLngBounds();
    museos.forEach(museo=>{
        let coord = new google.maps.LatLng(museo.lat, museo.lng);
        let name = museo.name;
        let address = museo.address;
        let phone = museo.phone;
        let website = museo.website;
        bounds.extend(coord)
        createMarker(coord, name, address, phone, website);
        map.fitBounds(bounds);
    })
}

function initMap(){
    let cdmx = {lat: 19.43283, lng: -99.13319}
    map = new google.maps.Map(document.getElementById("map"),{
        center: cdmx,
        zoom: 14,
        mapId: "2de3b41a4c63d60d",
    })
    createLocationMarkers();
    const marker = new google.maps.Marker({
        position: cdmx,
        map: map,
    })
    infoWindow = new google.maps.InfoWindow();
    displayListaMuseos();
    setListener();
}