export default (sequelize, DataTypes) => {
    const Jadwal = sequelize.define('jadwal', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        day: DataTypes.STRING,
    }, {
        freezeTableName: true,
    });

    Jadwal.associate = (models) => {
        Jadwal.belongsTo(models.mahasiswa);
    };

    Jadwal.associate = (models) => {
        Jadwal.belongsTo(models.matkul);
    };

    return Jadwal;
};