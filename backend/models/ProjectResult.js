/**
 * ProjectComment Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => {
    const ProjectResult = sequelize.define('ProjectResult', {
        seqProject: {
            field: 'seq_project',
            type: DataTypes.INTEGER(8),
            primaryKey: true
        },
        message: {
            field: 'message',
            type: DataTypes.STRING(300),
        },
        link: {
            field: 'link',
            type: DataTypes.STRING(150),
        },
    }, {
        tableName: `project_result`
    });

    ProjectResult.associate = function(models) {

    };

    return ProjectResult;
};