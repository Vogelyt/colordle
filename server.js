const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const db = new sqlite3.Database('./database/colors.db');

function hexToRgb(hex){hex=hex.replace('#','');const b=parseInt(hex,16);return[(b>>16)&255,(b>>8)&255,b&255]}
function matchPercent(a,b){const d=Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1])+Math.abs(a[2]-b[2]);return Math.round(((765-d)/765)*100)}

let target,targetRGB,attempts=[];
function pickColor(){db.get("SELECT * FROM colors ORDER BY RANDOM() LIMIT 1",[],(e,r)=>{target=r;targetRGB=hexToRgb(r.hex);attempts=[]})}
pickColor();

app.post('/guess',(req,res)=>{
    const guess=req.body.color.toLowerCase();
    db.get("SELECT * FROM colors WHERE lower(name)=?",[guess],(err,row)=>{
        if(err) return res.json({error:"Server error"});
        if(!row) return res.json({error:"Unknown color"});
        const percent=matchPercent(hexToRgb(row.hex),targetRGB);
        attempts.push({name:row.name,percent});
        let won=false;
        if(percent===100){won=true;pickColor()}
        res.json({message:`${percent}% correct for "${row.name}"`,attempts,won});
    });
});

app.get('/colors',(req,res)=>{db.all("SELECT name, hex FROM colors ORDER BY name",[],(e,r)=>{if(e) return res.status(500).send([]);res.json(r)})});
app.listen(3000,()=>console.log("Server running at http://localhost:3000"));
