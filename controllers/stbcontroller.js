const stbModel = require("../models/StbModel");

const Register = async (req, res) => {
  const { stbid, name, phone } = req.body;

  if (!stbid || !name || !phone)
    return res
      .status(500)
      .json({ message: "all feilds required", status: "fail" });

  try {
    const existingStb = await stbModel.findOne({ stbid: stbid });

    if (existingStb)
      return res
        .status(200)
        .json({ message: "stb already exist", status: "fail" });

    const newStb = new stbModel(req.body);
    const savestb = await newStb.save();
    if (!savestb)
      return res.status(500).json({ message: "some error", status: "fail" });
    return res.status(200).json({ message: "stb added", status: "ok" });
  } catch (error) {
    return res.status(500).json({
      message: "something went bad at server",
      status: "fail",
      errordetails: error,
    });
  }
};

const UpdateData = async (req, res) => {
  const { name, phone } = req.body;
  const stbid = req.params.stbid;

  if (!stbid || !name || !phone)
    return res
      .status(500)
      .json({ message: "all feilds required", status: "fail" });

  const findStb = await stbModel.findOne({ stbid: stbid });

  if (!findStb)
    return res
      .status(200)
      .json({ message: "stb not found are regsitred", status: "fail" });

  try {
    const upstb = await stbModel.findOneAndUpdate(
      { stbid, stbid },
      { name, phone },
      { timestamps: true },
      { new: true }
    );

    if (!upstb)
      return res
        .status(500)
        .json({ message: "stb failed to update", status: "fail" });

    return res
      .status(200)
      .json({ message: "stb updated sucessfully", status: "ok", data: upstb });
  } catch (error) {
    return res.status(500).json({
      message: "something went bad at server",
      status: "fail",
      errordetails: error,
    });
  }
};

const getAllStbs = async (req, res) => {
  try {
    const allstbs = await stbModel.find({});

    return res.status(200).json({
      message: "data fetched sucessfully",
      data: allstbs,
      status: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went bad at server",
      status: "fail",
      errordetails: error,
    });
  }
};

module.exports = { Register, UpdateData, getAllStbs };
