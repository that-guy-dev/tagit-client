import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const content = await db
    .collection("content")
    .find({ tags: req.body.tag })
    .toArray();

  res.json(content);
};
