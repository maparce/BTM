var mL = {
    clicked: 0,
    divName: '',
    state: '',
    numberOfStates:0,
    fontSize: 10,
    infoArray:[],
    make(divID,divList,infoArray) {
        if (divID == undefined) {divID = this.divName}
        if (infoArray == undefined) {infoArray = this.infoArray}
        var daDIV = document.getElementById(divID)
        daDIV.innerHTML = ''
        // from https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id','titleCarto')
        newDiv.innerHTML = 'Number of Black Towns Identified By State'
        newDiv.style.fontSize = this.fontSize*1.5 + 'px'
        daDIV.appendChild(newDiv)
        newDiv = document.createElement("div");
        newDiv.setAttribute('id','subTitleCarto')
        newDiv.innerHTML = 'Click a state for more information'//'United States, Canada, Mexico and Puerto Rico'
        newDiv.style.fontSize = .75*this.fontSize + 'px'
        daDIV.appendChild(newDiv)
        if (mL.clicked == 1){newDiv.style.color = 'black'
                            newDiv.style.opacity = .5   
                            }
        
                            ///
        ///List DIV actions
        daDIV = document.getElementById(divList)
        daDIV.innerHTML = ''

        newDiv = document.createElement("div");
        newDiv.setAttribute('id','stateCarto')
        newDiv.style.fontSize = this.fontSize*1.5 + 'px'
        if (mL.clicked == 1){newDiv.innerHTML =  this.state} //'State: ' +
        else{newDiv.innerHTML = '</br>'}
        
        daDIV.appendChild(newDiv)
        newDiv = document.createElement("div");
        newDiv.setAttribute('id','numberCarto')
        if (mL.clicked > 0){newDiv.innerHTML = 'Number of Towns: ' + this.numberOfStates}
        else{newDiv.innerHTML = '</br>'}
        newDiv.style.fontSize = this.fontSize*1.15 + 'px'
        daDIV.appendChild(newDiv)
        newDiv = document.createElement("div");
        newDiv.setAttribute('id','lineDivision')
        daDIV.appendChild(newDiv)
        infoArray.forEach((e,index)=>{
            console.log(e)
            newDiv = document.createElement("div");
            newDiv.setAttribute('class','infoItem item'+index)
            newDiv.innerHTML = e;
            daDIV.appendChild(newDiv)    
        })
    },


}