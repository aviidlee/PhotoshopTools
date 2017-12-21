var doc  = app.activeDocument;

function unlockAllLayers(doc) {
    var len = doc.layers.length;
    for(var i = 0; i < len; i++) {
        var layer = doc.layers[i];
        if(layer.typename == 'LayerSet') {
            unlockAllLayers(layer);
        } else {
            layer.allLocked = false;
        }
    }
}

unlockAllLayers (doc);
