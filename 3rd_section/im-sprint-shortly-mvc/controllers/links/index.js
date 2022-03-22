const models = require("../../models");
const { getUrlTitle } = require("../../modules/utils");

module.exports = {
  get: (req, res) => models.url.findAll().then(result => res.status(200).send(result)),

  post: (req, res) => {
    getUrlTitle(req.body.url, (error, title) =>
      models.url.create({ url: req.body.url, title }).then(result => res.status(201).json(result)));
  },

  redirection: async (req, res) => {
    // models.url.findOne({ where: { id: req.params.id } }).then(result => {
    models.url.findByPk(req.params.id).then(result => {
      result.increment({ visits: 1 });
      res.status(302).redirect(result.dataValues.url);
    })
  }
}