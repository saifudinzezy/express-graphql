export default (sequelize, DataTypes) => {
    const Mahasiswa = sequelize.define('mahasiswa', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
    }, {
        freezeTableName: true,
    });

    Mahasiswa.associate = (models) => {
        Mahasiswa.hasMany(models.jadwal);
    };

    return Mahasiswa;
};