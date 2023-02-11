const express = require("express")
const app =  express()
const router =  require("./routers/route");
const cors = require("cors")
app.use(express.json());
app.use(cors())
app.use(router)
const port = 8016;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});