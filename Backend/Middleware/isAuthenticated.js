import jwt from "jsonwebtoken"

export const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodeToken) {
            return res.status(401).json({ message: "Invalid Token" });
        }
        req.user = decodeToken;
        next();
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}