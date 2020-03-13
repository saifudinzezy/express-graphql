export default {
    Mahasiswa: {
        jadwals: (parent, args, context, info) => parent.getJadwals()
    },
    Matkul: {
        jadwals: (parent, args, context, info) => parent.getJadwals()
    },
    Query: {
        //mahasiswa
        mahasiswas: (
            parent, args, {
                db
            }, info
        ) => db.mahasiswa.findAll(),
        mahasiswa: (parent, {
            id
        }, {
            db
        }, info) => db.mahasiswa.findByPk(id),
        //end mahasiswa
        //matkul
        matkuls: (
            parent, args, {
                db
            }, info
        ) => db.matkul.findAll(),
        matkul: (parent, {
            id
        }, {
            db
        }, info) => db.matkul.findByPk(id),
        //end matkul
        //jadwal
        jadwals: (
            parent, args, {
                db
            }, info
        ) => db.jadwal.findAll(),
        jadwal: (parent, {
            id
        }, {
            db
        }, info) => db.jadwal.findByPk(id),
        //end jadwal
    },
    Mutation: {
        //mahasiswa
        createMahasiswa: (parent, {
                name,
                age
            }, {
                db
            }, info) =>
            db.mahasiswa.create({
                name: name,
                age: age
            }),
        updateMahasiswa: (parent, {
                id,
                name,
                age
            }, {
                db
            }, info) =>
            db.mahasiswa.update({
                name: name,
                age: age
            }, {
                where: {
                    id: id
                }
            }).then(() => {
                return db.mahasiswa.findByPk(id)
            }),
        deleteMahasiswa: (parent, {
                id
            }, {
                db
            }, info) =>
            db.mahasiswa.findByPk(id).then((result) => {
                return db.mahasiswa.destroy({
                        where: {
                            id: id
                        }
                    })
                    .then((u) => {
                        return result
                    });
            }),
        //end mahasiswa
        //Matkul
        createMatkul: (parent, {
                name,
                age
            }, {
                db
            }, info) =>
            db.matkul.create({
                name: name,
                age: age
            }),
        updateMatkul: (parent, {
                id,
                name,
                age
            }, {
                db
            }, info) =>
            db.matkul.update({
                name: name,
                age: age
            }, {
                where: {
                    id: id
                }
            }).then(() => {
                return db.matkul.findByPk(id)
            }),
        deleteMatkul: (parent, {
                id
            }, {
                db
            }, info) =>
            db.matkul.findByPk(id).then((result) => {
                return db.matkul.destroy({
                        where: {
                            id: id
                        }
                    })
                    .then((u) => {
                        return result
                    });
            }),
        //end Matkul
        //Jadwal
        createJadwal: (parent, {
                day,
                matkulId
            }, {
                db
            }, info) =>
            db.jadwal.create({
                day: day,
                matkulId: matkulId
            }),
        updateJadwal: (parent, {
                id,
                day,
                matkulId
            }, {
                db
            }, info) =>
            db.jadwal.update({
                day: day,
                matkulId: matkulId
            }, {
                where: {
                    id: id
                }
            }).then(() => {
                return db.jadwal.findByPk(id)
            }),
        deleteJadwal: (parent, {
                id
            }, {
                db
            }, info) =>
            db.jadwal.findByPk(id).then((result) => {
                return db.jadwal.destroy({
                        where: {
                            id: id
                        }
                    })
                    .then((u) => {
                        return result
                    });
            }),
        //end Jadwal
    }
};