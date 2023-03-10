import express from "express";
import { Request, Response } from "express"; 
import router from "./route/route";

const app = express();


app.use(express.json());
app.use("/post", router);

app.all("/", (req: Request, res: Response): void => {
    res.send("Homepage");
});

app.use((req: Request, res: Response): void => {
    res.status(404).send("Not Found");
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});