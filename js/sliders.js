(function(){
    const slidersPerros = [...document.querySelectorAll('.perros')];
    const slidersPrimates = [...document.querySelectorAll('.primates')];
    const slidersGatos = [...document.querySelectorAll('.gatos')];
    const slidersAranias = [...document.querySelectorAll('.aranias')];
    const slidersOtros = [...document.querySelectorAll('.otros')];

    console.log(slidersPerros)
    const nextPerros = document.querySelector('#next-perros');
    const beforePerros = document.querySelector('#before-perros');
    const nextPrimates = document.querySelector('#next-primates');
    const beforePrimates = document.querySelector('#before-primates');
    const nextGatos = document.querySelector('#next-gatos');
    const beforeGatos = document.querySelector('#before-gatos');
    const nextAranias = document.querySelector('#next-aranias');
    const beforeAranias = document.querySelector('#before-aranias');
    const nextOtros = document.querySelector('#next-otros');
    const beforeOtros = document.querySelector('#before-otros');
    let value;

    nextPerros.addEventListener('click', ()=>changePosition(1, slidersPerros, "perros"));
    beforePerros.addEventListener('click', ()=>changePosition(-1, slidersPerros, "perros"));
    nextPrimates.addEventListener('click', ()=>changePosition(1, slidersPrimates, "primates"));
    beforePrimates.addEventListener('click', ()=>changePosition(-1, slidersPrimates, "primates"));
    nextGatos.addEventListener('click', ()=>changePosition(1, slidersGatos, "gatos"));
    beforeGatos.addEventListener('click', ()=>changePosition(-1, slidersGatos, "gatos"));
    nextAranias.addEventListener('click', ()=>changePosition(1, slidersAranias, "aranias"));
    beforeAranias.addEventListener('click', ()=>changePosition(-1, slidersAranias, "aranias"));
    nextOtros.addEventListener('click', ()=>changePosition(1, slidersOtros, "otros"));
    beforeOtros.addEventListener('click', ()=>changePosition(-1, slidersOtros, "otros"));

    function changePosition(change, sliders, type){
        console.log("El tamaño del arreglo de imagenes es de: " + sliders.length)
        console.log("El slider show es: " + '.slider-body-show.' + type)

        const currentElement = Number(document.querySelector('.slider-body-show.' + type).dataset.id);

        console.log("El elemento actual es: " + sliders.length)

        value = currentElement;
        value += change;

        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        console.log("El nuevo valor es: " + value)

        sliders[currentElement-1].classList.toggle('slider-body-show');
        sliders[value-1].classList.toggle('slider-body-show');
    }
})()