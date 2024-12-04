import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<html><body>todo joya</body></html>');
});

export default router;
