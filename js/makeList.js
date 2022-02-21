var mL = {
    divName: '',
    state: '',
    numberOfStates:0,
    infoArray:[],
    make(divID,infoArray) {
        if (divID == undefined) {divID = this.divName}
        if (infoArray == undefined) {infoArray = this.infoArray}
        var daDIV = document.getElementById(divID)
        daDIV.innerHTML = ''
        // from https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id','titleCarto')
        newDiv.innerHTML = 'Black Town Cartogram </br></br>'
        daDIV.appendChild(newDiv)
        newDiv = document.createElement("div");
        newDiv.setAttribute('id','stateCarto')
        newDiv.innerHTML =  this.state //'State: ' +
        daDIV.appendChild(newDiv)
        newDiv = document.createElement("div");
        newDiv.setAttribute('id','numberCarto')
        newDiv.innerHTML = 'Number of Towns: ' + this.numberOfStates
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