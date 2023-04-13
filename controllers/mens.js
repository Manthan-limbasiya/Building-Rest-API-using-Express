const MensRanking = require("../src/models/mens");

const addMens = async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
};
const getMens = async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getMen = async (req, res) => {
  try {
    const _id = req.params.id;
    const getMens = await MensRanking.findById(_id);
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateMens = async (req, res) => {
  try {
    const _id = req.params.id;
    const getMens = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMens);
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteMens = async (req, res) => {
  try {
    const _id = req.params.id;
    const getMens = await MensRanking.findByIdAndDelete(_id);
    res.send(getMens);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  addMens,
  getMens,
  getMen,
  updateMens,
  deleteMens,
};
