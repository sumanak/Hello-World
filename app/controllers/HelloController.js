export const hello = (req, res) => {
  return res.status(200).json({
    result: `hello ... `,
  });
};

export default hello;
