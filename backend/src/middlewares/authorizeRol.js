export const authorize = (roles) => {
    return (req, res, next) => {

        console.log(req.user);

        if (!req.user) {
            return res.status(401).json({ success: false, message: 'Usuario no autenticado' });
        }

        const { rol } = req.user;

        if (!roles.includes(rol)) {
            return res.status(403).json({ success: false, message: 'No tienes permiso para acceder a este recurso' });
        }

        next();
    };
};