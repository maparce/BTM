var mL = {
    clicked: 0,
    divName: '',
    state: '',
    numberOfStates:0,
    fontSize: 10,
    infoArray:[],
    make(divID,infoArray) {
        if (divID == undefined) {divID = this.divName}
        if (infoArray == undefined) {infoArray = this.infoArray}
        var daDIV = document.getElementById(divID)
        daDIV.innerHTML = ''
        // from https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id','titleCarto')
        newDiv.innerHTML = 'Black Towns'
        newDiv.style.fontSize = this.fontSize*2.5 + 'px'
        daDIV.appendChild(newDiv)
        newDiv = document.createElement("div");
        newDiv.setAttribute('id','subTitleCarto')
        newDiv.innerHTML = 'United States, Canada, Mexico and Puerto Rico'
        newDiv.style.fontSize = .75*this.fontSize + 'px'
        daDIV.appendChild(newDiv)


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
        newDiv.style.fontSize = this.fontSize*1.5 + 'px'
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