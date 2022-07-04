exports.on = function(app) {
    const preRestApi = '/smtp';
    const smtp = require('../role/smtp');
    const utilsValue = require('../utils/value');
    const { ObjectId } = require('mongodb'); // or ObjectID 

    app.post(preRestApi + '/sendMail', function(req, res) {
        /*#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Add a house',
            schema: {
                name:'文山區好房子',
                city:'台北市',
                area:'文山區',
                owner: '61ed2777f5178ce385654350',
                address:'台北市文山區興隆路四段',
                houseNumber:{
                    lane:96,
                    alley:2,
                    number1:5,
                    number2:1
                },
                floor:3,
                room:"1001",
                price:6666,
                config:{
                    room:2,
                    livingRoom:1,
                    balcony:1,
                    bathroom:1,
                    buildingType:1
                },
                ping:30,
                parking:true,
                traffic:[{
                    name:'萬芳醫院站',
                    distance:20,
                    type:1
                }],
                life:[{
                    name:'景美夜市',
                    distance:200,
                    type:1
                }],
                educate:[{
                    name:'景美幼稚園',
                    distance:200,
                    type:1
                }],
                saleType:1,
                saleInfo:{
                    pet: true,
                    manager: true,
                    garbage: true,
                    managerPrice:200,
                    garbagePrice:200,
                    smoke:true,
                    cook:true,
                    typeOfRental:1
                },
                photo:['1.jpg','2.jpg'],
                annex:['1.jpg'],
                remark:'test'
            }
        }*/ 

        
        const name = req.body.name
        const city = req.body.city
        const area = req.body.area
        const owner = req.body.owner
        const address = req.body.address
        const houseNumber = req.body.houseNumber
        const floor = req.body.floor
        const room = req.body.room
        const price = req.body.price
        const config = req.body.config
        const ping = req.body.ping
        const parking = req.body.parking
        const traffic = req.body.traffic
        const life = req.body.life
        const educate = req.body.educate
        const saleType = req.body.saleType
        const saleInfo = req.body.saleInfo
        const photo = req.body.photo
        const annex = req.body.annex
        const remark = req.body.remark
        const response = {
            'status':true,
            'data':''
        }
        house.addHouse(name,city,area,owner,address,houseNumber,floor,room,price,config,ping,parking,traffic,life,educate,saleType,saleInfo,photo,annex,remark,(result,data)=> {
            response.status = result;
            response.data = data
            res.send(response);
        })
    });
}