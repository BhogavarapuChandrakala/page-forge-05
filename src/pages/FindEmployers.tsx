import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Box,
  Container,
  TextField,
  InputAdornment,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Select,
  MenuItem,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  Search,
  LocationOn,
  Category,
  FilterList,
  GridView,
  ViewList,
  ExpandMore,
  NavigateNext,
  ArrowForward,
} from '@mui/icons-material';

const employers = [
  { id: 1, name: 'Dribbble', location: 'United States', openJobs: 3, logo: '🎨', color: '#ea4c89' },
  { id: 2, name: 'Udemy', location: 'China', openJobs: 3, logo: 'U', color: '#ec5252' },
  { id: 3, name: 'Figma', location: 'United States', openJobs: 3, logo: 'F', color: '#000' },
  { id: 4, name: 'Google', location: 'Australia', openJobs: 3, logo: 'G', color: '#4285f4' },
  { id: 5, name: 'Microsoft', location: 'Australia', openJobs: 3, logo: 'M', color: '#f25022' },
  { id: 6, name: 'Twitter', location: 'Australia', openJobs: 3, logo: '🐦', color: '#1da1f2' },
  { id: 7, name: 'Instagram', location: 'Australia', openJobs: 3, logo: '📷', color: '#c13584' },
  { id: 8, name: 'Youtube', location: 'Canada', openJobs: 2, logo: '▶️', color: '#ff0000' },
  { id: 9, name: 'Apple', location: 'United States', openJobs: 3, logo: '', color: '#000' },
  { id: 10, name: 'Slack', location: 'Germany', openJobs: 3, logo: '#', color: '#4a154b' },
  { id: 11, name: 'Reddit', location: 'France', openJobs: 2, logo: '👽', color: '#ff4500' },
  { id: 12, name: 'Upwork', location: 'China', openJobs: 3, logo: 'Up', color: '#6fda44' },
];

const FindEmployers = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [locationRadius, setLocationRadius] = useState(32);
  const [selectedOrgTypes, setSelectedOrgTypes] = useState<string[]>([]);

  const orgTypes = [
    'Government',
    'Semi Government',
    'NGO',
    'Private Company',
    'International Agencies',
    'Others',
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      
      <Box sx={{ bgcolor: 'grey.50', py: 3, borderBottom: 1, borderColor: 'grey.200' }}>
        <Container maxWidth="lg">
          <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
            <Link underline="hover" color="inherit" href="/">Home</Link>
            <Typography color="text.primary">Find Employers</Typography>
          </Breadcrumbs>
          <Typography variant="h4" sx={{ mt: 2, fontWeight: 700 }}>Find Employers</Typography>
          
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Job title, Keyword..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Location"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <Select
                  displayEmpty
                  startAdornment={
                    <InputAdornment position="start">
                      <Category />
                    </InputAdornment>
                  }
                  defaultValue=""
                >
                  <MenuItem value="">Select Category</MenuItem>
                  <MenuItem value="tech">Technology</MenuItem>
                  <MenuItem value="design">Design</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button variant="contained" fullWidth sx={{ height: '56px' }}>
                Find Job
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              startIcon={<FilterList />}
              fullWidth
              sx={{ mb: 2 }}
            >
              Filter
            </Button>

            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography fontWeight={600}>Location Radius</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="primary" sx={{ mb: 1 }}>
                  {locationRadius} miles
                </Typography>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={locationRadius}
                  onChange={(e) => setLocationRadius(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography fontWeight={600}>Organization Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {orgTypes.map((type) => (
                  <Box key={type} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Checkbox
                      checked={selectedOrgTypes.includes(type)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedOrgTypes([...selectedOrgTypes, type]);
                        } else {
                          setSelectedOrgTypes(selectedOrgTypes.filter((t) => t !== type));
                        }
                      }}
                    />
                    <Typography>{type}</Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} md={9}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <Select defaultValue="latest">
                    <MenuItem value="latest">Latest</MenuItem>
                    <MenuItem value="oldest">Oldest</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <Select defaultValue="12">
                    <MenuItem value="12">12 per page</MenuItem>
                    <MenuItem value="24">24 per page</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <IconButton
                  color={viewMode === 'grid' ? 'primary' : 'default'}
                  onClick={() => setViewMode('grid')}
                >
                  <GridView />
                </IconButton>
                <IconButton
                  color={viewMode === 'list' ? 'primary' : 'default'}
                  onClick={() => setViewMode('list')}
                >
                  <ViewList />
                </IconButton>
              </Box>
            </Box>

            <Grid container spacing={2}>
              {employers.map((employer) => (
                <Grid item xs={12} sm={6} md={4} key={employer.id}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      '&:hover': {
                        boxShadow: 4,
                        transform: 'translateY(-4px)',
                      },
                    }}
                    onClick={() => navigate(`/employer/${employer.id}`)}
                  >
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 2,
                          bgcolor: employer.color,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          fontWeight: 700,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        {employer.logo}
                      </Box>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {employer.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                        <LocationOn fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {employer.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          • {employer.openJobs} open Job
                        </Typography>
                      </Box>
                      <Button
                        variant="outlined"
                        endIcon={<ArrowForward />}
                        fullWidth
                      >
                        Open Position
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? 'contained' : 'outlined'}
                  sx={{ minWidth: 40 }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default FindEmployers;
