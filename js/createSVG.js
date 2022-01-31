/// create an object with methods for making the cartogram

var cartogram = {

    xy: [4,3], //dimensions of the cartogram 
    fontSize: 10,//
    data:{
        x: [0,1,2,3], // an array with x coordinates
        y: [0,1,2], // an arrry with y coordinates
        state: [], // an array with the names of the states 
        value: [], // an array with a values to determine for example size of svg
        },
    border:30,
    spacing:10, // pixel size of spacing
    size:70, // pixel size of width, add other measurements for other shapes
    makeSVG: function(DivID) {
        // this will make an empty SVG where we will draw svgs inside
        var xmlns = "http://www.w3.org/2000/svg";
        var daDiv = document.getElementById(DivID) 
        var boxWidth = daDiv.getBoundingClientRect().width;
        var boxHeight = daDiv.getBoundingClientRect().height;
        var svgElem = document.createElementNS(xmlns, "svg");
        svgElem.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
        svgElem.setAttributeNS(null, "width", "100%");
        svgElem.setAttributeNS(null, "height", "100%");
        svgElem.setAttributeNS(null, "id", 'svg_'+DivID);
        svgElem.setAttributeNS(null, "preserveAspectRatio","none")
        svgElem.setAttributeNS(null, "style", "position: absolute");
        document.getElementById(DivID).appendChild(svgElem)
    },

    makeRectangle: function(DivID, textProportion) {
            cartogram.makeSVG(DivID);
            var divSVG = document.getElementById('svg_'+DivID)
            var boxWidth = divSVG.getBoundingClientRect().width
            var boxHeight = divSVG.getBoundingClientRect().height
    
            // if (square==true) {
            //     if (boxWidth < boxHeight) {boxHeight = boxWidth} 
            //     else {boxWidth = boxHeight}
            // }
            cartogram.textProportion = textProportion;
            cartogram.fontSize = cartogram.size*textProportion;
            var xmlns = "http://www.w3.org/2000/svg";
            var stepW = Math.floor((boxWidth-(2*cartogram.border)-cartogram.size)/(cartogram.xy[0]-1))
            var stepH = Math.floor((boxHeight-(2*cartogram.border)-cartogram.size)/(cartogram.xy[1]-1))
            for (i = 0; i < cartogram.xy[0]; i++){ //numTicks -1  you want to eliminate the remainder 
                for(j = 0; j <cartogram.xy[1]; j++){
                    if (i== 0) {var xRect = cartogram.border} else {
                        var xRect = i*stepW + cartogram.border ;
                    }
                    if (j== 0) {var yRect = cartogram.border} else {
                        var yRect = j*stepH + cartogram.border;
                    }
                    var gElem = document.createElementNS(xmlns, 'g');
                    gElem.setAttributeNS(null,'id', i+"_"+j+"_cart"); 
                    var rectElem = document.createElementNS(xmlns, 'rect');
                    rectElem.setAttributeNS(null,'x', xRect); 
                    rectElem.setAttributeNS(null,'y', yRect);
                    rectElem.setAttributeNS(null,'width', cartogram.size);
                    rectElem.setAttributeNS(null,'height', cartogram.size);
                    gElem.appendChild(rectElem)

                    ///text
                    var textElem = document.createElementNS(xmlns, 'text');
                    textElem.setAttributeNS(null,'x', xRect); 
                    textElem.setAttributeNS(null,'y', yRect);
                    textElem.setAttributeNS(null,'font-size', cartogram.fontSize+'px');
                    textElem.setAttributeNS(null,'fill', 'yellow');
                    textElem.innerHTML = i + "_" +j
                    gElem.appendChild(textElem)
                    divSVG.appendChild(gElem)

                }// end of j loop which is the y coordinate
            
                }// end of i loop which is the x coordinate 
                    cartogram.centerText()
    },

    centerText: function(){
        var textE = document.getElementsByTagName('text');
        var rectE = document.getElementsByTagName('rect');
        for (i = 0; i < textE.length; i++) {   
            // fix if font is bigger than rect
            var newX = rectE[i].getBBox().x
                        + ((rectE[i].getBBox().width - textE[i].getBBox().width)/2) + (textE[i].getBoundingClientRect().width - textE[i].getBBox().width)/2
            var newY = rectE[i].getBBox().y
                        + ((rectE[i].getBBox().height - textE[i].getBBox().height)/2) 
                        + cartogram.fontSize*.80;
                        // + textE[i].getBBox().height/4
            // var newX = rectE[i].getBoundingClientRect().x 
            //     + ((rectE[i].getBoundingClientRect().width 
            //     - textE[i].getBoundingClientRect().width)/2) 
            //     - (textE[i].getBoundingClientRect().width * .25)//cartogram.textProportion) // (rectE[i].getBoundingClientRect().width/textE[i].getBoundingClientRect().width))
            
            textE[i].setAttributeNS(null,'x', newX);
            textE[i].setAttributeNS(null,'y', newY);
        }

    }

    }


