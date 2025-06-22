const checkById = (Model, modelName = "Recurso") => async (req, res, next) => {
  const { id } = req.params;
  try{
    const element = await Model.findById(id);
    if (!element) {
      return res.status(404).json({ error: `${modelName} no encontrado` });
    }
    next();
  } catch(error) {
    return res.status(404).json({error: `ID de ${modelName} inválido`})
  }

};

module.exports = { checkById };