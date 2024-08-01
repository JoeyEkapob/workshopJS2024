const dragitem = document.querySelectorAll('.drag-item')
const draglist = document.querySelectorAll('.drag-item-list')

let selectitem ;

dragitem.forEach((item)=>{
    item.addEventListener('dragstart',ondragstart)
})

draglist.forEach((list)=>{
    list,addEventListener('dragover',ondragover)
    list,addEventListener('dragenter',ondragenter)
    list.addEventListener('drop',ondrop)

})

function ondragenter(e){
    e.preventDefault();

}
function ondragover(e){
    e.preventDefault();
}



function ondrop(){
    this.append(selectitem)
    selectitem=null;
    console.log("drop")
}
function ondragstart(){
    selectitem=this
    console.log(selectitem)


}