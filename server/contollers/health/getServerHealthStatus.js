export const getServerHealthStatus = (req, res) => {
  return res.json(200).json({ success: true, message: "Server is healthy" });
};
