import { AppBar, Toolbar, Container, Box, Typography, Select, FormControl, MenuItem, InputAdornment, TextField, IconButton } from '@mui/material';
import { Phone } from '@mui/icons-material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Briefcase, Search, Bell } from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

const AuthHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState('english');
  const [country, setCountry] = useState('india');

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Find Job', path: '/find-job' },
    { label: 'Find Employers', path: '/find-employers' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Job Alerts', path: '/job-alerts' },
    { label: 'Customer Supports', path: '/customer-supports' },
  ];

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1100, bgcolor: 'background.paper' }}>
      {/* Top Navigation Bar */}
      <Box sx={{ bgcolor: '#F7F7F8', borderBottom: '1px solid #E5E7EB' }}>
        {/* Narrower container so top-nav is centered with side gaps */}
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5 }}>
            {/* Left side - Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  style={{ textDecoration: 'none' }}
                >
                  <Typography 
                    sx={{ 
                      color: location.pathname === item.path ? '#023047' : '#6f6f6f',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      fontSize: '0.875rem',
                      borderBottom: location.pathname === item.path ? '2px solid #023047' : 'none',
                      paddingBottom: '4px',
                      '&:hover': { color: '#023047' },
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Box>

            {/* Right side - Phone and Language */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 18, color: '#6B7280' }} />
                <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.875rem' }}>
                  +1-202-555-0178
                </Typography>
              </Box>

              <FormControl size="small">
                <Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  sx={{ 
                    fontSize: '0.875rem', 
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '& .MuiSelect-select': { display: 'flex', alignItems: 'center', gap: 1 }
                  }}
                  renderValue={() => (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇺🇸</span>
                      <span>English</span>
                    </Box>
                  )}
                >
                  <MenuItem value="english">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇺🇸</span>
                      <span>English</span>
                    </Box>
                  </MenuItem>
                  <MenuItem value="spanish">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>🇪🇸</span>
                      <span>Spanish</span>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main App Bar */}
      <Box sx={{ bgcolor: 'white', borderBottom: '1px solid #E5E7EB' }}>
        {/* Use same centered container for main bar */}
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
            {/* Left - Logo and Country */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={28} color="#023047" />
                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  MyJob
                </Typography>
              </Link>
              
              <FormControl size="small" sx={{ minWidth: 130 }}>
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
                </Select>
              </FormControl>
            </Box>

            {/* Center - Search Bar */}
            <Box sx={{ flex: 1, maxWidth: 600, mx: 4, display: { xs: 'none', md: 'block' } }}>
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

            {/* Right - Notifications and Profile */}
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
              <Box sx={{ cursor: 'pointer' }}>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AuthHeader;
