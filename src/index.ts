import express, { Request, Response } from "express";
import { userDataCheck } from "./check/reqChecks";
import { User } from "./user/user";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

app.post("/post", (req: Request, res: Response) => {
  try {
    const data: User = userDataCheck(req.body);
    const category: string =
      data.category.toLowerCase() === "male" ? "Boy" : "Girl";
    res.status(200).json({
      message: "###POST REQUEST DONE###",
      content: data,
      type: category,
    });
  } catch (e) {
    res.status(500).json({ message: "an error is occured", error: e });
  }
});
app.listen(port, () => {
  console.log(`Server listyening on http://localhost:${port}`);
});
