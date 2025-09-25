document.getElementById('Shorten-form').addEventListener('submit',(event)=>{
    event.preventDefault();

    const formdata=new FormData(event.target);
    const url=formdata.get('url');
    const shortCode =formdata.get('shortCode');
    
    console.log(formdata.get("url"));



}) 