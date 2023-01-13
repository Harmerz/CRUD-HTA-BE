import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getKaryawan, deleteKaryawan, createKaryawan, updateKaryawan, getKaryawanById } from "../controllers/Karyawan.js";
import db from "../config/Database.js";
import Karyawan from "../models/KaryawanModel.js";
import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
const router = express.Router();
(
    
    async () => {
        const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash("12345", salt);
        await db.sync({ force: true });
        await Karyawan.create({
            nama: 'Rizky',
            age: 20,
            tags: 'Frontend,Backend',
            alamat: 'Jl. Raya',
            no_telp: '08123456789'
        });
        await Karyawan.create({
            nama: 'Haikal',
            age: 21,
            tags: 'Backend',
            alamat: 'Jl. Pogung',
            no_telp: '08123456789'
        });
        await Users.create({
            name: 'Haikal',
            email: 'haikal@gmail.com',
            password: hashPassword,
            refreshToken: null,
        });
    }
)();
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/karyawan', getKaryawan);
router.post('/karyawan', createKaryawan);
router.put('/karyawan/:id', updateKaryawan);
router.delete('/karyawan/:id', deleteKaryawan);
router.get('/karyawan/:id', getKaryawanById);
export default router;