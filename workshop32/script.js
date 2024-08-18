function displayresult(){
    let codehtml = document.getElementById('html').value
    let codecss = document.getElementById('css').value
    let codejs = document.getElementById('js').value
    let result = document.getElementById('result')
    result.contentDocument.body.innerHTML=`${codehtml}<style>${codecss}</style>`
    result.contentWindow.eval(codejs)

}