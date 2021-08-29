const express =require('express');

const router= express.Router();
const myProjectsRoute= require('./myprojects');
const mySkillsRoute= require('./myskills');
const contactRoute= require('./contact');





  module.exports=()=>{
    router.get('/', (request, response) => {
        response.render('pages/index',{ pageTitle:'Welcome'});
      });
      router.use('./myprojects',myProjectsRoute());
      router.use('./myskills',mySkillsRoute());
      router.use('./contact',contactRoute());
      return router;
  }