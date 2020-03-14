export default (sequelize, DataTypes) => {
    const Pembimbing = sequelize.define('pembimbing', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    }, {
        freezeTableName: true,
    });

    Pembimbing.associate = (models) => {
        Pembimbing.belongsTo(models.mahasiswa);
    };

    return Pembimbing;
};