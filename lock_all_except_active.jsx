/* Script to lock all layers execpt the current one (to prevent accidentally painting on wrong layer) 
    
    Author: Alex Lee
    Email: alex.hs.lee@gmail.com
 */

/*
  * activeDoc - the photoshop document in which to lock all layers except active.
  * activeLayer - the only layer which we will leave unlocked.
  */
function lockAllExceptActive(activeDoc, activeLayer)  {
    var len = activeDoc.layers.length;
    
    for (var i = 0; i < len; i++) {
        var layer = activeDoc.layers[i];
        // If layer is in fact a group, recursive call
        if (layer.typename == 'LayerSet') {
            lockAllExceptActive(layer, activeLayer);
         } else {
             if(layer.isBackgroundLayer) {
                 layer.isBackgroundLayer = false;
             } 
             layer.allLocked = true;
         }
     }
    
    // Unlock active layer
    activeLayer.allLocked = false;
 }

var activeLayer = app.activeDocument.activeLayer;
// alert("Locking all layers except " + activeLayer.name);
lockAllExceptActive(app.activeDocument, activeLayer);