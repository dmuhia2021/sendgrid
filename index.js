
const sgMail=require('@sendgrid/mail')
API_KEY="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";

sgMail.setApiKey(API_KEY);

const message= {
    to: 'carloalban20@gmail.com',
    from: 'dmuhia136@gmail.com',
    subject: 'Hello its dennis',
    text: 'Mazuri ya uko',
    html: '<h1>Hello from sendgrind</h1>'
};

sgMail.send(message)
    .then((response)=> console.log('Email sent...'))
    .catch((error)=>console.log(error.response));