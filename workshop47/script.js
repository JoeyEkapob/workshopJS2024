const canvas = document.getElementById('canvas')
 const context = canvas.getContext("2d") 
 context.moveTo(40,40)
 context.lineTo(240,40)
 context.lineTo(240,240)
 context.lineTo(240,240)
 
 context.lineWidth=3
 context.strokeStyle="red"
 context.stroke()
