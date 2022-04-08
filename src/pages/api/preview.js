export default async (req, res) => {
  if (req.query.secret !== process.env.PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({});

  res.writeHead(307, {
    Location: `/${req.query.locale}/learning-center/${
      req.query.category ? req.query.category : "preview"
    }/${req.query.slug}`,
  });

  res.end();
};
