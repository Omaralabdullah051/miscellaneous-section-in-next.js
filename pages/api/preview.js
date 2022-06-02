export default function handler(req, res) {
  res.setPreviewData({ user: "sohel" });
  res.redirect(req.query.redirect);
}
