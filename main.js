// Create a map with a default view centered at a specific location and zoom level
//District Layer

//Phase-2 Clusters
var Cluster = new ol.layer.Image({
    'title': 'Cluster',
    source: new ol.source.ImageWMS({
        url: 'http://localhost:9090/geoserver/wms', // Replace with your GeoServer URL
        params: {
            'LAYERS': 'pocra_2:Cluster_II', // Replace with your layer name
            'TILED': true, // Set to true if your layer supports WMS Tiling
        },
        serverType: 'geoserver',
    })
});

//District Layer
var District = new ol.layer.Image({
    title: "District Boundary",
    baseLayer: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:9090/geoserver/wms', // Replace with your GeoServer URL
        params: {
            'LAYERS': 'pocra_2:district_boundary', // Replace with your layer name
            'TILED': true, // Set to true if your layer supports WMS Tiling
        },
        serverType: 'geoserver',
    })
});

//Taluka Layer
var Taluka = new ol.layer.Image({
    'title': 'Taluka Boundary',
    source: new ol.source.ImageWMS({
        url: 'http://localhost:9090/geoserver/wms', // Replace with your GeoServer URL
        params: {
            'LAYERS': 'pocra_2:taluka_boundary', // Replace with your layer name
            'TILED': true, // Set to true if your layer supports WMS Tiling
        },
        serverType: 'geoserver',
    })
});

//Phase-2 Layer
var Phase_2 = new ol.layer.Image({
    'title': 'Phase_II',
    source: new ol.source.ImageWMS({
        url: 'http://localhost:9090/geoserver/wms', // Replace with your GeoServer URL
        params: {
            'LAYERS': 'pocra_2:Phase_II_Villages', // Replace with your layer name
            'TILED': true, // Set to true if your layer supports WMS Tiling
            'CQL_FILTER': "phase_ii = 'Y'"
        },
        serverType: 'geoserver',
    })
});
//Phase-1 Layer
var Phase_1 = new ol.layer.Image({
    'title': 'Phase_I',
    source: new ol.source.ImageWMS({
        url: 'http://localhost:9090/geoserver/wms', // Replace with your GeoServer URL
        params: {
            'LAYERS': 'pocra_2:Phase_I_Villages5136', // Replace with your layer name
            'TILED': true, // Set to true if your layer supports WMS Tiling
        },
        serverType: 'geoserver',
    })
})
// A group layer for base layers
var baseLayers = new ol.layer.Group({
    title: 'Administrative Layers',
    openInLayerSwitcher: true,
    layers: [
        new ol.layer.Tile({
            title: "Base Map",
            source: new ol.source.OSM()
        }),
        //Cluster Layer
        Cluster,
        //Phase-1 Layer
        Phase_1,
        //Phase-2 Layer
        Phase_2,
        //Taluka Layer
        Taluka,
        //District Layer
        District

    ]
});

// Create a map with the WMS layer
var map = new ol.Map({
    target: 'map',
    layers: [baseLayers,

    ],
    view: new ol.View({
        center: [8578611.594707653, 2141043.4504092606],//ol.proj.fromLonLat([0, 0]), // Center the map at (0, 0)
        zoom: 7 // Initial zoom level
    })
    
});

// Add control inside the map
var ctrl = new ol.control.LayerSwitcher({
    // collapsed: false,
    // mouseover: true
});
map.addControl(ctrl);

// Define a new legend
var legend = new ol.legend.Legend({
    title: 'Legend',
})
var legendCtrl = new ol.control.Legend({
    legend: legend,
    collapsed: false
});
map.addControl(legendCtrl);


// New legend associated with a District layer
var District_layerLegend = new ol.legend.Legend({ layer: District });
District_layerLegend.addItem(new ol.legend.Image({
    // title: 'District',
    src: 'http://localhost:9090/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=pocra_2%3Adistrict_boundary&WIDTH=50&HEIGHT=20'
}));
legend.addItem(District_layerLegend)

// New legend associated with a Taluka layer
var Taluka_layerLegend = new ol.legend.Legend({ layer: Taluka });
Taluka_layerLegend.addItem(new ol.legend.Image({
    // title: 'Taluka',
    src: 'http://localhost:9090/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=pocra_2%3Ataluka_boundary&WIDTH=50&HEIGHT=20'
}));
legend.addItem(Taluka_layerLegend)

// New legend associated with a Phase_1 layer
var Phase_1_layerLegend = new ol.legend.Legend({ layer: Phase_1});
Phase_1_layerLegend.addItem(new ol.legend.Image({
    // title: 'Phase_I',
    src: 'http://localhost:9090/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=pocra_2%3APhase_I_Villages5136&WIDTH=50&HEIGHT=20'
}));
legend.addItem(Phase_1_layerLegend)

// New legend associated with a Phase_II layer
var Phase_2_layerLegend = new ol.legend.Legend({ layer: Phase_2});
Phase_2_layerLegend.addItem(new ol.legend.Image({
    // title: 'Phase_II',
    src: 'http://localhost:9090/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=pocra_2%3APhase_II_Villages&WIDTH=50&HEIGHT=20'
}));
legend.addItem(Phase_2_layerLegend)

// New legend associated with a Clusters layer
var Clusters_layerLegend = new ol.legend.Legend({ layer: Cluster});
Clusters_layerLegend.addItem(new ol.legend.Image({
    title: 'Clusters',
    src: 'http://localhost:9090/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=pocra_2%3ACluster_II&WIDTH=50&HEIGHT=20'
}));
legend.addItem(Clusters_layerLegend)


// Define a new legend
var legendRight = new ol.legend.Legend({
    title: 'Right Legend',
    style: getFeatureStyle
  });
  var legendCtrlRight = new ol.control.Legend({ 
    legend: legendRight,
    className: 'ol-legend ol-legend-right',
    collapsed: false
  });
  map.addControl(legendCtrlRight);
  legendRight.addItem(Clusters_layerLegend);
