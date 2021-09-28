const image_array = ['test1.jpg', 'test2.jpg', 'test3.jpg', 'test4.jpg', 'test5.jpg']
let length_array = image_array.length
let i = 0

let set = setInterval(slider, 3000)

function slider(){
    i++
    i=i%length_array
    document.getElementById('images').src=`images/testimages/${image_array[i]}`
}

function move_left(){
    i--
    if (i<0){
        i=length_array-1
    }
    document.getElementById('images').src=`images/testimages/${image_array[i]}`

}

function move_right(){
    i++
    i=i%length_array
    document.getElementById('images').src=`images/testimages/${image_array[i]}`
}

function stop(){
    clearInterval(set)

}
function run_slide(){
    set=setInterval(slider, 3000)
}