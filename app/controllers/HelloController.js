export const hello = (req, res) => {
  return res.status(200).json({
    result: `hello Sumana ... I think about you every day, and I hope and pray that you, and the children are doing well. 
          I know that I left abruptly, and I am sorry for this.  You see, I had no choice. 
          I was in love with you, and there was nothing that you or I could do concerning that, at that tine.
          I know it was very sudden, and brash, but I knew no other way.
          I hope that you are able to forgive me. `,
  });
};

export default hello;
