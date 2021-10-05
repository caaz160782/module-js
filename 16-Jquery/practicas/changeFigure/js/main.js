$("#inlineRadio3").click(()=>{
    $('canvas').clearCanvas()

    $('canvas').drawEllipse({
        fillStyle: '#c33',
        x: 150, y: 80,
        width: 100, height: 100
      });
})

$("#inlineRadio2").click(()=>{
    $('canvas').clearCanvas()
    $('canvas').drawRect({
        fillStyle: '#66ff66',
        x: 150, y: 80,
        width: 200,
        height: 100
      });
})

$("#inlineRadio1").click(()=>{
    $('canvas').clearCanvas()
    $('canvas').drawRect({
        fillStyle: '#9999FF',
        x: 150, y: 80,
        width: 100,
        height: 100
      });
})


