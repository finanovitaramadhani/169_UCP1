module.exports = (sequelize, DataTypes) => {
    const Kandang = sequelize.define('Kandang', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nama_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Nama_petugas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Usia_hewan: {
            type: DataTypes.INTERGER,
            allowNull: false
        },
        Jenis_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Tahun_lahir: {
            type: DataTypes.INTERGER,
            allowNull: false
        }
    }, {
        tableName: 'kandang',
        timestamps: false,
        freezeTableName: true
    });
    return Kandang;
}