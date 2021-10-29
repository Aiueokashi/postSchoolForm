var request = require('superagent');

var random = Math.floor( Math.random() * 10 );
temp = ['36.0','36.1','36.2','36.3','36.4','36.5','36.6','36.7','36.8','36.9'];

request
  .post(`https://docs.google.com/forms/d/e/${process.env.FORM_ID}/formResponse`)
  .type('form')
  .send({ 
    [process.env.ENTRY1]: `${process.env.MY_GRADE}`,
    [process.env.ENTRY2]: `${process.env.MY_CLASS}`,
    [process.env.ENTRY3]: `${process.env.MY_NUMBER}`,
    [process.env.ENTRY4]: `${process.env.MY_NAME}`,
    [process.env.ENTRY5]: `${temp[random]}`,
    [process.env.ENTRY6]: `${process.env.SELECTOR_NO}`,
    [process.env.ENTRY7]: `${process.env.SELECTOR_NO}`,
    [process.env.ENTRY8]: `${process.env.SELECTOR_NO}`,
    [process.env.ENTRY9]: `${process.env.SELECTOR_NO_ONE}`,
    [process.env.ENTRY10]: `${process.env.SELECTOR_AGREE}`,
   })
  .end(function(err, res){
    if (err || !res.ok) {
      console.error(err);
    } else {
      console.log(res.body);
    }
  });