const express = require('express');
const router = express.Router();

//rutas del sistema
router.get("/",(req,res) =>{
	res.render("index.ejs");
});

router.get("/login",(req,res)=>{
	res.render("login.ejs");
});

router.get("*", (req,res) =>{
	res.end("Not found file");
});

module.exports = router;