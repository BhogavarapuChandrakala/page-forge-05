import { Box, Container, TextField, Button, Typography, Checkbox, FormControlLabel, InputAdornment, IconButton, Divider, Grid, AppBar, Toolbar, Select, MenuItem } from '@mui/material';
import { Work, Business, Phone, Notifications } from '@mui/icons-material';
import { Briefcase, Eye, EyeOff, Facebook, ArrowRight, Search, Bell } from 'lucide-react';
import chessPattern from '@/assets/chess-pattern.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

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
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Box>
        {/* Top Navigation Bar */}
        <Box sx={{ bgcolor: '#F7F7F8', borderBottom: '1px solid #E5E7EB' }}>
          <Container maxWidth="xl">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5 }}>
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#6B7280', fontSize: '0.875rem' }}>Home</Link>
                <Link to="/find-job" style={{ textDecoration: 'none', color: '#0066FF', fontSize: '0.875rem', fontWeight: 600, borderBottom: '2px solid #0066FF', paddingBottom: '4px' }}>Find Job</Link>
                <Link to="/find-employers" style={{ textDecoration: 'none', color: '#6B7280', fontSize: '0.875rem' }}>Find Employers</Link>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: '#6B7280', fontSize: '0.875rem' }}>Dashboard</Link>
                <Link to="/job-alerts" style={{ textDecoration: 'none', color: '#6B7280', fontSize: '0.875rem' }}>Job Alerts</Link>
                <Link to="/customer-supports" style={{ textDecoration: 'none', color: '#6B7280', fontSize: '0.875rem' }}>Customer Supports</Link>
              </Box>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ fontSize: 18, color: '#6B7280' }} />
                  <Typography variant="body2" sx={{ color: '#6B7280' }}>+1-202-555-0178</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: '1.2rem' }}>🇺🇸</Typography>
                  <Select
                    value="English"
                    size="small"
                    sx={{ fontSize: '0.875rem', border: 'none', '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                  >
                    <MenuItem value="English">English</MenuItem>
                  </Select>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Main App Bar */}
        <Box sx={{ bgcolor: 'white', borderBottom: '1px solid #E5E7EB', py: 2 }}>
          <Container maxWidth="xl">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Briefcase size={28} color="#0066FF" />
                  <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                    MyJob
                  </Typography>
                </Link>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: '1.2rem' }}>🇮🇳</Typography>
                  <Select
                    value="India"
                    size="small"
                    sx={{ fontSize: '0.875rem' }}
                  >
                    <MenuItem value="India">India</MenuItem>
                  </Select>
                </Box>
              </Box>

              <Box sx={{ flex: 1, maxWidth: 600, mx: 4 }}>
                <TextField
                  fullWidth
                  placeholder="Job title, keyword, company"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search size={20} color="#9CA3AF" />
                      </InputAdornment>
                    )
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton sx={{ position: 'relative' }}>
                  <Bell size={24} />
                  <Box sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: 8,
                    height: 8,
                    bgcolor: '#EF4444',
                    borderRadius: '50%'
                  }} />
                </IconButton>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ display: 'flex', flex: 1 }}>
      {/* Left Side - Form */}
      <Box sx={{ flex: { xs: '1', md: '0 0 45%' }, bgcolor: 'white', display: 'flex', alignItems: 'center', py: 4 }}>
        <Container maxWidth="sm">

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
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, lineHeight: 1.3, fontSize: '2rem' }}>
            Over 1,75,324 candidates waiting for good employees.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Work sx={{ fontSize: 40, mb: 2 }} />
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
                <Business sx={{ fontSize: 40, mb: 2 }} />
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
                <Work sx={{ fontSize: 40, mb: 2 }} />
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
    </Box>
  );
};

export default SignIn;
