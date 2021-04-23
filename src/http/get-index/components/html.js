import Main from "./main.js";

export default function (state = {}) {
  let { title } = state;
  return `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <style>
   h1 {
     font-size: 3em;
   }
   p {
     font-size: 2em;
   }
  </style>
</head>
 <body>
  ${Main()}
  <script src='_static/index.js'> </script>
 </body>
</html>
  `;
}
