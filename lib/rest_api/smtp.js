exports.on = function(app) {
    const preRestApi = '/smtp';
    const smtp = require('../role/smtp');
    const utilsValue = require('../utils/value');
    const { ObjectId } = require('mongodb'); // or ObjectID 

    app.post(preRestApi + '/sendMail', function(req, res) {
        /*#swagger.parameters['obj'] = {
            in: 'body',
            description: 'send mail',
            schema: {
                subject:'subject',
                content:'content',
                toMail:'jieyu0702@gmail.com'
            }
        }*/ 

        
        const subject = req.body.subject
        const content = req.body.content
        const toMail = req.body.toMail
        const response = {
            status : true,
            data : ''
        }
        smtp.sendMail(subject,content,toMail,(result,data)=> {
            response.status = result;
            response.data = data
            console.log(JSON.stringify(response))
            res.send(response);
        })
    });
}