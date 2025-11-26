import { Container, Grid, Box, Typography, Link as MuiLink, IconButton } from '@mui/material';
import { Briefcase, Facebook, Youtube, Instagram, Twitter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#18191C', color: 'white', pt: 8, pb: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Briefcase size={28} color="#0066FF" />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                MyJob
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: '#FFFFFF' }}>
              Call now: <span style={{ color: '#767F8C' }}>(319) 555-0115</span>
            </Typography>
            <Typography variant="body2" sx={{ color: '#767F8C', lineHeight: 1.6 }}>
              6391 Elgin St. Celina, Delaware 10299, New York, United States of America
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem', fontWeight: 600 }}>
              Quick Link
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <MuiLink component={Link} to="/" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                About
              </MuiLink>
              <MuiLink component={Link} to="/find-job" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ChevronRight size={16} />
                  Contact
                </Box>
              </MuiLink>
              <MuiLink component={Link} to="/" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Pricing
              </MuiLink>
              <MuiLink component={Link} to="/" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Blog
              </MuiLink>
            </Box>
          </Grid>

          {/* Candidate */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem', fontWeight: 600 }}>
              Candidate
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Browse Jobs
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Browse Employers
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Candidate Dashboard
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Saved Jobs
              </MuiLink>
            </Box>
          </Grid>

          {/* Employers */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem', fontWeight: 600 }}>
              Employers
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Post a Job
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Browse Candidates
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Employers Dashboard
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Applications
              </MuiLink>
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem', fontWeight: 600 }}>
              Support
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Faqs
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Privacy Policy
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#767F8C', textDecoration: 'none', '&:hover': { color: '#0066FF' } }}>
                Terms & Conditions
              </MuiLink>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #2D3034', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: '#767F8C' }}>
            © 2024 MyJob - Job Portal. All rights Reserved
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" sx={{ color: '#767F8C', '&:hover': { color: '#0066FF', bgcolor: '#1E2125' } }}>
              <Facebook size={20} />
            </IconButton>
            <IconButton size="small" sx={{ color: '#767F8C', '&:hover': { color: '#0066FF', bgcolor: '#1E2125' } }}>
              <Youtube size={20} />
            </IconButton>
            <IconButton size="small" sx={{ color: '#767F8C', '&:hover': { color: '#0066FF', bgcolor: '#1E2125' } }}>
              <Instagram size={20} />
            </IconButton>
            <IconButton size="small" sx={{ color: '#767F8C', '&:hover': { color: '#0066FF', bgcolor: '#1E2125' } }}>
              <Twitter size={20} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
