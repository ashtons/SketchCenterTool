import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/
//const sketch = require('sketch')

export default function() {
 	
	var doc = sketch.getSelectedDocument()
	var layers = doc.selectedLayers
	if (layers.length > 0) {
	    var layer = layers.layers[0]
	    var parent = layer.parent
	    var w = layer.frame.width
	    var h = layer.frame.height
	    var pw = parent.frame.width
	    var ph = parent.frame.height
	    var x = pw/2.0 - w/2.0
	    var y = ph/2.0 - h/2.0
	    layer.frame.x = x
	    layer.frame.y = y
	} else {		
  	  sketch.UI.message("Please select a layer or group to center")
	}
}
