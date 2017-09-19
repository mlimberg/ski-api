const express = require('express');
const app = express();
const cors = require('cors');
app.set('port', process.env.PORT || 3001)
const bodyParser = require('body-parser');

app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json())

app.locals.skiData = {
  AL: [],
  AK: [],
  AZ: [],
  AR: [],
  CA: [
    { resort: 'Heavenly' ,id: '3bd90d8c47e6670871cd83bdc3a5d10f'},
    { resort: 'Mammoth Mountain' ,id: '05a3d5b27f01f18f379480641fcefe2b'},
    { resort: 'Kirkwood' ,id: '33325e007096b89e99cbc26b7dd7d485'},
    { resort: 'Sierra at Tahoe' ,id: '8473cca14dc5869126eaad3f7b0280f7'},
    { resort: 'Squaw Valley' ,id: 'a7fedc7c83b68a0b3a87bd3beaa1b596'},
    { resort: 'Sugar Bowl' ,id: '75ddae4400051c38497f1d8d54c7505e'},
  ],
  CO: [
    { resort: 'Breckenridge', id: '24980f7e81d723d719f6c2d0432ec3d6'},
    { resort: 'Keystone', id: '1ce2096c300f78bbb8389ca2603e6dd9'},
    { resort: 'Copper', id: 'a4090ffabdfba53d76b0748a0d87ce21'},
    { resort: 'Arapahoe Basin', id: 'b6772a7b7aed1e7736480c88a42ede97'},
    { resort: 'Beaver Creek', id: '4579992c1258315b82dea17fc00e7931'},
    { resort: 'Winter Park', id: '8589c2ad5298ed90be2afdcc371d46b4'},
    { resort: 'Telluride', id: '65ef052c0e475c8549997600b2bef0cf'},
    { resort: 'Aspen Highlands', id: '75aa4fe1821500ddb57aac5a54dc5cfd'},
    { resort: 'Snowmass', id: 'd569e475772e67d809498868dd7ed63f'},
    { resort: 'Buttermilk', id: '81493544578fbe9b1f5b5698b1110576'},
    { resort: 'Vail', id: 'f90d2dd9492542b240e4fce9b44fc4ef'},
  ],
  CT: [],
  DE: [],
  DC: [],
  FL: [],
  GA: [],
  HI: [],
  ID: [],
  IL: [],
  IN: [],
  IA: [],
  KS: [],
  KY: [],
  LA: [],
  ME: [],
  MD: [],
  MA: [],
  MI: [],
  MN: [
    { resort: 'Afton Alps', id: 'd75b026bdda03847726b798c95773e9a'},
    { resort: 'Welch Village', id: '476c7a8904679f297fb916406979c935'},
    { resort: 'Lutsen', id: '18710ae4904f4616bc5633a72a88748a'},
  ],
  MS: [],
  MO: [],
  MT: [],
  NE: [],
  NV: [],
  NH: [],
  NJ: [],
  NM: [],
  NY: [],
  NC: [],
  ND: [],
  OH: [],
  OK: [],
  OR: [],
  PA: [],
  RI: [],
  SC: [],
  SD: [],
  TN: [],
  TX: [],
  UT: [
    { resort: 'Alta', id: '6472ef326ec0697f5fcb423f992fe00a'},
    { resort: 'Brighton', id: '0d84883ca72c88cb53c8a38262efdcbc'},
    { resort: 'Deer Valley', id: 'd0368d3c9fb0a6c8f34f06f0920f32c3'},
    { resort: 'Park City', id: 'dd6be828a4e82637b44328f0b6e9107c'},
    { resort: 'Snowbird', id: '0f1aa628af3092f3a5b2439cf55cd967'},
    { resort: 'Snowbasin', id: '380363ec87bccb2e2fe0716cd1485107'},
  ],
  VT: [],
  VA: [],
  WA: [],
  WV: [],
  WI: [],
  WY: []
}

app.get('/api/v1/resorts/:state', (req, res) => {
  const { state } = req.params
  const resorts = app.locals.skiData[state]

  if (resorts.length) {
    res.status(200).send(resorts)
  } else {
    res.sendStatus(404)
  }
})

const port = app.get('port')

app.listen(port, () => {
  console.log(`listening at ${port}`);
})
