export default {
    Mahasiswa: {
        // pembimbings: (parent, args, context, info) => parent.getPembimbing(),
        matkuls: (parent, args, context, info) => parent.getMatkuls()
    },
    Matkul: {
        mahasiswa: (parent, args, context, info) => parent.getMahasiswa()
    },
    Pembimbing: {
        mahasiswa: (parent, args, context, info) => parent.getMahasiswa()
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
        //pembimbing
        pembimbings: (
            parent, args, {
                db
            }, info
        ) => db.pembimbing.findAll(),
        pembimbing: (parent, {
            id
        }, {
            db
        }, info) => db.pembimbing.findByPk(id),
        //end pembimbing
    },
    Mutation: {
        //mahasiswa
        createMahasiswa: (parent, {
                name
            }, {
                db
            }, info) =>
            db.mahasiswa.create({
                name: name
            }),
        updateMahasiswa: (parent, {
                id,
                name
            }, {
                db
            }, info) =>
            db.mahasiswa.update({
                name: name
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
                mahasiswaId
            }, {
                db
            }, info) =>
            db.matkul.create({
                name: name,
                mahasiswaId: mahasiswaId
            }),
        updateMatkul: (parent, {
                id,
                name,
                mahasiswaId
            }, {
                db
            }, info) =>
            db.matkul.update({
                name: name,
                mahasiswaId: mahasiswaId
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
        //Pembimbing
        createPembimbing: (parent, {
                day,
                matkulId,
                mahasiswaId
            }, {
                db
            }, info) =>
            db.pembimbing.create({
                day: day,
                matkulId: matkulId,
                mahasiswaId: mahasiswaId
            }),
        updatePembimbing: (parent, {
                id,
                day,
                matkulId
            }, {
                db
            }, info) =>
            db.pembimbing.update({
                day: day,
                matkulId: matkulId
            }, {
                where: {
                    id: id
                }
            }).then(() => {
                return db.pembimbing.findByPk(id)
            }),
        deletePembimbing: (parent, {
                id
            }, {
                db
            }, info) =>
            db.pembimbing.findByPk(id).then((result) => {
                return db.pembimbing.destroy({
                        where: {
                            id: id
                        }
                    })
                    .then((u) => {
                        return result
                    });
            }),
        //end Pembimbing
    }
};