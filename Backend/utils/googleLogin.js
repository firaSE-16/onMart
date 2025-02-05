export const googleLogin = async (req, res) => {
    const token = generateToken(req.user);
    res.json({ message: 'Google login successful', token });
  };