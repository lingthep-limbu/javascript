const img_array =['image1.jpg', 'image2.png', 'image3.JPG', 'image4.JPG', 'image5.jpeg']
let array_length = img_array.length
let i=0
let set = setInterval(slider, 5000)
//here slider is user define function
// 5000(miliseconds) means 5 second

function slider(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${img_array[i]}`
}

function next(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${img_array[i]}`

}

function prev(){
    i--
    if(i<0){
        i=array_length-1
    }
    document.getElementById('image').src=`images/${img_array[i]}`
}

function stops(){
    clearInterval(set)
}

function starts(){
    set = setInterval(slider, 5000)
}
   
