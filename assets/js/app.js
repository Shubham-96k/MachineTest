

const cl = console.log;
const button = document.getElementById('button')
const checkboxes = document.querySelectorAll('.input')
                    
                    
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        button.disabled = !anyChecked;
    });
    });




// Problem
// Roy wants to change his profile picture on Facebook. Now Facebook has some restriction over the dimension of picture 
// that we can upload.Minimum dimension of the picture can be L x L, where L is the length of the side of square.
// Now Roy has N photos of various dimensions.Dimension of a photo is denoted as W x H where W - width of the photo and H - Height of the photo
// When any photo is uploaded following events may occur:
// [1] If any of the width or height is less than L, user is prompted to upload another one. Print "UPLOAD ANOTHER" in this case.
// [2] If width and height, both are large enough and 
// (a) if the photo is already square then it is accepted. Print "ACCEPTED" in this case.
// (b) else user is prompted to crop it. Print "CROP IT" in this case.
// (quotes are only for clarification)
// Given L, N, W and H as input, print appropriate text as output.

// Input: First line contains L. Second line contains N, number of photos. Following N lines each contains two space separated integers W and H.
// Output: Print appropriate text for each photo in a new line. 

// Sample Input
let l = 180
// N=3

let photos=[
{W:640,H:480},
{W:120,H:300},
{W:180,H:180}
]

// Sample Output
// CROP IT
// UPLOAD ANOTHER
// ACCEPTED



const uploadphoto = (L, photos) => {
    photos.forEach(photo => {
        if(photo.W < L || photo.H < L){
            console.log(photo, 'UPLOAD ANOTHER');
        }else if(photo.W === photo.H){
            console.log(photo, 'ACCEPTED');
        }else{
            console.log(photo, 'CROP IT');
        }
    })
}

uploadphoto(l, photos);
