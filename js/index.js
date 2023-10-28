function sendMail() {
    var params = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value

    };
    
    const serviceID ="service_nffh9i8";
    const templateID = "template_hr55079";
    
    emailjs.send(serviceID,templateID,params).then(res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("mensagem enviada com sucesso");
    }
    ).catch((err)=> console.log(err));  
}