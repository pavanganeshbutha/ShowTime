import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/health", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Server is healthy", data: null });
});

const items = ["item1", "item2", "item3"];
app
  .get("/", (req, res) => {
    return res.status(200).json({
      success: true,
      message: "Items fetched successfully",
      data: items,
    });
  })
  .post("/", (req, res) => {
    const { newItem } = req.body;

    if (!newItem) {
      return res.status(400).json({
        success: false,
        message: "New item is required",
        data: null,
      });
    }

    items.push(newItem);
    return res.status(201).json({
      success: true,
      message: "Item added successfully",
      data: items,
    });
  });

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
