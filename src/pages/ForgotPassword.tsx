import { Box, Container, TextField, Button, Typography, Divider, Grid } from '@mui/material';
import { Briefcase, ArrowRight, Facebook, Building } from 'lucide-react';
import chessPattern from '@/assets/chess-pattern.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/reset-password');
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      {/* Left Side - Form */}
      <Box sx={{ flex: { xs: '1', md: '0 0 45%' }, bgcolor: 'white', display: 'flex', alignItems: 'center', py: 4 }}>
        <Container maxWidth="sm">
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <Briefcase size={28} color="#023047" />
            <Typography variant="h6" sx={{ color: 'foreground', fontWeight: 600 }}>
              MyJob
            </Typography>
          </Link>

          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Forget Password
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
            Go back to <Link to="/signin" style={{ color: '#023047', textDecoration: 'none' }}>Sign In</Link>
          </Typography>
          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
            Don't have account <Link to="/signup" style={{ color: '#023047', textDecoration: 'none' }}>Create Account</Link>
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              Reset Password
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
          backgroundImage: `url(${chessPattern})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          p: 6,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(30, 41, 59, 0.85)',
            zIndex: 0
          }
        }}
      >

        <Box sx={{ textAlign: 'center', zIndex: 1, maxWidth: 600, pb: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6, lineHeight: 1.3 }}>
            Over 1,75,324 candidates waiting for good employees.
          </Typography>

          <Grid container spacing={4}>
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

export default ForgotPassword;
