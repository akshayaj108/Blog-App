const title = document.getElementById('title');
const author = document.getElementById('author');
const details = document.getElementById('details');
const uploadDate = document.getElementById('uploaddate');
const image = document.getElementById('image');

const titleVal = title.value.trim();
const authorVal = author.value.trim();
const detailsVal = details.value.trim();
const dateVal = uploadDate.value;
const imageVal = image.value;

let blog_records = new Array();


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validateBlogForm();
})
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classlist.add('error');
  inputControl.classlist.remove('success')
}

const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    
    inputControl.classlist.remove('error')
}
let cnt =0;
function validateBlogForm(){
    if(titleVal === ''){
        setError(title, "Please Enter Title of The Blog");
        cnt++;
    }else{
        setSuccess(title);
    }

    if(authorVal === ''){
        setError(author, "Please Enter Author");
        cnt++;
    }else{
        setSuccess(author)
    }
    if(detailsVal === ''){
        setError(author, "Please Enter some Details");
        cnt++;
    }else if(detailsVal.length < 6){
        setError(details, "Details to short ");
        cnt++;
    }else{
        setSuccess(author)
    }
    if(dateVal===''){
        setError(uploadDate, "Fill Date it must be required");
        cnt++;
    }else{
        setSuccess(uploadDate)
    }

    blog_records=JSON.parse(localStorage.getItem("blogers"))

if(cnt===0){
    blog_records.push({
        "title":titleVal,
        "author":authorVal,
        "details":detailsVal,
        "date":dateVal,
        "image":imageVal
    });
    localStorage.setItem("blogers", JSON.stringify(blog_records));
    return true;
}else{
    return false;
}
}




