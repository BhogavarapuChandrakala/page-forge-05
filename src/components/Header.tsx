import { AppBar, Toolbar, Container, Button, Box, Typography, Select, FormControl, MenuItem, InputAdornment, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Phone, Search } from 'lucide-react';
import { useState } from 'react';

// Country flags as emoji
const countryFlags: Record<string, string> = {
  india: '🇮🇳',
  usa: '🇺🇸',
  uk: '🇬🇧',
  canada: '🇨🇦',
  australia: '🇦🇺',
  germany: '🇩🇪',
  france: '🇫🇷',
  japan: '🇯🇵',
};

const Header = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('english');
  const [country, setCountry] = useState('india');

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
      {/* Top Navigation Bar */}
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: 1 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Left side - Phone */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone size={16} color="#666" />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +1-202-555-0178
                </Typography>
              </Box>
            </Box>
            
            {/* Center - Navigation Links */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 3, alignItems: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.875rem' }}>
                  Home
                </Typography>
              </Link>
              <Link to="/find-job" style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.875rem' }}>
                  Find Job
                </Typography>
              </Link>
              <Link to="/find-employers" style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.875rem' }}>
                  Employers
                </Typography>
              </Link>
              <Link to="/find-candidate" style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.875rem' }}>
                  Candidates
                </Typography>
              </Link>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.875rem' }}>
                Pricing Plans
              </Typography>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.875rem' }}>
                Customer Supports
              </Typography>
            </Box>

            {/* Right side - Language Selector */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <FormControl size="small" sx={{ minWidth: 120, display: { xs: 'none', sm: 'block' } }}>
                <Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  sx={{ fontSize: '0.875rem', '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                >
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="spanish">Spanish</MenuItem>
                  <MenuItem value="french">French</MenuItem>
                  <MenuItem value="german">German</MenuItem>
                  <MenuItem value="chinese">Chinese</MenuItem>
                  <MenuItem value="japanese">Japanese</MenuItem>
                  <MenuItem value="hindi">Hindi</MenuItem>
                  <MenuItem value="arabic">Arabic</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation Bar */}
      <AppBar position="static" sx={{ bgcolor: 'background.paper', boxShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, gap: 2 }}>
            {/* Logo and Country Selector */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={28} color="#0066FF" />
                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  MyJob
                </Typography>
              </Link>
              
              <FormControl size="small" sx={{ minWidth: 130, display: { xs: 'none', sm: 'block' } }}>
                <Select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  sx={{ fontSize: '0.875rem' }}
                  renderValue={(value) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>{countryFlags[value as string]}</span>
                      <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                    </Box>
                  )}
                >
                  <MenuItem value="india">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇮🇳</span>
                      <span>India</span>
                    </Box>
                  </MenuItem>
                  <MenuItem value="usa">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇺🇸</span>
                      <span>USA</span>
                    </Box>
                  </MenuItem>
                  <MenuItem value="uk">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇬🇧</span>
                      <span>UK</span>
                    </Box>
                  </MenuItem>
                  <MenuItem value="canada">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇨🇦</span>
                      <span>Canada</span>
                    </Box>
                  </MenuItem>
                  <MenuItem value="australia">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇦🇺</span>
                      <span>Australia</span>
                    </Box>
                  </MenuItem>
                  <MenuItem value="germany">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇩🇪</span>
                      <span>Germany</span>
                    </Box>
                  </MenuItem>
                  <MenuItem value="france">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇫🇷</span>
                      <span>France</span>
                    </Box>
                  </MenuItem>
                  <MenuItem value="japan">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇯🇵</span>
                      <span>Japan</span>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Center - Search Bar */}
            <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', maxWidth: 400 }}>
              <TextField
                placeholder="Job title, keyword, company"
                size="small"
                fullWidth
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'background.default'
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search size={18} color="#999" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Right - Sign In and Post A Jobs */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Button 
                variant="text" 
                onClick={() => navigate('/signin')}
                sx={{ 
                  display: { xs: 'none', sm: 'flex' },
                  color: 'text.secondary',
                  textTransform: 'none'
                }}
              >
                Sign In
              </Button>

              <Button 
                variant="contained" 
                onClick={() => navigate('/signup')}
                sx={{ 
                  bgcolor: 'primary.main',
                  '&:hover': { bgcolor: 'primary.dark' },
                  textTransform: 'none',
                  px: 3
                }}
              >
                Post A Jobs
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
