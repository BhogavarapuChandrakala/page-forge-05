import { Box, Container, Grid, TextField, Button, Typography, Checkbox, FormControlLabel, Select, MenuItem, FormControl, InputLabel, InputAdornment, IconButton, Divider } from '@mui/material';
import { Briefcase, Eye, EyeOff, Facebook, ArrowRight, Building } from 'lucide-react';
import chessPattern from '@/assets/chess-pattern.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    accountType: 'employers',
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verify-email');
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      {/* Left Side - Form */}
      <Box sx={{ flex: { xs: '1', md: '0 0 45%' }, bgcolor: 'white', display: 'flex', alignItems: 'center', py: 4 }}>
        <Container maxWidth="sm">
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <Briefcase size={28} color="#0066FF" />
            <Typography variant="h6" sx={{ color: 'foreground', fontWeight: 600 }}>
              MyJob
            </Typography>
          </Link>

          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Create account.
          </Typography>
          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
            Already have account? <Link to="/signin" style={{ color: '#0066FF', textDecoration: 'none' }}>Log In</Link>
          </Typography>

          <form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Account Type</InputLabel>
              <Select
                value={formData.accountType}
                label="Account Type"
                onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
              >
                <MenuItem value="candidates">Candidates</MenuItem>
                <MenuItem value="employers">Employers</MenuItem>
              </Select>
            </FormControl>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              label="Email address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                />
              }
              label={
                <Typography variant="body2">
                  I've read and agree with your <Link to="#" style={{ color: '#0066FF' }}>Terms of Services</Link>
                </Typography>
              }
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
              sx={{ mb: 3 }}
            >
              Create Account
            </Button>

            <Divider sx={{ mb: 3 }}>or</Divider>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Facebook size={20} />}
              >
                Sign up with Facebook
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<img src="https://www.google.com/favicon.ico" alt="Google" width="20" />}
              >
                Sign up with Google
              </Button>
            </Box>
          </form>
        </Container>
      </Box>

      {/* Right Side - Info */}
      <Box 
        sx={{ 
          flex: { xs: '0', md: '0 0 55%' },
          display: { xs: 'none', md: 'flex' },
          bgcolor: '#1e293b',
          color: 'white',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          p: 6,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Checkerboard Pattern */}
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${chessPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        />

        <Box sx={{ textAlign: 'center', zIndex: 1, maxWidth: 600, pb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, lineHeight: 1.3 }}>
            Over 1,75,324 candidates waiting for good employees.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Box sx={{ 
                textAlign: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                p: 3
              }}>
                <Briefcase size={40} style={{ marginBottom: 16 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                  1,75,324
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Live Job
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ 
                textAlign: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                p: 3
              }}>
                <Building size={40} style={{ marginBottom: 16 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                  97,354
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Companies
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ 
                textAlign: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                p: 3
              }}>
                <Briefcase size={40} style={{ marginBottom: 16 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                  7,532
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  New Jobs
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
