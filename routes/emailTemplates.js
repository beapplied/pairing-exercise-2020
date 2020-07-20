const models = require("../models")

exports.listTemplatesByOrg = (req, res, next) => {
    const { OrgId } = req.params

    return models.EmailTemplate.findAll({
        where: {
            orgId: OrgId,
        },
    })
        .then((templates) => {
            return res.send(templates)
        })
        .catch(next)
}

exports.updateTemplateById = (req, res, next) => {
    const { templateId } = req.params
    const body = req.body

    return models.EmailTemplate.findOne({
        where: {
            id: templateId,
        },
    })
        .then((instance) => {
            if (!instance) {
                return res.send(404)
            }
            instance.text = body.text ? body.text : instance.text
            instance.orgId = body.orgId ? body.orgId : instance.orgId
            instance.Type = body.Type ? body.Type : instance.Type

            return instance.save()
        })
        .then((updatedInstance) => {
            return res.status(200).send(updatedInstance)
        })
        .catch(next)
}

exports.createTemplate = (req, res, next) => {
    const body = req.body

    return models.EmailTemplate.create({
        orgId: body.orgId,
        text: body.text,
        Type: body.Type,
    })
        .then((template) => {
            console.log(JSON.stringify(template))

            return res.status(200).send(template)
        })
        .catch(next)
}
