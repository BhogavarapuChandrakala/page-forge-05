import { Box, Container, TextField, Button, Typography, InputAdornment, IconButton, Grid } from '@mui/material';
import { Briefcase, ArrowRight, Eye, EyeOff, Building } from 'lucide-react';
import chessPattern from '@/assets/chess-pattern.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/signin');
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
            Reset Password
          </Typography>
          <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary', maxWidth: 400 }}>
            Duis luctus interdum metus, ut consectetur ante consectetur sed. Suspendisse euismod viverra massa sit amet mollis.
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="New Password"
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
              sx={{ mb: 3 }}
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
            >
              Reset Password
            </Button>
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

export default ResetPassword;
