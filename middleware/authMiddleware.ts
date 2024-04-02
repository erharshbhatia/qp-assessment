// authMiddleware.ts

import { Request, Response, NextFunction } from 'express';

enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
};

declare module 'express' {
    interface Request {
        userRole?: UserRole;
    }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.userRole; // Assuming user role is stored in req.userRole
    if (!userRole || userRole !== UserRole.ADMIN) {
        return res.status(403).json({ error: 'Only admin can access this route' });
    }
    next();
};

export const isUser = (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.userRole; // Assuming user role is stored in req.userRole
    if (!userRole || userRole !== UserRole.USER) {
        return res.status(403).json({ error: 'Only user can access this route' });
    }
    next();
};
