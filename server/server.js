// import express from "express";
// import connectDB from "./config/db.js";
// import Item from "./models/ItemModel.js";
// import logger from "./middlewares/loggerMiddleware.js";

// const app = express();

// app.use(express.json());
// app.use(logger);
// const PORT = 3000;

// app.get("/health", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, message: "Server is healthy", data: null });
// });

// const items = ["item1", "item2", "item3"];
// app
//   .get("/", (req, res) => {
//     return res.status(200).json({
//       success: true,
//       message: "Items fetched successfully",
//       data: items,
//     });
//   })
//   .post("/", (req, res) => {
//     const { newItem } = req.body;

//     if (!newItem) {
//       return res.status(400).json({
//         success: false,
//         message: "New item is required",
//         data: null,
//       });
//     }

//     items.push(newItem);
//     return res.status(201).json({
//       success: true,
//       message: "Item added successfully",
//       data: items,
//     });
//   })
//   .put("/:index", (req, res) => {
//     const id = req.params.index;
//     if (id < 0 || id >= items.length)
//       return res
//         .status(404)
//         .json({ succcess: false, message: "Item not found", data: null });

//     const updateItem = req.body.updateItem;
//     if (!updateItem || updateItem.trim() === "")
//       return res.status(400).json({
//         success: false,
//         message: "Update item is required",
//         data: null,
//       });

//     items[id] = updateItem;
//     return res.status(200).json({
//       success: true,
//       message: "Item updated successfully",
//       data: items[id],
//     });
//   })
//   .delete("/:index", (req, res) => {
//     const id = req.params.index;
//     if (id < 0 || id >= items.length)
//       return res
//         .status(404)
//         .json({ success: false, message: "Item not found", data: null });
//     const deleteItem = items.splice(id, 1);
//     return res.status(200).json({
//       success: true,
//       message: "Item deleted successfully",
//       data: deleteItem[0],
//     });
//   });

// app
//   .get("/api/items", async (req, res) => {
//     try {
//       const allItems = await Item.find();
//       return res.status(200).json({
//         success: true,
//         message: "Items fetched successfully",
//         data: allItems,
//       });
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: `Error in fetching items: ${error.message}`,
//         data: null,
//       });
//     }
//   })
//   .post("/api/items", async (req, res) => {
//     try {
//       const { name } = req.body;
//       if (!name || name.trim() === "") throw new Error("Item is required");
//       const newItem = await Item.create({ name });
//       return res.status(201).json({
//         success: true,
//         message: "Item created successfully",
//         data: newItem,
//       });
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: `Error in creating item: ${error.message}`,
//         data: null,
//       });
//     }
//   })
//   .put("/api/items/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { name } = req.body;
//       if (!id) throw new Error("Item id is required");
//       if (!name || name.trim().length === 0)
//         throw new Error("Item name is required");
//       const updatedItem = await Item.findByIdAndUpdate(
//         id,
//         { name },
//         { returnDocument: 'after' },
//       );
//       if (!updatedItem) throw new Error("Item not found");
//       return res.status(200).json({
//         success: true,
//         message: "Item updated successfully",
//         data: updatedItem,
//       });
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: `Error in updating item: ${error.message}`,
//         data: null,
//       });
//     }
//   })
//   .delete("/api/items/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       if (!id) throw new Error("Item can't be deleted");
//       const deletedItem = await Item.findByIdAndDelete(id);
//       if (!deletedItem) throw new Error("Item not found");
//       return res.json(200).json({
//         success: true,
//         message: "Item  deleted successfully",
//         data: deletedItem,
//       });
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: "Error in deleting Item.",
//         data: null,
//       });
//     }
//   });

// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on PORT: ${PORT}`);
//   });
// });

import connectDB from "./config/db.js";
import { PORT } from "./app.js";
import app from "./app.js";

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
