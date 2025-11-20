import { Box, Container, TextField, Button, Typography, Checkbox, FormControlLabel, InputAdornment, IconButton, Divider, Grid } from '@mui/material';
import { Briefcase, Eye, EyeOff, Facebook, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
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
            Sign in
          </Typography>
          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
            Don't have account? <Link to="/signup" style={{ color: '#0066FF', textDecoration: 'none' }}>Create Account</Link>
          </Typography>

          <form onSubmit={handleSubmit}>
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

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.remember}
                    onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                  />
                }
                label={<Typography variant="body2">Remember Me</Typography>}
              />
              <Link to="/forgot-password" style={{ color: '#0066FF', textDecoration: 'none', fontSize: '0.875rem' }}>
                Forget password
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
              sx={{ mb: 3 }}
            >
              Sign In
            </Button>

            <Divider sx={{ mb: 3 }}>or</Divider>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Facebook size={20} />}
              >
                Sign in with Facebook
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<img src="https://www.google.com/favicon.ico" alt="Google" width="20" />}
              >
                Sign in with Google
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
          bgcolor: 'hsl(220, 40%, 15%)',
          background: 'linear-gradient(135deg, hsl(220, 40%, 15%) 0%, hsl(220, 30%, 25%) 100%)',
          color: 'white',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 6,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            background: `
              repeating-linear-gradient(
                0deg,
                hsl(220, 30%, 25%) 0px,
                hsl(220, 30%, 25%) 100px,
                hsl(220, 40%, 15%) 100px,
                hsl(220, 40%, 15%) 200px
              ),
              repeating-linear-gradient(
                90deg,
                hsl(220, 30%, 25%) 0px,
                hsl(220, 30%, 25%) 100px,
                hsl(220, 40%, 15%) 100px,
                hsl(220, 40%, 15%) 200px
              )
            `
          }}
        />

        <Box sx={{ textAlign: 'center', zIndex: 1, maxWidth: 600 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
            Over 1,75,324 candidates waiting for good employees.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={4}>
              <Box sx={{ textAlign: 'center' }}>
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
              <Box sx={{ textAlign: 'center' }}>
                <Briefcase size={40} style={{ marginBottom: 16 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                  97,354
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Companies
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ textAlign: 'center' }}>
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

export default SignIn;
