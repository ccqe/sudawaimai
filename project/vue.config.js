const positionData = require("./src/mock/position.json");
const shopsData = require("./src/mock/shops.json");
const searchshopData = require("./src/mock/searchshop.json");
const sendcodeData = require("./src/mock/sendcode.json");
const smsloginData = require("./src/mock/smslogin.json");
const pwdloginData = require("./src/mock/pwdlogin.json");
const logoutData = require("./src/mock/logout.json");
const userinfoData = require("./src/mock/userinfo.json");
const shopinfoData = require("./src/mock/shopinfo.json");
const shopgoodsData = require("./src/mock/shopgoods.json");
const shopratingsData = require("./src/mock/shopratings.json");
 
module.exports = { 
  devServer: {
    port: 8080,
    before(app) { 
      app.get("/api/position/*", (req, res) => {
        res.json(positionData);
      })   
      app.get("/api/shops/*", (req, res) => {
        res.json(shopsData);
      })  
      app.get("/api/searchshop/*", (req, res) => {
        res.json(searchshopData);
      })
      app.get("/api/sendcode/*", (req, res) => {
        res.json(sendcodeData);
      })
      app.post("/api/smslogin", (req, res) => {
        res.json(smsloginData);
      })   
      app.post("/api/pwdlogin", (req, res) => {
        res.json(pwdloginData);
      }) 
      app.get("/api/logout", (req, res) => {
        res.json(logoutData);
      })  
      app.get("/api/userinfo", (req, res) => {
        res.json(userinfoData);
      })
      app.get("/api/shopinfo", (req, res) => {
        res.json(shopinfoData);
      })
      app.get("/api/shopgoods", (req, res) => {
        res.json(shopgoodsData);
      }) 
      app.get("/api/shopratings", (req, res) => {
        res.json(shopratingsData);
      })    

    }
  }
};