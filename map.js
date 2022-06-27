mapboxgl.accessToken = 'pk.eyJ1IjoibmsyOTcwIiwiYSI6ImNreDR4ZTZ4dDBhbngydnF1dzBxNzJvMDkifQ.GXAfMWbXTZ7FOAj3rI2oIg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nk2970/cl4tb1dar001415p9y47b8j7v',
    zoom: 6.8,
    maxZoom:12,
    minZoom:6,
    center: [-157.388, 20.599],
    projection: {
      name: 'naturalEarth',
      center: [0, 30],
      parallels: [30, 30]
      }
    
});

// map1
map.on("load", function () {
    map.addLayer(
      {
        id: "BP",
        type: "fill",
    source: {
      type: "geojson",
      data: "data/hawaiiData.geojson",
    },
    paint: {
      "fill-color": [
        "step",
        ["get", "Mean BP percentile within nation"],
        "#ffffff",
        0.6, "rgb(242, 231, 218)",
        0.7,  "rgb(244, 132, 101)",
        0.8, "RGB(244, 132, 101)",
        0.85,"rgb(223, 84, 91)",
        0.9, "rgb(212, 61, 91)",
      
      ],
        "fill-outline-color": "#ffffff",
        "fill-opacity": 0.7
  
     
    },

      },
      // },

      "admin-0-boundary" 
    // Here's where we tell Mapbox where to slot this new layer
    ); 
    

  });



 // Create the popup
 map.on('click', 'BP', function (e) {
  var countyName = e.features[0].properties.NAME_y;
  var BPper = Math.round(e.features[0].properties["Mean BP percentile within nation"]*100);
 

  new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h2>'+countyName+'</h2>'
          +'<h4>' +BPper+'%</h4>'
          )
      .addTo(map);
});


// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
map.on("mouseenter", "voting", function () {
  map.getCanvas().style.cursor = "pointer";
});
// Change it back to a pointer when it leaves.
map.on("mouseleave", "voting", function () {
  map.getCanvas().style.cursor = "";
});


// // // define layer names
// const layers = [
//   '1893-',
//   '1914-',
//   '1946-',
//   '1975-',
//   '2000-',
//   'Data not available'
//   ];
//   const colors = [
//     "#3E027E",
//     "#7904F6",
//     "#8367C7",
//     "#B3E9C7",
//     "#ffe45e",
//     "#edede9"
    
//   ];



//   // create legend
//   const legend = document.getElementById('legend');
   
//   layers.forEach((layer, i) => {
//   const color = colors[i];
//   const item = document.createElement('div');
//   const key = document.createElement('span');
//   key.className = 'legend-key';
//   key.style.backgroundColor = color;
   
//   const value = document.createElement('span');
//   value.innerHTML = `${layer}`;
//   item.appendChild(key);
//   item.appendChild(value);
//   legend.appendChild(item);
//   });


 