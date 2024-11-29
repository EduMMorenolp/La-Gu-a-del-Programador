import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("<html><body>todo joya</body></html>")
});

router.get('/api/v1/resources/videos', (req, res) => {
    res.send("<html><body>get a videos</body></html>")
});

router.get('/api/v1/resources/links', (req, res) => {
    res.send("<html><body>get a links</body></html>")
});

router.post('/api/v1/suggestions', (req, res) => {
    res.send("<html><body>post a suggestions</body></html>")
});

export default router;