import Karyawan from "../models/KaryawanModel.js";

export const getKaryawan = async(req, res) => {
    try {
        const karyawan = await Karyawan.findAll();
        res.json(karyawan);
    } catch (error) {
        console.log(error);
    }
}

export const getKaryawanById = async(req, res) => {
    try {
        const karyawan = await Karyawan.findAll({
            where:{
                id: req.params.id
            }
        });
        res.json(karyawan);
    } catch (error) {
        console.log(error);
    }
}

export const createKaryawan = async(req, res) => {
    try {
        await Karyawan.create({
            nama: req.body.nama,
            age: req.body.age,
            tags: req.body.tags,
            alamat: req.body.alamat,
            no_telp: req.body.no_telp
        });
        res.json({msg: "Karyawan Berhasil Ditambahkan"});
    } catch (error) {
        console.log(error);
    }
}

export const updateKaryawan = async(req, res) => {
    try {
        await Karyawan.update({
            nama: req.body.nama,
            age: req.body.age,
            tags: req.body.tags,
            alamat: req.body.alamat,
            no_telp: req.body.no_telp
        },{
            where:{
                id: req.params.id
            }
        });
        res.json({msg: "Karyawan Berhasil Diupdate"});
    } catch (error) {
        console.log(error);
    }
}

export const deleteKaryawan = async(req, res) => {
    try {
        await Karyawan.destroy({
            where:{
                id: req.params.id
            }
        });
        res.json({msg: "Karyawan Berhasil Dihapus"});
    } catch (error) {
        console.log(error);
    }
}
