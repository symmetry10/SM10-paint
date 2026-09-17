# SM10-paint
<p>this is a web-based paint program. using html/css/js with exporting and importing. and layers. there might be updates in the future. but for now it is a small compact web drawing application</p>
<h1>funktions</h1>
<ul>
  <li>you can save and import .img files.</li>
  <li>you can manege and edit layers</li>
  <li>you can select a area and rotate/flip/move it</li>
  <li>inside the Slettings for colors. you can open a sidebar for pallets</li>
  <li>you can change how close the color you wanna change with the bucket tool can be to the original color</li>
  <li>you can change shapes in the shape settings</li>
  <li>you can change canvas size</li>
  <li>you can undo/redo up to 50 times, wich supports most actions, exept for setting changes</li>
</ul>
<h1>code setup for people interested</h1>
<p>a warnign before checking the js. - there are almost no comments. instead it is put up into regions. where each region is a peice of code that does what the region says. and they rarely overlap.</p>
<p>the first part is setting up all the html elements. and code-wide values. like pencil color</p>
<p>then i set up the color pallet code</p>
<p>then i set up all the settings. to be togable. each section is mostly stand-alone, but some will relate to code in the tool regions, of the same tool.</p>
<p>then i have the code for undo/redo. that works by saving all layers and checking if they are invisible. while also having any color changes. and other important info the program needs. and saving it to a undo list. and when undoing. puts that into a redo list. until another undoable thing is done wich clears the redo list</p>
<p>then i initialise the setup for the tools themselves.</p>
<p>and then i have the save/import code. with the import code touching a bit of the area selector code, to make it dragable when imported</p>
