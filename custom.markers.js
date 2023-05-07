/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [



        // Example 3: Text only
        {
            x: -21,
            z: -83,
            image: "Muppet.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
 
        },

        {
            x: -260,
            z: -55,
            image: "Flam.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
 
        },

        {
            x: 580,
            z: -400,
            image: "Badger.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
 
        },

        {
            x: 740,
            z: 83,
            image: "Kyra.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
 
        },


        {
            x: 1240,
            z: -950,
            image: "Flam.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
 
        },

        {
            x: -1550,
            z: 800,
            image: "Lance.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
 
        },

        {
            x: 38,
            z: 14,
            image: "Coyo.png",
            imageAnchor: [0, 0],
            imageScale: 0.5,
 
        },


        {
            x: -740,
            z: -460,
            image: "Preefreea.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
 
        },


        {
            x: -670,
            z: -184,
            image: "Ransomn.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
 
        },
        
        {
            x: 190,
            z: -605,
            image: "gold.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
        },

        {
            x: 190,
            z: -570,
            image: "dripstone.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },

        {
            x: 190,
            z: -550,
            image: "stone.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },
       
        {
            x: 190,
            z: -530,
            image: "chorus.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },       


        {
            x: 110,
            z: -600,
            image: "bonemeal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },       
       
       
      {
            x: 150,
            z: -550,
            image: "bamboo.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },       

       
      {
            x: 130,
            z: -520,
            image: "sugar.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },       

{
            x: 100,
            z: -525,
            image: "potion.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },       

{
            x: 175,
            z: -470,
            image: "skulk.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },       
{
            x: 160,
            z: -510,
            image: "villager.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },       
{
            x: 100,
            z: -480,
            image: "lava.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },       
       
      {
            x: 100,
            z: -460,
            image: "mud.png",
            imageAnchor: [1, 1],
            imageScale: 0.4,
 
       },        

      {
            x: 100,
            z: -460,
            image: "clay.png",
            imageAnchor: [0, 1],
            imageScale: 0.4,
 
       },        

      {
            x: 130,
            z: -480,
            image: "mushroom.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },        
      {
            x: 130,
            z: -440,
            image: "wart.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },        
      {
            x: 130,
            z: -220,
            image: "sheep.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },        
  
      {
            x: 130,
            z: -195,
            image: "cactus.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },          
       
      {
            x: 130,
            z: -170,
            image: "iron.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },            

      {
            x: 6870,
            z: 1550,
            image: "witch.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },            
       
      {
            x: 8200,
            z: 600,
            image: "guardian.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },                   

      {
            x: 8282,
            z: 1029,
            image: "mooshroom.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },                   

      {
            x: 180,
            z: -510,
            image: "melon.png",
            imageAnchor: [1, 1],
            imageScale: 0.4,
 
       },                   
             {
            x: 180,
            z: -510,
            image: "pumpkin.png",
            imageAnchor: [0, 1],
            imageScale: 0.4,
 
       },                   
          {
            x: 1740,
            z: 126,
            image: "ice.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },                   
       {
            x: 590,
            z: 512,
            image: "fish.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
 
       },  

        {
            x: 450,
            z: 350,
            image: "Coyo.png",
            imageAnchor: [0, 0],
            imageScale: 0.5,
 
        },


        {
            x: 304,
            z: -133,
            image: "drowned.png",
            imageAnchor: [0, 0],
            imageScale: 0.5,
 
        },
       
       
        // do not delete the following two closing brackets
    ]
}
