var config = {
    style: 'mapbox://styles/ricardojct/clgcp8i7r000601o8wu1jpgux',
    accessToken: 'pk.eyJ1IjoicmljYXJkb2pjdCIsImEiOiJjbGN6MXFuNHgwZWJkM3NvMWVwMWE0eXdjIn0.ZuFyy27xg6LXKqzkzeTMEw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'La biodiversitat amenaçada del Baix Penedès',
    subtitle: 'Ruta divulgativa a través de la Riera de la Bisbal',
    byline: 'GEVEN',
    footer: 'Source: Geven',
    chapters: [
        {
            id: 'Conca',
            alignment: 'left',
            hidden: false,
            title: "La Riera de la Bisbal: L'arbre de la comarca",
            image: 'Arbre_comarca.jpg',
            description: 'La conca hidrogràfica de la Riera de la Bisbal abarca pràcticament tot el Baix Penedès, funcionant com el corredor ecològic principal, estructurant i connectant diferents parts de la comarca. A partir d’una idea i disseny del Pau Batlle, des del GEVEN es va crear la imatge del “Baix Penedès com un arbre”: la capçada  representa la Serra del Montmell, d’on neixen els diferents torrents i rieres (les branques  de l’arbre), que travessen la plana agrícola, a les vores de les quals se situen els nuclis  històrics dels diferents municipis. Aquests cursos fluvials van ajuntant-se fins que,  finalment, passat el Vendrell, la Riera de la Bisbal (el tronc), després de travessar el pla  de mar, desemboca al Mediterrani justament a les Madrigueres, les arrels de  l’arbre. Aquesta imatge gràfica ens permet entreveure com tot està connectat i tenir una  visió de conjunt de la comarca, com a conca hidrogràfica.',
            location: {
                center: [1.51860, 41.26461],
                zoom: 10.84,
                pitch: 48.00,
                bearing: -26.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'LesMadrigueres',
            alignment: 'right',
            hidden: false,
            title: 'Les Madrigueres',
            image: 'les_madrigueres_dia.jpeg',
            description: "La zona humida de les Madrigueres és un espai emblemàtic i un simbol de la lluita ciutadana per la perservació del medi ambient. És l'últim tram de litoral que queda sense urbanitzar a la comarca i va ser salvat de la construcció, gràcies a una campanya impulsada pel Geven als anys 90. La zona alberga una gran biodiversitat i en els últims anys s'ha impulsat la recuperació dels seus hàbitats.",
            location: {
                center: [1.55076, 41.18601],
                zoom: 15.71,
                pitch: 48.50,
                bearing: -23.20
        },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Comparador',
            alignment: 'center',
            hidden: false,
            title: "Les millores d'hàbitat dels últims anys",
            image: '',
            description: 'En aquest comparador podeu observar la renaturalització duta a terme en els últims anys (2006-2022). Desaparèixen usos com els estacionaments i apàreixen llacunes i dunes.<br><iframe width="700" height="315" src="https://rjct-maps.github.io/geoweb/compare_maps.html" title="Mapa comparador" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            location: {
                center: [1.55076, 41.18601],
                zoom: 15.71,
                pitch: 48.50,
                bearing: -23.20
        },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Corriol',
            alignment: 'left',
            hidden: false,
            title: 'El corriol camanegre',
            image: '',
            description: 'Una de les espècies més interessants que trobem a la zona és el corriol camanegre, un au límicola que utilitza els sorrals de les platges per a nidificar. Degut a que gran part de les seves zones de cria es troben ocupades per activitats humanes, la seva població ha disminuït de manera preocupant en els últims anys i actualment és una espècie inclòsa al catàleg de fauna amenaçada de Catalunya. <br><iframe width="415" height="315" src="https://www.youtube.com/embed/1-XHhLc2kUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            location: {

                center: [1.54935, 41.18442],
                zoom: 17.63,
                pitch: 55.50,
                bearing: 75.37

        },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Oliba',
            alignment: 'left',
            hidden: false,
            title: 'El pla de mar: un paisatge que desapareix',
            image: 'oliba.jpg',
            description: "Entre les Madrigueres i Sant Vicenç de Calders trobem el pla de mar, un espai agroforestal amb una activitat agrícola en clara recessió. Tot i el tancament progressiu que està patint la zona en alguns conreus abandonats, es tracta d'un corredor ecològic de gran importància per espècies vinculades als espais oberts. L'òliba és un cas clar d'espècie amenaçada i que necessita, de manera evident, que recuperem aquesta agricultura perduda.",
            location: {

                center: [1.54161, 41.20443],
                zoom: 14,
                pitch: 59.50,
                bearing: 83.39

        },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'cargola',
            alignment: 'right',
            hidden: false,
            title: 'La cargola sanguinia',
            image: 'erodium.jpg',
            description: "En alguns indrets del pla de mar trobem la cargola sanguinia, una planta de la familia dels geranis i que es troba catalogada com en perill d'extinció, dins del catàleg de flora amenaçada de Catalunya.",
            location: {
                center: [1.54312, 41.20312],
                zoom: 17.58,
                pitch: 59.00,
                bearing: 95.39

        },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'cuabarrada',
            alignment: 'left',
            hidden: false,
            title: "L'àguila cuabarrada",
            image: 'cuabarrada.jpg',
            description: "Al llarg de la comarca trobem diverses zones agrícoles amb un alt valor paisatgístic, ambiental i econòmic. Un cas clar, són els espais oberts que envolten la Bisbal del Penedès i que encara són zones productives i àrea de caçera de l'àguila cuabarrada, un altra rapinyaire catalogada com en perill d'extinció dins del catàleg de fauna amenaçada.",
            location: {
                center: [1.49591, 41.27443],
                zoom: 13.77,
                pitch: 60.00,
                bearing: 117.79

        },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'basses',
            alignment: 'right',
            hidden: false,
            title: "Les basses agrícoles",
            image: 'totil.jpeg',
            description: "Les basses agrícoles com la Bassa Gran de Llobets, són punts de màxima biodiversitat i cal preservar-los de la seva degradació. Els amfibis, que són el grup d'animals més amenaçats del món, molts cops depenen del bon estat de conservació d'aquests punts d'aigua. El tòtil és un bon exemple d'amfibi que te prefèrencia per criar en aquests indrets.",
            location: {
                center: [1.55508, 41.30277],
zoom: 18,
pitch: 60.00,
bearing: 79.16

        },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
