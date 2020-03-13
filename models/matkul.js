export default (sequelize, DataTypes) => {
    const Matkul = sequelize.define('matkul', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    }, {
        freezeTableName: true,
    });

    Matkul.associate = (models) => {
        Matkul.hasMany(models.jadwal);
    };

    return Matkul;
};